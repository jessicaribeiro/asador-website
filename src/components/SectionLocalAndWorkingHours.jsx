import React, {useEffect, useState} from 'react';
import place from "../img/place.jpg";
import {withNamespaces} from "react-i18next";
import WorkingHours from "./WorkingHours";
import i18n from "i18next";


function SectionLocalAndWorkingHours({t}) {
    let [workingHours, setWorkingHours] = useState([]);
    let [address, setAddress] = useState('');

    const placeId = 'ChIJb6jc0AJGPA0REWTDMb7dNV4';

    // current language
    const lang = i18n.language;

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=opening_hours,formatted_address&key=${process.env.REACT_APP_API_KEY}&language=${lang}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            // Read the response as json.
            return response.json();
        })
            .then(function (responseAsJson) {
                // JSON Response

                // responseAsJson.result.opening_hours
                setWorkingHours(responseAsJson.result.opening_hours.weekday_text);
                setAddress(responseAsJson.result.formatted_address);
            })
            .catch(function (error) {
                console.log('Looks like there was a problem: \n', error);
            });
    }, [setWorkingHours, lang]);


    return (
        <section className="section-schedule" id="schedule_and_location">

            <div className="u-center-text u-margin-bottom-medium">
                <h2 className="heading-secondary right-padding">
                    {t('schedule_and_location')}
                </h2>
            </div>

            <div className="section-schedule__contents">
                <div className="row row-small-padding">
                    <div className="col-1-of-2">
                        <div className="schedule__image">
                            <img className="img-responsive"
                                 src={place}
                                 alt="Place"/>
                        </div>
                    </div>

                    <div className="col-1-of-2">
                        <WorkingHours workingHours={workingHours}/>
                    </div>

                </div>
                <div className="row row-small-padding">
                    <hr className="line-separator"/>

                    <div className="address__description">
                        <div className="address__title">
                            <h2>{t("address")}</h2>
                        </div>
                        <div className="address__details">
                            <a
                                target="blank"
                                href="https://goo.gl/maps/rEcbL4rU8Ks3W5PT9"
                                className="address__link"
                            >
                                {address}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withNamespaces()(SectionLocalAndWorkingHours);
import React, {useEffect, useState} from 'react';
import {FaRegClock} from "react-icons/fa";
import {withNamespaces} from "react-i18next";

function WorkingHours({t}) {
    // initializes state
    let [workingHours, setWorkingHours] = useState('');

    const placeId = 'ChIJb6jc0AJGPA0REWTDMb7dNV4';

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=opening_hours&key=${process.env.REACT_APP_API_KEY}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin' : '*'
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

                console.log(responseAsJson.result.opening_hours.weekday_text);
            })
            .catch(function (error) {
                console.log('Looks like there was a problem: \n', error);
            });
    }, [setWorkingHours]);

    return (
        <div className="schedule__content">
            <div className="schedule__title">
                <h2>{t("schedule")}</h2>
            </div>
            <div className="schedule__hours">
                <p>
                    <FaRegClock className="icon" style={{paddingRight: 5, paddingBottom: 5}}/>
                    Todos los dias 9:00h – 22:00h
                </p>
            </div>
        </div>
    );
}

export default withNamespaces()(WorkingHours);
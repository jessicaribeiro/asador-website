import React, {useEffect, useState} from 'react';
import {FaRegClock} from "react-icons/fa";
import {withNamespaces} from "react-i18next";
import i18n from "i18next";

function WorkingHours({t, workingHours}) {
    // initializes state
    // let [workingHours, setWorkingHours] = useState([]);
    //
    // const placeId = 'ChIJb6jc0AJGPA0REWTDMb7dNV4';
    //
    // // current language
    // const lang = i18n.language;

    // useEffect(() => {
    //     fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=opening_hours&key=${process.env.REACT_APP_API_KEY}&language=${lang}`, {
    //         method: "GET",
    //         mode: "cors",
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     }).then(function (response) {
    //         if (!response.ok) {
    //             throw Error(response.statusText);
    //         }
    //         // Read the response as json.
    //         return response.json();
    //     })
    //         .then(function (responseAsJson) {
    //             // JSON Response
    //
    //             // responseAsJson.result.opening_hours
    //             setWorkingHours(responseAsJson.result.opening_hours.weekday_text);
    //
    //             console.log(responseAsJson.result.opening_hours.weekday_text);
    //         })
    //         .catch(function (error) {
    //             console.log('Looks like there was a problem: \n', error);
    //         });
    // }, [setWorkingHours, lang]);

console.log(workingHours.map((number) => number));

    return (
        <div className="schedule__content">
            <div className="schedule__title">
                <h2>
                    {/*<FaRegClock*/}
                    {/*    className="icon"*/}
                    {/*    style={{paddingRight: 5, paddingBottom: 5}}*/}
                    {/*/>*/}
                    {t("schedule")}
                </h2>
            </div>
            <div className="schedule__hours">
                {workingHours.map((item,key) => {
                        return (
                            <p key={key}>{item}</p>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default withNamespaces()(WorkingHours);
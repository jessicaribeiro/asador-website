import React from 'react';
import {withNamespaces} from "react-i18next";

function WorkingHours({t, workingHours}) {

    const formatWorkingHours = () => {
        let splited = [];
        let workHours = [];
        let newObj = {};

        workingHours.map((item, index) => {
            splited = item.split(': ');
            newObj = {'day' : splited[0], 'hours' : splited[1]};
            workHours[index] = newObj;
        });
        return workHours;
    };

    const formatedWorkHours = formatWorkingHours();

    return (
        <div className="schedule__content">
            <div className="schedule__title">
                <h2>
                    {t("schedule")}
                </h2>
            </div>
            <div className="schedule__hours">
                {formatedWorkHours.map((item,uuid) => {
                        return (
                            <div className="row row-no-padding" key={uuid}>
                                <div className="col-1-of-2">
                                    <p>{item.day}</p>
                                </div>
                                <div className="col-1-of-2">
                                    <p>{item.hours}</p>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default withNamespaces()(WorkingHours);
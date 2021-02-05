import React from 'react';
import place from "../img/place.jpg";
import {withNamespaces} from "react-i18next";
import WorkingHours from "./WorkingHours";


function SectionSchedule({t}) {
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
                        <WorkingHours/>

                        <hr className="line-separator"/>

                        <div className="address__description">
                            <div className="address__title">
                                <h2>{t("address")}</h2>
                            </div>
                            <div className="address__details">
                                <p>
                                    Calle Travesía Larga, 6, 37497 Carpio de Azaba, Salamanca, España
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withNamespaces()(SectionSchedule);
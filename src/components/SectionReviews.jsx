import React, {useEffect} from 'react';
import {withNamespaces} from "react-i18next";
import googlePlaces from "google-maps-reviews";
import {FaAngleRight} from 'react-icons/fa';


function SectionReviews({t}) {

    useEffect(() => {
        googlePlaces("google-reviews", {
            placeId: 'ChIJb6jc0AJGPA0REWTDMb7dNV4',
        });
    }, []);

    return (
        <section id="reviews" className="section-reviews">

            <div className="u-center-text u-margin-bottom-extra-small">
                <h2 className="heading-secondary right-padding">
                    {t('clients_reviews')}
                </h2>
            </div>

            {/*Google Reviews*/}
            <div className="row u-margin-bottom-small">
                <div id="google-reviews"/>
            </div>

            <div className="u-center-text u-margin-top-small">
                <p>Google Reviews</p>
            </div>

            <div className="u-center-text u-margin-top-medium">
                <a target="_blank"
                   href="https://www.google.com/search?client=safari&rls=en&q=asador+carpio+de+azaba&ie=UTF-8&oe=UTF-8#lrd=0xd3c4602d0dca86f:0x5e35ddbe31c36411,1,,,"
                   className="btn-text">
                    {t('see_more_reviews')}
                    <FaAngleRight className="btn-text-icon"/>
                </a>
            </div>
        </section>

    );
}

export default withNamespaces()(SectionReviews);
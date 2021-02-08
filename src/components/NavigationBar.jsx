import React, {useState, useEffect, useContext} from 'react';
import { withNamespaces } from 'react-i18next';

// import video from '../img/video.mp4';
// import logo from '../img/logo-big.png';
import {FaCaretDown} from 'react-icons/fa';
import LanguageSelector from "./LanguageSelector";
import NavigationBarEntry from "./NavigationBarEntry";


function NavigationBar({t, changeLanguage}) {
    return (
        <section className="navbar">
            <div className="navbar__container">
                <div className="navbar__in">
                    <div>

                        <nav className="navbar__nav upper">
                            <ul>
                                {/*TODO colocar a apontar para as seccoes certas*/}
                                <NavigationBarEntry section="menu" label='menu'/>
                                <NavigationBarEntry section="reviews" label='reviews'/>
                                <NavigationBarEntry section="schedule_and_location" label='schedule_and_location'/>
                                <NavigationBarEntry section="book_table" label='book_table' focus popup/>
                            </ul>
                        </nav>

                    </div>
                    <LanguageSelector changeLanguage={changeLanguage}/>

                </div>
            </div>

            <span className="popup-content" id="bookPopup">{t('callToBook')} 923 16 56 58</span>

        </section>

    );
}

export default withNamespaces() (NavigationBar);
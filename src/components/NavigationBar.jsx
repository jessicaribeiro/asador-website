import React, {useState, useEffect, useContext} from 'react';
import {withNamespaces} from 'react-i18next';
import {
    FaPhoneAlt,
    FaWhatsapp,
} from 'react-icons/fa';
import LanguageSelector from "./LanguageSelector";
import NavigationBarEntry from "./NavigationBarEntry";


function NavigationBar({changeLanguage}) {
    return (
        <>
            <section className="navbar">
                <div className="navbar__container">
                    <div className="navbar__in">
                        <div>

                            <nav className="navbar__nav upper">
                                <ul>
                                    {/*TODO colocar a apontar para as seccoes certas*/}
                                    <NavigationBarEntry section="menu"
                                                        label='menu'/>
                                    <NavigationBarEntry section="reviews"
                                                        label='reviews'/>
                                    <NavigationBarEntry
                                        section="schedule_and_location"
                                        label='schedule_and_location'/>
                                    <NavigationBarEntry section="book_table"
                                                        label='book_table' focus
                                                        popup/>
                                </ul>
                            </nav>

                        </div>
                        <LanguageSelector changeLanguage={changeLanguage}/>

                    </div>
                </div>
{/*TODO colocar o telefone aqui certo +34 923 165 658 */}
                <span className="popup-content" id="bookPopup">
                     <a
                         href="//api.whatsapp.com/send?phone=+351925750168&text=Reservar mesa"
                         target="_blank"
                         title="WhatsApp"
                         className="popup-content-link"
                     >
                         <FaWhatsapp className="popup-icon"/> 923 16 56 58
                     </a>

                </span>

            </section>
        </>

    );
}

export default withNamespaces()(NavigationBar);
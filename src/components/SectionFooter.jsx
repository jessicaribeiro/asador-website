import React from 'react';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFacebookF,
    FaTripadvisor
} from 'react-icons/fa';

function SectionFooter() {
    return (
        <>
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-content">
                        <div className="map">
                            <a className="icon-map"
                               target="_blank"
                               href="https://goo.gl/maps/rEcbL4rU8Ks3W5PT9">
                                <FaMapMarkerAlt/>
                            </a>

                        </div>
                        <div className="info">
                            <h3 className="info-title">ASADOR CARPIO DE
                                AZABA</h3>
                            <div className="info-content">
                                <div className="info-address">
                                    <p>
                                        Calle Travesía Larga, 6, 37497 Carpio de
                                        Azaba, Salamanca, Spain
                                    </p>
                                </div>
                                <div className="info-contact">
                                    <FaPhoneAlt className="icon-phone"/>
                                    <p>
                                        +34 923 165 658 | 649 04 65 57
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="social-media">
                            <a href="https://www.facebook.com/asadorcarpiodeazaba/"
                               target="blank"
                               className="social-icon"
                            >
                                <FaFacebookF className="fa_icon"
                                             alt="Facebook"/>
                            </a>
                            <a href="https://www.tripadvisor.com/Restaurant_Review-g2571924-d13949191-Reviews-Asador_Carpio_de_Azaba-Carpio_de_Azaba_Province_of_Salamanca_Castile_and_Leon.html?m=19905"
                               target="blank"
                               className="social-icon"
                            >
                                <FaTripadvisor className="fa_icon"
                                               alt="TripAdvisor"/>
                            </a>
                        </div>

                        <div className="copyright">
                            <p>
                                2021 © Asador Carpio de Azaba
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            < div
                className="footer__bottom">
                <p> Developed by
                    <a href="https://www.linkedin.com/public-profile/in/jessica-ribeiro"
                       target="blank"
                       className="developer"
                    >
                        Jessica Ribeiro
                    </a>
                </p>
            </div>
        </>
    );
}

export default SectionFooter;


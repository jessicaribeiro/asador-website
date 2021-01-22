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
                                <NavigationBarEntry href="https://www..com/en/history/" label='menu'/>
                                <NavigationBarEntry href="https://www..com/en/history/" label='reviews'/>
                                <NavigationBarEntry href="https://www..com/en/history/" label='contact_and_schedule'/>
                                <NavigationBarEntry href="https://www..com/en/history/" label='address'/>
                                <NavigationBarEntry href="https://www..com/en/history/" label='book_table' focus/>
                            </ul>
                        </nav>

                    </div>
                    <LanguageSelector changeLanguage={changeLanguage}/>

                </div>


                {/*<div className="navbar__lang">*/}
                {/*    <a href="#" className="js-subnav upper" data-subnav="lang" onClick={() => setShowMenu(!showMenu)}>*/}
                {/*        en*/}
                {/*        <FaCaretDown className="icon icon-arrow-select"/>*/}
                {/*    </a>*/}
                {/*    { showMenu && (*/}
                {/*                <div className="lang-menu">*/}
                {/*                    <a> Menu item 1 </a>*/}
                {/*                    <a> Menu item 2 </a>*/}
                {/*                    <a> Menu item 3 </a>*/}
                {/*                </div>*/}
                {/*            )*/}

                {/*    }*/}
                {/*    /!*<a href="#" className="js-subnav upper" data-subnav="lang">*!/*/}
                {/*    /!*    en    <FaCaretDown className="icon icon-arrow-select"/>*!/*/}

                {/*    /!*</a>*!/*/}
                {/*</div>*/}
            </div>
        </section>

    );
}

export default withNamespaces() (NavigationBar);

// <section className="navbar">
//     <div className="navbar__container">
//         <div className="navbar__in hide-mobile">
//             <div>
//                 <nav className="navbar__nav upper">
//                     <ul>
//                         <li className="haschildren"><a
//                             href="https://www.lechomat.com/en/history/"
//                             className="js-subnav"
//                             data-subnav="item3044">History</a>
//
//                         </li>
//                         <li className="haschildren"><a
//                             href="https://www.lechomat.com/en/materials/"
//                             className="js-subnav"
//                             data-subnav="item3047">Materials</a>
//                         </li>
//                         <li className="haschildren"><a
//                             href="https://www.lechomat.com/en/bed-creation/"
//                             className="js-subnav"
//                             data-subnav="item3051">Creation</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>


//
//
//             <div>
//                 <nav className="navbar__nav upper">
//                     <ul>
//                         <li><a href="https://press.lechomat.cz/"
//                                className="js-subnav"
//                                data-subnav="item5811">Press</a>
//                         </li>
//                         <li><a href="https://www.lechomat.com/en/collection/"
//                                className="js-subnav"
//                                data-subnav="item5742">Collection</a>
//                         </li>
//                         <li className="haschildren"><a
//                             href="https://www.lechomat.com/en/contact/"
//                             className="js-subnav"
//                             data-subnav="item3100">Contact</a>
//                             <ul>
//                                 <li><a
//                                     href="https://www.lechomat.com/en/contact/"
//                                     className=""
//                                     title="Přejít na prague">Prague</a>
//                                 </li>
//                                 <li><a
//                                     href="https://www.lechomat.com/en/contact-bratislava/"
//                                     className=""
//                                     title="Přejít na bratislava">Bratislava</a>
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//         <div className="navbar__lang">
//             <a href="#" className="js-subnav upper" data-subnav="lang">en <svg
//                 className="icon icon-arrow-select">
//                 <use xlink:href="#icon-arrow-select"></use>
//             </svg>
//             </a>
//         </div>
//     </div>
//
//
// </section>




// enableOn = 300 < window.innerWidth;
// var start = 1
//     , scrollStarted = function() {
//     var t = window.pageYOffset;
//     start <= t ? document.body.classList.add("is-scrolled") : document.body.classList.remove("is-scrolled")
// };
// enableOn && (window.addEventListener("scroll", function() {
//     window.requestAnimationFrame(scrollStarted)
// }, {
//     passive: !0
// }),
//     scrollStarted());
// var body = $(document.body);
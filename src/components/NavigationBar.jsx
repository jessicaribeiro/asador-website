import React, {useState, useEffect, useContext} from 'react';
import { withNamespaces } from 'react-i18next';

// import video from '../img/video.mp4';
// import logo from '../img/logo-big.png';
import {FaCaretDown} from 'react-icons/fa';
import LanguageSelector from "./LanguageSelector";


function NavigationBar({t, changeLanguage}) {
    return (
        <section className="sticky">
            <div className="sticky__container">
                <div className="sticky__in">
                    <div>

                        <nav className="sticky__nav upper">
                            <ul>
                                <li className="haschildren">
                                    <a
                                        href="https://www.lechomat.com/en/history/"
                                        className="js-subnav"
                                        data-subnav="item3044">
                                        {t('menu')}
                                    </a>
                                </li>
                                <li className="haschildren">
                                    <a
                                        href="https://www.lechomat.com/en/materials/"
                                        className="js-subnav"
                                        data-subnav="item3047">
                                        {t('reviews')}
                                    </a>
                                </li>
                                <li className="haschildren">
                                    <a
                                        href="https://www.lechomat.com/en/materials/"
                                        className="js-subnav"
                                        data-subnav="item3047">
                                        {t('contact&schedule')}
                                    </a>
                                </li>
                                <li className="haschildren">
                                    <a
                                        href="https://www.lechomat.com/en/materials/"
                                        className="js-subnav"
                                        data-subnav="item3047">
                                        {t('address')}
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <LanguageSelector changeLanguage={changeLanguage}/>

                </div>


                {/*<div className="sticky__lang">*/}
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

// <section className="sticky">
//     <div className="sticky__container">
//         <div className="sticky__in hide-mobile">
//             <div>
//                 <nav className="sticky__nav upper">
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
//                 <nav className="sticky__nav upper">
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
//         <div className="sticky__lang">
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


// (enableOn = 991 < window.innerWidth) ? ($(".sticky").on("mouseenter mouseleave", ".js-subnav", function() {
//     var t = $(this).attr("data-subnav")
//         , e = $("#subnav-" + t)
//         , i = $(".stickysubnav__item");
//     $(".stickysubnav__item.is-active").length ? i.removeClass("is-active is-firstactive") : (i.removeClass("is-lastactive"),
//         e.addClass("is-firstactive")),
//         e.addClass("is-active")
// }),
//     $(".sticky").on("mouseleave", function() {
//         var t = $(".stickysubnav__item");
//         $(".stickysubnav__item.is-active").addClass("is-lastactive"),
//             t.removeClass("is-active is-firstactive")
//     })) : $(".sticky__lang").on("click", ".js-subnav", function(t) {
//     var e = $(this).attr("data-subnav")
//         , i = $("#subnav-" + e);
//     document.body.classList.remove("mobilenav-is-open"),
//         $("body").toggleClass("mobilelang-is-open"),
//         i.toggleClass("is-active"),
//         t.preventDefault()
// });

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
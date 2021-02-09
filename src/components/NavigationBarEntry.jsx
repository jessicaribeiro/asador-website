import React from 'react';
import {withNamespaces} from "react-i18next";

function NavigationBarEntry({t, section, label, focus, popup}) {

    const scrollToSection = (section) => {
        return document.getElementById(section).scrollIntoView();
    };
    const popupOrCall = () => {
        const popup = document.getElementById("bookPopup");
        popup.classList.toggle("show");
    };

    return (
        <>
            <li>
                <a
                    onClick={() => popup ? popupOrCall() : scrollToSection(section)}
                    className={`js-subnav ${focus ? 'focus-button popup' : ''}`}
                >
                    {t(label)}
                </a>
            </li>
        </>
    );
}

export default withNamespaces()(NavigationBarEntry);
import React from 'react';
import {withNamespaces} from "react-i18next";

function NavigationBarEntry({t, section, label, focus}) {

    const scrollToSection = (section) => {
        return document.getElementById(section).scrollIntoView();
    };

    return (
        <li>
            <a
                onClick={() => scrollToSection(section)}
                className={`js-subnav ${focus ? 'focus-button' : ''}`}
                >
                {t(label)}
            </a>
        </li>
    );
}

export default withNamespaces() (NavigationBarEntry);
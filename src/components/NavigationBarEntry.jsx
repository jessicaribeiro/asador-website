import React from 'react';
import {withNamespaces} from "react-i18next";

function NavigationBarEntry({t, href, label, focus}) {
    return (
        <li>
            <a
                href={href}
                className={`js-subnav ${focus ? 'focus-button' : ''}`}
                >
                {t(label)}
            </a>
        </li>
    );
}

export default withNamespaces() (NavigationBarEntry);
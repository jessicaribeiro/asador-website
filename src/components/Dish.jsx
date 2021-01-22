import React from 'react';
import {withNamespaces} from "react-i18next";

function Dish({t, name}) {
    return (
        <h3 className="heading-tertiary u-margin-bottom-extra-small">
            {t(name)}
        </h3>
    );
}

export default withNamespaces()(Dish);




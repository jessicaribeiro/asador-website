import React from 'react';
import {FaAngleDown} from 'react-icons/fa';


function ArrowDown({color, section}) {

    const scrollToSection = (section) => {
        return document.getElementById(section).scrollIntoView();
    };

    return (
        <div className="arrow bounce">
            <FaAngleDown
                className={`arrow-icon arrow-${color}`}
                onClick={() => scrollToSection(section)}
            />
        </div>
    );
}

export default ArrowDown;
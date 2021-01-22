import React, {useState, useEffect, useRef} from 'react';
import {FaCaretDown} from 'react-icons/fa';
import i18n from 'i18next';

function LanguageSelector({changeLanguage}) {
    const node = useRef();
    const [showMenu, setShowMenu] = useState(false);

    const getLanguage = () => {
        return i18n.language ||
            (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
            'en';
    };

    const handleChangeLanguage = (lang) => {
        changeLanguage(lang);
        setShowMenu(false);
    };

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        // outside click
        setShowMenu(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="sticky__lang" ref={node}>
            <a
                type="button"
                data-subnav="lang"
                className="js-subnav upper"
                onClick={() => setShowMenu(!showMenu)}
            >
                {getLanguage()} <FaCaretDown
                className="icon icon-arrow-select"/>
            </a>
            {showMenu && (<div className="dropdown">
                <ul>
                    <li onClick={() => handleChangeLanguage('en')}>English</li>
                    <li onClick={() => handleChangeLanguage('es')}>Spanish</li>
                    <li onClick={() => handleChangeLanguage('pt')}>Portuguese</li>
                </ul>
            </div>)
            }
        </div>
    )
}

export default LanguageSelector;
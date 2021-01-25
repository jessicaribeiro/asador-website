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

    const languages = [
        {code: 'en', name: 'English'},
        {code: 'es', name: 'Español'},
        {code: 'pt', name: 'Português'}
    ];

    const options = languages.map(lang => {
        if (lang.code !== getLanguage()) {
            return <li key={lang.code}
                       onClick={() => handleChangeLanguage(lang.code)}
                       className="navbar__lang-dropdown-li"
            >{lang.name}</li>
        }
        return null;
    });


    return (
        <div className="navbar__lang" ref={node}>
            <a
                type="button"
                data-subnav="lang"
                className="js-subnav upper"
                onClick={() => setShowMenu(!showMenu)}
            >
                {getLanguage()}
                <FaCaretDown className="icon icon-arrow-select"/>
            </a>
            {showMenu && (
                <div className="navbar__lang-dropdown">
                    <ul className="navbar__lang-dropdown-ul">
                        {options}
                    </ul>
                </div>)
            }
        </div>
    )
}

export default LanguageSelector;
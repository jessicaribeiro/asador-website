import React, {useState, useEffect, useRef} from 'react';
import {FaCaretDown} from 'react-icons/fa';


function LanguageSelector({changeLanguage}) {
    const node = useRef();
    const [showMenu, setShowMenu] = useState(false);


    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setShowMenu(false);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClickOutside);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="sticky__lang" ref={node}>
            <a
                // href="#"
                type="button"
                data-subnav="lang"
                className="js-subnav upper"
                onClick={() => setShowMenu(!showMenu)}
            >
                EN <FaCaretDown className="icon icon-arrow-select"/>
            </a>
            {showMenu && (<div className="dropdown">
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                </ul>
            </div>)
            }
        </div>

        // <div className="sticky__lang">
        //     <a href="#" className="js-subnav upper" data-subnav="lang" onClick={() => setShowMenu(!showMenu)}>
        //         en
        //         <FaCaretDown className="icon icon-arrow-select"/>
        //     </a>
        //     { showMenu && (
        //         <div className="lang-menu">
        //             <a onClick={() => changeLanguage('en')}> English </a>
        //             <a onClick={() => changeLanguage('es')}> Spanish </a>
        //         </div>
        //     )
        //
        //     }
        // </div>
    )
}

export default LanguageSelector;
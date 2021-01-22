import React, {Component} from 'react';
import video from "../img/video.mp4";
import logo from "../img/logo-big.png";
import NavigationBar from "./NavigationBar";

function Header({changeLanguage}) {
    return (
        <header className="header">
            <NavigationBar changeLanguage={changeLanguage}/>

            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                    Your browser is not supported!
                </video>
            </div>

            <div className="header__logo-box">
                <img src={logo} alt="Logo"
                     className="header__logo"/>
            </div>
        </header>
    )
}

export default Header;
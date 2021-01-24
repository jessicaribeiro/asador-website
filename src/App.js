import React, {useEffect} from "react";
import {withNamespaces} from 'react-i18next';
import i18n from './i18n';
import './sass/App.scss';
import Header from "./components/Header";
import SectionMenu from "./components/SectionMenu";
import ArrowDown from "./components/ArrowDown";

function App({t}) {
    const handleScroll = (event) => {
        if (window.scrollY > 500) {
            document.querySelector(".navbar").className = "navbar scroll";
            document.querySelector(".navbar__in").className = "navbar__in scroll";
            document.querySelector(".navbar__lang").className = "navbar__lang scroll";
            // document.body.classList.add("scroll");
        } else {
            document.querySelector(".navbar").className = "navbar";
            document.querySelector(".navbar__in").className = "navbar__in";
            document.querySelector(".navbar__lang").className = "navbar__lang";
            // document.body.classList.remove("scroll")
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // cleanup this component
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="App">
            <Header changeLanguage={changeLanguage}/>
            <ArrowDown color="white" section="menu"/>
            <main>
                <SectionMenu />
                <ArrowDown color="red" />

            </main>

        </div>
    );
}

export default withNamespaces()(App);

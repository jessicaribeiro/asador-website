import React, {useEffect} from "react";
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';

// import logo from './logo.svg';
import './sass/App.scss';
import Header from "./components/Header";

function App({t}) {
    const handleScroll = (event) => {
        if (window.scrollY > 20) {
            document.querySelector(".sticky").className = "sticky scroll";
            document.querySelector(".sticky__in").className = "sticky__in scroll";
            document.querySelector(".sticky__lang").className = "sticky__lang scroll";
            // document.body.classList.add("scroll");
        } else {
            document.querySelector(".sticky").className = "sticky";
            document.querySelector(".sticky__in").className = "sticky__in";
            document.querySelector(".sticky__lang").className = "sticky__lang";
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
                <h1>{t('Welcome to React')}</h1>
            </div>
    );
}

export default withNamespaces() (App);

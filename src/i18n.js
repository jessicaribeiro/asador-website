import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';


// the translations
const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    },
    pt: {
        translation: translationPT
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "es",
        fallbackLng: "en", // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

//TODO
// Now we already are able to set language based on the browsers set language or by appending ?lng=LANGUAGE to the URL.
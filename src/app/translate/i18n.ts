import i18n from "i18next"

import { initReactI18next } from "react-i18next"

import ptJson from "./PT.json"
import enJson from "./EN.json"

i18n.use(initReactI18next).init({
    fallbackLng: "pt",
    interpolation: {
        escapeValue: false
    },
    resources: {
        pt: ptJson,
        en: enJson
    }
})



export default i18n
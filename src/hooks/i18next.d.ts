import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ENTranslation from "../../public/locales/en-US-translation.json";
import ESTranslation from "../../public/locales/es-ES-translation.json";
import DETranslation from "../../public/locales/de-DE-translation.json";

const resources = {
  en: {
    translation: ENTranslation,
  },
  es: {
    translation: ESTranslation,
  },
  de: {
    translation: DETranslation,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    resources,
    // Language by default
    fallbackLng: "es",

    // Determine the language
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

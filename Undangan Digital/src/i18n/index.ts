import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import id from "./locales/id";
import en from "./locales/en";
import ja from "./locales/ja";
import zh from "./locales/zh";

i18n.use(initReactI18next).init({
  resources: {
    id: { translation: id },
    en: { translation: en },
    ja: { translation: ja },
    zh: { translation: zh },
  },
  lng: "id",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

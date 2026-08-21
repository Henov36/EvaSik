import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import UkTranslation from "../i18n/locales/ua/ua.json";
import EnTranslation from "../i18n/locales/en/en.json";

const local = localStorage.getItem("locale") || "ua";

const HTML_LANG_BY_LOCALE: Record<string, string> = {
	ua: "uk",
	en: "en",
};

const applyHtmlLang = (locale: string) => {
	document.documentElement.lang = HTML_LANG_BY_LOCALE[locale] || "uk";
};

i18n.use(initReactI18next).init({
	resources: {
		ua: { translation: UkTranslation },
		en: { translation: EnTranslation },
	},
	lng: local,
	fallbackLng: "ua",
	interpolation: {
		escapeValue: false,
	},
});

applyHtmlLang(local);
i18n.on("languageChanged", applyHtmlLang);

export default i18n;

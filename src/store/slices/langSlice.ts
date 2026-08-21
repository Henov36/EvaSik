import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import i18n from "../../i18n/i18n";

export type Locale = "ua" | "en";

type LocaleState = {
	value: Locale;
};

const getInitialLocale = (): Locale => {
	const saved = localStorage.getItem("locale");

	if (saved === "ua" || saved === "en") {
		return saved;
	}

	return "ua";
};

const initialState: LocaleState = {
	value: getInitialLocale(),
};

const localeSlice = createSlice({
	name: "locale",

	initialState,

	reducers: {
		setLocale: (state, action: PayloadAction<Locale>) => {
			state.value = action.payload;

			localStorage.setItem("locale", action.payload);
			i18n.changeLanguage(action.payload);
		},
	},
});

export const { setLocale } = localeSlice.actions;

export default localeSlice.reducer;

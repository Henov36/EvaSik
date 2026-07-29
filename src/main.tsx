import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n/i18n.ts";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import App from "./App.tsx";
import { I18nextProvider } from "react-i18next";
import { GlobalStyles } from "./styles/GlobalStyles.ts";

i18n.changeLanguage(localStorage.getItem("locale") || "ua");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter basename="/EvaSik">
			<I18nextProvider i18n={i18n}>
				<Provider store={store}>
					<GlobalStyles />
					<App />
				</Provider>
			</I18nextProvider>
		</BrowserRouter>
	</StrictMode>,
);

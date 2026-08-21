import { createGlobalStyle } from "styled-components";
import GilroyMedium from "../assets/fonts/Gilroy-Medium.woff2";
import ArabicoMedium from "../assets/fonts/Araboto-Normal.woff2";

export const GlobalStyles = createGlobalStyle`
:root{
	--main-color:#ffffff;
	--accent-color:#004B1B;
	--blue-bg:#EEE2CF;
}
@font-face {
	font-family: "Gilroy Medium";
	src: url(${GilroyMedium}) format("woff2");
	font-weight: 400;
    font-style: normal;
    font-display: swap;
}
@font-face {
	font-family: "Arabico Medium";
	src: url(${ArabicoMedium}) format("woff2");
	font-weight: 400;
    font-style: normal;
    font-display: swap;
}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body{
		font-family: "Gilroy Medium", sans-serif;
		overflow-x: hidden;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
	ul,
	ol {
		list-style: none;
	}
	section{
		padding: 100px 0px 0px 0px;
		overflow: hidden;
	}
	h1 {
		margin-bottom: 100px;
		font-size: 70px;
		font-family: "Cormorant", serif;
		font-optical-sizing: auto;
		font-weight: 800;
		font-style: normal;
		text-align: center;
	}
	h3 {
		margin: 0 auto;
		width: fit-content;
		margin-top: 20px;
		font-size: 32px;
		font-weight: 400;
	}

	@media (max-width: 900px) {
		section {
			padding: 50px 0px;
			margin-top: -1px;
		}
		h1 {
			font-size: 42px;
			margin-bottom: 50px;
		}
		h3 {
			font-size: 22px;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 32px;
			margin-bottom: 32px;
		}
		h3 {
			font-size: 18px;
		}
	}
`;

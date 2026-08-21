import styled from "styled-components";
import MainImg from "../../assets/img/products/sad3.webp";

export const AboutUsMainSection = styled.section`
	margin: 0;
	padding: 0;
	height: 100vh;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fcf8f2;
	height: 100vh;
	position: relative;
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.7) 21%,
			rgba(230, 212, 184, 0.7) 83%
		),
		url(${MainImg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@media (max-width: 900px) {
		height: auto;
		min-height: 100svh;
		padding: 80px 0;
	}
`;

export const MainFlexBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 24px;

		> div:first-child,
		> div:last-child {
			display: none;
		}
	}
	img {
		width: 100%;
		max-width: 360px;
	}
`;
export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	img {
		width: 50%;
	}
	h3 {
		width: 70%;
		text-align: center;
		font-family: "Cormorant";
		font-weight: 600;
		font-size: 38px;
	}

	@media (max-width: 900px) {
		img {
			width: 70%;
			max-width: 220px;
		}
		h3 {
			width: 100%;
			font-size: 26px;
		}
	}
`;

export const ArrowLink = styled.a`
	position: absolute;
	bottom: 20px;
	left: 50%;
	animation: pulse 2s ease infinite;
	img {
		width: 80px;
	}

	@keyframes pulse {
		0% {
			transform: translateY(0) translateX(-50%);
		}
		50% {
			transform: translateY(-10px) translateX(-50%);
		}
		100% {
			transform: translateY(0) translateX(-50%);
		}
	}
`;

export const ConcentratesSection = styled.section`
	background-color: #eee2cf;
	padding: 100px 0px;
`;

export const ConcentratesTextBlock = styled.div`
	max-width: 780px;
	margin: 0 auto;
	text-align: center;

	p {
		font-size: 19px;
		line-height: 1.6;
		color: #2b2b2b;
		margin-bottom: 20px;

		&:last-of-type {
			margin-bottom: 32px;
		}
	}

	@media (max-width: 900px) {
		p {
			font-size: 16px;
		}
	}
`;

export const ConcentratesCta = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 16px 34px;
	border-radius: 999px;
	background: var(--accent-color);
	color: var(--main-color);
	font-weight: 600;
	font-size: 15px;
	transition:
		transform 0.2s ease,
		opacity 0.2s ease;

	@media (hover: hover) {
		&:hover {
			transform: translateY(-3px);
			opacity: 0.92;
		}
	}
`;

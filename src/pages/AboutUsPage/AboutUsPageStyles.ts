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

	/* background: linear-gradient(
		1deg,
		rgba(230, 212, 184, 1) 8%,
		rgba(33, 99, 30, 1) 79%
	); */

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

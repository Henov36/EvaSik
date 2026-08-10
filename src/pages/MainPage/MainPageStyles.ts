import { styled, keyframes, css } from "styled-components";
import SecondSectionImg from "../../assets/img/fructs.webp";
import HeroBg from "../../assets/img/products/JuiceInGlass/g11.webp";
import AdaptiveHeroBg from "../../assets/img/products/sadAdaptive.webp";

const pulse = keyframes`
  0% {
    transform: scale(1) var(--base-rotate, rotate(0deg));
  }
  50% {
    transform: scale(1.1) var(--pulse-rotate, rotate(10deg));
  }
  100% {
    transform: scale(1) var(--base-rotate, rotate(0deg));
  }
`;

export const MainPageStyles = styled.main``;
export const TopSection = styled.section`
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.35) 21%,
			rgba(230, 212, 184, 0.81) 83%
		),
		url(${HeroBg});
	background-size: cover;
	background-position: center 30%;
	background-repeat: no-repeat;
	overflow: hidden;
	position: relative;
	padding: 100px 0px 20px 0px;

	@media (max-width: 900px) {
		padding: 16px 0px 10px 0px;
		background-image:
			linear-gradient(
				270deg,
				rgba(230, 212, 184, 0.35) 21%,
				rgba(230, 212, 184, 0.81) 83%
			),
			url(${AdaptiveHeroBg});
	}
`;
export const ContentBox = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		width: 100%;
	}
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		img {
			width: 100%;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		}
		h1 {
			text-align: center;
			margin-top: 20px;
			margin-bottom: 0;
			font-size: 52px;
			color: #fff;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			font-family: "Gilroy Medium" sans-serif;
		}
		@media (max-width: 900px) {
			width: 100%;
			margin-top: 100px;
		}
	}

	@media (max-width: 1200px) {
		.content h1 {
			font-size: 40px;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column-reverse;
		justify-content: center;
		gap: 24px;
		padding: 24px 0;

		div {
			width: 50%;
		}
		.content h1 {
			font-size: 30px;
			margin-top: 12px;
		}
	}

	@media (max-width: 480px) {
		.content h1 {
			font-size: 24px;
		}
	}
`;

export const HeroFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 30px;
	padding: 20px 0px 0px 0px;

	@media (max-width: 900px) {
		flex-direction: column;
		padding: 10px 0px 0px 0px;
		gap: 16px;
	}
`;

export const HeroTextBlock = styled.div`
	width: 50%;
	color: var(--accent-color);

	.eyebrow {
		font-size: 14px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 16px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	h1 {
		text-align: left;
		font-size: 52px;
		line-height: 1.12;
		font-family: "Cormorant", serif;
		font-weight: 800;
		margin-bottom: 16px;
		color: var(--accent-color);
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	p {
		font-size: 16px;
		max-width: 420px;
		opacity: 0.8;
		margin-bottom: 22px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	img {
		width: 40%;
		margin-bottom: 20px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	@media (max-width: 900px) {
		width: 100%;
		text-align: center;
		margin-top: 100px;
		position: relative;
		z-index: 100;

		p {
			max-width: none;
			margin-left: auto;
			margin-right: auto;
		}

		h1 {
			text-align: center;
			font-size: 36px;
		}
		img {
			width: 30%;
		}
	}
`;

export const HeroButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	.primary-btn {
		padding: 16px 28px;
		border-radius: 40px;
		background: var(--accent-color);
		color: var(--main-color);
		font-weight: 600;
		font-size: 14px;
		transition: transform 0.2s ease;

		@media (hover: hover) {
			&:hover {
				transform: translateY(-3px);
			}
		}
	}

	.play-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 600;
		font-size: 14px;

		span {
			width: 42px;
			height: 42px;
			border-radius: 50%;
			background: var(--main-color);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
		}
	}

	@media (max-width: 900px) {
		justify-content: center;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 14px;
	}
`;

export const HeroImageBlock = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		/* width: 90%; */
		max-width: 360px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
		/* transform-origin: 50% 85%; */
		animation: heroBottleFloat 6s ease-in-out infinite;
	}

	@media (max-width: 900px) {
		width: 100%;
		img {
			width: 200px;
			margin-top: 50px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		img {
			animation: none;
		}
	}

	@keyframes heroBottleFloat {
		0% {
			transform: scale(1.3) rotate(7deg);
		}
		50% {
			transform: scale(1.1) rotate(0deg);
		}
		100% {
			transform: scale(1.3) rotate(7deg);
		}
	}
`;

export const FeaturesStrip = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 16px;
	background: var(--main-color);
	border-radius: 20px;
	padding: 22px 30px;
	margin: 26px 0px 0px 0px;

	li {
		display: flex;
		align-items: center;
		gap: 12px;
		flex: 1 1 0;

		img {
			width: 34px;
			height: 34px;
			flex-shrink: 0;
		}
		strong {
			display: block;
			font-size: 14px;
			color: var(--accent-color);
		}
		span {
			display: block;
			font-size: 12px;
			opacity: 0.65;
		}
	}

	@media (max-width: 900px) {
		flex-wrap: wrap;
		border-radius: 16px;
		padding: 20px;

		li {
			flex: 1 1 45%;
		}
	}
`;

export const JuiceImgBlock = styled.div<{ $reverse: boolean }>`
	display: flex;
	justify-content: ${({ $reverse }) => ($reverse ? "center" : "space-between")};
	align-items: ${({ $reverse }) => ($reverse ? "center" : "end")};
	width: 100%;
	height: 100%;

	img {
		transform: ${({ $reverse }) =>
			$reverse ? "rotate(-15deg)" : "rotate(0deg)"};
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		/* animation: ${pulse} 3s ease infinite; */
		${({ $reverse }) =>
			$reverse
				? css`
						animation: ${pulse} 3s ease infinite;
					`
				: css`
						animation: none;
					`}
	}

	@media (max-width: 900px) {
		width: 50%;
		img {
			width: 50%;
		}
	}
`;

export const SecondSection = styled.section`
	background-color: transparent;
	overflow: hidden;
	div {
		width: 100%;
	}
	.content__second-section {
		margin-right: 50px;
	}
	.juice-block {
		background-image: url(${SecondSectionImg});
		background-size: contain;
		background-position-y: bottom;
		background-repeat: no-repeat;
		align-self: stretch;
		img {
			height: 400px;
		}
	}

	@media (max-width: 900px) {
		.content__second-section {
			margin-right: 0;
		}
		.juice-block {
			display: none;
		}
	}
`;

import styled from "styled-components";
import MaskSVG from "../../assets/img/maskSvgLight.svg";
import { keyframes } from "styled-components";

const wave = keyframes`
	from {
		background-position: 0 0;
	}
	to {
		background-position: 100vh 0;
	}
`;

export const FooterStyles = styled.footer`
	position: relative;
	background: #004b1b;
	color: var(--main-color);
	padding-top: 70px;
	margin-top: 2px;

	&::before {
		content: "";
		position: absolute;
		top: -60px;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 70px;
		background-image: url("${MaskSVG}");
		background-repeat: repeat-x;
		background-size: 100vh 70px;
		background-position: 0 0;

		animation: ${wave} 25s linear infinite;
	}
`;

export const FooterTop = styled.div`
	padding: 20px 0 50px;
	display: grid;
	grid-template-columns: 1.4fr 1fr 1fr 1fr;
	gap: 40px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr 1fr;
		row-gap: 36px;
	}

	@media (max-width: 560px) {
		grid-template-columns: 1fr;
	}
`;

export const FooterBrandColumn = styled.div`
	img {
		width: 120px;
		margin-bottom: 16px;
	}

	p {
		font-size: 14px;
		line-height: 1.6;
		color: var(--main-color);
		max-width: 280px;
	}
`;

export const FooterColumnTitle = styled.h4`
	font-size: 16px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	margin-bottom: 18px;
	color: var(--main-color);
`;

export const FooterLinkList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;

	a {
		font-size: 14px;
		color: var(--main-color);
		transition:
			color 0.2s ease,
			padding-left 0.2s ease;
		display: inline-block;

		&:hover {
			color: var(--blue-bg);
			padding-left: 4px;
		}
	}
`;

export const FooterContactList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 20px;

	li {
		font-size: 14px;
		color: var(--main-color);
		display: flex;
		align-items: center;
		gap: 10px;
	}

	a {
		color: inherit;
		transition: color 0.2s ease;

		&:hover {
			color: var(--blue-bg);
		}
	}
`;

export const FooterSocials = styled.div`
	display: flex;
	gap: 14px;

	a {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			background 0.2s ease,
			transform 0.2s ease;

		img {
			width: 18px;
			height: 18px;
		}

		&:hover {
			background: #d8e79a;
			transform: translateY(-3px);
		}
	}
`;

export const FooterBottom = styled.div`
	border-top: 1px solid rgba(238, 243, 228, 0.15);
	padding: 22px 0 28px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;
	font-size: 13px;
	color: var(--main-color);

	@media (max-width: 560px) {
		justify-content: center;
		text-align: center;
	}
`;

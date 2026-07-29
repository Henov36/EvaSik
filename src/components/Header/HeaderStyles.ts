import styled, { css } from "styled-components";

export const HeaderStyles = styled.header`
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 50%;
	transform: translateX(50%);
	margin-top: 20px;
	height: 80px;
	display: flex;
	width: 96%;
	max-width: 1400px;
	align-items: center;
	transition: all 0.3s ease;
	backdrop-filter: url(#GlassFilter) blur(5px) brightness(1.2);
	background: linear-gradient(rgb(154 154 154 / 84%) 1%, rgba(0, 0, 0, 0) 83%);
	border-radius: 40px;
	box-shadow: 0px 5px 14px -8px rgba(255, 255, 255, 0.47);
	-webkit-box-shadow: 0px 5px 14px -8px rgba(255, 255, 255, 0.47);
	-moz-box-shadow: 0px 5px 14px -8px rgba(255, 255, 255, 0.47);

	nav {
		display: flex;
	}

	@media (max-width: 900px) {
		margin-top: 12px;
		height: 68px;
		border-radius: 28px;
		width: 94%;
	}
`;

export const LogoContainer = styled.div`
	width: 100px;
	flex-shrink: 0;
	img {
		height: 47px;
		display: block;
	}

	@media (max-width: 900px) {
		width: 76px;
	}
`;

export const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 8px;

	@media (max-width: 900px) {
		display: none;
	}
`;

const navLinkStyles = css`
	position: relative;
	display: inline-flex;
	align-items: center;
	padding: 10px 16px;
	font-size: 15px;
	font-weight: 600;
	color: #fff;
	border-radius: 999px;
	transition:
		color 0.25s ease,
		background 0.25s ease;

	&::after {
		content: "";
		position: absolute;
		left: 16px;
		right: 16px;
		bottom: 6px;
		height: 2px;
		background: #d8e79a;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.25s ease;
	}

	&:hover {
		color: #d8e79a;
	}
	&.active {
		background: #0841098f;
	}

	&:hover::after,
	&.active::after {
		transform: scaleX(1);
	}
`;

export const NavItem = styled.li`
	position: relative;

	a {
		${navLinkStyles}
	}

	/* Выпадающее меню категорий товаров: открывается по наведению
	   на десктопе и остаётся доступным с клавиатуры (:focus-within). */
	&:hover > div,
	&:focus-within > div {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
`;

export const DropdownButton = styled.button`
	${navLinkStyles}
	background: none;
	border: none;
	cursor: pointer;
	font-family: inherit;

	svg {
		width: 12px;
		height: 12px;
		margin-left: 6px;
		transition: transform 0.25s ease;
	}
`;

export const DropdownPanel = styled.div`
	position: absolute;
	top: calc(100%);
	left: 0%;
	transform: translate(-50%, 8px);
	min-width: 220px;
	padding: 10px;
	border-radius: 20px;
	background: rgba(40, 48, 20, 0.92);
	backdrop-filter: blur(10px);
	box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.5);
	opacity: 0;
	visibility: hidden;
	transition:
		opacity 0.2s ease,
		transform 0.2s ease,
		visibility 0.2s ease;
	display: flex;
	flex-direction: column;
	gap: 2px;

	a {
		padding: 10px 14px;
		border-radius: 12px;
		font-size: 14px;
		font-weight: 500;
		color: #f1f1e6;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			padding-left 0.2s ease;

		&:hover {
			background: rgba(255, 255, 255, 0.12);
			color: #d8e79a;
			padding-left: 18px;
		}
	}
`;

export const ActionsGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
`;

export const SocialMedia = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 14px;

	img {
		height: 22px;
		display: block;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
		opacity: 0.9;
	}

	a:hover img {
		transform: translateY(-2px) scale(1.1);
		opacity: 1;
	}

	@media (max-width: 900px) {
		display: none;
	}
`;

export const PhoneButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.25);
	color: #fff;
	transition: background 0.2s ease, transform 0.2s ease;

	svg {
		width: 20px;
		height: 20px;
		stroke: currentColor;
	}

	&:hover {
		background: rgba(255, 255, 255, 0.45);
		transform: translateY(-2px);
	}
`;

export const LangToggle = styled.div`
	display: flex;
	align-items: center;
	padding: 3px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.15);

	button {
		border: none;
		background: transparent;
		color: rgba(255, 255, 255, 0.7);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.03em;
		padding: 6px 12px;
		border-radius: 999px;
		cursor: pointer;
		transition:
			background 0.25s ease,
			color 0.25s ease;

		&.active {
			background: #fff;
			color: #204a1f;
		}
	}
`;

export const BurgerButton = styled.button`
	display: none;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.15);
	cursor: pointer;
	flex-shrink: 0;

	span {
		display: block;
		width: 18px;
		height: 2px;
		margin: 0 auto;
		background: #fff;
		border-radius: 2px;
		transition:
			transform 0.25s ease,
			opacity 0.25s ease;
	}

	&.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	&.open span:nth-child(2) {
		opacity: 0;
	}
	&.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	@media (max-width: 900px) {
		display: flex;
	}
`;

export const MobileNavPanel = styled.div<{ $open: boolean }>`
	position: fixed;
	top: 100px;
	right: 2%;
	left: 2%;
	z-index: 999;
	background: rgba(30, 38, 16, 0.96);
	backdrop-filter: blur(12px);
	border-radius: 24px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 6px;
	box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);

	opacity: ${({ $open }) => ($open ? 1 : 0)};
	visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
	transform: translateY(${({ $open }) => ($open ? "0" : "-12px")});
	transition:
		opacity 0.25s ease,
		transform 0.25s ease,
		visibility 0.25s ease;
	pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

	a,
	button.mobile-link {
		display: block;
		width: 100%;
		text-align: left;
		padding: 12px 14px;
		border-radius: 14px;
		color: #f1f1e6;
		font-size: 16px;
		font-weight: 600;
		border: none;
		background: transparent;
		font-family: inherit;
		cursor: pointer;

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			color: #d8e79a;
		}
	}

	.mobile-submenu {
		display: flex;
		flex-direction: column;
		padding-left: 14px;
		gap: 2px;

		a {
			font-size: 14px;
			font-weight: 500;
			opacity: 0.85;
		}
	}

	.mobile-divider {
		height: 1px;
		background: rgba(255, 255, 255, 0.12);
		margin: 10px 4px;
	}

	.mobile-socials {
		display: flex;
		gap: 18px;
		padding: 6px 14px 0;

		img {
			height: 22px;
		}
	}

	@media (min-width: 901px) {
		display: none;
	}
`;

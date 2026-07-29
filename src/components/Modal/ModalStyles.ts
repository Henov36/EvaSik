import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const slideIn = keyframes`
	from { transform: translateX(100%); }
	to { transform: translateX(0); }
`;

const popIn = keyframes`
	from { transform: scale(0.95); opacity: 0; }
	to { transform: scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 2000;
	background: rgba(0, 20, 8, 0.45);
	backdrop-filter: blur(3px);
	display: flex;
	justify-content: flex-end;
	animation: ${fadeIn} 0.25s ease;
`;

export const ModalPanel = styled.div<{ $side?: boolean }>`
	position: relative;
	background: #fdfaf3;
	color: #1c2b16;
	box-shadow: -10px 0 40px rgba(0, 0, 0, 0.25);
	overflow-y: auto;

	${({ $side }) =>
		$side
			? css`
					height: 100%;
					width: min(500px, 100vw);
					border-radius: 0;
					animation: ${slideIn} 0.3s ease;
					padding: 32px 24px;
				`
			: css`
					margin: auto;
					width: min(480px, 92vw);
					max-height: 90vh;
					border-radius: 24px;
					animation: ${popIn} 0.25s ease;
					padding: 40px 32px;
				`}

	@media (max-width: 480px) {
		padding: 24px 18px;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	width: 36px;
	height: 36px;
	border-radius: 50%;
	border: none;
	background: rgba(98, 120, 23, 0.1);
	color: #004B1B;
	font-size: 22px;
	line-height: 1;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition:
		background 0.2s ease,
		transform 0.2s ease;

	&:hover {
		background: rgba(98, 120, 23, 0.2);
		transform: rotate(90deg);
	}
`;

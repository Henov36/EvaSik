import styled, { keyframes } from "styled-components";

export const StatsWrap = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 32px;
	padding: 70px 0px 90px 0px;

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 16px;
		flex: 1 1 180px;

		img {
			width: 64px;
			height: 64px;
			flex-shrink: 0;
		}

		strong {
			display: block;
			font-size: 32px;
			line-height: 1.1;
		}
		span {
			display: block;
			font-size: 14px;
			opacity: 0.75;
		}
	}

	@media (max-width: 900px) {
		gap: 28px;
		padding: 40px 0px 56px 0px;

		li {
			flex: 1 1 45%;
			img {
				width: 52px;
				height: 52px;
			}
			strong {
				font-size: 24px;
			}
		}
	}
`;

export const PartnersBlock = styled.div`
	position: relative;
	z-index: 300;
	padding: 20px 0px 100px 0px;

	@media (max-width: 900px) {
		padding: 20px 0px 100px 0px;
	}
`;

export const PartnersTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 24px;
	margin-bottom: 32px;

	.eyebrow {
		font-size: 14px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.65;
		margin-bottom: 10px;
	}

	h2 {
		font-size: 46px;
		margin-bottom: 14px;
		font-family: "Cormorant", serif;
	}

	p {
		max-width: 420px;
		font-size: 17px;
		opacity: 0.8;
		margin-bottom: 20px;
	}

	.become-partner {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 14px 26px;
		border-radius: 40px;
		background: var(--accent-color);
		color: var(--main-color);
		font-weight: 600;
		width: fit-content;
		transition: transform 0.2s ease, opacity 0.2s ease;

		@media (hover: hover) {
			&:hover {
				transform: translateY(-3px);
				opacity: 0.92;
			}
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;

		h2 {
			font-size: 30px;
		}
	}
`;

export const PartnerLogoCard = styled.div`
	width: 200px;
	height: 110px;
	flex-shrink: 0;
	background: var(--main-color);
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	@media (max-width: 600px) {
		width: 140px;
		height: 80px;
		padding: 14px;
	}
`;

const scroll = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50%);
	}
`;

export const MarqueeRow = styled.div`
	width: 100%;
	overflow: hidden;
	margin-top: 24px;

	&:first-of-type {
		margin-top: 0;
	}
`;
export const MarqueeTrack = styled.div<{ $reverse?: boolean }>`
	display: flex;
	width: max-content;
	gap: 16px;
	animation: ${scroll} 45s linear infinite;
	animation-direction: ${({ $reverse }) => ($reverse ? "reverse" : "normal")};
	will-change: transform;

	@media (hover: hover) {
		${MarqueeRow}:hover & {
			animation-play-state: paused;
		}
	}
`;

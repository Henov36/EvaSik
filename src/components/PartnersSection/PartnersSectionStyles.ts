import styled from "styled-components";

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
	height: 110px;
	background: var(--main-color);
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
`;

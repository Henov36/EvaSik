import styled from "styled-components";
import SectionPhoto from "../../assets/img/products/sad2.webp";

export const PhotoSection = styled.section`
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.7) 21%,
			rgba(230, 212, 184, 0.7) 83%
		),
		url(${SectionPhoto});
	height: 100%;
`;

export const ProductTopSection = styled.section`
	padding: 0;
`;

export const TopSectionBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 100px 0px 100px 0px;
	div {
		width: 50%;
		h1 {
			margin: 0;
			font-family: "Gilroy Medium", sans-serif;
			text-align: center;
			filter: drop-shadow(0px 4px 4px rgb(243, 239, 244));
		}
	}
	img {
		width: 100%;
	}

	@media (max-width: 900px) {
		flex-direction: column;
		padding-bottom: 40px;
		gap: 20px;
		padding-top: 40px;

		div {
			width: 100%;
			h1 {
				text-align: center;
				font-size: 40px;
				margin-top: 0px;
				position: relative;
				z-index: 100;
			}
		}
	}
`;

interface ImgProps {
	width?: string;
	height?: string;
}

export const CategoryPickerSection = styled.section`
	padding: 50px 0px 100px 0px;

	h2 {
		font-size: 52px;
		margin-bottom: 50px;
		font-family: "Gilroy Medium", sans-serif;
		text-align: center;
	}
	@media (max-width: 900px) {
		h2 {
			font-size: 32px;
		}
	}
`;

export const CategoryPickerGrid = styled.div`
	display: flex;
	gap: 24px;

	a {
		flex: 1;
		background: transparent;
		border: 2px solid var(--accent-color);
		border-radius: 20px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 14px;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;

		img {
			height: 160px;
			object-fit: contain;
		}
		h3 {
			font-size: 20px;
			color: var(--accent-color);
		}

		@media (hover: hover) {
			&:hover {
				transform: translate(-4px, -4px);
				box-shadow: 4px 4px 0px var(--accent-color);
			}
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		a img {
			height: 120px;
		}
	}
`;

export const ImgBlock = styled.div<ImgProps>`
	margin-left: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 50%;
		height: 250px;
	}

	@media (max-width: 900px) {
		margin-left: 0;
		img {
			width: 100%;
			max-width: 320px;
			height: auto;
		}
	}
`;

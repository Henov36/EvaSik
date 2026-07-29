import styled from "styled-components";
import { Link } from "react-router-dom";
import sss from "../../../assets/img/products/sad.webp";

export const ProductSoloMain = styled.main``;

export const PruductsSoloPageSection = styled.section`
	/* padding: 0; */
	/* margin-top: -150px; */
	/* height: 100vh; */

	padding-bottom: 100px;
	background-color: #e3d2ba;
	button {
		cursor: pointer;
	}
	color: black;
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.7) 21%,
			rgba(230, 212, 184, 0.7) 83%
		),
		url(${sss});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const PruductsSoloContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px 0px;
	position: relative;
	z-index: 100;
	

	h1 {
		text-align: left;
		margin-bottom: 40px;
	}
	p {
		font-size: 24px;
	}
	ul {
		margin-top: 20px;
		h5 {
			font-size: 32px;
		}
		li {
			display: flex;
			align-items: flex-end;
			margin-top: 10px;
			i {
				flex: 1;
				border-bottom: 1px dashed black;
				margin-bottom: 4px;
				margin-left: 10px;
				margin-right: 5px;
			}
			span {
				padding-left: 5px;
				position: relative;
				z-index: 2;
			}

			strong {
				padding-left: 5px;
				position: relative;
				z-index: 2;
			}
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 30px;
		padding: 30px 0px;

		h1 {
			text-align: center;
			font-size: 32px;
		}
		p {
			font-size: 17px;
		}
		ul h5 {
			font-size: 22px;
		}
	}
`;

export const ProductImgBlock = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* transform: translateX(-20%); */

	@media (max-width: 900px) {
		width: 100%;
		transform: none;

		img {
			max-width: auto;
			width: 170px;
		}
	}
`;

export const ProductInfoBlock = styled.div`
	width: 50%;

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export const CountButtonBlock = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const Count = styled.div`
	border: 3px solid #004b1b;
	padding: 22px 10px;
	border-radius: 50px;
	display: flex;
	align-items: stretch;
	align-self: stretch;
	justify-content: space-between;
	height: 70px;
	width: 120px;
	margin-right: 20px;

	button {
		width: 20px;
		height: 20px;
		background-color: transparent;
		border: none;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #004b1b;
	}
	input {
		width: 20px;
		height: 20px;
		background-color: transparent;
		border: none;
		text-align: center;
		color: #004b1b;
	}
	input[type="number"] {
		appearance: textfield;
		-moz-appearance: textfield;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	@media (max-width: 900px) {
		width: 220px;
		margin: 0 auto;
		margin-bottom: 20px;
		input {
			font-size: 24px;
			width: 30px;
		}
		button {
			width: 220px !important;
			font-size: 40px;
			img {
				width: 30px;
			}
		}
	}
`;
export const AddToCard = styled.div`
	position: relative;
	button {
		margin-bottom: 4px;
		height: 66px;
		position: relative;
		z-index: 20;
		width: fit-content;
		padding: 20px 40px;
		background: #e3d2ba;
		border: 2px solid #004b1b;
		color: #004b1b;
		transition: all 0.3s ease;
		@media (hover: hover) {
			&:hover {
				transform: translateX(3px) translateY(-3px);
				transition: all 0.3s ease;
			}
		}
	}
	&::before {
		content: "";
		height: 66px;
		margin-bottom: 5px;
		width: 100%;
		background-color: #004b1b;
		z-index: 1;
		position: absolute;
		bottom: -5px;
		left: -5px;
	}

	@media (max-width: 900px) {
		button {
			width: 220px;
		}
	}
`;

export const FeaturesRow = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	padding: 30px 0px 60px 0px;
	border-top: 2px dashed #004b1b;
	margin-top: 40px;
	position: relative;
	z-index: 100;

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 8px;
		width: 25%;

		img {
			width: 40px;
			height: 40px;
		}
		strong {
			font-size: 16px;
		}
		span {
			font-size: 13px;
			opacity: 0.75;
		}
	}

	@media (max-width: 900px) {
		flex-wrap: wrap;
		li {
			width: 40%;
		}
	}
`;

export const OtherFlavorsSection = styled.div`
	position: relative;
	z-index: 100;
	padding-bottom: 60px;

	h3 {
		font-size: 42px;
		margin-bottom: 24px;
	}

	@media (max-width: 900px) {
		h3 {
			font-size: 22px;
			text-align: center;
		}
	}
`;

export const OtherFlavorCard = styled(Link)`
	background: #f4ead9;
	border: 2px solid #004b1b;
	border-radius: 14px;
	padding: 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 6px;
	height: 100%;
	transition: transform 0.25s ease;

	img {
		width: 90px;
		height: 90px;
		object-fit: contain;
	}
	span {
		font-size: 14px;
		font-weight: 600;
	}

	@media (hover: hover) {
		&:hover {
			transform: translateY(-6px);
		}
	}
`;

export const BackButton = styled.div`
	width: 200px;
	margin-left: auto;
	position: relative;

	position: relative;
	button {
		width: 100%;
		margin-bottom: 4px;
		height: 66px;
		position: relative;
		z-index: 20;
		width: 100%;
		padding: 20px 40px;
		background: #e3d2ba;
		border: 2px solid #004b1b;
		color: #004b1b;
		transition: all 0.3s ease;
		@media (hover: hover) {
			&:hover {
				transform: translateX(3px) translateY(-3px);
				transition: all 0.3s ease;
			}
		}
	}
	&::before {
		content: "";
		height: 66px;
		margin-bottom: 5px;
		width: 100%;
		background-color: #004b1b;
		z-index: 1;
		position: absolute;
		bottom: -5px;
		left: -5px;
	}

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
		margin-left: 0;
		margin-top: 20px;
		width: auto;
		button {
			width: 220px !important;
		}
	}
`;

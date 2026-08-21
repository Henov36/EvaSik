import styled from "styled-components";

export const TitleSpanStyle = styled.div`
	width: fit-content;
	margin: 0 auto;
	h1 {
		width: fit-content;
		margin: 0 auto;
		line-height: 1.15;
	}
	.under-title {
		width: fit-content;
		margin: 40px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 26px;
		img {
			height: 100%;
			margin: 0px 5px;
		}
		span {
			height: 3px;
			display: block;
			width: 100%;
			background-color: #004B1B;
		}
	}

	@media (max-width: 480px) {
		.under-title {
			margin: 20px 0px;
			height: 18px;
			img {
				margin: 0px 3px;
			}
		}
	}
`;

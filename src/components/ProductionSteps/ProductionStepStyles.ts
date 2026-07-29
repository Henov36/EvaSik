import styled from "styled-components";

export const ProductionStepStyles = styled.div`
	width: 23%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	p {
		text-align: center;
		width: 100%;
		height: 100px;
	}
	.photo__block {
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		width: 75%;
		overflow: hidden;
		/* border: 4px solid var(--accent-color); */
		height: 200px;
		img {
			width: 100%;
		}
	}
	.content__block {
		div {
			margin: 20px 0px;
			display: flex;
			align-items: center;
			justify-content: center;
			span {
				background-color: var(--accent-color);
				width: 100%;
				height: 2px;
				display: block;
			}
			img {
				margin: 0px 10px;
			}
		}
	}

	@media (max-width: 900px) {
		width: 47%;

		.photo__block {
			height: 160px;
			img {
				width: 45%;
			}
		}
		p {
			/* height: auto; */
			height: 67px;
			font-size: 14px;
		}
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;

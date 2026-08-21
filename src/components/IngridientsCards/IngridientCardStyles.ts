import styled from "styled-components";

export const IngridientCardStyles = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	font-weight: 600;
	letter-spacing: 0.5px;
	font-size: 18px;

	div {
		width: fit-content;
	}
	div:first-child {
		background: #e7ecd9;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		flex-shrink: 0;
		img {
			padding: 20px;
			height: 80px;

		}
	}

	@media (max-width: 600px) {
		font-size: 15px;

		div:first-child {
			width: 60px;
			height: 60px;
			padding: 12px;
			img {
				height: 60px;
				padding: 12px;
			}
		}
	}
`;

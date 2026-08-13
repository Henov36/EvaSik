import styled from "styled-components";

export const ProdSectionStyles = styled.section`
	background-color: transparent;
	padding: 100px 0px 150px 0px;
	.cards__container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		width: 100%;
	}
	@media (max-width: 900px) {
		padding: 50px 0px 20px 0px;
	}
`;

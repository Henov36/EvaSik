import styled from "styled-components";

export const FruitLayer = styled.div`
	position: fixed;
	inset: 0;
	z-index: 20;
	overflow: hidden;
	pointer-events: none;
	@media (max-width: 700px) {
	}
`;

export const FruitItem = styled.img`
	position: absolute;
	height: auto;
	filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.25));
	opacity: 0.92;
	will-change: transform;
	pointer-events: none;
`;

import styled from "styled-components";

interface BackgroundLayerProps {
	$bg?: string; // Используем $, чтобы проп не улетал в HTML-тег
}

export const ScrollWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
`;
export const SellProductSectionStyle = styled.section<BackgroundLayerProps>`
	position: relative; /* Меняем с absolute на relative, чтобы быть базой */
	width: 100%;
	height: 100vh; /* Фиксируем высоту пина ровно на экран */
	background: ${(props) => props.$bg || "var(--blue-bg)"};
	transition: background 0.3s ease; /* Анимируем только фон, all может тормозить при GSAP */
	overflow: hidden; /* Оставляем для скрытия вылетающего контента */
	z-index: 1;
	h1 {
		font-size: 70px;
		font-family: "Cormorant", serif;
		font-optical-sizing: auto;
		font-weight: 800;
		font-style: normal;
	}

	/* На мобільному/планшеті GSAP не піне цю секцію (див. SellProductSection.tsx) —
	   тож висота й overflow мають відпустити контент у звичайний потік, інакше
	   все, що не влізло в 100vh, було б обрізано і недоступне для перегляду. */
	@media (max-width: 900px) {
		height: auto;
		overflow: visible;
	}

	@media (max-width: 900px) {
		h1 {
			font-size: 40px;
		}
	}
`;



export const ProductWRAPPER = styled.div`
	position: relative;
	width: 100%;
	padding-top: 5vh;

	.cards-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		transition: all 0.3s ease;
		height: 80vh;
		margin: 50px 0px;
		gap: 30px;
	}

	@media (max-width: 900px) {
		padding-top: 24px;

		.cards-container {
			height: auto;
			margin: 24px 0;
			gap: 20px;
		}
	}
`;

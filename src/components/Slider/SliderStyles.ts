import styled from "styled-components";

export const SliderRoot = styled.div`
	position: relative;
`;

export const SliderControls = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	margin-bottom: 18px;
`;

export const SliderViewport = styled.div`
	display: flex;
	gap: 20px;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-padding-left: 4px;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;
	-ms-overflow-style: none;
	/* Внутренние отступы, чтобы тень/поднятие карточки при hover и
	   скролл-снап не обрезались краем контейнера. */
	padding: 8px 4px 26px;
	margin: -8px -4px -26px;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 560px) {
		gap: 14px;
		padding: 6px 2px 20px;
		margin: -6px -2px -20px;
	}
`;

export const SliderItem = styled.div<{
	$desktop?: string;
	$tablet?: string;
	$mobile?: string;
}>`
	flex: 0 0 ${(p) => p.$desktop ?? "20%"};
	min-width: 0;
	scroll-snap-align: start;

	@media (max-width: 900px) {
		flex-basis: ${(p) => p.$tablet ?? "48%"};
	}

	@media (max-width: 560px) {
		/* На мобильном — ровно один элемент на экран. */
		flex-basis: ${(p) => p.$mobile ?? "100%"};
	}
`;

export const SliderArrow = styled.button`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 1px solid rgba(0, 0, 0, 0.15);
	background: var(--main-color, #fff);
	cursor: pointer;
	font-size: 17px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	transition: opacity 0.2s ease, background 0.2s ease;

	@media (hover: hover) {
		&:hover {
			background: rgba(0, 0, 0, 0.06);
		}
	}

	&:disabled {
		opacity: 0.35;
		cursor: default;
	}
`;

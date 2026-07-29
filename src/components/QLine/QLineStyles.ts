import styled from "styled-components";

interface QLineSectionProps {
	$background?: string;
	$isActive: boolean;
}

export const QLineSection = styled.section<QLineSectionProps>`
	position: relative;
	background: ${(props) =>
		props.$background ??
		"linear-gradient(180deg, rgba(147, 230, 214, 0) 27%, rgba(219, 207, 195, 1) 73%)"};
	margin-top: 0px;
	padding: 100px 0px 100px 0px;
	isolation: isolate;

	/* слой поверх исходного фона — анимируем только его opacity */
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background: #d6e2b3;
		opacity: ${(props) => (props.$isActive ? 1 : 0)};
		transition: opacity 0.35s ease;
		pointer-events: none;
		z-index: 0;
	}

	> * {
		position: relative;
		z-index: 1;
	}
`;

export const QLineStyles = styled.div`
	padding: 100px 0px;
	margin-top: -100px;
	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		div {
			background: #e7ecd9;
			filter: drop-shadow(0px 0px 8px #d3ab74);
			width: 150px;
			height: 150px;
			border-radius: 100%;
			padding: 20px;
			img {
				padding: 20px;
				/* width: 150px; */
				height: 120px;
			}
		}
		p {
			margin-top: 20px;
			font-size: 24px;
			text-align: center;
		}
	}

	@media (max-width: 900px) {
		padding: 60px 0px;
		margin-top: -60px;

		ul {
			flex-wrap: wrap;
			row-gap: 32px;
		}

		li {
			width: 45%;
			div {
				width: 100px;
				height: 100px;
				padding: 14px;
				img {
					height: 80px;
					padding: 14px;
				}
			}
			p {
				font-size: 16px;
			}
		}
	}
`;

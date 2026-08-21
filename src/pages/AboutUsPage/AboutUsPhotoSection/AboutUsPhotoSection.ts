import styled from "styled-components";

interface AboutUsProps {
	$isReverse: boolean;
	$isPaddingBot?: boolean;
}

export const AboutUsSectionStyles = styled.section<AboutUsProps>`
	padding: 0px;
	background-color: ${(props) => (props.$isReverse ? "#EEE2CF" : "#EEE2CF")};
`;

export const AboutUsContainer = styled.div<AboutUsProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${(props) => (props.$isReverse ? "row-reverse" : "row")};
	padding-bottom: ${(props) => (props.$isPaddingBot ? "200px" : "0px")};

	.logo__block,
	.info__block {
		width: 50%;
		overflow: hidden;
	}
	.logo__block {
		img {
			width: 100%;
			height: 100%;
		}
	}
	.info__block {
		img {
			width: fit-content;
			margin: 0px 20px;
		}
	}
	img {
		width: 100%;
		height: 100%;
		transform: scale(1.1);
	}

	.info__block {
		position: relative;
		z-index: 300;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: ${(props) =>
			props.$isReverse ? "0px 20px 0px 00px" : "0px 0px 0px 20px"};
		h3 {
			font-family: "Cormorant", sans-serif;
			font-weight: 600;
			font-size: 70px;
			margin-bottom: 20px;
		}
		p {
			font-size: 20px;
			position: relative;
			z-index: 100;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 20px;
		padding: 30px 0;

		.logo__block,
		.info__block {
			width: 100%;
		}
		.info__block {
			padding: 0;
			h3 {
				font-size: 34px;
				margin-bottom: 12px;
			}
			p {
				font-size: 16px;
			}
		}
	}
`;

export const WarrioHelpSection = styled.div`
	position: relative;
	z-index: 100;
	padding-top: 100px;
	div {
		margin: 20px 0px;
		width: 100%;
		h1 {
			text-align: center;
			width: 100%;
		}
	}
`;

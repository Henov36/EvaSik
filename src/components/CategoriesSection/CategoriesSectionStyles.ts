import styled from "styled-components";

export const CategoriesSectiomStyle = styled.section`
	transition: all 0.3s ease;
	padding: 100px 0px 100px 0px !important;

	.section-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 20px;
		margin-bottom: 30px;
		position: relative;
		z-index: 300;

		.eyebrow {
			font-size: 13px;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			opacity: 0.6;
			margin-bottom: 10px;
		}

		h2 {
			font-size: 34px;
			font-family: "Cormorant", serif;
		}

		.view-all {
			font-size: 14px;
			font-weight: 600;
			text-decoration: underline;
			white-space: nowrap;
		}
	}

	padding-bottom: 100px;

	@media (max-width: 900px) {
		.section-top {
			flex-direction: column;
			align-items: flex-start;
		}
		padding-bottom: 60px;
	}
`;

export const SliderCard = styled.div`
	height: 100%;
	background: var(--main-color);
	border-radius: 18px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
	transition: transform 0.25s ease;

	.tag {
		align-self: flex-start;
		font-size: 11px;
		font-weight: 600;
		padding: 4px 10px;
		border-radius: 20px;
		background: var(--blue-bg);
		color: var(--accent-color);
		margin-bottom: 10px;
	}

	.img-wrap {
		height: 170px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-height: 100%;
			max-width: 100%;
			object-fit: contain;
		}
	}

	h3 {
		font-size: 15px;
		margin-top: 10px;
	}

	.size {
		font-size: 12px;
		opacity: 0.6;
		margin-top: 4px;
		margin-bottom: 14px;
	}

	.details-btn {
		margin-top: auto;
		text-align: center;
		padding: 10px;
		border-radius: 40px;
		border: 2px solid var(--accent-color);
		color: var(--accent-color);
		font-size: 13px;
		font-weight: 600;
		transition: all 0.2s ease;
		position: relative;
		z-index: 300;

		@media (hover: hover) {
			&:hover {
				background: var(--accent-color);
				color: var(--main-color);
			}
		}
	}

	@media (hover: hover) {
		&:hover {
			transform: translateY(-6px);
		}
	}
`;

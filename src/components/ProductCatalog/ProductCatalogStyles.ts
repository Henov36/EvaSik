import styled from "styled-components";

export const CatalogWrap = styled.div`
	padding: 0;
`;

export const FilterRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding-bottom: 50px;
`;

interface PillProps {
	$active: boolean;
}

export const FilterPill = styled.button<PillProps>`
	cursor: pointer;
	padding: 10px 20px;
	border-radius: 40px;
	border: 2px solid var(--accent-color);
	background: ${(props) => (props.$active ? "var(--accent-color)" : "transparent")};
	color: ${(props) => (props.$active ? "var(--main-color)" : "inherit")};
	font-size: 14px;
	font-weight: 600;
	transition: all 0.2s ease;

	@media (hover: hover) {
		&:hover {
			background: ${(props) =>
				props.$active ? "var(--accent-color)" : "rgba(0, 0, 0, 0.08)"};
		}
	}

	@media (max-width: 600px) {
		padding: 8px 14px;
		font-size: 13px;
	}
`;

export const ToolBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;
	padding-bottom: 30px;
	border-bottom: 2px solid var(--accent-color);
	margin-bottom: 30px;

	.count {
		font-size: 14px;
		opacity: 0.7;
	}

	select {
		border: 2px solid var(--accent-color);
		border-radius: 40px;
		padding: 8px 16px;
		background: var(--main-color);
		cursor: pointer;
		font-size: 14px;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 20px;
	padding-bottom: 40px;

	@media (max-width: 1100px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 12px;
	}
	@media (max-width: 420px) {
		grid-template-columns: 1fr;
	}
`;

export const Card = styled.div`
	position: relative;
	background: transparent;
	border: 2px solid var(--accent-color);
	border-radius: 18px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	transition: transform 0.25s ease, box-shadow 0.25s ease;

	a {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.img-wrap {
		height: 180px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-height: 100%;
			max-width: 100%;
			object-fit: contain;
		}
	}

	.tag {
		align-self: flex-start;
		font-size: 12px;
		font-weight: 600;
		padding: 4px 10px;
		border-radius: 20px;
		border: 1px solid var(--accent-color);
		margin-bottom: 10px;
	}

	h3 {
		font-size: 16px;
		margin-top: 12px;
		flex: 1;
	}

	.size {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
		opacity: 0.7;
		margin-top: 10px;
	}

	.details-btn {
		margin-top: 14px;
		text-align: center;
		padding: 10px;
		border-radius: 40px;
		border: 2px solid var(--accent-color);
		color: var(--accent-color);
		font-size: 13px;
		font-weight: 600;
		transition: all 0.2s ease;

		@media (hover: hover) {
			&:hover {
				background: var(--accent-color);
				color: var(--main-color);
			}
		}
	}

	@media (hover: hover) {
		&:hover {
			transform: translate(-4px, -4px);
			box-shadow: 4px 4px 0px var(--accent-color);
		}
	}

	@media (max-width: 700px) {
		padding: 12px;
		.img-wrap {
			height: 130px;
		}
		h3 {
			font-size: 14px;
		}
	}
`;

export const EmptyState = styled.div`
	padding: 60px 0px;
	text-align: center;
	font-size: 18px;
	opacity: 0.7;
`;

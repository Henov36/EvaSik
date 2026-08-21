import styled from "styled-components";

export const ContactsSection = styled.section`
	background-color: var(--blue-bg);
	min-height: 70vh;
	padding-top: 150px;
`;

export const ContactsIntro = styled.p`
	max-width: 720px;
	margin: 0 auto 60px auto;
	text-align: center;
	font-size: 24px;
	font-weight: 600;
	line-height: 1.6;
	color: #2b2b2b;

	@media (max-width: 900px) {
		font-size: 16px;
		margin-bottom: 40px;
	}
`;

export const ContactsGrid = styled.div`
	display: flex;
	align-items: stretch;
	gap: 40px;
	padding-bottom: 100px;

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 30px;
		padding-bottom: 60px;
	}
`;

export const ContactsInfoCard = styled.div`
	width: 40%;
	flex-shrink: 0;
	background: var(--main-color);
	border-radius: 24px;
	padding: 48px 40px;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media (max-width: 900px) {
		width: 100%;
		padding: 32px 24px;
		gap: 24px;
	}
`;

export const ContactsRow = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 16px;

	svg {
		width: 26px;
		height: 26px;
		flex-shrink: 0;
		stroke: var(--accent-color);
		margin-top: 4px;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	span {
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		opacity: 0.6;
	}

	a {
		font-size: 20px;
		font-weight: 600;
		color: var(--accent-color);
		transition: opacity 0.2s ease;

		@media (hover: hover) {
			&:hover {
				opacity: 0.7;
			}
		}
	}
`;

export const ContactsMapWrap = styled.div`
	flex: 1;
	min-height: 480px;
	border-radius: 24px;
	overflow: hidden;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);

	iframe {
		width: 100%;
		height: 100%;
		min-height: 480px;
		border: 0;
		display: block;
	}

	@media (max-width: 900px) {
		min-height: 320px;

		iframe {
			min-height: 320px;
		}
	}
`;

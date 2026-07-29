import styled from "styled-components";

export const CartTriggerButton = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: none;
	background: rgba(255, 255, 255, 0.25);
	cursor: pointer;
	transition: background 0.2s ease, transform 0.2s ease;

	svg {
		width: 22px;
		height: 22px;
		stroke: #fff;
	}

	&:hover {
		background: rgba(255, 255, 255, 0.45);
		transform: translateY(-2px);
	}
`;

export const CartBadge = styled.span`
	position: absolute;
	top: -2px;
	right: -2px;
	min-width: 18px;
	height: 18px;
	padding: 0 4px;
	border-radius: 999px;
	background: #d9534f;
	color: #fff;
	font-size: 11px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
`;

export const CartTitle = styled.h2`
	font-size: 26px;
	margin-bottom: 24px;
	font-family: "Cormorant", serif;
	color: #204a1f;
`;

export const CartEmptyState = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
	padding: 60px 0;
	text-align: center;
	color: #6b7a63;

	svg {
		width: 56px;
		height: 56px;
		opacity: 0.5;
	}
`;

export const CartList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

export const CartRow = styled.li`
	display: grid;
	grid-template-columns: 64px 1fr auto;
	align-items: center;
	gap: 14px;
	padding-bottom: 18px;
	border-bottom: 1px solid rgba(98, 120, 23, 0.15);

	img {
		width: 64px;
		height: 64px;
		object-fit: contain;
		border-radius: 12px;
		background: #f1ecdf;
	}
`;

export const CartRowInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	min-width: 0;

	h4 {
		font-size: 15px;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const QtyControl = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	button {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 1px solid rgba(98, 120, 23, 0.35);
		background: transparent;
		cursor: pointer;
		font-size: 14px;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.15s ease;

		&:hover {
			background: rgba(98, 120, 23, 0.12);
		}
	}

	span {
		min-width: 18px;
		text-align: center;
		font-weight: 600;
	}
`;

export const RemoveButton = styled.button`
	justify-self: end;
	border: none;
	background: transparent;
	color: #a7433f;
	font-size: 13px;
	cursor: pointer;
	text-decoration: underline;
	text-underline-offset: 3px;
	white-space: nowrap;

	&:hover {
		color: #7c2f2c;
	}
`;

export const CartFooter = styled.div`
	margin-top: 28px;
	padding-top: 20px;
	border-top: 1px solid rgba(98, 120, 23, 0.2);
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export const CartTotalRow = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	color: #4a5a41;

	strong {
		color: #204a1f;
	}
`;

export const PrimaryButton = styled.button`
	width: 100%;
	padding: 14px 20px;
	border: none;
	border-radius: 999px;
	background: #004B1B;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	transition: background 0.2s ease, transform 0.15s ease;

	&:hover {
		background: #4f6112;
		transform: translateY(-1px);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}
`;

export const SecondaryButton = styled.button`
	width: 100%;
	padding: 12px 20px;
	border: 1px solid rgba(98, 120, 23, 0.4);
	border-radius: 999px;
	background: transparent;
	color: #4f6112;
	font-size: 14px;
	cursor: pointer;
	transition: background 0.2s ease;

	&:hover {
		background: rgba(98, 120, 23, 0.08);
	}
`;

export const FormField = styled.label`
	display: flex;
	flex-direction: column;
	gap: 6px;
	font-size: 13px;
	color: #4a5a41;
	margin-bottom: 16px;

	input,
	textarea {
		border: 1px solid rgba(98, 120, 23, 0.3);
		border-radius: 12px;
		padding: 12px 14px;
		font-size: 15px;
		color: #1c2b16;
		background: #fff;
		resize: vertical;

		&:focus {
			outline: none;
			border-color: #004B1B;
		}
	}
`;

export const ErrorText = styled.p`
	color: #a83232;
	font-size: 13px;
	margin-top: 10px;
`;

export const SuccessState = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 14px;
	padding: 40px 0;

	svg {
		width: 56px;
		height: 56px;
		color: #004B1B;
	}

	h3 {
		font-size: 22px;
		color: #204a1f;
	}

	p {
		color: #4a5a41;
		font-size: 14px;
	}
`;

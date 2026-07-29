import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 16px;

	@media (max-width: 600px) {
		padding: 0 12px;
	}
`;

interface FlexProps {
	$justify?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between",
	$align?:  "center" | "flex-start" | "flex-end";
	$direction?: "row" | "column";
	$gap?: string;
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${({ $direction }) => $direction || "row"};
	justify-content: ${({ $justify }) => $justify || "flex-start"};
	align-items: ${({ $align }) => $align || "center"};
	gap: ${({ $gap }) => $gap || "0"};
`;

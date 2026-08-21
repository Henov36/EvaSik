import UnderTitleSvg from "../../assets/img/underTitlePlants.svg";
import { TitleSpanStyle } from "./TitleSpanStyles";

interface TitleSpanInt {
	title: string;
}

export const TitleSpan = ({ title}: TitleSpanInt) => {
	return (
		<TitleSpanStyle>
			<h1>{title}</h1>
			<div className="under-title">
				<span></span>
				<img src={UnderTitleSvg} alt="Under Title" />
				<span></span>
			</div>
		</TitleSpanStyle>
	);
};

import { ProductionStepStyles } from "./ProductionStepStyles";
import greenPlant from "../../assets/img/ProductioSteps/greemplant.svg";

interface ProdStepInt {
	img: string;
	text: string;
	title: string;
}

export const ProductionStep = ({ img, text, title }: ProdStepInt) => {
	return (
		<ProductionStepStyles>
			<div className="photo__block">
				<img src={img} alt="" />
			</div>
			<div className="content__block">
				<h4>{title}</h4>
				<div>
					<span></span>
					<img src={greenPlant} alt="" />
					<span></span>
				</div>
				<p>{text}</p>
			</div>
		</ProductionStepStyles>
	);
};

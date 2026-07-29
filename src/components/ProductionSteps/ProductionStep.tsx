import { ProductionStepStyles } from "./ProductionStepStyles";
import greenPlant from "../../assets/img/ProductioSteps/greemplant.svg";

interface ProdStepInt {
	img: string;
	text: string;
}

export const ProductionStep = ({ img, text }: ProdStepInt) => {
	return (
		<ProductionStepStyles>
			<div className="photo__block">
				<img src={img} alt="" />
			</div>
			<div className="content__block">
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

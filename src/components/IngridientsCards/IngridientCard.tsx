import { IngridientCardStyles } from "./IngridientCardStyles";


interface IngridientCardInt {
	img: string;
	text: string;
}

export const IngridientCard = ({ img, text }: IngridientCardInt) => {
	return (
		<IngridientCardStyles>
			<div>
				<img src={img} alt="" />
			</div>
			<div>
				{text}
			</div>
		</IngridientCardStyles>
	);
};

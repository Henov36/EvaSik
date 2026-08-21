import JuicyAppleGrapes from "../assets/img/products/JuiceInGlass/appleGrapes.webp";
import JuicyGranad from "../assets/img/products/JuiceInGlass/granat.webp";
import JuicyBerryMix from "../assets/img/products/JuiceInGlass/berrymix.webp";
import JuicyCherry from "../assets/img/products/JuiceInGlass/cherry.webp";
import JuicyAppleDushes from "../assets/img/products/JuiceInGlass/appleDushes.webp";
import JuicyAppleStrawberry from "../assets/img/products/JuiceInGlass/strawberry.webp";
import BoxJuiceApple from "../assets/img/products/JuiceINBox/Apple.webp";
import BoxJuiceAppleGrapes from "../assets/img/products/JuiceINBox/AppleGrapes.webp";
import BoxJuiceCherry from "../assets/img/products/JuiceINBox/Cherry.webp";
import BoxJuiceAppleMango from "../assets/img/products/JuiceINBox/Mango.webp";
import BoxJuiceTomat from "../assets/img/products/JuiceINBox/Tomat.webp";
import BoxJuiceOrange from "../assets/img/products/JuiceINBox/Orange.webp";
import BoxJuiceMulty from "../assets/img/products/JuiceINBox/multyfruct.webp";
import TeaCherry from "../assets/img/products/Tea/cherry.webp";
import TeaGranat from "../assets/img/products/Tea/granat.webp";
import TeaChornika from "../assets/img/products/Tea/chornika.webp";
import TeaSmorodinaChernika from "../assets/img/products/Tea/smorodina.webp";
import TeaJuravlina from "../assets/img/products/Tea/juravlina.webp";
import TeaMalina from "../assets/img/products/Tea/malina.webp";
import TeaOblipiha from "../assets/img/products/Tea/oblipiha.webp";
import TeaOjina from "../assets/img/products/Tea/ojina.webp";
import TeaStrawberry from "../assets/img/products/Tea/strawberry.webp";
import TeaSmorodina from "../assets/img/products/Tea/smorodina.webp";
import TeaBerry from "../assets/img/products/Tea/berry.webp";
import TeaKizil from "../assets/img/products/Tea/kizil.webp";
import JuiceGlassCat from "../assets/img/products/Category/Glass.webp";
import JuiceBoxCat from "../assets/img/products/Category/BOX.webp";
import TeaCat from "../assets/img/products/Category/Tea.webp";

export type ProductCategory = "glass" | "box" | "tea";

export interface CompositionItem {
	name: string;
	percent: string;
}

export interface Product {
	id: number;
	title: string;
	img: string;
	link: string;
	color: string;
	category: ProductCategory;
	slug: string;
	description: string;
	composition: CompositionItem[];
	titleEn: string;
	descriptionEn: string;
	compositionEn: CompositionItem[];
	price: number;
	sticks?: string;
}

export const PRODUCTS__GLASS: Product[] = [
	{
		id: 0,
		price: 125,
		title: "Яблучно-виноградний",
		img: JuicyAppleGrapes,
		link: "/products/glass/appleGrapes",
		color: "#d6e2b3",
		category: "glass",
		slug: "appleGrapes",
		description:
			"Натуральне поєднання солодкого винограду та соковитих яблук. Має м’який, гармонійний смак і приємний фруктовий аромат. Чудово освіжає та смакує як дорослим, так і дітям.",
		composition: [
			{ name: "Яблучний сік", percent: "50%" },
			{ name: "Виноградний сік", percent: "50%" },
		],
		titleEn: "Apple & Grape",
		descriptionEn:
			"A natural blend of sweet grapes and juicy apples. It has a smooth, well-balanced flavor and a pleasant fruity aroma. It’s wonderfully refreshing and appeals to both adults and children.",
		compositionEn: [
			{ name: "Apple juice", percent: "50%" },
			{ name: "Grape juice", percent: "50%" },
		],
	},
	{
		id: 1,
		price: 148,
		title: "Гранатовий",
		img: JuicyGranad,
		link: "/products/glass/granat",
		color: "#d6e2b3",
		category: "glass",
		slug: "granat",
		description:
			"Насичений гранатовий сік із виразним кисло-солодким смаком і приємною терпкістю. Виготовлений із добірних плодів, він чудово освіжає та гармонійно доповнює щоденний раціон. Смакує охолодженим і чудово підходить до сніданку, обіду або святкового столу.",
		composition: [
			{
				name: "Сік гранатовий відновлений з концентрованого соку",
				percent: "100%",
			},
		],
		titleEn: "Pomegranate",
		descriptionEn:
			"A rich pomegranate juice with a distinct sweet-and-sour flavor and a pleasant tartness. Made from carefully selected fruits, it’s wonderfully refreshing and harmoniously complements your daily diet. Best served chilled, it’s perfect for breakfast, lunch, or a festive meal.",
		compositionEn: [
			{
				name: "Pomegranate juice reconstituted from concentrated juice",
				percent: "100%",
			},
		],
	},
	{
		id: 2,
		price: 145,
		title: "Ягідний мікс",
		img: JuicyBerryMix,
		link: "/products/glass/berryMix",
		color: "#d6e2b3",
		category: "glass",
		slug: "berryMix",
		description:
			"Насичене поєднання добірних ягід із яскравим кисло-солодким смаком і приємним ароматом. Чудово освіжає та дарує справжнє ягідне задоволення в кожному ковтку.",
		composition: [
			{
				name: "Сік ожиновий  відновлений з концентрованого соку ",
				percent: "25%",
			},
			{
				name: "Сік чорничний  відновлений з концентрованого соку ",
				percent: "25%",
			},
			{
				name: "Сік полуничний  відновлений з концентрованого соку ",
				percent: "25%",
			},
			{
				name: "Сік брусничний  відновлений з концентрованого соку ",
				percent: "20%",
			},
			{
				name: "Сік яблучний",
				percent: "5%",
			},
		],
		titleEn: "Berry Mix",
		descriptionEn:
			"A rich blend of hand-picked berries with a vibrant sweet-and-sour flavor and a pleasant aroma. It’s wonderfully refreshing and offers a true berry delight with every sip.",
		compositionEn: [
			{
				name: "Blackberry juice  reconstituted from concentrated juice",
				percent: "25%",
			},
			{
				name: "Blueberry juice  reconstituted from concentrated juice",
				percent: "25%",
			},
			{
				name: "Strawberry juice  reconstituted from concentrated juice",
				percent: "25%",
			},
			{
				name: "Lingonberry juice  reconstituted from concentrated juice",
				percent: "20%",
			},
			{
				name: "Apple juice",
				percent: "5%",
			},
		],
	},
	{
		id: 3,
		price: 142,
		title: "Вишневий",
		img: JuicyCherry,
		link: "/products/glass/cherry",
		color: "#d6e2b3",
		category: "glass",
		slug: "cherry",
		description:
			"Насичений вишневий сік із яскравим кисло-солодким смаком і приємним ароматом стиглих ягід. Чудово освіжає, смакує охолодженим і гармонійно доповнює щоденний раціон.",
		composition: [
			{
				name: "Cік вишневий відновлений з концентрованого соку ",
				percent: "100%",
			},
		],
		titleEn: "Cherry",
		descriptionEn:
			"A rich cherry juice with a vibrant sweet-and-sour flavor and the pleasant aroma of ripe berries. It’s wonderfully refreshing, best enjoyed chilled, and harmoniously complements your daily diet.",
		compositionEn: [
			{
				name: "Cherry juice reconstituted from concentrated juice",
				percent: "100%",
			},
		],
	},
	{
		id: 4,
		price: 129,
		title: "Яблучно-грушевий",
		img: JuicyAppleDushes,
		link: "/products/glass/appleDushes",
		color: "#d6e2b3",
		category: "glass",
		slug: "appleDushes",
		description:
			"Ніжне поєднання соковитих яблук і стиглих груш. Має м’який, солодкий смак і приємний фруктовий аромат. Чудово освіжає та смакує як дорослим, так і дітям.",
		composition: [
			{
				name: "Cік яблучний  відновлений з концентрованого соку",
				percent: "50%",
			},
			{
				name: "Cік  грушевий відновлений з концентрованого соку",
				percent: "50%",
			},
		],
		titleEn: "Apple & Pear",
		descriptionEn:
			"A delicate blend of juicy apples and ripe pears. It has a mild, sweet taste and a pleasant fruity aroma. It’s wonderfully refreshing and appeals to both adults and children.",
		compositionEn: [
			{
				name: "Apple juice reconstituted from juice concentrate",
				percent: "50%",
			},
			{
				name: "Pear juice reconstituted from juice concentrate",
				percent: "50%",
			},
		],
	},
	{
		id: 5,
		price: 133,
		title: "Яблучно-полуничний",
		img: JuicyAppleStrawberry,
		link: "/products/glass/appleStrawberry",
		color: "#d6e2b3",
		category: "glass",
		slug: "appleStrawberry",
		description:
			"Ніжне поєднання соковитих яблук і стиглої полуниці. Має приємний солодкий смак, яскравий ягідний аромат і чудово смакує як дорослим, так і дітям.",
		composition: [
			{
				name: "Сік яблучний  відновлений з концентрованого соку  ",
				percent: "50%",
			},
			{
				name: "Сік  полуничний відновлений з концентрованого соку ",
				percent: "50%",
			},
		],
		titleEn: "Apple & Strawberry",
		descriptionEn:
			"A delicate blend of juicy apples and ripe strawberries. It has a pleasant sweet taste, a vibrant berry aroma, and is a favorite among both adults and children.",
		compositionEn: [
			{
				name: "Apple juice reconstituted from concentrated juice",
				percent: "50%",
			},
			{
				name: "Strawberry juice reconstituted from concentrated juice",
				percent: "501%",
			},
		],
	},
];

export const PRODUCTS__BOX: Product[] = [
	{
		id: 6,
		price: 160,
		title: "Яблучний(з м’якоттю)",
		img: BoxJuiceApple,
		link: "/products/box/apple",
		color: "#d6e2b3",
		category: "box",
		slug: "apple",
		description:
			"Соковитий яблучний смак із ніжною м’якоттю, приємною солодкістю та свіжим фруктовим ароматом. Смачний напій для всієї родини.",
		composition: [
			{ name: "Cік яблучний", percent: "60%" },
			{ name: "Пюре яблучне", percent: "40%" },
		],
		titleEn: "Apple (with pulp)",
		descriptionEn:
			"A juicy apple flavor with a tender texture, pleasant sweetness, and a fresh fruity aroma. A delicious drink for the whole family.",
		compositionEn: [
			{ name: "Apple juice", percent: "60%" },
			{ name: "Apple puree", percent: "40%" },
		],
	},
	{
		id: 7,
		price: 225,
		title: "Мультифруктовий(з м’якоттю)",
		img: BoxJuiceMulty,
		link: "/products/box/multyfruct",
		color: "#d6e2b3",
		category: "box",
		slug: "multyfruct",
		description:
			"Соковитий мультифруктовий смак із ніжною м’якоттю, тропічним ароматом і приємною солодкістю. Яскраве поєднання фруктів для всієї родини.",
		composition: [
			{
				name: "Апельсиновий сік, бананове пюре, ананасовий сік, сік маракуйї, лимонний сік",
				percent: "83%",
			},
			{ name: "Яблучний сік", percent: "17%" },
		],
		titleEn: "Multifruit (with pulp)",
		descriptionEn:
			"A juicy, multi-fruit flavor with tender pulp, a tropical aroma, and a pleasant sweetness. A vibrant blend of fruits for the whole family.",
		compositionEn: [
			{
				name: "Orange juice, mashed banana, pineapple juice, passion fruit juice, lemon juice",
				percent: "83%",
			},
			{ name: "Apple juice", percent: "17%" },
		],
	},
	{
		id: 8,
		price: 195,
		title: "Вишнево-смородиновий",
		img: BoxJuiceCherry,
		link: "/products/box/cherry",
		color: "#d6e2b3",
		category: "box",
		slug: "cherry",
		description:
			"Насичений вишнево-смородиновий смак із приємною кислинкою, яскравим ягідним ароматом і глибоким кольором. Гармонійне поєднання соковитої вишні та чорної смородини.",
		composition: [
			{ name: "Вишневий сік", percent: "70%" },
			{ name: "Чорно-смородиновий сік", percent: "30%" },
		],
		titleEn: "Cherry & Black Currant",
		descriptionEn:
			"A rich cherry-currant flavor with a pleasant tartness, a vibrant berry aroma, and a deep color. A harmonious blend of juicy cherries and black currants.",
		compositionEn: [
			{ name: "Cherry juice", percent: "70%" },
			{ name: "Black currant juice", percent: "30%" },
		],
	},
	{
		id: 9,
		price: 225,
		title: "Апельсиновий(з м’якоттю)",
		img: BoxJuiceOrange,
		link: "/products/box/orange",
		color: "#d6e2b3",
		category: "box",
		slug: "orange",
		description:
			"Соковитий апельсиновий смак із ніжною м’якоттю, приємною кислинкою та яскравим цитрусовим ароматом. Смачний і освіжаючий напій для всієї родини.",
		composition: [{ name: "Апельсиновий сік з м'якоттю", percent: "100%" }],
		titleEn: "Orange (with pulp)",
		descriptionEn:
			"A juicy orange flavor with tender pulp, a pleasant tartness, and a vibrant citrus aroma. A delicious and refreshing drink for the whole family.",
		compositionEn: [{ name: "Orange juice with pulp", percent: "100%" }],
	},
	{
		id: 10,
		price: 180,
		title: "Виноградно-Яблучний",
		img: BoxJuiceAppleGrapes,
		link: "/products/box/appleGrapes",
		color: "#d6e2b3",
		category: "box",
		slug: "appleGrapes",
		description:
			"Насичений виноградно-яблучний смак із приємною солодкістю, легкою свіжістю та ніжним фруктовим ароматом. Гармонійне поєднання соковитого винограду й стиглих яблук.",
		composition: [
			{ name: "Яблучний сік", percent: "50%" },
			{ name: "Виноградний сік", percent: "50%" },
		],
		titleEn: "Grape & Apple",
		descriptionEn:
			"A rich grape-and-apple flavor with a pleasant sweetness, a light freshness, and a delicate fruity aroma. A harmonious blend of juicy grapes and ripe apples.",
		compositionEn: [
			{ name: "Apple juice", percent: "50%" },
			{ name: "Grape juice", percent: "50%" },
		],
	},
	{
		id: 11,
		price: 235,
		title: "Мангово-персиковий(з м’якоттю)",
		img: BoxJuiceAppleMango,
		link: "/products/box/mango",
		color: "#d6e2b3",
		category: "box",
		slug: "mango",
		description:
			"Ніжний мангово-персиковий смак із м’якоттю, приємною солодкістю та яскравим тропічним ароматом. Соковите поєднання фруктів для всієї родини",
		composition: [
			{ name: "Персиковий сік", percent: "50%" },
			{ name: "Пюре манго", percent: "50%" },
		],
		titleEn: "Mango & Peach (with pulp)",
		descriptionEn:
			"A delicate mango-peach flavor with a fruity texture, pleasant sweetness, and a vibrant tropical aroma. A juicy blend of fruits for the whole family.",
		compositionEn: [
			{ name: "Peach Juice", percent: "50%" },
			{ name: "Mango Puree", percent: "50%" },
		],
	},
	{
		id: 12,
		price: 240,
		title: "Томатно-моркв’яний(з м’якоттю та сіллю)",
		img: BoxJuiceTomat,
		link: "/products/box/tomat",
		color: "#d6e2b3",
		category: "box",
		slug: "tomat",
		description:
			"Насичений томатно-морквяний смак із ніжною м’якоттю та легкою солоною ноткою. Смачне й поживне поєднання овочів для всієї родини.",
		composition: [
			{ name: "Томатний сік", percent: "50%" },
			{ name: "Морквяне пюре", percent: "49.99%" },
			{ name: "Сіль куханна", percent: "0.01%" },
		],
		titleEn: "Tomato & Carrot (with pulp and salt)",
		descriptionEn:
			"A rich tomato-carrot flavor with tender pulp and a subtle hint of salt. A delicious and nutritious blend of vegetables for the whole family.",
		compositionEn: [
			{ name: "Tomato juice", percent: "50%" },
			{ name: "Carrot puree", percent: "49.99%" },
			{ name: "Table salt", percent: "0.01%" },
		],
	},
];

export const PRODUCTS__TEA: Product[] = [
	{
		id: 13,
		price: 240,
		sticks: "/ 12",
		title: "Вишньовий чай",
		img: TeaCherry,
		link: "/products/tea/cherry",
		color: "#d6e2b3",
		category: "tea",
		slug: "cherry",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком лісових ягід. Має яскравий ягідний аромат, приємну природну кислинку та гармонійний, глибокий смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Вишня свіжа, швидкозаморожена", percent: "40%" },
			{ name: "Сироп вишневий  натуральний", percent: "50%" },
			{ name: "Чайний екстракт", percent: "5%" },
			{ name: "Мед натуральний", percent: "5%" },
		],
		titleEn: "Cherry Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with the rich flavor of wild berries. It has a vibrant berry aroma, a pleasant natural tartness, and a harmonious, deep flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh, flash-frozen cherries", percent: "40%" },
			{ name: "Cherry syrup", percent: "50%" },
			{ name: "Tea extract", percent: "5%" },
			{ name: "Natural honey", percent: "5%" },
		],
	},
	{
		id: 14,
		price: 240,
		sticks: "/ 12",
		title: "Гранатовий чай",
		img: TeaGranat,
		link: "/products/tea/granat",
		color: "#d6e2b3",
		category: "tea",
		slug: "granat",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком граната. Має виразний фруктовий аромат, приємну кислинку та гармонійний, насичений смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Cироп гранатовий натуральний", percent: "95%" },
			{ name: "Чайний екстракт", percent: "5%" },
		],
		titleEn: "Pomegranate Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with a rich pomegranate flavor. It has a distinct fruity aroma, a pleasant tartness, and a harmonious, rich flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Natural Pomegranate Syrup", percent: "95%" },
			{ name: "Tea Extract", percent: "5%" },
		],
	},
	{
		id: 15,
		price: 240,
		sticks: "/ 12",
		title: "Горобина, полуниця",
		img: TeaChornika,
		link: "/products/tea/strawberryChornika",
		color: "#d6e2b3",
		category: "tea",
		slug: "strawberryChornika",
		description:
			"Ароматний фруктово-ягідний концентрований чай із гармонійним поєднанням чорноплідної горобини та стиглої полуниці. Має насичений ягідний аромат, легку терпкість, приємну солодкість і збалансований смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Полуниця свіжа швидкозаморожена", percent: "40%" },
			{ name: "Сироп чорноплідної горобини натуральний", percent: "30%" },
			{ name: "Сироп полуничний натуральний", percent: "25%" },
			{ name: "Чайний екстракт", percent: "5%" },
		],
		titleEn: "Rowanberries, strawberries",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea featuring a harmonious blend of black chokeberry and ripe strawberries. It has a rich berry aroma, a slight tartness, a pleasant sweetness, and a well-balanced flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh Quick-Frozen Strawberries", percent: "40%" },
			{ name: "Natural Black Chokeberry Syrup", percent: "30%" },
			{ name: "Natural Strawberry Syrup", percent: "25%" },
			{ name: "Tea extract", percent: "5%" },
		],
	},
	{
		id: 16,
		price: 240,
		sticks: "/ 12",
		title: "Чорниця смородина",
		img: TeaSmorodinaChernika,
		link: "/products/tea/chornikaSmorodina",
		color: "#d6e2b3",
		category: "tea",
		slug: "chornikaSmorodina",
		description:
			"Ароматний фруктово-ягідний концентрований чай із гармонійним поєднанням чорниці та чорної смородини. Має насичений ягідний аромат, приємну кислинку та збалансований смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Чорниця свіжа, швидкозаморожена ", percent: "20%" },
			{ name: "Смородина чорна  свіжа, швидкозаморожена", percent: "20%" },
			{ name: "Сироп чорничний натуральний", percent: "30%" },
			{ name: "Сироп смородиновий натуральний", percent: "25%" },
			{ name: "Чайний екстракт", percent: "5%" },
		],
		titleEn: "Blueberry & Black Currant",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea featuring a harmonious blend of blueberries and black currants. It has a rich berry aroma, a pleasant tartness, and a well-balanced flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh blueberries, flash-frozen", percent: "20%" },
			{ name: "Fresh black currants, flash-frozen", percent: "20%" },
			{ name: "Natural blueberry syrup", percent: "30%" },
			{ name: "Natural currant syrup", percent: "25%" },
			{ name: "Tea extract", percent: "5%" },
		],
	},
	{
		id: 17,
		price: 240,
		sticks: "/ 12",
		title: "Журавлинний чай",
		img: TeaJuravlina,
		link: "/products/tea/juravlina",
		color: "#d6e2b3",
		category: "tea",
		slug: "juravlina",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком журавлини. Має яскравий ягідний аромат, приємну кислинку та гармонійний смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Журавлина свіжа, швидкозаморожена", percent: "40%" },
			{ name: "Сироп журавлинний натуральний", percent: "50%" },
			{ name: "Чайний екстракт", percent: "5%" },
			{ name: "Мед натуральний", percent: "5%" },
		],
		titleEn: "Cranberry Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with a rich cranberry flavor. It has a vibrant berry aroma, a pleasant tartness, and a well-balanced flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh, Quick-Frozen Cranberries", percent: "40%" },
			{ name: "Natural Cranberry Syrup", percent: "50%" },
			{ name: "Tea Extract", percent: "5%" },
			{ name: "Natural honey", percent: "5%" },
		],
	},
	{
		id: 18,
		price: 240,
		sticks: "/ 12",
		title: "Малиновий чай",
		img: TeaMalina,
		link: "/products/tea/malina",
		color: "#d6e2b3",
		category: "tea",
		slug: "malina",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком стиглої малини. Має ніжний ягідний аромат, приємну солодкість і гармонійний смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Малина свіжа, швидкозаморожена ", percent: "40%" },
			{ name: "Сироп малиновий натуральний", percent: "50%" },
			{ name: "Чайний екстракт", percent: "5%" },
			{ name: "Мед натуральний", percent: "5%" },
		],
		titleEn: "Raspberry Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with the rich flavor of ripe raspberries. It has a delicate berry aroma, a pleasant sweetness, and a well-balanced flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh, flash-frozen raspberries ", percent: "40%" },
			{ name: "Natural raspberry syrup", percent: "50%" },
			{ name: "Tea extract", percent: "5%" },
			{ name: "Natural honey", percent: "5%" },
		],
	},
	{
		id: 19,
		price: 240,
		sticks: "/ 12",
		title: "Обліпиха і груша",
		img: TeaOblipiha,
		link: "/products/tea/oblipiha",
		color: "#d6e2b3",
		category: "tea",
		slug: "oblipiha",
		description:
			"Ароматний фруктово-ягідний концентрований чай з гармонійним поєднанням обліпихи та соковитої груші. Має насичений фруктовий аромат, приємну кислинку та м’який, збалансований смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Обліпиха свіжа, швидкозаморожена", percent: "40%" },
			{ name: "Сироп обліпиховий натуральний", percent: "25%" },
			{ name: "Сироп грушевий натуральний", percent: "30%" },
			{ name: "Чайний екстракт", percent: "5%" },
		],
		titleEn: "Sea Buckthorn & Pear",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea featuring a harmonious blend of sea buckthorn and juicy pear. It has a rich fruity aroma, a pleasant tartness, and a smooth, balanced flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh, flash-frozen sea buckthorn", percent: "40%" },
			{ name: "Natural sea buckthorn syrup", percent: "25%" },
			{ name: "Natural pear syrup", percent: "30%" },
			{ name: "Tea extract", percent: "5%" },
		],
	},
	{
		id: 20,
		price: 240,
		sticks: "/12",
		title: "Ожиновий чай",
		img: TeaOjina,
		link: "/products/tea/ojina",
		color: "#d6e2b3",
		category: "tea",
		slug: "ojina",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком ожини. Має виразний ягідний аромат, приємну кислинку та гармонійний смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Ожина свіжа, швидкозаморожена ", percent: "40%" },
			{ name: "Сироп ожиновий ", percent: "50%" },
			{ name: "Чайний екстракт", percent: "5%" },
			{ name: "Мед натуральний", percent: "5%" },
		],
		titleEn: "Blackberry Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with a rich blackberry flavor. It has a distinct berry aroma, a pleasant tartness, and a well-balanced flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh, flash-frozen blackberries", percent: "40%" },
			{ name: "Natural blackberry syrup", percent: "50%" },
			{ name: "Tea extract", percent: "5%" },
			{ name: "Natural honey", percent: "5%" },
		],
	},
	{
		id: 21,
		price: 240,
		sticks: "/ 12",
		title: "Полуничний чай",
		img: TeaStrawberry,
		link: "/products/tea/strawberry",
		color: "#d6e2b3",
		category: "tea",
		slug: "strawberry",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком стиглої полуниці. Має ніжний ягідний аромат, приємну солодкість і гармонійний смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Полуниця свіжа, швидкозаморожена", percent: "40%" },
			{ name: "Сироп полуничний натуральний", percent: "50%" },
			{ name: "Чайний екстракт", percent: "5%" },
			{ name: "Мед натуральний", percent: "5%" },
		],
		titleEn: "Strawberry Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with the rich flavor of ripe strawberries. It has a delicate berry aroma, a pleasant sweetness, and a well-balanced flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Fresh, flash-frozen strawberries", percent: "40%" },
			{ name: "Natural strawberry syrup", percent: "50%" },
			{ name: "Tea extract", percent: "5%" },
			{ name: "Natural honey", percent: "5%" },
		],
	},
	{
		id: 22,
		price: 240,
		sticks: "/ 12",
		title: "Смородиновий чай",
		img: TeaSmorodina,
		link: "/products/tea/smorodina",
		color: "#d6e2b3",
		category: "tea",
		slug: "smorodina",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком чорної смородини. Має приємний ягідний аромат, легку кислинку та збалансовану солодкість. Швидко готується, чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Смородина чорна свіжа, швидкозаморожена ", percent: "40%" },
			{ name: "Смородиновий натуральний", percent: "50%" },
			{ name: "Чайний екстракт", percent: "5%" },
			{ name: "Мед натуральний", percent: "5%" },
		],
		titleEn: "Black Currant Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with a rich black currant flavor. It has a pleasant berry aroma, a slight tartness, and a balanced sweetness. It brews quickly and tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Black currant fresh, flash-frozen", percent: "40%" },
			{ name: "Natural black currant syrup", percent: "50%" },
			{ name: "Tea extract", percent: "5%" },
			{ name: "Natural honey", percent: "5%" },
		],
	},
	{
		id: 23,
		price: 240,
		sticks: "/ 12",
		title: "Лісова ягода",
		img: TeaBerry,
		link: "/products/tea/berryMix",
		color: "#d6e2b3",
		category: "tea",
		slug: "berryMix",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком лісових ягід. Має яскравий ягідний аромат, приємну природну кислинку та гармонійний, глибокий смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{
				name: "Ожина свіжа, швидкозаморожена",
				percent: "20%",
			},
			{ name: "Чорниця свіжа, швидкозаморожена", percent: "25%" },
			{ name: "Журавлинна свіжа , швидкозаморожена", percent: "25%" },
			{ name: "Полуниця свіжа , швидкозаморожена", percent: "25%" },
			{ name: "Чайний екстракт", percent: "5%" },
		],
		titleEn: "Forest Berry",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with the rich flavor of wild berries. It has a vibrant berry aroma, a pleasant natural tartness, and a harmonious, deep flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{
				name: "Fresh, flash-frozen blackberries",
				percent: "20%",
			},
			{ name: "Fresh, flash-frozen raspberries", percent: "25%" },
			{ name: "Fresh, flash-frozen cranberries", percent: "25%" },
			{ name: "Fresh, flash-frozen strawberries", percent: "25%" },
			{ name: "Tea extract", percent: "5%" },
		],
	},
	{
		id: 24,
		price: 240,
		sticks: "/ 12",
		title: "Кизиловий чай",
		img: TeaKizil,
		link: "/products/tea/kizil",
		color: "#d6e2b3",
		category: "tea",
		slug: "kizil",
		description:
			"Ароматний фруктово-ягідний концентрований чай із насиченим смаком кизилу. Має яскравий ягідний аромат, приємну кислинку та гармонійний, насичений смак. Чудово смакує як гарячим, так і охолодженим.",
		composition: [
			{ name: "Сироп кизиловий натуральний ", percent: "95%" },
			{ name: "Чайний екстракт", percent: "5%" },
		],
		titleEn: "Cornelian Cherry Tea",
		descriptionEn:
			"A fragrant, concentrated fruit-and-berry tea with the rich flavor of cornelian cherry. It has a vibrant berry aroma, a pleasant tartness, and a harmonious, rich flavor. It tastes great both hot and chilled.",
		compositionEn: [
			{ name: "Natural cornelian cherry syrup", percent: "95%" },
			{ name: "Tea extract", percent: "5%" },
		],
	},
];

export const PRODUCTS__CATEGORIES = [
	{
		id: 25,
		key: "glass" as const,
		title: "Cік у скляній пляшці",
		img: JuiceGlassCat,
		link: "/products/glass",
		color: "#E3D2BA",
	},
	{
		id: 26,
		key: "box" as const,
		title: "Сік у сімейному боксі 3л",
		img: JuiceBoxCat,
		link: "/products/box",
		color: "#EEE2CF",
	},
	{
		id: 27,
		key: "tea" as const,
		title: "Чай",
		img: TeaCat,
		link: "/products/tea",
		color: "rgb(203, 174, 188)",
	},
];

export const ALL_PRODUCTS: Product[] = [
	...PRODUCTS__GLASS,
	...PRODUCTS__BOX,
	...PRODUCTS__TEA,
];

export const findProduct = (
	category: string | undefined,
	slug: string | undefined,
): Product | undefined =>
	ALL_PRODUCTS.find((p) => p.category === category && p.slug === slug);

export type FlavorFamily =
	| "apple"
	| "grape"
	| "berry"
	| "multifruit"
	| "vegetable"
	| "herbal"
	| "other";

export const getFlavorFamilies = (product: Product): FlavorFamily[] => {
	const title = product.title.toLowerCase();
	const families = new Set<FlavorFamily>();

	if (title.includes("томат") || title.includes("морк"))
		families.add("vegetable");
	if (title.includes("мульти")) families.add("multifruit");
	if (title.includes("виноград")) families.add("grape");
	if (
		title.includes("імбир") ||
		title.includes("лимон") ||
		title.includes("облепих") ||
		title.includes("обліпих")
	)
		families.add("herbal");
	if (
		title.includes("вишн") ||
		title.includes("гранат") ||
		title.includes("ягід") ||
		title.includes("полуни") ||
		title.includes("малин") ||
		title.includes("чорни") ||
		title.includes("чорнй") ||
		title.includes("смородин") ||
		title.includes("журавл") ||
		title.includes("ожин") ||
		title.includes("кизил")
	)
		families.add("berry");

	if (title.includes("яблучн")) families.add("apple");

	if (families.size === 0) families.add("other");

	return Array.from(families);
};

export const getFlavorFamily = (product: Product): FlavorFamily =>
	getFlavorFamilies(product)[0];

export const getProductsByCategory = (
	category: ProductCategory,
	excludeSlug?: string,
): Product[] =>
	ALL_PRODUCTS.filter((p) => p.category === category && p.slug !== excludeSlug);

export const getProductFormatTag = (product: Product, lang: string): string => {
	const isEn = lang === "en";
	if (product.category === "glass") return isEn ? "100% juice" : "100% сік";
	if (product.category === "box") return isEn ? "With pulp" : "З м'якоттю";
	return isEn ? "Natural tea" : "Натуральний чай";
};

export const getProductSizeLabel = (product: Product, lang: string): string => {
	const isEn = lang === "en";
	if (product.category === "glass") return "1L";
	if (product.category === "box") return "3L";
	return isEn ? "50 g (10 sticks)" : "50 г (10 стіків)";
};

export const getLocalizedProduct = (product: Product, lang: string) => {
	if (lang === "en") {
		return {
			title: product.titleEn,
			description: product.descriptionEn,
			composition: product.compositionEn,
		};
	}
	return {
		title: product.title,
		description: product.description,
		composition: product.composition,
	};
};

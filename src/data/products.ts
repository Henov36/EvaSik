// Единый источник данных о товарах: карточки каталога (title/img/link/color)
// и содержимое страницы товара (description/composition) раньше были разнесены
// по 26 почти идентичным файлам в src/pages/AllProductsPages — теперь всё здесь,
// а сама страница товара рендерится одним общим компонентом ProductDetailPage
// по параметрам роута :category/:slug.

import JuicyAppleGrapes from "../assets/img/products/JuiceInGlass/apple&grapes.webp";
import JuicyGranad from "../assets/img/products/JuiceInGlass/granat.webp";
import JuicyBerryMix from "../assets/img/products/JuiceInGlass/berrymix.webp";
import JuicyCherry from "../assets/img/products/JuiceInGlass/cherry.webp";
import JuicyAppleDushes from "../assets/img/products/JuiceInGlass/apple&dushes.webp";
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
import TeaSmorodinaChernika from "../assets/img/products/Tea/smorodinaChernika.webp";
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
}

export const PRODUCTS__GLASS: Product[] = [
	{
		id: 0,
		title: "Яблучно-виноградний",
		img: JuicyAppleGrapes,
		link: "/products/glass/appleGrapes",
		color: "#d6e2b3",
		category: "glass",
		slug: "appleGrapes",
		description:
			"Класичне поєднання соковитих яблук і стиглого винограду. М'який, збалансований смак без зайвої кислинки — чудово підходить для щоденного вживання.",
		composition: [
			{ name: "Яблучний сік", percent: "70%" },
			{ name: "Виноградний сік", percent: "30%" },
		],
		titleEn: "Apple & Grape",
		descriptionEn:
			"A classic pairing of juicy apples and ripe grapes. A soft, balanced taste without excess acidity — great for everyday drinking.",
		compositionEn: [
			{ name: "Apple juice", percent: "70%" },
			{ name: "Grape juice", percent: "30%" },
		],
	},
	{
		id: 1,
		title: "Гранатовий",
		img: JuicyGranad,
		link: "/products/glass/granat",
		color: "#d6e2b3",
		category: "glass",
		slug: "granat",
		description:
			"Насичений гранатовий сік із легкою терпкістю та яскравим рубіновим кольором. Джерело природних антиоксидантів у кожній склянці.",
		composition: [
			{ name: "Гранатовий сік", percent: "85%" },
			{ name: "Яблучний сік", percent: "15%" },
		],
		titleEn: "Pomegranate",
		descriptionEn:
			"Rich pomegranate juice with a light tartness and a vivid ruby colour. A source of natural antioxidants in every glass.",
		compositionEn: [
			{ name: "Pomegranate juice", percent: "85%" },
			{ name: "Apple juice", percent: "15%" },
		],
	},
	{
		id: 2,
		title: "Ягідний мікс",
		img: JuicyBerryMix,
		link: "/products/glass/berryMix",
		color: "#d6e2b3",
		category: "glass",
		slug: "berryMix",
		description:
			"Асорті з яблука, полуниці та вишні — соковитий ягідний букет з ніжною кислинкою. Смак літа у будь-яку пору року.",
		composition: [
			{ name: "Яблучний сік", percent: "55%" },
			{ name: "Полуничний сік", percent: "25%" },
			{ name: "Вишневий сік", percent: "20%" },
		],
		titleEn: "Berry Mix",
		descriptionEn:
			"A blend of apple, strawberry and cherry — a juicy berry bouquet with a gentle tartness. The taste of summer any time of year.",
		compositionEn: [
			{ name: "Apple juice", percent: "55%" },
			{ name: "Strawberry juice", percent: "25%" },
			{ name: "Cherry juice", percent: "20%" },
		],
	},
	{
		id: 3,
		title: "Вишньовий",
		img: JuicyCherry,
		link: "/products/glass/cherry",
		color: "#d6e2b3",
		category: "glass",
		slug: "cherry",
		description:
			"Насичений вишневий сік з приємною кислинкою та глибоким бордовим кольором. Улюблений класичний смак для всієї родини.",
		composition: [
			{ name: "Вишневий сік", percent: "90%" },
			{ name: "Яблучний сік", percent: "10%" },
		],
		titleEn: "Cherry",
		descriptionEn:
			"Rich cherry juice with a pleasant tartness and a deep burgundy colour. A classic favourite for the whole family.",
		compositionEn: [
			{ name: "Cherry juice", percent: "90%" },
			{ name: "Apple juice", percent: "10%" },
		],
	},
	{
		id: 4,
		title: "Яблучно-грушевий",
		img: JuicyAppleDushes,
		link: "/products/glass/appleDushes",
		color: "#d6e2b3",
		category: "glass",
		slug: "appleDushes",
		description:
			"Ніжне поєднання яблука та груші — м'який, злегка медовий смак без зайвої терпкості. Один із найделікатніших смаків у лінійці.",
		composition: [
			{ name: "Яблучний сік", percent: "60%" },
			{ name: "Грушевий сік", percent: "40%" },
		],
		titleEn: "Apple & Pear",
		descriptionEn:
			"A gentle pairing of apple and pear — a soft, slightly honeyed taste without excess tartness. One of the most delicate flavours in the line.",
		compositionEn: [
			{ name: "Apple juice", percent: "60%" },
			{ name: "Pear juice", percent: "40%" },
		],
	},
	{
		id: 5,
		title: "Яблучно-полуничный",
		img: JuicyAppleStrawberry,
		link: "/products/glass/appleStrawberry",
		color: "#d6e2b3",
		category: "glass",
		slug: "appleStrawberry",
		description:
			"Свіжий яблучний сік з додаванням соковитої полуниці — легкий, ароматний та трохи солодкий смак, який подобається дітям і дорослим.",
		composition: [
			{ name: "Яблучний сік", percent: "65%" },
			{ name: "Полуничний сік", percent: "35%" },
		],
		titleEn: "Apple & Strawberry",
		descriptionEn:
			"Fresh apple juice with juicy strawberry added — a light, fragrant, slightly sweet taste loved by kids and adults alike.",
		compositionEn: [
			{ name: "Apple juice", percent: "65%" },
			{ name: "Strawberry juice", percent: "35%" },
		],
	},
];

export const PRODUCTS__BOX: Product[] = [
	{
		id: 6,
		title: "Яблучний(з м’якоттю)",
		img: BoxJuiceApple,
		link: "/products/box/apple",
		color: "#d6e2b3",
		category: "box",
		slug: "apple",
		description:
			"Класичний яблучний сік з м'якоттю — густий, насичений та максимально наближений до смаку свіжовичавленого яблука. Оптимальний вибір для всієї родини у зручному сімейному форматі.",
		composition: [{ name: "Яблучний сік з м'якоттю", percent: "100%" }],
		titleEn: "Apple (with pulp)",
		descriptionEn:
			"Classic apple juice with pulp — thick, rich and as close as possible to freshly squeezed apple. The optimal choice for the whole family in a convenient family format.",
		compositionEn: [{ name: "Apple juice with pulp", percent: "100%" }],
	},
	{
		id: 7,
		title: "Мультифруктовий(з м’якоттю)",
		img: BoxJuiceMulty,
		link: "/products/box/multyfruct",
		color: "#d6e2b3",
		category: "box",
		slug: "multyfruct",
		description:
			"Багатий мікс з яблука, апельсина, винограду та персика. Яскравий фруктовий смак з м'якоттю, що дарує відчуття справжнього соку.",
		composition: [
			{ name: "Яблучний сік", percent: "40%" },
			{ name: "Апельсиновий сік", percent: "25%" },
			{ name: "Виноградний сік", percent: "20%" },
			{ name: "Персиковий сік", percent: "15%" },
		],
		titleEn: "Multifruit (with pulp)",
		descriptionEn:
			"A rich mix of apple, orange, grape and peach. A vivid fruity taste with pulp that gives the feel of real juice.",
		compositionEn: [
			{ name: "Apple juice", percent: "40%" },
			{ name: "Orange juice", percent: "25%" },
			{ name: "Grape juice", percent: "20%" },
			{ name: "Peach juice", percent: "15%" },
		],
	},
	{
		id: 8,
		title: "Вишнево-смородиновий",
		img: BoxJuiceCherry,
		link: "/products/box/cherry",
		color: "#d6e2b3",
		category: "box",
		slug: "cherry",
		description:
			"Поєднання стиглої вишні та чорної смородини — насичений кисло-солодкий смак з приємною терпкістю. Багатий на вітамін С.",
		composition: [
			{ name: "Вишневий сік", percent: "55%" },
			{ name: "Чорносмородиновий сік", percent: "45%" },
		],
		titleEn: "Cherry & Black Currant",
		descriptionEn:
			"A pairing of ripe cherry and black currant — a rich sweet-and-sour taste with a pleasant tartness. Rich in vitamin C.",
		compositionEn: [
			{ name: "Cherry juice", percent: "55%" },
			{ name: "Black currant juice", percent: "45%" },
		],
	},
	{
		id: 9,
		title: "Апельсиновий(з м’якоттю)",
		img: BoxJuiceOrange,
		link: "/products/box/orange",
		color: "#d6e2b3",
		category: "box",
		slug: "orange",
		description:
			"Соковитий апельсиновий сік з м'якоттю — яскравий цитрусовий смак і природна свіжість в кожному ковтку.",
		composition: [{ name: "Апельсиновий сік з м'якоттю", percent: "100%" }],
		titleEn: "Orange (with pulp)",
		descriptionEn:
			"Juicy orange juice with pulp — a vivid citrus taste and natural freshness in every sip.",
		compositionEn: [{ name: "Orange juice with pulp", percent: "100%" }],
	},
	{
		id: 10,
		title: "Виноградно-Яблучний",
		img: BoxJuiceAppleGrapes,
		link: "/products/box/appleGrapes",
		color: "#d6e2b3",
		category: "box",
		slug: "appleGrapes",
		description:
			"Солодкий виноградний сік, доповнений яблучними нотками. М'який та освіжаючий смак без зайвої кислинки.",
		composition: [
			{ name: "Виноградний сік", percent: "55%" },
			{ name: "Яблучний сік", percent: "45%" },
		],
		titleEn: "Grape & Apple",
		descriptionEn:
			"Sweet grape juice rounded out with apple notes. A soft, refreshing taste without excess acidity.",
		compositionEn: [
			{ name: "Grape juice", percent: "55%" },
			{ name: "Apple juice", percent: "45%" },
		],
	},
	{
		id: 11,
		title: "Мангово-персиковий(з м’якоттю)",
		img: BoxJuiceAppleMango,
		link: "/products/box/mango",
		color: "#d6e2b3",
		category: "box",
		slug: "mango",
		description:
			"Тропічне поєднання манго та персика з м'якоттю — солодкий, ароматний смак з легкими нотками екзотики.",
		composition: [
			{ name: "Персиковий сік", percent: "55%" },
			{ name: "Манговий сік", percent: "35%" },
			{ name: "Яблучний сік", percent: "10%" },
		],
		titleEn: "Mango & Peach (with pulp)",
		descriptionEn:
			"A tropical pairing of mango and peach with pulp — a sweet, fragrant taste with light exotic notes.",
		compositionEn: [
			{ name: "Peach juice", percent: "55%" },
			{ name: "Mango juice", percent: "35%" },
			{ name: "Apple juice", percent: "10%" },
		],
	},
	{
		id: 12,
		title: "Томатно-моркв’яний(з м’якоттю)",
		img: BoxJuiceTomat,
		link: "/products/box/tomat",
		color: "#d6e2b3",
		category: "box",
		slug: "tomat",
		description:
			"Насичений томатний сік з морквою, легкою ноткою солі та натуральних прянощів. Смачна та корисна альтернатива для тих, хто цінує овочеві соки.",
		composition: [
			{ name: "Томатний сік з м'якоттю", percent: "85%" },
			{ name: "Морквяний сік", percent: "10%" },
			{ name: "Сіль та прянощі", percent: "5%" },
		],
		titleEn: "Tomato & Carrot (with pulp and salt)",
		descriptionEn:
			"Rich tomato juice with carrot, a light hint of salt and natural spices. A tasty and wholesome alternative for those who love vegetable juices.",
		compositionEn: [
			{ name: "Tomato juice with pulp", percent: "85%" },
			{ name: "Carrot juice", percent: "10%" },
			{ name: "Salt and spices", percent: "5%" },
		],
	},
];

export const PRODUCTS__TEA: Product[] = [
	{
		id: 13,
		title: "Вишньовий чай",
		img: TeaCherry,
		link: "/products/tea/cherry",
		color: "#d6e2b3",
		category: "tea",
		slug: "cherry",
		description:
			"Ароматний чай на основі чорного чаю з насиченим вишневим смаком. Чудово підходить як гарячим, так і охолодженим.",
		composition: [
			{ name: "Вишневий екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Cherry Tea",
		descriptionEn:
			"An aromatic black-tea blend with a rich cherry flavour. Great served either hot or chilled.",
		compositionEn: [
			{ name: "Cherry extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 14,
		title: "Гранатовий чай",
		img: TeaGranat,
		link: "/products/tea/granat",
		color: "#d6e2b3",
		category: "tea",
		slug: "granat",
		description:
			"Чай з яскравим гранатовим акцентом — терпкий, бадьорий смак з легкою кислинкою.",
		composition: [
			{ name: "Гранатовий екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Pomegranate Tea",
		descriptionEn:
			"Tea with a vivid pomegranate accent — a tart, invigorating taste with a light acidity.",
		compositionEn: [
			{ name: "Pomegranate extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 15,
		title: "Чорниця, полуниця",
		img: TeaChornika,
		link: "/products/tea/strawberryChornika",
		color: "#d6e2b3",
		category: "tea",
		slug: "strawberryChornika",
		description:
			"Ніжне поєднання чорниці та полуниці на основі зеленого чаю — легкий ягідний смак з делікатною солодкістю.",
		composition: [
			{ name: "Чорничний екстракт", percent: "10%" },
			{ name: "Полуничний екстракт", percent: "10%" },
			{ name: "Зелений чай", percent: "5%" },
			{ name: "Вода", percent: "75%" },
		],
		titleEn: "Blueberry & Strawberry",
		descriptionEn:
			"A gentle pairing of blueberry and strawberry on a green-tea base — a light berry taste with delicate sweetness.",
		compositionEn: [
			{ name: "Blueberry extract", percent: "10%" },
			{ name: "Strawberry extract", percent: "10%" },
			{ name: "Green tea", percent: "5%" },
			{ name: "Water", percent: "75%" },
		],
	},
	{
		id: 16,
		title: "Чорниця смородина",
		img: TeaSmorodinaChernika,
		link: "/products/tea/chornikaSmorodina",
		color: "#d6e2b3",
		category: "tea",
		slug: "chornikaSmorodina",
		description:
			"Насичений чай з чорницею та чорною смородиною — глибокий ягідний смак з приємною терпкістю.",
		composition: [
			{ name: "Чорничний екстракт", percent: "10%" },
			{ name: "Смородиновий екстракт", percent: "10%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "75%" },
		],
		titleEn: "Blueberry & Black Currant",
		descriptionEn:
			"A rich tea with blueberry and black currant — a deep berry taste with a pleasant tartness.",
		compositionEn: [
			{ name: "Blueberry extract", percent: "10%" },
			{ name: "Black currant extract", percent: "10%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "75%" },
		],
	},
	{
		id: 17,
		title: "Журавлинний чай",
		img: TeaJuravlina,
		link: "/products/tea/juravlina",
		color: "#d6e2b3",
		category: "tea",
		slug: "juravlina",
		description:
			"Бадьорий чай з журавлиною — яскрава кислинка та освіжаючий смак, ідеальний для холодної пори року.",
		composition: [
			{ name: "Журавлинний екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Cranberry Tea",
		descriptionEn:
			"An invigorating cranberry tea — a vivid tartness and refreshing taste, ideal for the cold season.",
		compositionEn: [
			{ name: "Cranberry extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 18,
		title: "Малиновий чай",
		img: TeaMalina,
		link: "/products/tea/malina",
		color: "#d6e2b3",
		category: "tea",
		slug: "malina",
		description:
			"Ароматний чай з малиновими нотками — теплий, затишний смак з легкою солодкістю.",
		composition: [
			{ name: "Малиновий екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Raspberry Tea",
		descriptionEn:
			"An aromatic tea with raspberry notes — a warm, cosy taste with a light sweetness.",
		compositionEn: [
			{ name: "Raspberry extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 19,
		title: "Обліпиха і груша",
		img: TeaOblipiha,
		link: "/products/tea/oblipiha",
		color: "#d6e2b3",
		category: "tea",
		slug: "oblipiha",
		description:
			"Поєднання обліпихи та груші на основі зеленого чаю — м'який, трохи медовий смак з корисними властивостями обліпихи.",
		composition: [
			{ name: "Обліпиховий екстракт", percent: "10%" },
			{ name: "Грушевий екстракт", percent: "10%" },
			{ name: "Зелений чай", percent: "5%" },
			{ name: "Вода", percent: "75%" },
		],
		titleEn: "Sea Buckthorn & Pear",
		descriptionEn:
			"A pairing of sea buckthorn and pear on a green-tea base — a soft, slightly honeyed taste with the beneficial properties of sea buckthorn.",
		compositionEn: [
			{ name: "Sea buckthorn extract", percent: "10%" },
			{ name: "Pear extract", percent: "10%" },
			{ name: "Green tea", percent: "5%" },
			{ name: "Water", percent: "75%" },
		],
	},
	{
		id: 20,
		title: "Ожиновий чай",
		img: TeaOjina,
		link: "/products/tea/ojina",
		color: "#d6e2b3",
		category: "tea",
		slug: "ojina",
		description:
			"Насичений чай з ожиною — глибокий ягідний смак з делікатною кислинкою.",
		composition: [
			{ name: "Ожиновий екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Blackberry Tea",
		descriptionEn:
			"A rich blackberry tea — a deep berry taste with a delicate tartness.",
		compositionEn: [
			{ name: "Blackberry extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 21,
		title: "Полуничний чай",
		img: TeaStrawberry,
		link: "/products/tea/strawberry",
		color: "#d6e2b3",
		category: "tea",
		slug: "strawberry",
		description:
			"Легкий чай з ароматом стиглої полуниці — солодкий, літній смак у будь-яку пору року.",
		composition: [
			{ name: "Полуничний екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Strawberry Tea",
		descriptionEn:
			"A light tea with the aroma of ripe strawberries — a sweet, summery taste any time of year.",
		compositionEn: [
			{ name: "Strawberry extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 22,
		title: "Смородиновий чай",
		img: TeaSmorodina,
		link: "/products/tea/smorodina",
		color: "#d6e2b3",
		category: "tea",
		slug: "smorodina",
		description:
			"Класичний чай з чорною смородиною — насичений, трохи терпкий смак з яскравим ягідним ароматом.",
		composition: [
			{ name: "Смородиновий екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Black Currant Tea",
		descriptionEn:
			"A classic black currant tea — a rich, slightly tart taste with a vivid berry aroma.",
		compositionEn: [
			{ name: "Black currant extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 23,
		title: "Лісова ягода",
		img: TeaBerry,
		link: "/products/tea/berryMix",
		color: "#d6e2b3",
		category: "tea",
		slug: "berryMix",
		description:
			"Мікс лісових ягід — чорниці, ожини та малини — на основі чорного чаю. Багатий ягідний букет в одній чашці.",
		composition: [
			{
				name: "Ягідний мікс-екстракт (чорниця, ожина, малина)",
				percent: "15%",
			},
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Forest Berry",
		descriptionEn:
			"A mix of forest berries — blueberry, blackberry and raspberry — on a black-tea base. A rich berry bouquet in one cup.",
		compositionEn: [
			{
				name: "Berry mix extract (blueberry, blackberry, raspberry)",
				percent: "15%",
			},
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
		],
	},
	{
		id: 24,
		title: "Кизиловий чай",
		img: TeaKizil,
		link: "/products/tea/kizil",
		color: "#d6e2b3",
		category: "tea",
		slug: "kizil",
		description:
			"Чай з кизилом — яскрава кислинка та своєрідний терпкий смак, характерний для цієї ягоди.",
		composition: [
			{ name: "Кизиловий екстракт", percent: "15%" },
			{ name: "Чорний чай", percent: "5%" },
			{ name: "Вода", percent: "80%" },
		],
		titleEn: "Cornelian Cherry Tea",
		descriptionEn:
			"Tea with cornelian cherry (dogwood) — a vivid tartness and a distinctive tangy taste characteristic of this berry.",
		compositionEn: [
			{ name: "Cornelian cherry extract", percent: "15%" },
			{ name: "Black tea", percent: "5%" },
			{ name: "Water", percent: "80%" },
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

/** Находит товар по категории и слагу из URL (/products/:category/:slug). */
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

/**
 * Отдельного поля "смакова категорія" в даних немає, тому родина смаку
 * визначається за назвою товару (title) — це чинне поле products.ts,
 * нових полів не додаємо.
 *
 * Товар може належати одразу до кількох родин смаку (наприклад,
 * "Яблучно-виноградний" — це і яблучний, і виноградний смак), тому
 * функція повертає МАСИВ усіх родин, що збігаються з назвою, а не
 * зупиняється на першому збігу.
 */
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
	// "яблучн" (без кінцевої "о") ловить і "яблучний", і "яблучно-...",
	// раніше тут було "яблучно", яке пропускало чисто яблучний сік.
	if (title.includes("яблучн")) families.add("apple");

	if (families.size === 0) families.add("other");

	return Array.from(families);
};

/** Совместимость: первая (основная) родина смаку товара. */
export const getFlavorFamily = (product: Product): FlavorFamily =>
	getFlavorFamilies(product)[0];

/** Все товары одной категории (glass/box/tea), кроме самого товара при исключении по slug. */
export const getProductsByCategory = (
	category: ProductCategory,
	excludeSlug?: string,
): Product[] =>
	ALL_PRODUCTS.filter(
		(p) => p.category === category && p.slug !== excludeSlug,
	);

/**
 * Короткий тег формата товара для карточек и фильтров каталога.
 * Отдельного поля "формат" в данных нет, поэтому тег выводится из
 * category — это единственный существующий признак группы товара.
 */
export const getProductFormatTag = (
	product: Product,
	lang: string,
): string => {
	const isEn = lang === "en";
	if (product.category === "glass") return isEn ? "100% juice" : "100% сік";
	if (product.category === "box")
		return isEn ? "With pulp" : "З м'якоттю";
	return isEn ? "Natural tea" : "Натуральний чай";
};

/** Формат/розфасовка товару для бейджа в картці каталогу. */
export const getProductSizeLabel = (product: Product, lang: string): string => {
	const isEn = lang === "en";
	if (product.category === "glass") return "1L";
	if (product.category === "box") return "3L";
	return isEn ? "50 g (10 sticks)" : "50 г (10 стіків)";
};

/** Возвращает текстовые поля товара на нужном языке (title/description/composition). */
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

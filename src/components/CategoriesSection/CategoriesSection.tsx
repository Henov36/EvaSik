import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Container } from "../../styles/UIStyles";
import {
	ALL_PRODUCTS,
	getLocalizedProduct,
	getProductFormatTag,
	getProductSizeLabel,
} from "../../data/products";
import { Slider, SliderItem } from "../Slider/Slider";
import { CategoriesSectiomStyle, SliderCard } from "./CategoriesSectionStyles";

/**
 * Единая карусель по ВСЕМ товарам (соки, бокс, чай) — заменяет прежние
 * 3 карточки категорий. Используется и на MainPage ("Наша продукція"),
 * и на ProductPage ("Оберіть свій смак та формат"), поэтому изменение
 * тут применяется сразу на всех страницах, где стоит этот компонент.
 * Карусель — общий Slider (scroll-snap), сама решает сколько карточек
 * влезает на экран, поэтому адаптив не ломается на мобильных.
 */
export const CategoriesSection = () => {
	const { t, i18n } = useTranslation();

	return (
		<CategoriesSectiomStyle>
			<Container>
				<div className="section-top">
					<div>
						<div className="eyebrow">{t("main.productsEyebrow")}</div>
						<h2>{t("products.chooseTasteTitle")}</h2>
					</div>
					<NavLink className="view-all" to="/products">
						{t("main.productsViewAll")} →
					</NavLink>
				</div>

				<Slider ariaLabel={t("products.chooseTasteTitle")}>
					{ALL_PRODUCTS.map((product) => {
						const localized = getLocalizedProduct(product, i18n.language);
						return (
							<SliderItem
								key={product.id}
								$desktop="20%"
								$tablet="48%">
								<SliderCard>
									<span className="tag">
										{getProductFormatTag(product, i18n.language)}
									</span>
									<div className="img-wrap">
										<img src={product.img} alt={localized.title} loading="lazy" />
									</div>
									<h3>{localized.title}</h3>
									<span className="size">
										{getProductSizeLabel(product, i18n.language)}
									</span>
									<NavLink className="details-btn" to={product.link}>
										{t("products.detail.moreDetails")}
									</NavLink>
								</SliderCard>
							</SliderItem>
						);
					})}
				</Slider>
			</Container>
		</CategoriesSectiomStyle>
	);
};

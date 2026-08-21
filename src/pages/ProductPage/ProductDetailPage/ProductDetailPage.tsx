import { useState } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "../../../styles/UIStyles";
import {
	PruductsSoloPageSection,
	PruductsSoloContainer,
	ProductImgBlock,
	ProductInfoBlock,
	ProductPrice,
	CountButtonBlock,
	Count,
	AddToCard,
	ProductSoloMain,
	BackButton,
	FeaturesRow,
	OtherFlavorsSection,
	OtherFlavorCard,
} from "./ProductSoloPageStyles";
import {
	CategorySection,
	LinkList,
} from "../GlassJuicePage/GlassJuicePageStyles";
import appleIcon from "../../../assets/img/appleSVG.svg";
import familyIcon from "../../../assets/img/Family.svg";
import formatIcon from "../../../assets/img/plant.svg";
import shieldIcon from "../../../assets/img/shield.svg";
import {
	findProduct,
	getLocalizedProduct,
	getProductsByCategory,
	PRODUCTS__CATEGORIES,
} from "../../../data/products";
import { useAppDispatch } from "../../../store/hooks";
import { addToCart } from "../../../store/slices/cartSlice";
import { Reveal } from "../../../components/Reveal/Reveal";
import { Slider, SliderItem } from "../../../components/Slider/Slider";

export const ProductDetailPage = () => {
	const { t, i18n } = useTranslation();
	const { category, slug } = useParams<{ category: string; slug: string }>();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [count, setCount] = useState(1);
	const [justAdded, setJustAdded] = useState(false);

	const product = findProduct(category, slug);

	if (!product) {
		return <Navigate to="/products" replace />;
	}

	const localized = getLocalizedProduct(product, i18n.language);
	const otherFlavors = getProductsByCategory(product.category, product.slug);
	const otherCategories = PRODUCTS__CATEGORIES.filter(
		(c) => c.key !== product.category,
	);

	const handleAddToCart = () => {
		dispatch(addToCart({ product, quantity: count }));
		setJustAdded(true);
		setTimeout(() => setJustAdded(false), 1800);
	};

	const handleCountChange = (value: string) => {
		const parsed = Number(value);

		const safeValue = Number.isFinite(parsed)
			? Math.max(1, Math.floor(parsed))
			: 1;
		setCount(safeValue);
	};

	return (
		<ProductSoloMain>
			<PruductsSoloPageSection>
				<Container>
					<PruductsSoloContainer>
						<ProductImgBlock>
							<Reveal direction="left">
								<img src={product.img} alt={localized.title} />
							</Reveal>
						</ProductImgBlock>
						<ProductInfoBlock>
							<Reveal direction="right">
								<h1>{localized.title}</h1>
								<p>{localized.description}</p>
								<ul>
									<h5>{t("products.compositionTitle")}</h5>
									{localized.composition.map((item) => (
										<li key={item.name}>
											<span>{item.name}</span>
											<i></i>
											<strong>{item.percent}</strong>
										</li>
									))}
								</ul>
								<ProductPrice>
									{t("products.detail.priceLabel")}
									<strong>
										{t("products.detail.priceValue", { price: product.price })}
									</strong>
									{product.sticks && (
										<strong>
											{product.sticks} {t("products.detail.sticks")}
										</strong>
									)}
								</ProductPrice>
								<CountButtonBlock>
									<Count>
										<button
											type="button"
											aria-label={t("products.decrease")}
											onClick={() => setCount((prev) => Math.max(1, prev - 1))}>
											-
										</button>

										<input
											type="number"
											min={1}
											value={count}
											onChange={(e) => handleCountChange(e.target.value)}
										/>

										<button
											type="button"
											aria-label={t("products.increase")}
											onClick={() => setCount((prev) => prev + 1)}>
											+
										</button>
									</Count>
									<AddToCard>
										<button type="button" onClick={handleAddToCart}>
											{justAdded
												? t("products.added")
												: t("products.addToCart")}
										</button>
									</AddToCard>
									<BackButton>
										<button
											type="button"
											onClick={() => navigate(`/products/${product.category}`)}>
											{t("products.detail.allFlavors")}
										</button>
									</BackButton>
								</CountButtonBlock>
							</Reveal>
						</ProductInfoBlock>
					</PruductsSoloContainer>

					<FeaturesRow>
						<li>
							<img src={appleIcon} alt="" />
							<strong>{t("products.detail.feature1Title")}</strong>
							<span>{t("products.detail.feature1Text")}</span>
						</li>
						<li>
							<img src={familyIcon} alt="" />
							<strong>{t("products.detail.feature2Title")}</strong>
							<span>{t("products.detail.feature2Text")}</span>
						</li>
						<li>
							<img src={formatIcon} alt="" />
							<strong>{t("products.detail.feature3Title")}</strong>
							<span>{t("products.detail.feature3Text")}</span>
						</li>
						<li>
							<img src={shieldIcon} alt="" />
							<strong>{t("products.detail.feature4Title")}</strong>
							<span>{t("products.detail.feature4Text")}</span>
						</li>
					</FeaturesRow>

					{otherFlavors.length > 0 && (
						<OtherFlavorsSection>
							<h3>{t("products.detail.otherFlavors")}</h3>
							<Slider ariaLabel={t("products.detail.otherFlavors")}>
								{otherFlavors.map((item) => {
									const itemLocalized = getLocalizedProduct(
										item,
										i18n.language,
									);
									return (
										<SliderItem
											key={item.id}
											$desktop="16.6%"
											$tablet="33.333%">
											<OtherFlavorCard to={item.link}>
												<img
													src={item.img}
													alt={itemLocalized.title}
													loading="lazy"
												/>
												<span>{itemLocalized.title}</span>
											</OtherFlavorCard>
										</SliderItem>
									);
								})}
							</Slider>
						</OtherFlavorsSection>
					)}
				</Container>

				<CategorySection>
					<Container>
						<div>
							<h1>{t("products.needOtherFormat")}</h1>
						</div>
						<LinkList>
							{otherCategories.map((category) => (
								<NavLink key={category.key} to={category.link}>
									<img src={category.img} alt="" />
									<h3>{t(`products.${category.key}.categoryLinkTitle`)}</h3>
								</NavLink>
							))}
						</LinkList>
					</Container>
				</CategorySection>
			</PruductsSoloPageSection>
		</ProductSoloMain>
	);
};

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Container } from "../../styles/UIStyles";
import { MarqueeStrip } from "../../components/Marquee/MarqueeStrip";
import { useMarqueeMessages } from "../../components/Marquee/marqueeMessages";
import {
	ProductTopSection,
	TopSectionBlock,
	CategoryPickerSection,
	CategoryPickerGrid,
	PhotoSection,
} from "./ProductPageStyles";
// import { SellProductSection } from "../../components/SellProductSection/SellProductSection";
import { RunStroke } from "./GlassJuicePage/GlassJuicePageStyles";
import LogoApple from "../../assets/img/LOGO_apple.svg";
import { PRODUCTS__CATEGORIES } from "../../data/products";

export const ProductPage = () => {
	const { t } = useTranslation();
	const marquee = useMarqueeMessages();

	return (
		<main style={{ background: "#EEE2CF" }}>
			<PhotoSection>
				<ProductTopSection>
					<Container>
						<TopSectionBlock>
							<div>
								<h1>{t("products.hero")}</h1>
							</div>
						</TopSectionBlock>
					</Container>
					<RunStroke>
						<MarqueeStrip
							messages={marquee.motivation}
							logo={LogoApple}
							repeat={4}
						/>
					</RunStroke>
				</ProductTopSection>

				<CategoryPickerSection>
					<Container>
						<h2>{t("products.chooseTasteTitle")}</h2>
						<CategoryPickerGrid>
							{PRODUCTS__CATEGORIES.map((category) => (
								<NavLink key={category.id} to={category.link}>
									<img src={category.img} alt="" />
									<h3>{t(`products.${category.key}.categoryTitle`)}</h3>
								</NavLink>
							))}
						</CategoryPickerGrid>
					</Container>
				</CategoryPickerSection>
			</PhotoSection>
		</main>
	);
};

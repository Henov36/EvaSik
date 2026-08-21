import { useTranslation } from "react-i18next";
import { MarqueeStrip } from "../../../components/Marquee/MarqueeStrip";
import { useMarqueeMessages } from "../../../components/Marquee/marqueeMessages";
import { Container } from "../../../styles/UIStyles";
import { TopSectionBlock } from "../ProductPageStyles";
import BoxCategory from "../../../assets/img/products/Category/BOX.webp";
import TeaCategory from "../../../assets/img/products/Category/Tea.webp";
import { PRODUCTS__GLASS } from "../../../data/products";
import { ProductCatalog } from "../../../components/ProductCatalog/ProductCatalog";
import {
	ProductSectionStyle,
	ProductSectionTitle,
	RunStroke,
	LinkList,
	CategorySection,
	BackGroundSection,
} from "./GlassJuicePageStyles";
import { NavLink } from "react-router-dom";
import LogoApple from "../../../assets/img/LOGO_apple.svg";

export const GlassJuicePage = () => {
	const { t } = useTranslation();
	const marquee = useMarqueeMessages();

	return (
		<main style={{ background: "#EEE2CF" }}>
			<section style={{ paddingTop: "0px", color: "#20734c" }}>
				<BackGroundSection>
					<Container>
						<TopSectionBlock>
							<div>
								<h1>{t("products.hero")}</h1>
							</div>
						</TopSectionBlock>
					</Container>
				</BackGroundSection>

				<ProductSectionStyle>
					<div>
						<RunStroke>
							<MarqueeStrip
								messages={marquee.quality}
								logo={LogoApple}
								repeat={6}
							/>
						</RunStroke>
						<Container>
							<ProductSectionTitle>
								<h2>{t("products.glass.pageTitle")}</h2>
								<h4>
									{t("products.glass.subtitleLine1")}
									<br />
									{t("products.glass.subtitleLine2")}
								</h4>
							</ProductSectionTitle>
						</Container>

						<div>
							<Container>
								<ProductCatalog products={PRODUCTS__GLASS} />
							</Container>
						</div>
						<RunStroke>
							<MarqueeStrip
								messages={marquee.motivation}
								logo={LogoApple}
								repeat={4}
							/>
						</RunStroke>
					</div>
				</ProductSectionStyle>
				<CategorySection>
					<Container>
						<div>
							<h1>{t("products.needOtherFormat")}</h1>
						</div>
						<LinkList>
							<NavLink to="/products/box">
								<img src={BoxCategory} alt="" />
								<h3>{t("products.box.categoryLinkTitle")}</h3>
							</NavLink>
							<NavLink to="/products/tea">
								<img src={TeaCategory} alt="" />
								<h3>{t("products.tea.categoryLinkTitle")}</h3>
							</NavLink>
						</LinkList>
					</Container>
				</CategorySection>
			</section>
		</main>
	);
};

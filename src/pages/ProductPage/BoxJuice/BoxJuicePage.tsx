import { useTranslation } from "react-i18next";
import { MarqueeStrip } from "../../../components/Marquee/MarqueeStrip";
import { useMarqueeMessages } from "../../../components/Marquee/marqueeMessages";
import { Container } from "../../../styles/UIStyles";
import { TopSectionBlock } from "../ProductPageStyles";
import GlassCategory from "../../../assets/img/products/Category/Glass.webp";
import TeaCategory from "../../../assets/img/products/Category/Tea.webp";
import { PRODUCTS__BOX } from "../../../data/products";
import { ProductCatalog } from "../../../components/ProductCatalog/ProductCatalog";
import {
	ProductSectionStyle,
	ProductSectionTitle,
	RunStroke,
	LinkList,
	CategorySection,
	BackGroundSection,
} from "../GlassJuicePage/GlassJuicePageStyles";
import { NavLink } from "react-router-dom";
import LogoApple from "../../../assets/img/LOGO_apple.svg";	

export const BoxJuicePage = () => {
	const { t } = useTranslation();
	const marquee = useMarqueeMessages();

	return (
		<main style={{ background: "#EEE2CF" }}>
			<section
				style={{
					paddingTop: "0px",
					color: "#004B1B",
				}}>
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
								repeat={4}
							/>
						</RunStroke>
						<Container>
							<ProductSectionTitle>
								<h2>{t("products.box.pageTitle")}</h2>
								<h4>
									{t("products.box.subtitleLine1")}
									<br />
									{t("products.box.subtitleLine2")}
								</h4>
							</ProductSectionTitle>
						</Container>

						<div>
							<Container>
								<ProductCatalog products={PRODUCTS__BOX} />
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
							<NavLink to="/products/glass">
								<img src={GlassCategory} alt="" />
								<h3>{t("products.glass.categoryLinkTitle")}</h3>
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

import { Container } from "../../styles/UIStyles";
import { useTranslation } from "react-i18next";
import Juice from "../../assets/img/products/JuiceInGlass/apple&grapes.webp";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import {
	MainPageStyles,
	TopSection,
	HeroFlex,
	HeroTextBlock,
	HeroButtons,
	HeroImageBlock,
	FeaturesStrip,
	ContentBox,
	JuiceImgBlock,
	SecondSection,
} from "./MainPageStyles";
import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection.tsx";
import { SellProductSection } from "../../components/SellProductSection/SellProductSection";
import { PartnersSection } from "../../components/PartnersSection/PartnersSection";
import { ProductionStepSection } from "./ProductionStepSection/ProductionStepSection";
import { TitleSpan } from "../../components/TitleSpan/TitleSpan.tsx";
import { IngridientCard } from "../../components/IngridientsCards/IngridientCard.tsx";
import appleIcon from "../../assets/img/appleSVG.svg";
import blueBerryIcon from "../../assets/img/blueberrySVG.svg";
import waterIcon from "../../assets/img/water.svg";
import familyIcon from "../../assets/img/Family.svg";
import shieldIcon from "../../assets/img/shield.svg";
import EvaLogo from "../../assets/img/Logo.svg";
import Juice2 from "../../assets/img/products/JuiceInGlass/cherry.webp";
import Juice3 from "../../assets/img/products/JuiceInGlass/apple&dushes.webp";

gsap.registerPlugin(ScrollTrigger);

export const MainPage = () => {
	const { t } = useTranslation();

	const topSectionRef = useRef<HTMLElement>(null);
	const juiceLayerRef = useRef<HTMLDivElement>(null);
	const contentLayerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const section = topSectionRef.current;
		if (!section) return;

		const mm = gsap.matchMedia();

		mm.add(
			{
				isDesktop: "(min-width: 901px)",
				isMobile: "(max-width: 900px)",
			},
			(context) => {
				const { isMobile } = context.conditions as { isMobile: boolean };
				// На мобильному верстка героя стає вертикальною, тож зсуви
				// роблю значно скромнішими, щоб картинка й текст не
				// "вилітали" за межі екрану.
				const juiceShift = isMobile ? 8 : 18;
				const contentShift = isMobile ? 6 : 12;

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: "bottom top",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				});

				tl.to(
					juiceLayerRef.current,
					{ yPercent: juiceShift, ease: "none" },
					0,
				).to(
					contentLayerRef.current,
					{ yPercent: contentShift, ease: "none" },
					0,
				);

				return () => {
					tl.scrollTrigger?.kill();
					tl.kill();
				};
			},
		);

		return () => mm.revert();
	}, []);

	return (
		<MainPageStyles>
			<TopSection ref={topSectionRef}>
				<Container>
					<HeroFlex>
						<HeroTextBlock ref={contentLayerRef}>
							<img src={EvaLogo} alt="" />
							<div className="eyebrow">{t("main.eyebrow")}</div>
							<h1>{t("main.heroTitle")}</h1>
							<p>{t("main.heroText")}</p>
							<HeroButtons>
								<NavLink className="primary-btn" to="/products/">
									{t("main.ctaProducts")}
								</NavLink>
							</HeroButtons>
						</HeroTextBlock>
						<HeroImageBlock ref={juiceLayerRef}>
							<img src={Juice} alt="EVA juice bottle" />
						</HeroImageBlock>
					</HeroFlex>

					<FeaturesStrip>
						<li>
							<img src={appleIcon} alt="" />
							<div>
								<strong>{t("main.feature1Title")}</strong>
								<span>{t("main.feature1Text")}</span>
							</div>
						</li>
						<li>
							<img src={blueBerryIcon} alt="" />
							<div>
								<strong>{t("main.feature2Title")}</strong>
								<span>{t("main.feature2Text")}</span>
							</div>
						</li>
						<li>
							<img src={waterIcon} alt="" />
							<div>
								<strong>{t("main.feature3Title")}</strong>
								<span>{t("main.feature3Text")}</span>
							</div>
						</li>
						<li>
							<img src={shieldIcon} alt="" />
							<div>
								<strong>{t("main.feature4Title")}</strong>
								<span>{t("main.feature4Text")}</span>
							</div>
						</li>
					</FeaturesStrip>
				</Container>
			</TopSection>

			<CategoriesSection />

			<SellProductSection bg="var(--blue-bg)">
				<SecondSection>
					<Container style={{ height: "100%" }}>
						<ContentBox>
							<div className="content__second-section">
								<TitleSpan title={t("main.rawMaterialsTitle")} />
								<IngridientCard
									img={appleIcon}
									text={t("main.rawMaterialsCard1")}
								/>
								<IngridientCard
									img={familyIcon}
									text={t("main.rawMaterialsCard2")}
								/>
								<IngridientCard
									img={waterIcon}
									text={t("main.rawMaterialsCard3")}
								/>
							</div>
							<div className="juice-block">
								<JuiceImgBlock $reverse={false}>
									<img src={Juice2} alt="Apple & Grapes Juice" />
									<img src={Juice3} alt="Apple & Grapes Juice" />
								</JuiceImgBlock>
							</div>
						</ContentBox>
					</Container>
				</SecondSection>

				<ProductionStepSection />
			</SellProductSection>

			<PartnersSection />
		</MainPageStyles>
	);
};

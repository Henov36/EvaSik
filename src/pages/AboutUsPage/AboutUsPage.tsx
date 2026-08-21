import { useTranslation } from "react-i18next";
import { Container } from "../../styles/UIStyles";
import {
	AboutUsMainSection,
	LogoContainer,
	MainFlexBox,
	ArrowLink,
	ConcentratesSection,
	ConcentratesTextBlock,
	ConcentratesCta,
} from "./AboutUsPageStyles";
import Logo from "../../assets/img/Logo.svg";
import ArrowDown from "../../assets/img/arrow-down.svg";
import Juicy1 from "../../assets/img/products/JuiceInGlass/granat.webp";
import Juicy2 from "../../assets/img/products/JuiceInGlass/appleGrapes.webp";
import { AboutUsPhotoSection } from "./AboutUsPhotoSection/AboutUsPhotoSection.tsx";
import { Reveal } from "../../components/Reveal/Reveal";

const CONCENTRATES_SITE_URL = "https://vitamin-2015.com/categories/1";

export const AboutUsPage = () => {
	const { t } = useTranslation();

	return (
		<main>
			<AboutUsMainSection>
				<Container>
					<MainFlexBox>
						<div>
							<img src={Juicy1} alt="" />
						</div>
						<LogoContainer>
							<img src={Logo} alt="" />
							<h3>{t("aboutUs.intro")}</h3>
							<ArrowLink href="#about-history">
								<img src={ArrowDown} alt="" />
							</ArrowLink>
						</LogoContainer>
						<div>
							<img src={Juicy2} alt="" />
						</div>
					</MainFlexBox>
				</Container>
			</AboutUsMainSection>

			<ConcentratesSection>
				<Container>
					<Reveal>
						<ConcentratesTextBlock>
							<p>{t("aboutUs.concentrates.paragraph1")}</p>
							<p>{t("aboutUs.concentrates.paragraph2")}</p>
							<p>{t("aboutUs.concentrates.paragraph3")}</p>
							<ConcentratesCta
								href={CONCENTRATES_SITE_URL}
								target="_blank"
								rel="noopener noreferrer">
								{t("aboutUs.concentrates.cta")}
							</ConcentratesCta>
						</ConcentratesTextBlock>
					</Reveal>
				</Container>
			</ConcentratesSection>

			<AboutUsPhotoSection />
		</main>
	);
};

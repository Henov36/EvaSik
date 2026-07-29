import { useTranslation } from "react-i18next";
import { Container } from "../../styles/UIStyles";
import {
	AboutUsMainSection,
	LogoContainer,
	MainFlexBox,
	ArrowLink,
} from "./AboutUsPageStyles";
import Logo from "../../assets/img/Logo.svg";
import ArrowDown from "../../assets/img/arrow-down.svg";
import Juicy1 from "../../assets/img/products/JuiceInGlass/granat.webp";
import Juicy2 from "../../assets/img/products/JuiceInGlass/apple&grapes.webp";
import { AboutUsPhotoSection } from "./AboutUsPhotoSection/AboutUsPhotoSection.tsx";


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
			<AboutUsPhotoSection />
		</main>
	);
};

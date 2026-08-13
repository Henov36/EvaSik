import { useTranslation } from "react-i18next";
import { Container } from "../../../styles/UIStyles";
import football1 from "../../../assets/img/AboutUsSection/football/football.webp";
import football2 from "../../../assets/img/sponsors/TirasFootball.webp";
import football3 from "../../../assets/img/AboutUsSection/football/tiras2.jfif";
import {
	AboutUsContainer,
	AboutUsSectionStyles,
	WarrioHelpSection,
} from "./AboutUsPhotoSection";
// import { QLine } from "../../../components/QLine/QLine";
import { PartnersSection } from "../../../components/PartnersSection/PartnersSection";
import { TitleSpan } from "../../../components/TitleSpan/TitleSpan";
import { Reveal } from "../../../components/Reveal/Reveal";
// import photo1 from "../../../assets/img/AboutUsSection/21.webp";
import photo2 from "../../../assets/img/AboutUsSection/aboutUs.png";
import photo3 from "../../../assets/img/AboutUsSection/AboutUs2.png";
import photo4 from "../../../assets/img/AboutUsSection/5.svg";
import photo5 from "../../../assets/img/AboutUsSection/aboutUs1.png";
import photo6 from "../../../assets/img/AboutUsSection/church.png";
import photo7 from "../../../assets/img/AboutUsSection/AboutUs4.png";
import { CategoriesSection } from "../../../components/CategoriesSection/CategoriesSection";

/**
 * Фото для перших чотирьох блоків — легкі (стиснуті) зображення з
 * Wikimedia Commons (вільна ліцензія), підібрані під сенс тексту поруч:
 * історія виробництва, добірна сировина (яблука), довіра споживачів
 * (готовий сік) і присутність по всій Україні (мапа). Раніше тут на
 * всі чотири блоки стояло одне й те саме фото — тепер кожен блок має
 * своє.
 */

export const AboutUsPhotoSection = () => {
	const { t } = useTranslation();

	return (
		<>
			<AboutUsSectionStyles id="about-history" $isReverse={true}>
				<Container>
					<AboutUsContainer $isReverse={false}>
						<Reveal direction="left" className="logo__block">
							<img src={photo3} alt="" loading="lazy" />
						</Reveal>
						<Reveal direction="right" className="info__block">
							<TitleSpan title={t("aboutUs.historyTitle")}></TitleSpan>
							<p>{t("aboutUs.historyText")}</p>
						</Reveal>
					</AboutUsContainer>
					<AboutUsContainer $isReverse={true}>
						<Reveal direction="right" className="logo__block">
							<img src={photo2} alt="" loading="lazy" />
						</Reveal>
						<Reveal direction="left" className="info__block">
							<TitleSpan title={t("aboutUs.rawMaterialTitle")}></TitleSpan>
							<p>{t("aboutUs.rawMaterialText")}</p>
						</Reveal>
					</AboutUsContainer>
					<AboutUsContainer $isReverse={false}>
						<Reveal direction="left" className="logo__block">
							<img src={photo5} alt="" loading="lazy" />
						</Reveal>
						<Reveal direction="right" className="info__block">
							<TitleSpan title={t("aboutUs.trustTitle")}></TitleSpan>
							<p>{t("aboutUs.trustText")}</p>
						</Reveal>
					</AboutUsContainer>
					<AboutUsContainer $isReverse={true}>
						<Reveal direction="right" className="logo__block">
							<img
								src={photo4}
								alt=""
								loading="lazy"
								style={{ padding: "50px" }}
							/>
						</Reveal>
						<Reveal direction="left" className="info__block">
							<TitleSpan title={t("aboutUs.allUkraineTitle")}></TitleSpan>
							<p>{t("aboutUs.allUkraineText")}</p>
						</Reveal>
					</AboutUsContainer>
				</Container>
				<CategoriesSection />
			</AboutUsSectionStyles>
			<AboutUsSectionStyles $isReverse={false}>
				<Container>
					<AboutUsContainer $isReverse={false}>
						<Reveal direction="left" className="logo__block">
							<img src={football1} alt="" />
						</Reveal>
						<Reveal direction="right" className="info__block">
							<TitleSpan title={t("aboutUs.footballTitle")}></TitleSpan>
							<p>{t("aboutUs.footballText")}</p>
						</Reveal>
					</AboutUsContainer>
					<AboutUsContainer $isReverse={true}>
						<Reveal direction="right" className="logo__block">
							<img src={football2} alt="" />
						</Reveal>
						<Reveal direction="left" className="info__block">
							<TitleSpan title={t("aboutUs.tirasTitle")}></TitleSpan>
							<p>{t("aboutUs.tirasText")}</p>
						</Reveal>
					</AboutUsContainer>
					<AboutUsContainer $isReverse={false}>
						<Reveal direction="left" className="logo__block">
							<img src={football3} alt="" />
						</Reveal>
						<Reveal direction="right" className="info__block">
							<TitleSpan title={t("aboutUs.socialTitle")}></TitleSpan>
							<p>{t("aboutUs.socialText")}</p>
						</Reveal>
					</AboutUsContainer>
				</Container>
				<PartnersSection />
			</AboutUsSectionStyles>
			<AboutUsSectionStyles id="about-history" $isReverse={true}>
				<Container>
					<AboutUsContainer $isReverse={false}>
						<Reveal direction="left" className="logo__block">
							<img src={photo6} alt="" loading="lazy" />
						</Reveal>
						<Reveal direction="left" className="info__block">
							<TitleSpan title={t("aboutUs.сhurchTitle")}></TitleSpan>
							<p>{t("aboutUs.сhurchText")}</p>
						</Reveal>
					</AboutUsContainer>
					<AboutUsContainer $isReverse={true}>
						<Reveal direction="right" className="logo__block">
							<img src={photo7} alt="" loading="lazy" />
						</Reveal>
						<Reveal direction="left" className="info__block">
							<TitleSpan title={t("aboutUs.сhurchTitle1")}></TitleSpan>
							<p>{t("aboutUs.сhurchText1")}</p>
						</Reveal>
					</AboutUsContainer>

					<WarrioHelpSection style={{ paddingBottom: "100px" }}>
						<Reveal direction="right" className="info__block">
							<TitleSpan title={t("aboutUs.volonterTitle")}></TitleSpan>
							<p>{t("aboutUs.volonterText")}</p>
						</Reveal>
						<Reveal direction="right" className="info__block">
							<p>{t("aboutUs.volonterText1")}</p>
						</Reveal>

						<Reveal direction="right" className="info__block">
							<p>{t("aboutUs.volonterText2")}</p>
						</Reveal>
						<Reveal direction="right" className="info__block">
							<p>{t("aboutUs.volonterText3")}</p>
						</Reveal>
					</WarrioHelpSection>
				</Container>
			</AboutUsSectionStyles>
		</>
	);
};

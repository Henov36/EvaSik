import { useTranslation } from "react-i18next";
import { Container } from "../../../styles/UIStyles";
import football1 from "../../../assets/img/AboutUsSection/football/football.webp";
import football2 from "../../../assets/img/sponsors/TirasFootball.webp";
import football3 from "../../../assets/img/AboutUsSection/football/tiras2.jfif";
import { AboutUsContainer, AboutUsSectionStyles } from "./AboutUsPhotoSection";
// import { QLine } from "../../../components/QLine/QLine";
import { PartnersSection } from "../../../components/PartnersSection/PartnersSection";
import { TitleSpan } from "../../../components/TitleSpan/TitleSpan";
import { Reveal } from "../../../components/Reveal/Reveal";
import photo1 from "../../../assets/img/AboutUsSection/21.webp";
import photo2 from "../../../assets/img/AboutUsSection/3.webp";
import photo3 from "../../../assets/img/AboutUsSection/4.webp";
import photo4 from "../../../assets/img/AboutUsSection/5.svg";

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
							<img src={photo1} alt="" loading="lazy" />
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
							<img src={photo3} alt="" loading="lazy" />
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
				{/* <Reveal direction="up">
					<QLine background="linear-gradient(179deg,rgba(230, 212, 184, 1) 18%, rgba(24, 128, 24, 1) 91%)" />
				</Reveal> */}

				<PartnersSection />
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
					<AboutUsContainer $isReverse={false} style={{ paddingBottom: "200px" }}>
						<Reveal direction="left" className="logo__block">
							<img src={football3} alt="" />
						</Reveal>
						<Reveal direction="right" className="info__block">
							<TitleSpan title={t("aboutUs.socialTitle")}></TitleSpan>
							<p>{t("aboutUs.socialText")}</p>
						</Reveal>
					</AboutUsContainer>
				</Container>
			</AboutUsSectionStyles>
		</>
	);
};

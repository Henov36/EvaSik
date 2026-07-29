import { useTranslation } from "react-i18next";
import { Container } from "../../styles/UIStyles";
import { ALL_SPONSORS } from "../SponsorsLine/SponsorsLine";
import shieldIcon from "../../assets/img/shield.svg";
import familyIcon from "../../assets/img/Family.svg";
import plantIcon from "../../assets/img/plant.svg";
import waterIcon from "../../assets/img/water.svg";
import { Slider, SliderItem } from "../Slider/Slider";
import {
	StatsWrap,
	PartnersBlock,
	PartnersTop,
	PartnerLogoCard,
} from "./PartnersSectionStyles";

/**
 * Заменяет бесконечный marquee-скролл партнёров на карусель со стрелками —
 * как на референсном скрине "Про нас". Карусель — общий Slider (нативный
 * scroll-snap): раньше число логотипов "на страницу" было зашито константой
 * (5) и не совпадало с реальной шириной карточки на мобильном, из-за чего
 * часть спонсоров переставала быть доступна при переключении. Scroll-snap
 * сам решает, сколько карточек видно на экране, поэтому адаптив не ломается.
 */
export const PartnersSection = () => {
	const { t } = useTranslation();

	const stats = [
		{ icon: plantIcon, value: t("aboutUs.stats.regionsValue"), label: t("aboutUs.stats.regionsLabel") },
		{ icon: waterIcon, value: t("aboutUs.stats.pointsValue"), label: t("aboutUs.stats.pointsLabel") },
		{ icon: familyIcon, value: t("aboutUs.stats.partnersValue"), label: t("aboutUs.stats.partnersLabel") },
		{ icon: shieldIcon, value: t("aboutUs.stats.qualityValue"), label: t("aboutUs.stats.qualityLabel") },
	];

	return (
		<Container>
			<StatsWrap>
				{stats.map((stat) => (
					<li key={stat.label}>
						<img src={stat.icon} alt="" />
						<div>
							<strong>{stat.value}</strong>
							<span>{stat.label}</span>
						</div>
					</li>
				))}
			</StatsWrap>

			<PartnersBlock>
				<PartnersTop>
					<div>
						<div className="eyebrow">{t("aboutUs.partners.eyebrow")}</div>
						<h2>{t("aboutUs.partners.title")}</h2>
						<p>{t("aboutUs.partners.text")}</p>
					</div>
				</PartnersTop>

				<Slider ariaLabel={t("aboutUs.partners.title")}>
					{ALL_SPONSORS.map((sponsor) => (
						<SliderItem
							key={sponsor.id}
							$desktop="20%"
							$tablet="33.333%">
							<PartnerLogoCard>
								<img src={sponsor.logoUrl} alt={sponsor.name} loading="lazy" />
							</PartnerLogoCard>
						</SliderItem>
					))}
				</Slider>
			</PartnersBlock>
		</Container>
	);
};

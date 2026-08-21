import { useTranslation } from "react-i18next";
import { Container } from "../../styles/UIStyles";
import { SPONSORS_ROW_1, SPONSORS_ROW_2 } from "../SponsorsLine/SponsorsLine";
import shieldIcon from "../../assets/img/shield.svg";
import familyIcon from "../../assets/img/Family.svg";
import plantIcon from "../../assets/img/plant.svg";
import waterIcon from "../../assets/img/water.svg";
import {
	StatsWrap,
	PartnersBlock,
	PartnersTop,
	PartnerLogoCard,
	MarqueeRow,
	MarqueeTrack,
} from "./PartnersSectionStyles";

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

				<MarqueeRow aria-label={t("aboutUs.partners.title")}>
					<MarqueeTrack>
						{[0, 1].map((group) =>
							SPONSORS_ROW_1.map((sponsor) => (
								<PartnerLogoCard key={`${group}-${sponsor.id}`}>
									<img src={sponsor.logoUrl} alt={sponsor.name} />
								</PartnerLogoCard>
							)),
						)}
					</MarqueeTrack>
				</MarqueeRow>

				<MarqueeRow aria-label={t("aboutUs.partners.title")}>
					<MarqueeTrack $reverse>
						{[0, 1].map((group) =>
							SPONSORS_ROW_2.map((sponsor) => (
								<PartnerLogoCard key={`${group}-${sponsor.id}`}>
									<img src={sponsor.logoUrl} alt={sponsor.name} />
								</PartnerLogoCard>
							)),
						)}
					</MarqueeTrack>
				</MarqueeRow>
			</PartnersBlock>
		</Container>
	);
};

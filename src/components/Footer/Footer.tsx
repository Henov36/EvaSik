import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "../../styles/UIStyles";
import {
	FooterStyles,
	FooterTop,
	FooterBrandColumn,
	FooterColumnTitle,
	FooterLinkList,
	FooterContactList,
	FooterSocials,
	FooterBottom,
} from "./FooterStyles";
import instLogo from "../../assets/instagram.svg";
import faceLogo from "../../assets/facebook.svg";
import { PRODUCTS__CATEGORIES } from "../../data/products";
import WhiteLogo from "../../assets/img/WHITELOGO.svg"

const PHONE_NUMBER = "+380 68 860 55 55";
const PHONE_HREF = "tel:+380688605555";

export const Footer = () => {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<FooterStyles>
			<Container>
				<FooterTop>
					<FooterBrandColumn>
						<NavLink to="/">
							<img src={WhiteLogo} alt="EVA" />
						</NavLink>
						<p>{t("footer.tagline")}</p>
					</FooterBrandColumn>

					<div>
						<FooterColumnTitle>{t("footer.navigation")}</FooterColumnTitle>
						<FooterLinkList>
							<li>
								<NavLink to="/">{t("nav.main")}</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">{t("nav.aboutUs")}</NavLink>
							</li>
							<li>
								<NavLink to="/products">{t("nav.products")}</NavLink>
							</li>
							<li>
								<NavLink to="/contacts">{t("nav.contacts")}</NavLink>
							</li>
						</FooterLinkList>
					</div>

					<div>
						<FooterColumnTitle>{t("footer.catalog")}</FooterColumnTitle>
						<FooterLinkList>
							{PRODUCTS__CATEGORIES.map((category) => (
								<li key={category.link}>
									<Link to={category.link}>
										{t(`products.${category.key}.categoryTitle`)}
									</Link>
								</li>
							))}
						</FooterLinkList>
					</div>

					<div>
						<FooterColumnTitle>{t("footer.contactsTitle")}</FooterColumnTitle>
						<FooterContactList>
							<li>
								<a href={PHONE_HREF}>{PHONE_NUMBER}</a>
							</li>
						</FooterContactList>

						<FooterColumnTitle
							as="p"
							style={{ fontSize: 13, marginBottom: 10 }}>
							{t("footer.followUs")}
						</FooterColumnTitle>
						<FooterSocials>
							<a
								href="https://www.instagram.com/eva_juice_tea?igsh=MTR1d21hbGJ3bHFpeA%3D%3D&utm_source=qr"
								aria-label="Instagram"
								target="_blank">
								<img src={instLogo} alt="" />
							</a>
							<a
								href="https://www.facebook.com/share/19dL7y753E/?mibextid=wwXIfr"
								aria-label="Facebook"
								target="_blank">
								<img src={faceLogo} alt="" />
							</a>
						</FooterSocials>
					</div>
				</FooterTop>

				<FooterBottom>
					<span>EVA © {year}</span>
					<span>{t("footer.rights")}</span>
				</FooterBottom>
			</Container>
		</FooterStyles>
	);
};

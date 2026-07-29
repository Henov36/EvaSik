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
import Logo from "../../assets/img/Logo.svg";
import instLogo from "../../assets/instagram.svg";
import faceLogo from "../../assets/facebook.svg";
import { PRODUCTS__CATEGORIES } from "../../data/products";

const PHONE_NUMBER = "+380 68 666 77 71";
const PHONE_HREF = "tel:+380686667771";

export const Footer = () => {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<FooterStyles>
			<Container>
				<FooterTop>
					<FooterBrandColumn>
						<NavLink to="/">
							<img src={Logo} alt="EVA" />
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
						</FooterLinkList>
					</div>

					<div>
						<FooterColumnTitle>{t("footer.catalog")}</FooterColumnTitle>
						<FooterLinkList>
							{PRODUCTS__CATEGORIES.map((category) => (
								<li key={category.link}>
									<Link to={category.link}>{t(`products.${category.key}.categoryTitle`)}</Link>
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

						<FooterColumnTitle as="p" style={{ fontSize: 13, marginBottom: 10 }}>
							{t("footer.followUs")}
						</FooterColumnTitle>
						<FooterSocials>
							<a href="#" aria-label="Instagram">
								<img src={instLogo} alt="" />
							</a>
							<a href="#" aria-label="Facebook">
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

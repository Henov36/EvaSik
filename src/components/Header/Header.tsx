import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container, Flex } from "../../styles/UIStyles";
import {
	HeaderStyles,
	LogoContainer,
	NavList,
	NavItem,
	DropdownButton,
	DropdownPanel,
	ActionsGroup,
	SocialMedia,
	PhoneButton,
	LangToggle,
	BurgerButton,
	MobileNavPanel,
} from "./HeaderStyles";
import { GlassFilter } from "../GlassFilter/GlassFilter";
import { CartTrigger } from "../Cart/CartTrigger";
import Logo from "../../assets/img/Logo.svg";
import instLogo from "../../assets/instagram.svg";
import faceLogo from "../../assets/facebook.svg";

import { PRODUCTS__CATEGORIES } from "../../data/products";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLocale, type Locale } from "../../store/slices/langSlice";

const PHONE_HREF = "tel:+380686667771";

export const Header = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const locale = useAppSelector((state) => state.locale.value);

	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
	const location = useLocation();
	const [lastPathname, setLastPathname] = useState(location.pathname);

	// Закрываем мобильное меню при переходе на другую страницу.
	// Делается прямо во время рендера (а не в useEffect), как и рекомендует
	// react-hooks/set-state-in-effect для паттерна "сброс состояния при
	// смене пропса/маршрута" — так не возникает лишнего цикла рендеров.
	if (location.pathname !== lastPathname) {
		setLastPathname(location.pathname);
		setIsMobileOpen(false);
		setIsMobileProductsOpen(false);
	}

	const handleLocaleChange = (next: Locale) => {
		if (next !== locale) dispatch(setLocale(next));
	};

	return (
		<>
			<GlassFilter />
			<HeaderStyles>
				<Container>
					<Flex $justify="space-between" $align="center">
						<LogoContainer>
							<NavLink to="/">
								<img src={Logo} alt="Logo" />
							</NavLink>
						</LogoContainer>

						<nav>
							<NavList>
								<NavItem>
									<NavLink to="/">{t("nav.main")}</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/about-us">{t("nav.aboutUs")}</NavLink>
								</NavItem>
								<NavItem tabIndex={0}>
									<DropdownButton type="button">
										{t("nav.products")}
										<svg viewBox="0 0 12 8" fill="none">
											<path
												d="M1 1.5 6 6.5 11 1.5"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</DropdownButton>
									<DropdownPanel>
										<Link to="/products">{t("nav.allProducts")}</Link>
										{PRODUCTS__CATEGORIES.map((category) => (
											<Link key={category.link} to={category.link}>
												{t(`products.${category.key}.categoryTitle`)}
											</Link>
										))}
									</DropdownPanel>
								</NavItem>
							</NavList>
						</nav>

						<ActionsGroup>
							<LangToggle role="group" aria-label={t("header.langGroup")}>
								<button
									type="button"
									className={locale === "ua" ? "active" : ""}
									onClick={() => handleLocaleChange("ua")}>
									UA
								</button>
								<button
									type="button"
									className={locale === "en" ? "active" : ""}
									onClick={() => handleLocaleChange("en")}>
									EN
								</button>
							</LangToggle>

							<SocialMedia>
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
							</SocialMedia>

							<PhoneButton href={PHONE_HREF} aria-label={t("header.callUs")}>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<path
										d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</PhoneButton>

							<CartTrigger />

							<BurgerButton
								type="button"
								className={isMobileOpen ? "open" : ""}
								aria-label={t("header.menu")}
								aria-expanded={isMobileOpen}
								onClick={() => setIsMobileOpen((prev) => !prev)}>
								<span />
								<span />
								<span />
							</BurgerButton>
						</ActionsGroup>
					</Flex>
				</Container>
			</HeaderStyles>

			<MobileNavPanel $open={isMobileOpen}>
				<NavLink to="/">{t("nav.main")}</NavLink>
				<NavLink to="/about-us">{t("nav.aboutUs")}</NavLink>

				<button
					type="button"
					className="mobile-link"
					onClick={() => setIsMobileProductsOpen((prev) => !prev)}>
					{t("nav.products")} {isMobileProductsOpen ? "▲" : "▼"}
				</button>
				{isMobileProductsOpen && (
					<div className="mobile-submenu">
						<Link to="/products">{t("nav.allProducts")}</Link>
						{PRODUCTS__CATEGORIES.map((category) => (
							<Link key={category.link} to={category.link}>
								{t(`products.${category.key}.categoryTitle`)}
							</Link>
						))}
					</div>
				)}

				<div className="mobile-divider" />

				<LangToggle role="group" aria-label={t("header.langGroup")}>
					<button
						type="button"
						className={locale === "ua" ? "active" : ""}
						onClick={() => handleLocaleChange("ua")}>
						UA
					</button>
					<button
						type="button"
						className={locale === "en" ? "active" : ""}
						onClick={() => handleLocaleChange("en")}>
						EN
					</button>
				</LangToggle>

				<div className="mobile-socials">
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
				</div>
			</MobileNavPanel>
		</>
	);
};

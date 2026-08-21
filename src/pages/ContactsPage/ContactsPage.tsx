import { useTranslation } from "react-i18next";
import { Container } from "../../styles/UIStyles";
import { TitleSpan } from "../../components/TitleSpan/TitleSpan";
import { Reveal } from "../../components/Reveal/Reveal";
import {
	ContactsSection,
	ContactsIntro,
	ContactsGrid,
	ContactsInfoCard,
	ContactsRow,
	ContactsMapWrap,
} from "./ContactsPageStyles";

const SALES_PHONE = "+380 67 210 55 30";
const SALES_PHONE_HREF = "tel:+380672105530";
const SALES_EMAIL = "sales@evajuice.ua";
const SALES_EMAIL_HREF = "mailto:sales@evajuice.ua";

const ADDRESS = "вул. Бузька, 12, Хмельницький, Україна";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export const ContactsPage = () => {
	const { t } = useTranslation();

	return (
		<main>
			<ContactsSection>
				<Container>
					<TitleSpan title={t("contactsPage.title")} />
					<ContactsIntro>{t("contactsPage.intro")}</ContactsIntro>

					<Reveal>
						<ContactsGrid>
						<ContactsInfoCard>
							<ContactsRow>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path
										d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<div>
									<span>{t("contactsPage.salesLabel")}</span>
									<a href={SALES_PHONE_HREF}>{SALES_PHONE}</a>
								</div>
							</ContactsRow>

							<ContactsRow>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="2" y="4" width="20" height="16" rx="2" />
									<path d="m22 6-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<div>
									<span>{t("contactsPage.emailLabel")}</span>
									<a href={SALES_EMAIL_HREF}>{SALES_EMAIL}</a>
								</div>
							</ContactsRow>

							<ContactsRow>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path
										d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<circle cx="12" cy="10" r="3" />
								</svg>
								<div>
									<span>{t("contactsPage.addressLabel")}</span>
									<a
										href={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`}
										target="_blank"
										rel="noopener noreferrer">
										{t("contactsPage.address")}
									</a>
								</div>
							</ContactsRow>
						</ContactsInfoCard>

						<ContactsMapWrap>
							<iframe
								src={MAP_SRC}
								title={t("contactsPage.mapTitle")}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</ContactsMapWrap>
					</ContactsGrid>
					</Reveal>
				</Container>
			</ContactsSection>
		</main>
	);
};

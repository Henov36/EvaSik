import { useTranslation } from "react-i18next";

/**
 * Наборы сообщений для бегущей строки, локализованные через i18n.
 * Раньше были продублированы вручную в ProductPage.tsx, GlassJuicePage.tsx,
 * BoxJuicePage.tsx и TeaPage.tsx — теперь общий хук на всех страницах.
 */
export const useMarqueeMessages = () => {
	const { t } = useTranslation();

	return {
		quality: t("marquee.quality", { returnObjects: true }) as string[],
		motivation: t("marquee.motivation", { returnObjects: true }) as string[],
	};
};

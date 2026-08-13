import { useTranslation } from "react-i18next";

export const useMarqueeMessages = () => {
	const { t } = useTranslation();

	return {
		quality: t("marquee.quality", { returnObjects: true }) as string[],
		motivation: t("marquee.motivation", { returnObjects: true }) as string[],
	};
};

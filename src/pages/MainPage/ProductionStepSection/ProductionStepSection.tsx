import { useTranslation } from "react-i18next";
import { Container } from "../../../styles/UIStyles";
import { TitleSpan } from "../../../components/TitleSpan/TitleSpan";
import { ProductionStep } from "../../../components/ProductionSteps/ProductionStep";
import { ProdSectionStyles } from "./ProdStepSectionStyle";
import second from "../../../assets/img/ProductioSteps/second_step.svg";
import third from "../../../assets/img/ProductioSteps/third_step.svg";
import four from "../../../assets/img/ProductioSteps/four_step.svg";
import five from "../../../assets/img/ProductioSteps/five_step.svg";
import six from "../../../assets/img/ProductioSteps/six_step.svg";
import seven from "../../../assets/img/ProductioSteps/seven_step.svg";
import FirstStep from "../../../assets/img/ProductioSteps/first_step.svg";

export const ProductionStepSection = () => {
	const { t } = useTranslation();

	return (
		<ProdSectionStyles>
			<Container>
				<TitleSpan title={t("productionSteps.title")} />
				<div className="cards__container">
					<ProductionStep img={FirstStep} text={t("productionSteps.step1")} title={t("productionSteps.titleStep1")} />
					<ProductionStep img={second} text={t("productionSteps.step2")} title={t("productionSteps.titleStep2")} />
					<ProductionStep img={third} text={t("productionSteps.step3")} title={t("productionSteps.titleStep3")} />
					<ProductionStep img={four} text={t("productionSteps.step4")} title={t("productionSteps.titleStep4")} />
					<ProductionStep img={five} text={t("productionSteps.step5")} title={t("productionSteps.titleStep5")} />
					<ProductionStep img={six} text={t("productionSteps.step6")} title={t("productionSteps.titleStep6")} />
					<ProductionStep img={seven} text={t("productionSteps.step7")} title={t("productionSteps.titleStep7")} />
				</div>
			</Container>
		</ProdSectionStyles>
	);
};

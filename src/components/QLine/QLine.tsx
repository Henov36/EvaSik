import { useTranslation } from "react-i18next";
import { Flex, Container } from "../../styles/UIStyles";
import PlantLogo from "../../assets/img/plant.svg";
import ShieldLogo from "../../assets/img/shield.svg";
import WaterLogo from "../../assets/img/water.svg";
import FamilyLogo from "../../assets/img/Family.svg";
import { QLineStyles, QLineSection } from "./QLineStyles";

interface QLineProps {
	background?: string;
	isActive?: boolean;
}

export const QLine = ({ background, isActive = false }: QLineProps) => {
	const { t } = useTranslation();

	return (
		<QLineSection $background={background} $isActive={isActive}>
			<Container>
				<QLineStyles>
					<h1>{t("qline.title")}</h1>
					<Flex $justify="space-between" as="ul">
						<li>
							<Flex $justify="center" $align="center">
								<img src={PlantLogo} alt="Plant Logo" />
							</Flex>
							<p>
								{t("qline.item1Line1")} <br />
								{t("qline.item1Line2")}
							</p>
						</li>
						<li>
							<Flex $justify="center" $align="center">
								<img src={ShieldLogo} alt="Shield Logo" />
							</Flex>
							<p>
								{t("qline.item2Line1")} <br />
								{t("qline.item2Line2")}
							</p>
						</li>
						<li>
							<Flex $justify="center" $align="center">
								<img src={WaterLogo} alt="Water Logo" />
							</Flex>
							<p>
								{t("qline.item3Line1")} <br />
								{t("qline.item3Line2")}
							</p>
						</li>
						<li>
							<Flex $justify="center" $align="center">
								<img src={FamilyLogo} alt="Family Logo" />
							</Flex>
							<p>
								{t("qline.item4Line1")} <br />
								{t("qline.item4Line2")}
							</p>
						</li>
					</Flex>
				</QLineStyles>
			</Container>
		</QLineSection>
	);
};

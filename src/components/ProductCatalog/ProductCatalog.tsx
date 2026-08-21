import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	type Product,
	getFlavorFamilies,
	getLocalizedProduct,
	getProductFormatTag,
	getProductSizeLabel,
	type FlavorFamily,
} from "../../data/products";
import {
	CatalogWrap,
	FilterRow,
	FilterPill,
	Grid,
	Card,
	EmptyState,
} from "./ProductCatalogStyles";

interface ProductCatalogProps {
	products: Product[];
}

export const ProductCatalog = ({ products }: ProductCatalogProps) => {
	const { t, i18n } = useTranslation();
	const [activeFamily, setActiveFamily] = useState<FlavorFamily | "all">("all");

	const availableFamilies = useMemo(() => {
		const set = new Set<FlavorFamily>();
		products.forEach((p) => getFlavorFamilies(p).forEach((f) => set.add(f)));
		return Array.from(set);
	}, [products]);

	const filtered = useMemo(() => {
		return activeFamily === "all"
			? products
			: products.filter((p) => getFlavorFamilies(p).includes(activeFamily));
	}, [products, activeFamily]);

	return (
		<CatalogWrap>
			<FilterRow>
				<FilterPill
					type="button"
					$active={activeFamily === "all"}
					onClick={() => setActiveFamily("all")}>
					{t("products.flavorFamily.all")}
				</FilterPill>
				{availableFamilies.map((family) => (
					<FilterPill
						key={family}
						type="button"
						$active={activeFamily === family}
						onClick={() => setActiveFamily(family)}>
						{t(`products.flavorFamily.${family}`)}
					</FilterPill>
				))}
			</FilterRow>

			{filtered.length === 0 ? (
				<EmptyState>{t("products.catalog.empty")}</EmptyState>
			) : (
				<Grid>
					{filtered.map((product) => {
						const localized = getLocalizedProduct(product, i18n.language);
						return (
							<Card key={product.id}>
								<NavLink to={product.link}>
									<span className="tag">
										{getProductFormatTag(product, i18n.language)}
									</span>
									<div className="img-wrap">
										<img src={product.img} alt={localized.title} />
									</div>
									<h3>{localized.title}</h3>
									<span className="size">
										{getProductSizeLabel(product, i18n.language)}
									</span>
									<span className="details-btn">
										{t("products.detail.moreDetails")}
									</span>
								</NavLink>
							</Card>
						);
					})}
				</Grid>
			)}
		</CatalogWrap>
	);
};

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() =>
	import("../MainPage/MainPage").then((m) => ({ default: m.MainPage })),
);
const AboutUsPage = lazy(() =>
	import("../AboutUsPage/AboutUsPage").then((m) => ({ default: m.AboutUsPage })),
);
const ProductPage = lazy(() =>
	import("../ProductPage/ProductPage").then((m) => ({ default: m.ProductPage })),
);
const TeaPage = lazy(() =>
	import("../ProductPage/TeaPage/TeaPage").then((m) => ({ default: m.TeaPage })),
);
const GlassJuicePage = lazy(() =>
	import("../ProductPage/GlassJuicePage/GlassJuicePage").then((m) => ({
		default: m.GlassJuicePage,
	})),
);
const BoxJuicePage = lazy(() =>
	import("../ProductPage/BoxJuice/BoxJuicePage").then((m) => ({
		default: m.BoxJuicePage,
	})),
);
const ProductDetailPage = lazy(() =>
	import("../ProductPage/ProductDetailPage/ProductDetailPage").then((m) => ({
		default: m.ProductDetailPage,
	})),
);
const ContactsPage = lazy(() =>
	import("../ContactsPage/ContactsPage").then((m) => ({ default: m.ContactsPage })),
);

export const PageRouting = () => {
	return (
		<Suspense fallback={null}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				<Route path="/products" element={<ProductPage />} />
				<Route path="/products/glass" element={<GlassJuicePage />} />
				<Route path="/products/box" element={<BoxJuicePage />} />
				<Route path="/products/tea" element={<TeaPage />} />

				<Route path="/products/:category/:slug" element={<ProductDetailPage />} />
			</Routes>
		</Suspense>
	);
};

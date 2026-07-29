import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Ленивая загрузка страниц: каждая страница попадает в свой чанк и
// подгружается только при переходе на неё, а не в общем бандле при
// первом заходе на сайт — это заметно сокращает вес и время начальной
// загрузки (MainPage тоже лениво грузится, но React уже начинает её
// запрашивать сразу вместе с первым рендером роутера).
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

export const PageRouting = () => {
	return (
		<Suspense fallback={null}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/products" element={<ProductPage />} />
				<Route path="/products/glass" element={<GlassJuicePage />} />
				<Route path="/products/box" element={<BoxJuicePage />} />
				<Route path="/products/tea" element={<TeaPage />} />

				{/*
				  Раньше здесь было 26 отдельных статичных роутов
				  (/products/glass/appleGrapes, /products/box/apple, /products/tea/cherry...),
				  каждый на свой скопированный компонент. Теперь один динамический
				  роут + src/data/products.ts как источник данных.
				*/}
				<Route path="/products/:category/:slug" element={<ProductDetailPage />} />
			</Routes>
		</Suspense>
	);
};

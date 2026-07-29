import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./components/Header/Header";
import { PageRouting } from "./pages/PageRouting/PageRouting";
import { Footer } from "./components/Footer/Footer";
import { FruitScroll } from "./components/FruitScroll/FruitScroll";
import { initSmoothScroll, scrollToTopInstant } from "./lib/smoothScroll";

const RouteChangeHandler = () => {
	useEffect(() => {
		history.scrollRestoration = "manual";
	}, []);

	const { pathname } = useLocation();

	useEffect(() => {
		history.scrollRestoration = "manual";

		requestAnimationFrame(() => {
			scrollToTopInstant();

			ScrollTrigger.clearScrollMemory();
			ScrollTrigger.refresh();
		});
	}, [pathname]);

	return null;
};

function App() {
	useEffect(() => {
		initSmoothScroll();
	}, []);

	// На страницах с большим числом асинхронно подгружаемых картинок
	// (MainPage: категории, товары, партнёры) высота документа меняется
	// уже ПОСЛЕ первого ScrollTrigger.refresh() в RouteChangeHandler —
	// из-за этого триггеры (в т.ч. FruitScroll) считались от старой,
	// заниженной высоты, и анимация "то работает, то нет" в зависимости
	// от скорости загрузки картинок. ResizeObserver на body ловит любое
	// последующее изменение высоты (догрузка картинок/шрифтов/контента)
	// и пересчитывает триггеры заново.
	useEffect(() => {
		let rafId = 0;
		const ro = new ResizeObserver(() => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => ScrollTrigger.refresh());
		});
		ro.observe(document.body);

		return () => {
			cancelAnimationFrame(rafId);
			ro.disconnect();
		};
	}, []);

	return (
		<>
			<RouteChangeHandler />
			<FruitScroll />
			<Header />
			<PageRouting />
			<Footer />
		</>
	);
}

export default App;

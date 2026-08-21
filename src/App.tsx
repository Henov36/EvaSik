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

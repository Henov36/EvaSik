import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let instance: LocomotiveScroll | null = null;

export const initSmoothScroll = () => {
	if (instance) return instance;

	instance = new LocomotiveScroll({
		lenisOptions: {
			smoothWheel: true,
			syncTouch: false,
			duration: 3,
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			wheelMultiplier: 0.8,
			touchMultiplier: 1,
		},
	});

	instance.lenisInstance?.on("scroll", () => {
		ScrollTrigger.update();
	});

	return instance;
};

export const getSmoothScroll = () => instance;

export const destroySmoothScroll = () => {
	if (!instance) return;

	instance.destroy();
	instance = null;
};

export const scrollToTopInstant = () => {
	if (!instance) {
		window.scrollTo(0, 0);
		return;
	}

	instance.scrollTo(0, {
		immediate: true,
		force: true,
	});
};

export const pauseSmoothScroll = () => {
	instance?.stop();
};

export const resumeSmoothScroll = () => {
	instance?.start();
};

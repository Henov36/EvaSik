import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FruitLayer, FruitItem } from "./FruitScrollStyles";
import RedApple from "../../assets/img/fruts/redApple.webp";
import GreenApple from "../../assets/img/fruts/GreenApple.webp";
import GreenApple2 from "../../assets/img/fruts/GreenApple.webp";
// import RedApple2 from "../../assets/img/fruts/redApple.webp";
import MixApples from "../../assets/img/fruts/AllApples.webp";

gsap.registerPlugin(ScrollTrigger);

interface FruitConfig {
	img: string;
	size: number;
	top: string;
	left?: string;
	right?: string;
	spins: number;
	wobble: number;
	height: number;
	scale: number;
	opacity: number;
}

const FRUITS: FruitConfig[] = [
	{
		img: RedApple,
		size: 156,
		top: "3%",
		left: "-2%",
		spins: 0.1,
		wobble: -40,
		height: 550,
		scale: 1,
		opacity: 1,
	},
	{
		img: GreenApple2,
		size: 240,
		top: "2%",
		right: "-10%",
		spins: -0.1,
		wobble: -70,
		height: 240,
		scale: 1.2,
		opacity: 1,
	},
	{
		img: GreenApple,
		size: 240,
		top: "-30%",
		left: "0%",
		spins: 0.1,
		wobble: -140,
		height: 220,
		scale: 1.2,
		opacity: 1,
	},
	{
		img: MixApples,
		size: 150,
		top: "100%",
		right: "47%",
		spins: 0,
		wobble: 0,
		height: -100,
		scale: 2,
		opacity: 1,
	},
];
const MOBILE_FRUITS: FruitConfig[] = [
	{
		img: RedApple,
		size: 80,
		top: "2%",
		left: "-30%",
		spins: 0.1,
		wobble: -320,
		height: 250,
		scale: 0.8,
		opacity: 0.8,
	},
	{
		img: GreenApple2,
		size: 120,
		top: "50%",
		right: "5%",
		spins: -0.1,
		wobble: 250,
		height: 120,
		scale: 0.9,
		opacity: 0.8,
	},
	{
		img: GreenApple,
		size: 110,
		top: "-10%",
		left: "-5%",
		spins: 0.1,
		wobble: -50,
		height: 100,
		scale: 0.9,
		opacity: 0.8,
	},
	{
		img: MixApples,
		size: 90,
		top: "90%",
		right: "40%",
		spins: 0,
		wobble: -50,
		height: -70,
		scale: 1.2,
		opacity: 0.8,
	},
];

/**
 * Декоративный слой фруктов, которые плавно вращаются («катятся») и
 * слегка покачиваются по горизонтали по мере скролла всей страницы.
 * Крепится один раз в App.tsx поверх всего сайта, но не перехватывает
 * клики (pointer-events: none) и скрывается на мобильных, чтобы не
 * загромождать маленький экран.
 */
export const FruitScroll = () => {
	const layerRef = useRef<HTMLDivElement>(null);
	const fruitRefs = useRef<Array<HTMLImageElement | null>>([]);

	useGSAP(
		() => {
			const scrollHeight = document.documentElement;
			const mm = gsap.matchMedia();

			mm.add("(max-width: 768px)", () => {
				fruitRefs.current.forEach((el, index) => {
					if (!el) return;
					const { spins, wobble, height, scale, opacity } =
						MOBILE_FRUITS[index];

					gsap.to(el, {
						rotation: 360 * spins,
						x: wobble + 100,
						y: height - 100,
						opacity: opacity,
						ease: "none",
						scale: scale,
						scrollTrigger: {
							trigger: scrollHeight,
							start: "top top",
							end: "bottom bottom",
							scrub: 0.5,
							invalidateOnRefresh: true,
						},
					});
				});
			});

			mm.add("(min-width: 769px)", () => {
				// десктопные значения
				
			fruitRefs.current.forEach((el, index) => {
				if (!el) return;
				const { spins, wobble, height, scale, opacity } = FRUITS[index];

				gsap.to(el, {
					rotation: 360 * spins,
					x: wobble,
					y: height,
					opacity: opacity,
					ease: "none",
					scale: scale,
					scrollTrigger: {
						trigger: scrollHeight,
						start: "top top",
						end: "bottom bottom",
						scrub: 0.8,
						invalidateOnRefresh: true,
					},
				});
			});
			});

			return () => mm.revert();
		},
		{ scope: layerRef },
	);

	return (
		<FruitLayer ref={layerRef} aria-hidden="true">
			{FRUITS.map((fruit, index) => (
				<FruitItem
					key={`${fruit.img}-${index}`}
					ref={(el) => {
						fruitRefs.current[index] = el;
					}}
					src={fruit.img}
					alt=""
					style={{
						top: fruit.top,
						left: fruit.left,
						right: fruit.right,
						width: fruit.size,
					}}
				/>
			))}
		</FruitLayer>
	);
};

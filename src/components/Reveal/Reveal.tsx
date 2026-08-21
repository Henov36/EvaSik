import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = "up" | "left" | "right";

interface RevealProps {
	children: ReactNode;

	direction?: RevealDirection;

	delay?: number;
	className?: string;
}

const OFFSETS: Record<RevealDirection, { x: number; y: number }> = {
	up: { x: 0, y: 60 },
	left: { x: -80, y: 0 },
	right: { x: 80, y: 0 },
};

export const Reveal = ({ children, direction = "up", delay = 0, className }: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const el = ref.current;
			if (!el) return;

			const { x, y } = OFFSETS[direction];

			gsap.fromTo(
				el,
				{ opacity: 0, x, y },
				{
					opacity: 1,
					x: 0,
					y: 0,
					duration: 0.9,
					delay,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);
		},
		{ scope: ref, dependencies: [direction, delay] },
	);

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	);
};

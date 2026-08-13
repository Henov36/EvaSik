import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
	SellProductSectionStyle,
	ScrollWrapper,
	ProductWRAPPER,
} from "./SellProductSectionStyles.ts";

gsap.registerPlugin(ScrollTrigger);

interface SellProductSectionProps {
	children: ReactNode;
	bg?: string;
}

export const SellProductSection = ({
	children,
	bg,
}: SellProductSectionProps) => {
	const triggerRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const moverRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const trigger = triggerRef.current;
		const container = containerRef.current;
		const mover = moverRef.current;

		if (!trigger || !container || !mover) return;

		const mm = gsap.matchMedia();

		mm.add(
			{
				isDesktop: "(min-width: 901px)",
				isMobile: "(max-width: 900px)",
			},
			(context) => {
				const { isMobile } = context.conditions as { isMobile: boolean };

				const introTween = gsap.fromTo(
					container,
					{
						y: 0,
						opacity: 0.2,
					},
					{
						y: 0,
						opacity: 1,
						ease: "none",
						scrollTrigger: {
							trigger,
							start: "top bottom",
							end: "top top",
							scrub: true,
							invalidateOnRefresh: true,
						},
					},
				);

				let scrollAnimation: gsap.core.Tween | null = null;
				if (!isMobile) {
					scrollAnimation = gsap.to(mover, {
						y: () => -(mover.scrollHeight - container.clientHeight),
						ease: "none",
						scrollTrigger: {
							trigger,
							start: "top top",
							end: () => {
								const distance = mover.scrollHeight - container.clientHeight;
								return `+=${distance}`;
							},
							pin: true,
							scrub: true,
							invalidateOnRefresh: true,
						},
					});
				}

				return () => {
					introTween.scrollTrigger?.kill();
					introTween.kill();
					scrollAnimation?.scrollTrigger?.kill();
					scrollAnimation?.kill();
				};
			},
		);

		return () => mm.revert();
	}, []);

	return (
		<ScrollWrapper ref={triggerRef}>
			<SellProductSectionStyle ref={containerRef} $bg={bg}>
				<ProductWRAPPER ref={moverRef}>{children}</ProductWRAPPER>
			</SellProductSectionStyle>
		</ScrollWrapper>
	);
};

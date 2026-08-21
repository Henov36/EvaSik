import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { SliderRoot, SliderControls, SliderViewport, SliderArrow } from "./SliderStyles";

interface SliderProps {
	children: ReactNode;
	ariaLabel: string;
	className?: string;
}

export const Slider = ({ children, ariaLabel, className }: SliderProps) => {
	const trackRef = useRef<HTMLDivElement>(null);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(false);

	const updateArrows = useCallback(() => {
		const el = trackRef.current;
		if (!el) return;
		setCanPrev(el.scrollLeft > 4);
		setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
	}, []);

	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;

		updateArrows();
		el.addEventListener("scroll", updateArrows, { passive: true });

		const ro = new ResizeObserver(updateArrows);
		ro.observe(el);

		return () => {
			el.removeEventListener("scroll", updateArrows);
			ro.disconnect();
		};
	}, [updateArrows]);

	const getStep = (el: HTMLDivElement) => {
		const item = el.firstElementChild as HTMLElement | null;
		if (!item) return el.clientWidth;
		const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
		return item.getBoundingClientRect().width + gap;
	};

	const scrollByPage = (direction: 1 | -1) => {
		const el = trackRef.current;
		if (!el) return;
		el.scrollBy({ left: direction * getStep(el), behavior: "smooth" });
	};

	return (
		<SliderRoot className={className}>
			<SliderControls>
				<SliderArrow
					type="button"
					aria-label={`${ariaLabel} — prev`}
					disabled={!canPrev}
					onClick={() => scrollByPage(-1)}>
					←
				</SliderArrow>
				<SliderArrow
					type="button"
					aria-label={`${ariaLabel} — next`}
					disabled={!canNext}
					onClick={() => scrollByPage(1)}>
					→
				</SliderArrow>
			</SliderControls>

			<SliderViewport ref={trackRef} role="list" aria-label={ariaLabel}>
				{children}
			</SliderViewport>
		</SliderRoot>
	);
};

export { SliderItem } from "./SliderStyles";

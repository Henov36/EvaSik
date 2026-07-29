import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { SliderRoot, SliderControls, SliderViewport, SliderArrow } from "./SliderStyles";

interface SliderProps {
	children: ReactNode;
	ariaLabel: string;
	className?: string;
}

/**
 * Универсальная карусель на нативном scroll-snap вместо ручного расчёта
 * "% на страницу". Раньше в CategoriesSection/PartnersSection число карточек
 * на страницу было зашито константой (5), а реальная ширина карточки менялась
 * по media-запросам — на мобильном это разъезжалось и часть товаров/спонсоров
 * становилась недоступна. Скролл-контейнер сам решает, сколько элементов
 * помещается на экране (см. SliderItem $mobile/$tablet/$desktop), поэтому
 * ломаться просто нечему.
 *
 * Стрелки — единым рядом над треком (а не по бокам). Пагинации точками
 * намеренно нет — прокрутка нативная (свайп/scroll-snap), точки только
 * дублировали бы то, что и так видно на экране.
 */
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

	// Раньше скроллили на фиксированные 90% ширины вьюпорта — это почти
	// никогда не совпадало с реальным шагом (ширина карточки + gap), из-за
	// чего scroll-snap то доводил до следующей карточки, то откатывал
	// обратно (казалось, будто слайд "откидывает в сторону" вместо того,
	// чтобы полностью занять экран). Теперь считаем шаг по фактической
	// ширине первого элемента + gap между карточками — ровно на столько,
	// на сколько снап-точки отстоят друг от друга.
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

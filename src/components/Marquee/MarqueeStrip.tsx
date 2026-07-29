interface MarqueeStripProps {
	/** Текст сообщений, которые бегут по кругу */
	messages: string[];
	/** Иконка, которая ставится после каждого сообщения */
	logo: string;
	/**
	 * Сколько раз продублировать набор сообщений подряд, чтобы бегущая
	 * строка визуально не обрывалась при анимации (CSS-анимация крутит
	 * ".marquee-content" по кругу, поэтому контент должен быть шире экрана).
	 */
	repeat?: number;
}

/**
 * Рендерит содержимое бегущей строки. Компонент нужно оборачивать в
 * стилизованный контейнер `RunStroke` (он у каждой страницы свой, но
 * везде ожидает один и тот же класс `.marquee-content`).
 *
 * Раньше на каждой странице был вручную скопирован один и тот же блок
 * из 4-6 одинаковых <div> с <span>, теперь это делает .map().
 */
export const MarqueeStrip = ({ messages, logo, repeat = 4 }: MarqueeStripProps) => (
	<div className="marquee-content">
		{Array.from({ length: repeat }).map((_, groupIndex) => (
			<div key={groupIndex}>
				{messages.map((message) => (
					<span key={message}>
						{message}
						<img src={logo} alt="" />
					</span>
				))}
			</div>
		))}
	</div>
);

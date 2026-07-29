import Glass from "../../assets/img/Glass.webp";

export const GlassFilter = () => {
	return (
		<svg style={{ display: "none" }}>
			<filter id="GlassFilter">
				<feImage href={Glass} result="displaceMap" preserveAspectRatio="none" />
				<feTurbulence
					type="turbulence"
					baseFrequency="0.02" // Чуть увеличиваем, чтобы волна умещалась внутри хедера
					numOctaves={2}
					result="glass"
				/>
				<feDisplacementMap
					in="SourceGraphic"
					in2="turbulence"
					scale={30} // Передаем как число
					xChannelSelector="R"
					yChannelSelector="G"
				/>
			</filter>
		</svg>
	);
};

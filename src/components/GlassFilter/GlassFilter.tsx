import Glass from "../../assets/img/Glass.webp";

export const GlassFilter = () => {
	return (
		<svg
			width={0}
			height={0}
			style={{ position: "absolute", pointerEvents: "none" }}>
			<filter id="GlassFilter">
				<feImage href={Glass} result="displaceMap" preserveAspectRatio="none" />
				<feTurbulence
					type="turbulence"
					baseFrequency="0.02"
					numOctaves={2}
					result="glass"
				/>
				<feDisplacementMap
					in="SourceGraphic"
					in2="turbulence"
					scale={30}
					xChannelSelector="R"
					yChannelSelector="G"
				/>
			</filter>
		</svg>
	);
};

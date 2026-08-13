interface MarqueeStripProps {
	messages: string[];
	logo: string;
	repeat?: number;
}

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

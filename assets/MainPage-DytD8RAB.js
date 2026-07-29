import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{c as t,i as n,l as r,m as i,n as a,o,r as s,u as c}from"./granat-GlIjsjm2.js";import{c as l,g as u,h as d,l as f,t as ee,u as p,y as m}from"./products-B7L_1Qqh.js";import{n as h,r as g,t as _}from"./src-CSIp0dDL.js";import{t as v}from"./Logo-B322fVD0.js";import{n as te,r as y,t as b}from"./TitleSpan-8itUbjYJ.js";import{a as x,i as S,n as C,t as w}from"./Slider-aBki4V3v.js";import{t as T}from"./appleSVG-CVi6d-lo.js";var E=e(i(),1),D=`/EvaSik/assets/fructs-DH7jU9l6.png`,O=`/EvaSik/assets/g11-Cgwrnsa8.png`,k=o`
  0% {
    transform: scale(1) var(--base-rotate, rotate(0deg));
  }
  50% {
    transform: scale(1.1) var(--pulse-rotate, rotate(10deg));
  }
  100% {
    transform: scale(1) var(--base-rotate, rotate(0deg));
  }
`,A=r.main``,j=r.section`
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.35) 21%,
			rgba(230, 212, 184, 0.81) 83%
		),
		url(${O});
	background-size: cover;
	background-position: center 30%;
	background-repeat: no-repeat;
	overflow: hidden;
	position: relative;
	padding: 100px 0px 20px 0px;

	@media (max-width: 900px) {
		padding: 16px 0px 10px 0px;
	}
`,M=r.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		width: 100%;
	}
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		img {
			width: 100%;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		}
		h1 {
			text-align: center;
			margin-top: 20px;
			margin-bottom: 0;
			font-size: 52px;
			color: #fff;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			font-family: "Gilroy Medium" sans-serif;
		}
		@media (max-width: 900px) {
			width: 100%;
			margin-top: 100px;
		}
	}

	@media (max-width: 1200px) {
		.content h1 {
			font-size: 40px;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column-reverse;
		justify-content: center;
		gap: 24px;
		padding: 24px 0;

		div {
			width: 50%;
		}
		.content h1 {
			font-size: 30px;
			margin-top: 12px;
		}
	}

	@media (max-width: 480px) {
		.content h1 {
			font-size: 24px;
		}
	}
`,N=r.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 30px;
	padding: 20px 0px 0px 0px;

	@media (max-width: 900px) {
		flex-direction: column;
		padding: 10px 0px 0px 0px;
		gap: 16px;
	}
`,P=r.div`
	width: 50%;
	color: var(--accent-color);

	.eyebrow {
		font-size: 14px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 16px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	h1 {
		text-align: left;
		font-size: 52px;
		line-height: 1.12;
		font-family: "Cormorant", serif;
		font-weight: 800;
		margin-bottom: 16px;
		color: var(--accent-color);
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	p {
		font-size: 16px;
		max-width: 420px;
		opacity: 0.8;
		margin-bottom: 22px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	img {
		width: 40%;
		margin-bottom: 20px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
	}

	@media (max-width: 900px) {
		width: 100%;
		text-align: center;
		margin-top: 100px;
		position: relative;
		z-index: 100;

		p {
			max-width: none;
			margin-left: auto;
			margin-right: auto;
		}

		h1 {
			text-align: center;
			font-size: 36px;
		}
		img {
			width: 30%;
		}
	}
`,F=r.div`
	display: flex;
	align-items: center;
	gap: 20px;

	.primary-btn {
		padding: 16px 28px;
		border-radius: 40px;
		background: var(--accent-color);
		color: var(--main-color);
		font-weight: 600;
		font-size: 14px;
		transition: transform 0.2s ease;

		@media (hover: hover) {
			&:hover {
				transform: translateY(-3px);
			}
		}
	}

	.play-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 600;
		font-size: 14px;

		span {
			width: 42px;
			height: 42px;
			border-radius: 50%;
			background: var(--main-color);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
		}
	}

	@media (max-width: 900px) {
		justify-content: center;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 14px;
	}
`,I=r.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 30%;
		max-width: 260px;
		filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2));
		/* transform-origin: 50% 85%; */
		animation: heroBottleFloat 6s ease-in-out infinite;
	}

	@media (max-width: 900px) {
		width: 100%;
		img {
			width: 100px;
			margin-top: 50px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		img {
			animation: none;
		}
	}

	@keyframes heroBottleFloat {
		0% {
			transform: rotate(15deg) scale(1.05);
		}
		50% {
			transform: rotate(0deg) scale(1);
		}
		100% {
			transform: rotate(15deg) scale(1.05);
		}
	}
`,L=r.ul`
	display: flex;
	justify-content: space-between;
	gap: 16px;
	background: var(--main-color);
	border-radius: 20px;
	padding: 22px 30px;
	margin: 26px 0px 0px 0px;

	li {
		display: flex;
		align-items: center;
		gap: 12px;
		flex: 1 1 0;

		img {
			width: 34px;
			height: 34px;
			flex-shrink: 0;
		}
		strong {
			display: block;
			font-size: 14px;
			color: var(--accent-color);
		}
		span {
			display: block;
			font-size: 12px;
			opacity: 0.65;
		}
	}

	@media (max-width: 900px) {
		flex-wrap: wrap;
		border-radius: 16px;
		padding: 20px;

		li {
			flex: 1 1 45%;
		}
	}
`,R=r.div`
	display: flex;
	justify-content: ${({$reverse:e})=>e?`center`:`space-between`};
	align-items: ${({$reverse:e})=>e?`center`:`end`};
	width: 100%;
	height: 100%;

	img {
		transform: ${({$reverse:e})=>e?`rotate(-15deg)`:`rotate(0deg)`};
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		/* animation: ${k} 3s ease infinite; */
		${({$reverse:e})=>e?t`
						animation: ${k} 3s ease infinite;
					`:t`
						animation: none;
					`}
	}

	@media (max-width: 900px) {
		width: 50%;
		img {
			width: 50%;
		}
	}
`,z=r.section`
	background-color: transparent;
	overflow: hidden;
	div {
		width: 100%;
	}
	.content__second-section {
		margin-right: 50px;
	}
	.juice-block {
		background-image: url(${D});
		background-size: contain;
		background-position-y: bottom;
		background-repeat: no-repeat;
		align-self: stretch;
		img {
			height: 400px;
		}
	}

	@media (max-width: 900px) {
		.content__second-section {
			margin-right: 0;
		}
		.juice-block {
			display: none;
		}
	}
`,ne=r.div`
	position: relative;
	width: 100%;
	height: auto;
`,B=r.section`
	position: relative; /* Меняем с absolute на relative, чтобы быть базой */
	width: 100%;
	height: 100vh; /* Фиксируем высоту пина ровно на экран */
	background: ${e=>e.$bg||`var(--blue-bg)`};
	transition: background 0.3s ease; /* Анимируем только фон, all может тормозить при GSAP */
	overflow: hidden; /* Оставляем для скрытия вылетающего контента */
	z-index: 1;
	h1 {
		font-size: 70px;
		font-family: "Cormorant", serif;
		font-optical-sizing: auto;
		font-weight: 800;
		font-style: normal;
	}

	/* На мобільному/планшеті GSAP не піне цю секцію (див. SellProductSection.tsx) —
	   тож висота й overflow мають відпустити контент у звичайний потік, інакше
	   все, що не влізло в 100vh, було б обрізано і недоступне для перегляду. */
	@media (max-width: 900px) {
		height: auto;
		overflow: visible;
	}

	@media (max-width: 900px) {
		h1 {
			font-size: 40px;
		}
	}
`,V=r.div`
	position: relative;
	width: 100%;
	padding-top: 5vh;

	.cards-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		transition: all 0.3s ease;
		height: 80vh;
		margin: 50px 0px;
		gap: 30px;
	}

	@media (max-width: 900px) {
		padding-top: 24px;

		.cards-container {
			height: auto;
			margin: 24px 0;
			gap: 20px;
		}
	}
`,H=s();h.registerPlugin(g);var U=({children:e,bg:t})=>{let n=(0,E.useRef)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);return _(()=>{let e=n.current,t=r.current,a=i.current;if(!e||!t||!a)return;let o=h.matchMedia();return o.add({isDesktop:`(min-width: 901px)`,isMobile:`(max-width: 900px)`},n=>{let{isMobile:r}=n.conditions,i=h.fromTo(t,{y:0,opacity:.2},{y:0,opacity:1,ease:`none`,scrollTrigger:{trigger:e,start:`top bottom`,end:`top top`,scrub:!0,invalidateOnRefresh:!0}}),o=null;return r||(o=h.to(a,{y:()=>-(a.scrollHeight-t.clientHeight),ease:`none`,scrollTrigger:{trigger:e,start:`top top`,end:()=>`+=${a.scrollHeight-t.clientHeight}`,pin:!0,scrub:!0,invalidateOnRefresh:!0}})),()=>{i.scrollTrigger?.kill(),i.kill(),o?.scrollTrigger?.kill(),o?.kill()}}),()=>o.revert()},[]),(0,H.jsx)(ne,{ref:n,children:(0,H.jsx)(B,{ref:r,$bg:t,children:(0,H.jsx)(V,{ref:i,children:e})})})},W=r.div`
	width: 23%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	p {
		text-align: center;
		width: 100%;
		height: 100px;
	}
	.photo__block {
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		width: 75%;
		overflow: hidden;
		/* border: 4px solid var(--accent-color); */
		height: 200px;
		img {
			width: 100%;
		}
	}
	.content__block {
		div {
			margin: 20px 0px;
			display: flex;
			align-items: center;
			justify-content: center;
			span {
				background-color: var(--accent-color);
				width: 100%;
				height: 2px;
				display: block;
			}
			img {
				margin: 0px 10px;
			}
		}
	}

	@media (max-width: 900px) {
		width: 47%;

		.photo__block {
			height: 160px;
			img {
				width: 45%;
			}
		}
		p {
			/* height: auto; */
			height: 67px;
			font-size: 14px;
		}
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`,G=`/EvaSik/assets/greemplant-Cyn8s7jm.svg`,K=({img:e,text:t})=>(0,H.jsxs)(W,{children:[(0,H.jsx)(`div`,{className:`photo__block`,children:(0,H.jsx)(`img`,{src:e,alt:``})}),(0,H.jsxs)(`div`,{className:`content__block`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{}),(0,H.jsx)(`img`,{src:G,alt:``}),(0,H.jsx)(`span`,{})]}),(0,H.jsx)(`p`,{children:t})]})]}),q=r.section`
	background-color: transparent;
	padding: 100px 0px 150px 0px;
	.cards__container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		width: 100%;
	}
`,J=`data:image/svg+xml,%3csvg%20width='775'%20height='775'%20viewBox='0%200%20775%20775'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5C775%20601.51%20601.51%20775%20387.5%20775C173.49%20775%200%20601.51%200%20387.5C0%20173.49%20173.49%200%20387.5%200ZM377.027%20135.471C354.924%20135.471%20331.454%20137.066%20306.617%20140.256C281.78%20143.218%20256.601%20149.029%20231.08%20157.688L252.955%20267.062C258.196%20264.556%20264.576%20262.049%20272.096%20259.543C279.843%20256.809%20288.16%20254.416%20297.047%20252.365C305.934%20250.314%20315.162%20248.605%20324.732%20247.238C334.303%20245.871%20343.759%20245.188%20353.102%20245.188C360.621%20245.188%20368.141%20245.985%20375.66%20247.58C383.408%20249.175%20390.357%20251.796%20396.51%20255.441C402.662%20259.087%20407.675%20263.986%20411.549%20270.139C415.65%20276.063%20417.701%20283.355%20417.701%20292.014C417.701%20306.141%20414.283%20319.927%20407.447%20333.371C400.839%20346.815%20392.066%20359.917%20381.129%20372.678C370.191%20385.21%20357.773%20397.515%20343.873%20409.592C329.973%20421.441%20315.846%20433.062%20301.49%20444.455C287.135%20455.62%20273.235%20466.558%20259.791%20477.268C246.347%20487.749%20234.498%20497.889%20224.244%20507.688L242.018%20628H565.357V508.713H380.445C406.194%20495.952%20430.576%20481.027%20453.59%20463.938C476.604%20446.62%20496.656%20428.049%20513.746%20408.225C531.064%20388.4%20544.736%20367.779%20554.762%20346.359C565.016%20324.712%20570.143%20303.179%20570.143%20281.76C570.143%20262.163%20566.269%20243.479%20558.521%20225.705C551.002%20207.932%20539.267%20192.437%20523.316%20179.221C507.366%20165.777%20487.2%20155.181%20462.818%20147.434C438.665%20139.458%20410.068%20135.471%20377.027%20135.471Z'%20fill='%23004B1B'/%3e%3c/svg%3e`,Y=`data:image/svg+xml,%3csvg%20width='775'%20height='775'%20viewBox='0%200%20775%20775'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5C775%20601.51%20601.51%20775%20387.5%20775C173.49%20775%200%20601.51%200%20387.5C0%20173.49%20173.49%200%20387.5%200ZM358.57%20135.471C330.771%20135.699%20305.478%20138.091%20282.691%20142.648C260.133%20146.978%20238.144%20154.156%20216.725%20164.182V257.15C224.928%20253.505%20233.814%20250.201%20243.385%20247.238C252.955%20244.276%20262.639%20241.77%20272.438%20239.719C282.464%20237.44%20292.376%20235.731%20302.174%20234.592C312.2%20233.452%20321.77%20232.883%20330.885%20232.883C340.455%20232.883%20349.57%20233.908%20358.229%20235.959C366.887%20237.782%20374.521%20240.744%20381.129%20244.846C387.737%20248.947%20392.978%20254.302%20396.852%20260.91C400.725%20267.518%20402.662%20275.493%20402.662%20284.836C402.662%20292.811%20400.953%20299.875%20397.535%20306.027C394.345%20311.952%20387.965%20316.965%20378.395%20321.066C369.052%20324.94%20355.722%20327.902%20338.404%20329.953C321.314%20331.776%20298.984%20332.688%20271.412%20332.688V420.188C300.123%20420.188%20323.023%20421.783%20340.113%20424.973C357.431%20427.935%20370.647%20432.264%20379.762%20437.961C389.104%20443.43%20395.257%20450.038%20398.219%20457.785C401.181%20465.305%20402.662%20473.622%20402.662%20482.736C402.662%20493.446%20400.611%20502.447%20396.51%20509.738C392.636%20517.03%20387.281%20522.954%20380.445%20527.512C373.837%20532.069%20366.204%20535.373%20357.545%20537.424C348.886%20539.475%20339.999%20540.5%20330.885%20540.5C321.998%20540.5%20312.542%20539.93%20302.516%20538.791C292.49%20537.652%20282.464%20536.057%20272.438%20534.006C262.411%20531.727%20252.613%20529.107%20243.043%20526.145C233.473%20523.182%20224.7%20519.878%20216.725%20516.232V612.961C237.46%20621.62%20258.766%20627.886%20280.641%20631.76C302.516%20635.861%20326.441%20637.912%20352.418%20637.912C381.129%20637.912%20406.308%20635.975%20427.955%20632.102C449.83%20628.456%20468.629%20623.329%20484.352%20616.721C500.302%20610.113%20513.518%20602.251%20524%20593.137C534.71%20583.794%20543.141%20573.654%20549.293%20562.717C555.673%20551.779%20560.117%20540.158%20562.623%20527.854C565.357%20515.549%20566.725%20502.902%20566.725%20489.914C566.725%20470.546%20563.421%20454.367%20556.812%20441.379C550.204%20428.163%20541.887%20417.339%20531.861%20408.908C522.063%20400.477%20511.354%20394.097%20499.732%20389.768C488.111%20385.438%20477.174%20382.362%20466.92%20380.539C475.807%20378.488%20485.377%20375.298%20495.631%20370.969C506.113%20366.411%20515.797%20360.145%20524.684%20352.17C533.57%20343.967%20540.976%20333.713%20546.9%20321.408C552.825%20309.104%20555.787%20294.178%20555.787%20276.633C555.787%20265.012%20554.534%20253.505%20552.027%20242.111C549.749%20230.718%20545.647%20219.781%20539.723%20209.299C534.026%20198.817%20526.279%20189.133%20516.48%20180.246C506.91%20171.359%20494.833%20163.612%20480.25%20157.004C465.667%20150.396%20448.349%20145.269%20428.297%20141.623C408.245%20137.749%20385.003%20135.699%20358.57%20135.471Z'%20fill='%23004B1B'/%3e%3c/svg%3e`,X=`data:image/svg+xml,%3csvg%20width='775'%20height='775'%20viewBox='0%200%20775%20775'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5C775%20601.51%20601.51%20775%20387.5%20775C173.49%20775%200%20601.51%200%20387.5C0%20173.49%20173.49%200%20387.5%200ZM293.023%20144.699L172.711%20420.188V529.562H380.523V628H522.711V529.562H580.816V420.188H522.711V144.699H293.023ZM380.523%20245.188V420.188H290.289L356.939%20245.188H380.523Z'%20fill='%23004B1B'/%3e%3c/svg%3e`,Z=`data:image/svg+xml,%3csvg%20width='775'%20height='775'%20viewBox='0%200%20775%20775'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5C775%20601.51%20601.51%20775%20387.5%20775C173.49%20775%200%20601.51%200%20387.5C0%20173.49%20173.49%200%20387.5%200ZM236.627%20144.699L203.814%20408.566L323.443%20431.125C327.317%20427.251%20331.988%20423.833%20337.457%20420.871C342.926%20417.681%20348.736%20414.947%20354.889%20412.668C361.269%20410.389%20367.649%20408.68%20374.029%20407.541C380.41%20406.402%20386.562%20405.832%20392.486%20405.832C403.652%20405.832%20413.222%20407.769%20421.197%20411.643C429.173%20415.288%20435.667%20420.188%20440.68%20426.34C445.921%20432.492%20449.68%20439.67%20451.959%20447.873C454.238%20455.848%20455.377%20464.165%20455.377%20472.824C455.377%20483.534%20453.44%20493.104%20449.566%20501.535C445.921%20509.966%20441.021%20517.144%20434.869%20523.068C428.717%20528.765%20421.767%20533.094%20414.02%20536.057C406.272%20539.019%20398.411%20540.5%20390.436%20540.5C384.283%20540.5%20378.245%20539.589%20372.32%20537.766C366.624%20535.715%20361.269%20532.753%20356.256%20528.879C351.471%20525.005%20347.141%20520.106%20343.268%20514.182C339.622%20508.257%20336.887%20501.193%20335.064%20492.99H192.877C196.295%20513.498%20202.447%20532.639%20211.334%20550.412C220.449%20567.958%20232.981%20583.225%20248.932%20596.213C264.882%20609.201%20284.706%20619.455%20308.404%20626.975C332.33%20634.494%20360.927%20638.254%20394.195%20638.254C426.324%20638.254%20454.807%20634.152%20479.645%20625.949C504.482%20617.746%20525.331%20606.125%20542.193%20591.086C559.055%20575.819%20571.816%20557.476%20580.475%20536.057C589.133%20514.41%20593.463%20490.256%20593.463%20463.596C593.463%20440.581%20589.02%20419.732%20580.133%20401.047C571.246%20382.134%20559.397%20366.07%20544.586%20352.854C530.003%20339.41%20513.141%20329.042%20494%20321.75C474.859%20314.458%20455.149%20310.812%20434.869%20310.812C426.666%20310.812%20417.779%20311.154%20408.209%20311.838C398.639%20312.521%20388.84%20314.117%20378.814%20316.623C369.016%20318.902%20359.332%20322.206%20349.762%20326.535C340.419%20330.865%20331.874%20336.561%20324.127%20343.625L346.002%20244.504H542.877L553.814%20144.699H236.627Z'%20fill='%23004B1B'/%3e%3c/svg%3e`,re=`data:image/svg+xml,%3csvg%20width='775'%20height='775'%20viewBox='0%200%20775%20775'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5C775%20601.51%20601.51%20775%20387.5%20775C173.49%20775%200%20601.51%200%20387.5C0%20173.49%20173.49%200%20387.5%200ZM400.172%20132.471C360.751%20132.471%20326.23%20138.851%20296.607%20151.611C266.985%20164.372%20242.262%20182.031%20222.438%20204.59C202.841%20227.148%20188.03%20253.923%20178.004%20284.912C168.206%20315.674%20163.307%20349.056%20163.307%20385.059C163.307%20407.389%20164.446%20429.15%20166.725%20450.342C169.003%20471.305%20173.219%20491.016%20179.371%20509.473C185.523%20527.93%20193.84%20544.906%20204.322%20560.4C214.804%20575.667%20228.248%20588.883%20244.654%20600.049C261.061%20610.986%20280.657%20619.531%20303.443%20625.684C326.458%20631.836%20353.46%20634.912%20384.449%20634.912C409.059%20634.912%20430.706%20632.747%20449.391%20628.418C468.076%20624.089%20484.14%20618.164%20497.584%20610.645C511.256%20602.897%20522.535%20593.896%20531.422%20583.643C540.536%20573.161%20547.828%20561.882%20553.297%20549.805C558.766%20537.728%20562.525%20525.081%20564.576%20511.865C566.855%20498.649%20567.994%20485.319%20567.994%20471.875C567.994%20448.861%20563.779%20428.467%20555.348%20410.693C547.145%20392.92%20535.979%20378.109%20521.852%20366.26C507.952%20354.183%20491.773%20345.068%20473.316%20338.916C454.859%20332.764%20435.377%20329.688%20414.869%20329.688C406.438%20329.688%20397.551%20330.143%20388.209%20331.055C379.094%20331.738%20369.752%20332.992%20360.182%20334.814C350.611%20336.637%20341.155%20338.916%20331.812%20341.65C322.698%20344.385%20313.925%20347.689%20305.494%20351.562C307.089%20325.586%20311.077%20304.622%20317.457%20288.672C324.065%20272.721%20332.268%20260.417%20342.066%20251.758C352.092%20243.099%20363.372%20237.288%20375.904%20234.326C388.665%20231.364%20402.109%20229.883%20416.236%20229.883C426.49%20229.883%20436.744%20230.68%20446.998%20232.275C457.252%20233.643%20467.05%20235.465%20476.393%20237.744C485.963%20239.795%20494.736%20242.188%20502.711%20244.922C510.914%20247.428%20518.092%20249.821%20524.244%20252.1L535.182%20154.688C509.889%20146.712%20486.077%20141.016%20463.746%20137.598C441.415%20134.18%20420.224%20132.471%20400.172%20132.471ZM378.639%20415.82C394.361%20415.82%20406.78%20417.985%20415.895%20422.314C425.237%20426.416%20432.187%20431.657%20436.744%20438.037C441.529%20444.417%20444.492%20451.253%20445.631%20458.545C446.998%20465.609%20447.682%20471.989%20447.682%20477.686C447.682%20485.205%20446.314%20492.611%20443.58%20499.902C440.846%20506.966%20436.744%20513.346%20431.275%20519.043C426.035%20524.512%20419.54%20528.955%20411.793%20532.373C404.046%20535.791%20395.159%20537.5%20385.133%20537.5C375.107%20537.5%20365.309%20536.475%20355.738%20534.424C346.168%20532.373%20337.623%20527.588%20330.104%20520.068C322.812%20512.549%20316.887%20501.497%20312.33%20486.914C307.773%20472.331%20305.494%20452.507%20305.494%20427.441C320.761%20423.34%20334.319%20420.378%20346.168%20418.555C358.245%20416.732%20369.068%20415.82%20378.639%20415.82Z'%20fill='%23004B1B'/%3e%3c/svg%3e`,ie=`data:image/svg+xml,%3csvg%20width='775'%20height='775'%20viewBox='0%200%20775%20775'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5C775%20601.51%20601.51%20775%20387.5%20775C173.49%20775%200%20601.51%200%20387.5C0%20173.49%20173.49%200%20387.5%200ZM216.725%20141.699V241.504H397.193L249.537%20626.025H413.6L561.256%20241.504L550.318%20141.699H216.725Z'%20fill='%23004B1B'/%3e%3c/svg%3e`,ae=`data:image/svg+xml,%3csvg%20width='775'%20height='775'%20viewBox='0%200%20775%20775'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5C775%20601.51%20601.51%20775%20387.5%20775C173.49%20775%200%20601.51%200%20387.5C0%20173.49%20173.49%200%20387.5%200ZM359.938%20144.699C335.328%20159.51%20313.909%20171.132%20295.68%20179.562C277.451%20187.993%20260.702%20194.602%20245.436%20199.387V293.039L321.998%20279.025V628H467.945V144.699H359.938Z'%20fill='%23004B1B'/%3e%3c/svg%3e`,oe=()=>{let{t:e}=c();return(0,H.jsx)(q,{children:(0,H.jsxs)(n,{children:[(0,H.jsx)(b,{title:e(`productionSteps.title`)}),(0,H.jsxs)(`div`,{className:`cards__container`,children:[(0,H.jsx)(K,{img:ae,text:e(`productionSteps.step1`)}),(0,H.jsx)(K,{img:J,text:e(`productionSteps.step2`)}),(0,H.jsx)(K,{img:Y,text:e(`productionSteps.step3`)}),(0,H.jsx)(K,{img:X,text:e(`productionSteps.step4`)}),(0,H.jsx)(K,{img:Z,text:e(`productionSteps.step5`)}),(0,H.jsx)(K,{img:re,text:e(`productionSteps.step6`)}),(0,H.jsx)(K,{img:ie,text:e(`productionSteps.step7`)})]})]})})},se=r.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	font-weight: 600;
	letter-spacing: 0.5px;
	font-size: 18px;
	div {
		width: fit-content;
	}
	div:first-child {
		background: #e7ecd9;
		/* filter: drop-shadow(0px 0px 8px #d3ab74); */
		width: 80px;
		height: 80px;
		border-radius: 50%;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		flex-shrink: 0;
		img {
			padding: 20px;
			/* width: 150px; */
			height: 80px;
		}
	}

	@media (max-width: 600px) {
		font-size: 15px;

		div:first-child {
			width: 60px;
			height: 60px;
			padding: 12px;
			img {
				height: 60px;
				padding: 12px;
			}
		}
	}
`,Q=({img:e,text:t})=>(0,H.jsxs)(se,{children:[(0,H.jsx)(`div`,{children:(0,H.jsx)(`img`,{src:e,alt:``})}),(0,H.jsx)(`div`,{children:t})]}),ce=`/EvaSik/assets/blueberrySVG-CAtVTJLs.svg`,le=r.section`
	transition: all 0.3s ease;
	padding: 100px 0px 100px 0px !important;

	.section-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 20px;
		margin-bottom: 30px;

		.eyebrow {
			font-size: 13px;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			opacity: 0.6;
			margin-bottom: 10px;
		}

		h2 {
			font-size: 34px;
			font-family: "Cormorant", serif;
		}

		.view-all {
			font-size: 14px;
			font-weight: 600;
			text-decoration: underline;
			white-space: nowrap;
		}
	}

	padding-bottom: 100px;

	@media (max-width: 900px) {
		.section-top {
			flex-direction: column;
			align-items: flex-start;
		}
		padding-bottom: 60px;
	}
`,$=r.div`
	height: 100%;
	background: var(--main-color);
	border-radius: 18px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
	transition: transform 0.25s ease;

	.tag {
		align-self: flex-start;
		font-size: 11px;
		font-weight: 600;
		padding: 4px 10px;
		border-radius: 20px;
		background: var(--blue-bg);
		color: var(--accent-color);
		margin-bottom: 10px;
	}

	.img-wrap {
		height: 170px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-height: 100%;
			max-width: 100%;
			object-fit: contain;
		}
	}

	h3 {
		font-size: 15px;
		margin-top: 10px;
	}

	.size {
		font-size: 12px;
		opacity: 0.6;
		margin-top: 4px;
		margin-bottom: 14px;
	}

	.details-btn {
		margin-top: auto;
		text-align: center;
		padding: 10px;
		border-radius: 40px;
		border: 2px solid var(--accent-color);
		color: var(--accent-color);
		font-size: 13px;
		font-weight: 600;
		transition: all 0.2s ease;

		@media (hover: hover) {
			&:hover {
				background: var(--accent-color);
				color: var(--main-color);
			}
		}
	}

	@media (hover: hover) {
		&:hover {
			transform: translateY(-6px);
		}
	}
`,ue=()=>{let{t:e,i18n:t}=c();return(0,H.jsx)(le,{children:(0,H.jsxs)(n,{children:[(0,H.jsxs)(`div`,{className:`section-top`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`div`,{className:`eyebrow`,children:e(`main.productsEyebrow`)}),(0,H.jsx)(`h2`,{children:e(`products.chooseTasteTitle`)})]}),(0,H.jsxs)(m,{className:`view-all`,to:`/products`,children:[e(`main.productsViewAll`),` →`]})]}),(0,H.jsx)(w,{ariaLabel:e(`products.chooseTasteTitle`),children:ee.map(n=>{let r=l(n,t.language);return(0,H.jsx)(C,{$desktop:`20%`,$tablet:`48%`,children:(0,H.jsxs)($,{children:[(0,H.jsx)(`span`,{className:`tag`,children:f(n,t.language)}),(0,H.jsx)(`div`,{className:`img-wrap`,children:(0,H.jsx)(`img`,{src:n.img,alt:r.title,loading:`lazy`})}),(0,H.jsx)(`h3`,{children:r.title}),(0,H.jsx)(`span`,{className:`size`,children:p(n,t.language)}),(0,H.jsx)(m,{className:`details-btn`,to:n.link,children:e(`products.detail.moreDetails`)})]})},n.id)})})]})})};h.registerPlugin(g);var de=()=>{let{t:e}=c(),t=(0,E.useRef)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);return _(()=>{let e=t.current;if(!e)return;let n=h.matchMedia();return n.add({isDesktop:`(min-width: 901px)`,isMobile:`(max-width: 900px)`},t=>{let{isMobile:n}=t.conditions,a=n?8:18,o=n?6:12,s=h.timeline({scrollTrigger:{trigger:e,start:`top top`,end:`bottom top`,scrub:.6,invalidateOnRefresh:!0}});return s.to(r.current,{yPercent:a,ease:`none`},0).to(i.current,{yPercent:o,ease:`none`},0),()=>{s.scrollTrigger?.kill(),s.kill()}}),()=>n.revert()},[]),(0,H.jsxs)(A,{children:[(0,H.jsx)(j,{ref:t,children:(0,H.jsxs)(n,{children:[(0,H.jsxs)(N,{children:[(0,H.jsxs)(P,{ref:i,children:[(0,H.jsx)(`img`,{src:v,alt:``}),(0,H.jsx)(`div`,{className:`eyebrow`,children:e(`main.eyebrow`)}),(0,H.jsx)(`h1`,{children:e(`main.heroTitle`)}),(0,H.jsx)(`p`,{children:e(`main.heroText`)}),(0,H.jsx)(F,{children:(0,H.jsx)(m,{className:`primary-btn`,to:`/products/`,children:e(`main.ctaProducts`)})})]}),(0,H.jsx)(I,{ref:r,children:(0,H.jsx)(`img`,{src:a,alt:`EVA juice bottle`})})]}),(0,H.jsxs)(L,{children:[(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`img`,{src:T,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e(`main.feature1Title`)}),(0,H.jsx)(`span`,{children:e(`main.feature1Text`)})]})]}),(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`img`,{src:ce,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e(`main.feature2Title`)}),(0,H.jsx)(`span`,{children:e(`main.feature2Text`)})]})]}),(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`img`,{src:y,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e(`main.feature3Title`)}),(0,H.jsx)(`span`,{children:e(`main.feature3Text`)})]})]}),(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`img`,{src:x,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e(`main.feature4Title`)}),(0,H.jsx)(`span`,{children:e(`main.feature4Text`)})]})]})]})]})}),(0,H.jsx)(ue,{}),(0,H.jsxs)(U,{bg:`var(--blue-bg)`,children:[(0,H.jsx)(z,{children:(0,H.jsx)(n,{style:{height:`100%`},children:(0,H.jsxs)(M,{children:[(0,H.jsxs)(`div`,{className:`content__second-section`,children:[(0,H.jsx)(b,{title:e(`main.rawMaterialsTitle`)}),(0,H.jsx)(Q,{img:T,text:e(`main.rawMaterialsCard1`)}),(0,H.jsx)(Q,{img:S,text:e(`main.rawMaterialsCard2`)}),(0,H.jsx)(Q,{img:y,text:e(`main.rawMaterialsCard3`)})]}),(0,H.jsx)(`div`,{className:`juice-block`,children:(0,H.jsxs)(R,{$reverse:!1,children:[(0,H.jsx)(`img`,{src:u,alt:`Apple & Grapes Juice`}),(0,H.jsx)(`img`,{src:d,alt:`Apple & Grapes Juice`})]})})]})})}),(0,H.jsx)(oe,{})]}),(0,H.jsx)(te,{})]})};export{de as MainPage};
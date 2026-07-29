import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{a as t,c as n,l as r,n as i,p as a,r as o,s}from"./granat-B5ukxLOX.js";import{c as ee,h as c,l,t as u,u as te,v as d}from"./products-CS5PWylH.js";import{n as f,r as p,t as m}from"./src-DNFmLrdn.js";import{t as h}from"./Logo-B322fVD0.js";import{n as g,r as _,t as v}from"./TitleSpan-CosHx3_P.js";import{a as y,i as b,n as x,t as S}from"./Slider-B-ZRhGRR.js";import{t as C}from"./appleSVG-ChBF8fwl.js";var w=`/EvaSik/assets/HeroImg-CAe3V6hQ.png`,T=e(a(),1),E=`/EvaSik/assets/fructs-tUTpgirq.webp`,D=`/EvaSik/assets/g11-DqlXnQ_K.webp`,O=`/EvaSik/assets/sadAdaptive-D4U22abk.jpg`,k=t`
  0% {
    transform: scale(1) var(--base-rotate, rotate(0deg));
  }
  50% {
    transform: scale(1.1) var(--pulse-rotate, rotate(10deg));
  }
  100% {
    transform: scale(1) var(--base-rotate, rotate(0deg));
  }
`,A=n.main``,j=n.section`
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.35) 21%,
			rgba(230, 212, 184, 0.81) 83%
		),
		url(${D});
	background-size: cover;
	background-position: center 30%;
	background-repeat: no-repeat;
	overflow: hidden;
	position: relative;
	padding: 100px 0px 20px 0px;

	@media (max-width: 900px) {
		padding: 16px 0px 10px 0px;
		background-image:
			linear-gradient(
				270deg,
				rgba(230, 212, 184, 0.35) 21%,
				rgba(230, 212, 184, 0.81) 83%
			),
			url(${O});
	}
`,M=n.div`
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
`,N=n.div`
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
`,P=n.div`
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
`,F=n.div`
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
`,I=n.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 70%;
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
			transform: scale(1.3) rotate(7deg);
		}
		50% {
			transform: scale(1.1) rotate(0deg);
		}
		100% {
			transform: scale(1.3) rotate(7deg);
		}
	}
`,L=n.ul`
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
`,R=n.div`
	display: flex;
	justify-content: ${({$reverse:e})=>e?`center`:`space-between`};
	align-items: ${({$reverse:e})=>e?`center`:`end`};
	width: 100%;
	height: 100%;

	img {
		transform: ${({$reverse:e})=>e?`rotate(-15deg)`:`rotate(0deg)`};
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		/* animation: ${k} 3s ease infinite; */
		${({$reverse:e})=>e?s`
						animation: ${k} 3s ease infinite;
					`:s`
						animation: none;
					`}
	}

	@media (max-width: 900px) {
		width: 50%;
		img {
			width: 50%;
		}
	}
`,ne=n.section`
	background-color: transparent;
	overflow: hidden;
	div {
		width: 100%;
	}
	.content__second-section {
		margin-right: 50px;
	}
	.juice-block {
		background-image: url(${E});
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
`,z=n.section`
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
`,B=n.div`
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
`,V=i(),H=()=>{let{t:e,i18n:t}=r();return(0,V.jsx)(z,{children:(0,V.jsxs)(o,{children:[(0,V.jsxs)(`div`,{className:`section-top`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`eyebrow`,children:e(`main.productsEyebrow`)}),(0,V.jsx)(`h2`,{children:e(`products.chooseTasteTitle`)})]}),(0,V.jsxs)(d,{className:`view-all`,to:`/products`,children:[e(`main.productsViewAll`),` →`]})]}),(0,V.jsx)(S,{ariaLabel:e(`products.chooseTasteTitle`),children:u.map(n=>{let r=ee(n,t.language);return(0,V.jsx)(x,{$desktop:`20%`,$tablet:`48%`,children:(0,V.jsxs)(B,{children:[(0,V.jsx)(`span`,{className:`tag`,children:l(n,t.language)}),(0,V.jsx)(`div`,{className:`img-wrap`,children:(0,V.jsx)(`img`,{src:n.img,alt:r.title,loading:`lazy`})}),(0,V.jsx)(`h3`,{children:r.title}),(0,V.jsx)(`span`,{className:`size`,children:te(n,t.language)}),(0,V.jsx)(d,{className:`details-btn`,to:n.link,children:e(`products.detail.moreDetails`)})]})},n.id)})})]})})},U=n.div`
	position: relative;
	width: 100%;
	height: auto;
`,W=n.section`
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
`,G=n.div`
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
`;f.registerPlugin(p);var K=({children:e,bg:t})=>{let n=(0,T.useRef)(null),r=(0,T.useRef)(null),i=(0,T.useRef)(null);return m(()=>{let e=n.current,t=r.current,a=i.current;if(!e||!t||!a)return;let o=f.matchMedia();return o.add({isDesktop:`(min-width: 901px)`,isMobile:`(max-width: 900px)`},n=>{let{isMobile:r}=n.conditions,i=f.fromTo(t,{y:0,opacity:.2},{y:0,opacity:1,ease:`none`,scrollTrigger:{trigger:e,start:`top bottom`,end:`top top`,scrub:!0,invalidateOnRefresh:!0}}),o=null;return r||(o=f.to(a,{y:()=>-(a.scrollHeight-t.clientHeight),ease:`none`,scrollTrigger:{trigger:e,start:`top top`,end:()=>`+=${a.scrollHeight-t.clientHeight}`,pin:!0,scrub:!0,invalidateOnRefresh:!0}})),()=>{i.scrollTrigger?.kill(),i.kill(),o?.scrollTrigger?.kill(),o?.kill()}}),()=>o.revert()},[]),(0,V.jsx)(U,{ref:n,children:(0,V.jsx)(W,{ref:r,$bg:t,children:(0,V.jsx)(G,{ref:i,children:e})})})},q=n.div`
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
`,J=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='27.751'%20height='27.751'%20viewBox='0%200%2027.751%2027.751'%3e%3cpath%20d='M2633.285-76.14c7.663%200%2013.875%206.212%2013.875%2013.875s-6.212%2013.876-13.875%2013.876-13.876-6.212-13.876-13.876%206.212-13.875%2013.876-13.875'%20style='fill:%23627817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.33333'%20transform='translate(-2619.409%2076.14)'/%3e%3cpath%20d='M2632.225-58.16c.047-.646.15-1.486.33-2.18.18-.693.436-1.24.924-1.814s1.208-1.174%201.97-1.662a10%2010%200%200%201%202.488-1.148c.92-.282%201.956-.47%202.864-.6a33%2033%200%200%201%202.154-.23c.466-.035.62-.035.66-.004.039.03-.04.09-.172.265a4.3%204.3%200%200%200-.522.947c-.202.478-.416%201.146-.685%201.925-.27.777-.596%201.665-.904%202.415s-.6%201.36-.963%201.857c-.364.499-.801.884-1.397%201.223-.595.337-1.348.63-2.024.838a10.3%2010.3%200%200%201-1.85.407%207.6%207.6%200%200%201-1.494.043%202.2%202.2%200%200%201-.668-.15c-.1-.038-.1-.038.103-.304.2-.265.602-.796%201.066-1.404.462-.608.984-1.293%201.567-1.932.583-.637%201.224-1.228%201.613-1.648.39-.42.527-.668.583-.792s.03-.124-.116-.09c-.145.034-.41.102-.941.457-.531.353-1.328.993-2.008%201.679a16%2016%200%200%200-1.662%202c-.416.582-.681%201.02-.813%201.238-.133.22-.133.22-.137-.009%200-.226-.013-.68.035-1.326m-1.816-1.867a15%2015%200%200%200-1.21-1.318c-.43-.409-.799-.674-1.227-.888s-.916-.377-1.473-.536a16%2016%200%200%200-1.819-.414%2020%2020%200%200%200-1.614-.18c-.326-.026-.326-.026-.283.064s.128.27.273.642c.147.372.352.938.53%201.5.18.56.336%201.116.516%201.618.18.5.385.945.59%201.318.206.372.41.672.694.99.282.316.642.65%201.01.908a5.3%205.3%200%200%200%201.106.577c.358.141.7.244%201.112.308s.892.09%201.246.085c.355-.004.587-.038.703-.054.116-.018.116-.018.043-.163a9.8%209.8%200%200%200-1.336-2.039c-.372-.437-.817-.873-1.243-1.29-.422-.416-.825-.814-1.022-1.012-.196-.198-.188-.198-.043-.146.145.054.428.16.796.375s.822.54%201.306%201.003.998%201.062%201.302%201.456.398.582.445.676.047.094.089-.026c.044-.12.13-.36.168-.668a4.6%204.6%200%200%200-.013-1.049%205.7%205.7%200%200%200-.199-.97c-.08-.254-.161-.413-.448-.767'%20style='fill:%23fefefe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.33333'%20transform='translate(-2619.409%2076.14)'/%3e%3c/svg%3e`,Y=({img:e,text:t})=>(0,V.jsxs)(q,{children:[(0,V.jsx)(`div`,{className:`photo__block`,children:(0,V.jsx)(`img`,{src:e,alt:``})}),(0,V.jsxs)(`div`,{className:`content__block`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{}),(0,V.jsx)(`img`,{src:J,alt:``}),(0,V.jsx)(`span`,{})]}),(0,V.jsx)(`p`,{children:t})]})]}),X=n.section`
	background-color: transparent;
	padding: 100px 0px 150px 0px;
	.cards__container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		width: 100%;
	}
`,Z=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='775'%20height='775'%20fill='none'%20viewBox='0%200%20775%20775'%3e%3cpath%20fill='%23004b1b'%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5S601.51%20775%20387.5%20775%200%20601.51%200%20387.5%20173.49%200%20387.5%200m-10.473%20135.471q-33.154%200-70.41%204.785-37.255%204.443-75.537%2017.432l21.875%20109.374q7.861-3.76%2019.141-7.519%2011.62-4.101%2024.951-7.178%2013.33-3.077%2027.685-5.127%2014.356-2.05%2028.37-2.05%2011.279%200%2022.558%202.392%2011.621%202.393%2020.85%207.861%209.228%205.469%2015.039%2014.698%206.152%208.886%206.152%2021.875%200%2021.19-10.254%2041.357-9.912%2020.166-26.318%2039.307-16.407%2018.798-37.256%2036.914a1564%201564%200%200%201-42.383%2034.863%204560%204560%200%200%200-41.699%2032.813q-20.166%2015.721-35.547%2030.42L242.018%20628h323.339V508.713H380.445a480%20480%200%200%200%2073.145-44.775q34.521-25.977%2060.156-55.713%2025.977-29.737%2041.016-61.866%2015.381-32.47%2015.381-64.599%200-29.395-11.622-56.055-11.278-26.66-35.205-46.484-23.925-20.166-60.498-31.787-36.23-11.963-85.791-11.963'/%3e%3c/svg%3e`,re=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='775'%20height='775'%20fill='none'%20viewBox='0%200%20775%20775'%3e%3cpath%20fill='%23004b1b'%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5S601.51%20775%20387.5%20775%200%20601.51%200%20387.5%20173.49%200%20387.5%200m-28.93%20135.471q-41.698.342-75.879%207.177-33.837%206.495-65.966%2021.534v92.968q12.304-5.468%2026.66-9.912a320%20320%200%200%201%2029.053-7.519q15.039-3.418%2029.736-5.127%2015.039-1.71%2028.711-1.709%2014.355%200%2027.344%203.076%2012.988%202.734%2022.9%208.887%209.912%206.152%2015.723%2016.064%205.81%209.912%205.81%2023.926%200%2011.963-5.127%2021.191-4.785%208.887-19.14%2015.039-14.014%205.81-39.991%208.887-25.635%202.735-66.992%202.735v87.5q43.066%200%2068.701%204.785%2025.977%204.443%2039.649%2012.988%2014.013%208.203%2018.457%2019.824%204.443%2011.28%204.443%2024.951%200%2016.065-6.152%2027.002-5.811%2010.937-16.065%2017.774-9.912%206.835-22.9%209.912-12.989%203.076-26.66%203.076-13.33%200-28.369-1.709a344%20344%200%200%201-30.078-4.785%20397%20397%200%200%201-29.395-7.861q-14.355-4.444-26.318-9.913v96.729q31.103%2012.988%2063.916%2018.799%2032.812%206.152%2071.777%206.152%2043.067%200%2075.537-5.81%2032.813-5.469%2056.397-15.381%2023.925-9.912%2039.648-23.584%2016.065-14.014%2025.293-30.42%209.57-16.407%2013.33-34.863%204.102-18.458%204.102-37.94%200-29.053-9.913-48.535-9.912-19.824-24.951-32.471-14.697-12.646-32.129-19.14-17.431-6.495-32.812-9.229%2013.33-3.077%2028.711-9.57%2015.723-6.837%2029.053-18.799%2013.33-12.305%2022.216-30.762t8.887-44.775q0-17.431-3.76-34.522-3.418-17.09-12.304-32.812-8.545-15.723-23.243-29.053-14.355-13.33-36.23-23.242t-51.953-15.381q-30.078-5.81-69.727-6.152'/%3e%3c/svg%3e`,ie=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='775'%20height='775'%20fill='none'%20viewBox='0%200%20775%20775'%3e%3cpath%20fill='%23004b1b'%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5S601.51%20775%20387.5%20775%200%20601.51%200%20387.5%20173.49%200%20387.5%200m-94.477%20144.699L172.711%20420.188v109.374h207.812V628h142.188v-98.438h58.105V420.188h-58.105V144.699zm87.5%20100.489v175h-90.234l66.65-175z'/%3e%3c/svg%3e`,ae=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='775'%20height='775'%20fill='none'%20viewBox='0%200%20775%20775'%3e%3cpath%20fill='%23004b1b'%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5S601.51%20775%20387.5%20775%200%20601.51%200%20387.5%20173.49%200%20387.5%200M236.627%20144.699l-32.813%20263.867%20119.629%2022.559q5.81-5.811%2014.014-10.254%208.203-4.785%2017.432-8.203%209.57-3.418%2019.14-5.127t18.457-1.709q16.749%200%2028.711%205.811%2011.964%205.468%2019.483%2014.697%207.861%209.228%2011.279%2021.533%203.418%2011.962%203.418%2024.951%200%2016.065-5.811%2028.711-5.468%2012.647-14.697%2021.533-9.228%208.545-20.849%2012.989-11.622%204.443-23.584%204.443a61.3%2061.3%200%200%201-18.116-2.734q-8.544-3.076-16.064-8.887-7.178-5.811-12.988-14.697-5.47-8.887-8.204-21.192H192.877q5.127%2030.762%2018.457%2057.422%2013.672%2026.319%2037.598%2045.801t59.472%2030.762q35.889%2011.279%2085.791%2011.279%2048.193%200%2085.45-12.305%2037.255-12.305%2062.548-34.863%2025.293-22.9%2038.282-55.029%2012.987-32.47%2012.988-72.461%200-34.522-13.33-62.549-13.33-28.37-35.547-48.193Q522.711%20332.688%20494%20321.75t-59.131-10.938q-12.305%200-26.66%201.026-14.356%201.025-29.395%204.785-14.697%203.418-29.052%209.912-14.014%206.494-25.635%2017.09l21.875-99.121h196.875l10.937-99.805z'/%3e%3c/svg%3e`,oe=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='775'%20height='775'%20fill='none'%20viewBox='0%200%20775%20775'%3e%3cpath%20fill='%23004b1b'%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5S601.51%20775%20387.5%20775%200%20601.51%200%20387.5%20173.49%200%20387.5%200m12.672%20132.471q-59.131%200-103.565%2019.14t-74.169%2052.979q-29.395%2033.838-44.434%2080.322-14.697%2046.143-14.697%20100.147%200%2033.495%203.418%2065.283%203.417%2031.445%2012.646%2059.131%209.228%2027.686%2024.951%2050.927%2015.723%2022.9%2040.332%2039.649%2024.61%2016.406%2058.789%2025.635%2034.522%209.228%2081.006%209.228%2036.915%200%2064.942-6.494t48.193-17.773q20.508-11.622%2033.838-27.002%2013.671-15.723%2021.875-33.838%208.203-18.116%2011.279-37.94a235%20235%200%200%200%203.418-39.99q0-34.521-12.646-61.182-12.305-26.66-33.496-44.433-20.85-18.116-48.536-27.344-27.685-9.228-58.447-9.228-12.647%200-26.66%201.367-13.672%201.025-28.027%203.759a303%20303%200%200%200-28.37%206.836%20202%20202%200%200%200-26.318%209.912q2.393-38.965%2011.963-62.89%209.912-23.926%2024.609-36.914%2015.04-12.989%2033.838-17.432%2019.142-4.443%2040.332-4.443%2015.381%200%2030.762%202.392%2015.38%202.051%2029.395%205.469%2014.355%203.077%2026.318%207.178%2012.305%203.76%2021.533%207.178l10.938-97.412q-37.94-11.963-71.436-17.09t-63.574-5.127M378.639%20415.82q23.583%200%2037.256%206.494%2014.013%206.153%2020.849%2015.723%207.178%209.57%208.887%2020.508%202.05%2010.596%202.051%2019.141%200%2011.279-4.102%2022.216-4.101%2010.596-12.305%2019.141-7.86%208.203-19.482%2013.33-11.62%205.127-26.66%205.127-15.039%200-29.395-3.076t-25.634-14.356q-10.938-11.279-17.774-33.154-6.836-21.874-6.836-59.473%2022.9-6.151%2040.674-8.886%2018.115-2.735%2032.471-2.735'/%3e%3c/svg%3e`,se=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='775'%20height='775'%20fill='none'%20viewBox='0%200%20775%20775'%3e%3cpath%20fill='%23004b1b'%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5S601.51%20775%20387.5%20775%200%20601.51%200%20387.5%20173.49%200%20387.5%200M216.725%20141.699v99.805h180.468L249.537%20626.025H413.6l147.656-384.521-10.938-99.805z'/%3e%3c/svg%3e`,Q=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='775'%20height='775'%20fill='none'%20viewBox='0%200%20775%20775'%3e%3cpath%20fill='%23004b1b'%20d='M387.5%200C601.51%200%20775%20173.49%20775%20387.5S601.51%20775%20387.5%20775%200%20601.51%200%20387.5%20173.49%200%20387.5%200m-27.562%20144.699q-36.915%2022.217-64.258%2034.863-27.344%2012.647-50.244%2019.825v93.652l76.562-14.014V628h145.947V144.699z'/%3e%3c/svg%3e`,ce=()=>{let{t:e}=r();return(0,V.jsx)(X,{children:(0,V.jsxs)(o,{children:[(0,V.jsx)(v,{title:e(`productionSteps.title`)}),(0,V.jsxs)(`div`,{className:`cards__container`,children:[(0,V.jsx)(Y,{img:Q,text:e(`productionSteps.step1`)}),(0,V.jsx)(Y,{img:Z,text:e(`productionSteps.step2`)}),(0,V.jsx)(Y,{img:re,text:e(`productionSteps.step3`)}),(0,V.jsx)(Y,{img:ie,text:e(`productionSteps.step4`)}),(0,V.jsx)(Y,{img:ae,text:e(`productionSteps.step5`)}),(0,V.jsx)(Y,{img:oe,text:e(`productionSteps.step6`)}),(0,V.jsx)(Y,{img:se,text:e(`productionSteps.step7`)})]})]})})},le=n.div`
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
`,$=({img:e,text:t})=>(0,V.jsxs)(le,{children:[(0,V.jsx)(`div`,{children:(0,V.jsx)(`img`,{src:e,alt:``})}),(0,V.jsx)(`div`,{children:t})]}),ue=`/EvaSik/assets/blueberrySVG-DIUAAzSz.svg`,de=`/EvaSik/assets/apple_dushes-B6RNET4n.webp`;f.registerPlugin(p);var fe=()=>{let{t:e}=r(),t=(0,T.useRef)(null),n=(0,T.useRef)(null),i=(0,T.useRef)(null);return m(()=>{let e=t.current;if(!e)return;let r=f.matchMedia();return r.add({isDesktop:`(min-width: 901px)`,isMobile:`(max-width: 900px)`},t=>{let{isMobile:r}=t.conditions,a=r?8:18,o=r?6:12,s=f.timeline({scrollTrigger:{trigger:e,start:`top top`,end:`bottom top`,scrub:.6,invalidateOnRefresh:!0}});return s.to(n.current,{yPercent:a,ease:`none`},0).to(i.current,{yPercent:o,ease:`none`},0),()=>{s.scrollTrigger?.kill(),s.kill()}}),()=>r.revert()},[]),(0,V.jsxs)(A,{children:[(0,V.jsx)(j,{ref:t,children:(0,V.jsxs)(o,{children:[(0,V.jsxs)(N,{children:[(0,V.jsxs)(P,{ref:i,children:[(0,V.jsx)(`img`,{src:h,alt:``}),(0,V.jsx)(`div`,{className:`eyebrow`,children:e(`main.eyebrow`)}),(0,V.jsx)(`h1`,{children:e(`main.heroTitle`)}),(0,V.jsx)(`p`,{children:e(`main.heroText`)}),(0,V.jsx)(F,{children:(0,V.jsx)(d,{className:`primary-btn`,to:`/products/`,children:e(`main.ctaProducts`)})})]}),(0,V.jsx)(I,{ref:n,children:(0,V.jsx)(`img`,{src:w,alt:`EVA juice bottle`})})]}),(0,V.jsxs)(L,{children:[(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:C,alt:``}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:e(`main.feature1Title`)}),(0,V.jsx)(`span`,{children:e(`main.feature1Text`)})]})]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:ue,alt:``}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:e(`main.feature2Title`)}),(0,V.jsx)(`span`,{children:e(`main.feature2Text`)})]})]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:_,alt:``}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:e(`main.feature3Title`)}),(0,V.jsx)(`span`,{children:e(`main.feature3Text`)})]})]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:y,alt:``}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:e(`main.feature4Title`)}),(0,V.jsx)(`span`,{children:e(`main.feature4Text`)})]})]})]})]})}),(0,V.jsx)(H,{}),(0,V.jsxs)(K,{bg:`var(--blue-bg)`,children:[(0,V.jsx)(ne,{children:(0,V.jsx)(o,{style:{height:`100%`},children:(0,V.jsxs)(M,{children:[(0,V.jsxs)(`div`,{className:`content__second-section`,children:[(0,V.jsx)(v,{title:e(`main.rawMaterialsTitle`)}),(0,V.jsx)($,{img:C,text:e(`main.rawMaterialsCard1`)}),(0,V.jsx)($,{img:b,text:e(`main.rawMaterialsCard2`)}),(0,V.jsx)($,{img:_,text:e(`main.rawMaterialsCard3`)})]}),(0,V.jsx)(`div`,{className:`juice-block`,children:(0,V.jsxs)(R,{$reverse:!1,children:[(0,V.jsx)(`img`,{src:c,alt:`Apple & Grapes Juice`}),(0,V.jsx)(`img`,{src:de,alt:`Apple & Grapes Juice`})]})})]})})}),(0,V.jsx)(ce,{})]}),(0,V.jsx)(g,{})]})};export{fe as MainPage};
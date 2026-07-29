import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{l as t,m as n,r}from"./granat-GlIjsjm2.js";var i=`/EvaSik/assets/shield-6PMdlnbV.svg`,a=`/EvaSik/assets/Family-CElm9cqF.svg`,o=`/EvaSik/assets/plant-kUocmXZj.svg`,s=e(n(),1),c=t.div`
	position: relative;
`,l=t.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	margin-bottom: 18px;
`,u=t.div`
	display: flex;
	gap: 20px;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-padding-left: 4px;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;
	-ms-overflow-style: none;
	/* Внутренние отступы, чтобы тень/поднятие карточки при hover и
	   скролл-снап не обрезались краем контейнера. */
	padding: 8px 4px 26px;
	margin: -8px -4px -26px;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 560px) {
		gap: 14px;
		padding: 6px 2px 20px;
		margin: -6px -2px -20px;
	}
`,d=t.div`
	flex: 0 0 ${e=>e.$desktop??`20%`};
	min-width: 0;
	scroll-snap-align: start;

	@media (max-width: 900px) {
		flex-basis: ${e=>e.$tablet??`48%`};
	}

	@media (max-width: 560px) {
		/* На мобильном — ровно один элемент на экран. */
		flex-basis: ${e=>e.$mobile??`100%`};
	}
`,f=t.button`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 1px solid rgba(0, 0, 0, 0.15);
	background: var(--main-color, #fff);
	cursor: pointer;
	font-size: 17px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	transition: opacity 0.2s ease, background 0.2s ease;

	@media (hover: hover) {
		&:hover {
			background: rgba(0, 0, 0, 0.06);
		}
	}

	&:disabled {
		opacity: 0.35;
		cursor: default;
	}
`,p=r(),m=({children:e,ariaLabel:t,className:n})=>{let r=(0,s.useRef)(null),[i,a]=(0,s.useState)(!1),[o,d]=(0,s.useState)(!1),m=(0,s.useCallback)(()=>{let e=r.current;e&&(a(e.scrollLeft>4),d(e.scrollLeft<e.scrollWidth-e.clientWidth-4))},[]);(0,s.useEffect)(()=>{let e=r.current;if(!e)return;m(),e.addEventListener(`scroll`,m,{passive:!0});let t=new ResizeObserver(m);return t.observe(e),()=>{e.removeEventListener(`scroll`,m),t.disconnect()}},[m]);let h=e=>{let t=r.current;t&&t.scrollBy({left:e*t.clientWidth*.9,behavior:`smooth`})};return(0,p.jsxs)(c,{className:n,children:[(0,p.jsxs)(l,{children:[(0,p.jsx)(f,{type:`button`,"aria-label":`${t} — prev`,disabled:!i,onClick:()=>h(-1),children:`←`}),(0,p.jsx)(f,{type:`button`,"aria-label":`${t} — next`,disabled:!o,onClick:()=>h(1),children:`→`})]}),(0,p.jsx)(u,{ref:r,role:`list`,"aria-label":t,children:e})]})};export{i as a,a as i,d as n,o as r,m as t};
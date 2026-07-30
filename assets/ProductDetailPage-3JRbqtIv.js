import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{i as t,l as n,m as r,r as i,u as a}from"./granat-DKJZ7AX7.js";import{C as o,_ as s,c,d as l,o as u,r as d,v as f,w as p,y as m}from"./products-D40l-w1b.js";import{r as h,t as g}from"./hooks-DKKZ_D0S.js";import{a as _,i as v,n as y,r as b,t as x}from"./Slider-E7cd2-f3.js";import{t as S}from"./Reveal-BYyayRrn.js";import{t as C}from"./appleSVG-ChBF8fwl.js";import{n as w,r as T}from"./GlassJuicePageStyles-BfXyTRQn.js";var E=e(r(),1),D=`/EvaSik/assets/sad-BPHOQvv4.webp`,O=n.main``,k=n.section`
	/* padding: 0; */
	/* margin-top: -150px; */
	/* height: 100vh; */

	padding-bottom: 100px;
	background-color: #e3d2ba;
	button {
		cursor: pointer;
	}
	color: black;
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.7) 21%,
			rgba(230, 212, 184, 0.7) 83%
		),
		url(${D});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`,A=n.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px 0px;
	position: relative;
	z-index: 100;

	h1 {
		text-align: left;
		margin-bottom: 40px;
	}
	p {
		font-size: 24px;
	}
	ul {
		margin-top: 20px;
		h5 {
			font-size: 32px;
		}
		li {
			display: flex;
			align-items: flex-end;
			margin-top: 10px;
			i {
				flex: 1;
				border-bottom: 1px dashed black;
				margin-bottom: 4px;
				margin-left: 10px;
				margin-right: 5px;
			}
			span {
				padding-left: 5px;
				position: relative;
				z-index: 2;
			}

			strong {
				padding-left: 5px;
				position: relative;
				z-index: 2;
			}
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 30px;
		padding: 30px 0px;

		h1 {
			text-align: center;
			font-size: 32px;
		}
		p {
			font-size: 17px;
		}
		ul h5 {
			font-size: 22px;
		}
		ul {
			li {
				span {
					width: 60%;
				}
			}
		}
	}
`,j=n.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* transform: translateX(-20%); */
	img {
		/* width: 100%; */
		height: 350px;
	}

	@media (max-width: 900px) {
		width: 100%;
		transform: none;

		img {
			padding-top: 50px;
			max-width: auto;
			height: 300px;
		}
	}
`,M=n.div`
	width: 50%;

	@media (max-width: 900px) {
		width: 100%;
	}
`,N=n.div`
	margin-top: 40px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
	}
`,P=n.div`
	border: 3px solid #004b1b;
	padding: 22px 10px;
	border-radius: 50px;
	display: flex;
	align-items: stretch;
	align-self: stretch;
	justify-content: space-between;
	height: 70px;
	width: 120px;
	margin-right: 20px;

	button {
		width: 20px;
		height: 20px;
		background-color: transparent;
		border: none;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #004b1b;
	}
	input {
		width: 20px;
		height: 20px;
		background-color: transparent;
		border: none;
		text-align: center;
		color: #004b1b;
	}
	input[type="number"] {
		appearance: textfield;
		-moz-appearance: textfield;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	@media (max-width: 900px) {
		width: 220px;
		margin: 0 auto;
		margin-bottom: 20px;
		input {
			font-size: 24px;
			width: 30px;
		}
		button {
			width: 220px !important;
			font-size: 40px;
			img {
				width: 30px;
			}
		}
	}
`,F=n.div`
	position: relative;
	button {
		margin-bottom: 4px;
		height: 66px;
		position: relative;
		z-index: 20;
		width: fit-content;
		padding: 20px 40px;
		background: #e3d2ba;
		border: 2px solid #004b1b;
		color: #004b1b;
		transition: all 0.3s ease;
		@media (hover: hover) {
			&:hover {
				transform: translateX(3px) translateY(-3px);
				transition: all 0.3s ease;
			}
		}
	}
	&::before {
		content: "";
		height: 66px;
		margin-bottom: 5px;
		width: 100%;
		background-color: #004b1b;
		z-index: 1;
		position: absolute;
		bottom: -5px;
		left: -5px;
	}

	@media (max-width: 900px) {
		button {
			width: 220px;
		}
	}
`,I=n.ul`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	padding: 30px 0px 60px 0px;
	border-top: 2px dashed #004b1b;
	margin-top: 40px;
	position: relative;
	z-index: 100;

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 8px;
		width: 25%;

		img {
			width: 40px;
			height: 40px;
		}
		strong {
			font-size: 16px;
		}
		span {
			font-size: 13px;
			opacity: 0.75;
		}
	}

	@media (max-width: 900px) {
		flex-wrap: wrap;
		li {
			width: 40%;
		}
	}
`,L=n.div`
	position: relative;
	z-index: 100;
	padding-bottom: 60px;

	h3 {
		font-size: 42px;
		margin-bottom: 24px;
	}

	@media (max-width: 900px) {
		h3 {
			font-size: 22px;
			text-align: center;
		}
	}
`,R=n(s)`
	background: #f4ead9;
	border: 2px solid #004b1b;
	border-radius: 14px;
	padding: 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 6px;
	height: 100%;
	transition: transform 0.25s ease;

	img {
		width: 90px;
		height: 90px;
		object-fit: contain;
	}
	span {
		font-size: 14px;
		font-weight: 600;
	}

	@media (hover: hover) {
		&:hover {
			transform: translateY(-6px);
		}
	}
`,z=n.div`
	width: 200px;
	margin-left: auto;
	position: relative;

	position: relative;
	button {
		width: 100%;
		margin-bottom: 4px;
		height: 66px;
		position: relative;
		z-index: 20;
		width: 100%;
		padding: 20px 40px;
		background: #e3d2ba;
		border: 2px solid #004b1b;
		color: #004b1b;
		transition: all 0.3s ease;
		@media (hover: hover) {
			&:hover {
				transform: translateX(3px) translateY(-3px);
				transition: all 0.3s ease;
			}
		}
	}
	&::before {
		content: "";
		height: 66px;
		margin-bottom: 5px;
		width: 100%;
		background-color: #004b1b;
		z-index: 1;
		position: absolute;
		bottom: -5px;
		left: -5px;
	}

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
		margin-left: 0;
		margin-top: 20px;
		width: auto;
		button {
			width: 220px !important;
		}
	}
`,B=i(),V=()=>{let{t:e,i18n:n}=a(),{category:r,slug:i}=p(),s=o(),D=g(),[V,H]=(0,E.useState)(1),[U,W]=(0,E.useState)(!1),G=u(r,i);if(!G)return(0,B.jsx)(m,{to:`/products`,replace:!0});let K=c(G,n.language),q=l(G.category,G.slug),J=d.filter(e=>e.key!==G.category),Y=()=>{D(h({product:G,quantity:V})),W(!0),setTimeout(()=>W(!1),1800)},X=e=>{let t=Number(e);H(Number.isFinite(t)?Math.max(1,Math.floor(t)):1)};return(0,B.jsx)(O,{children:(0,B.jsxs)(k,{children:[(0,B.jsxs)(t,{children:[(0,B.jsxs)(A,{children:[(0,B.jsx)(j,{children:(0,B.jsx)(S,{direction:`left`,children:(0,B.jsx)(`img`,{src:G.img,alt:K.title})})}),(0,B.jsx)(M,{children:(0,B.jsxs)(S,{direction:`right`,children:[(0,B.jsx)(`h1`,{children:K.title}),(0,B.jsx)(`p`,{children:K.description}),(0,B.jsxs)(`ul`,{children:[(0,B.jsx)(`h5`,{children:e(`products.compositionTitle`)}),K.composition.map(e=>(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`span`,{children:e.name}),(0,B.jsx)(`i`,{}),(0,B.jsx)(`strong`,{children:e.percent})]},e.name))]}),(0,B.jsxs)(N,{children:[(0,B.jsxs)(P,{children:[(0,B.jsx)(`button`,{type:`button`,"aria-label":e(`products.decrease`),onClick:()=>H(e=>Math.max(1,e-1)),children:`-`}),(0,B.jsx)(`input`,{type:`number`,min:1,value:V,onChange:e=>X(e.target.value)}),(0,B.jsx)(`button`,{type:`button`,"aria-label":e(`products.increase`),onClick:()=>H(e=>e+1),children:`+`})]}),(0,B.jsx)(F,{children:(0,B.jsx)(`button`,{type:`button`,onClick:Y,children:e(U?`products.added`:`products.addToCart`)})}),(0,B.jsx)(z,{children:(0,B.jsx)(`button`,{type:`button`,onClick:()=>s(`/products/${G.category}`),children:`Усі смаки`})})]})]})})]}),(0,B.jsxs)(I,{children:[(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`img`,{src:C,alt:``}),(0,B.jsx)(`strong`,{children:e(`products.detail.feature1Title`)}),(0,B.jsx)(`span`,{children:e(`products.detail.feature1Text`)})]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`img`,{src:v,alt:``}),(0,B.jsx)(`strong`,{children:e(`products.detail.feature2Title`)}),(0,B.jsx)(`span`,{children:e(`products.detail.feature2Text`)})]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`img`,{src:b,alt:``}),(0,B.jsx)(`strong`,{children:e(`products.detail.feature3Title`)}),(0,B.jsx)(`span`,{children:e(`products.detail.feature3Text`)})]}),(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`img`,{src:_,alt:``}),(0,B.jsx)(`strong`,{children:e(`products.detail.feature4Title`)}),(0,B.jsx)(`span`,{children:e(`products.detail.feature4Text`)})]})]}),q.length>0&&(0,B.jsxs)(L,{children:[(0,B.jsx)(`h3`,{children:e(`products.detail.otherFlavors`)}),(0,B.jsx)(x,{ariaLabel:e(`products.detail.otherFlavors`),children:q.map(e=>{let t=c(e,n.language);return(0,B.jsx)(y,{$desktop:`16.6%`,$tablet:`33.333%`,children:(0,B.jsxs)(R,{to:e.link,children:[(0,B.jsx)(`img`,{src:e.img,alt:t.title,loading:`lazy`}),(0,B.jsx)(`span`,{children:t.title})]})},e.id)})})]})]}),(0,B.jsx)(w,{children:(0,B.jsxs)(t,{children:[(0,B.jsx)(`div`,{children:(0,B.jsx)(`h1`,{children:e(`products.needOtherFormat`)})}),(0,B.jsx)(T,{children:J.map(t=>(0,B.jsxs)(f,{to:t.link,children:[(0,B.jsx)(`img`,{src:t.img,alt:``}),(0,B.jsx)(`h3`,{children:e(`products.${t.key}.categoryLinkTitle`)})]},t.key))})]})})]})})};export{V as ProductDetailPage};
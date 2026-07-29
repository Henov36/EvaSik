import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{i as t,l as n,m as r,r as i,u as a}from"./granat-GlIjsjm2.js";import{b as o,c as s,d as c,o as l,r as u,v as d,w as f,y as p}from"./products-B7L_1Qqh.js";import{r as m,t as h}from"./hooks-DO0KDcTU.js";import{a as g,i as _,n as v,r as y,t as b}from"./Slider-aBki4V3v.js";import{t as x}from"./Reveal-CqlqMsXp.js";import{t as S}from"./appleSVG-CVi6d-lo.js";import{n as C,r as w}from"./GlassJuicePageStyles-BVufgZuR.js";var T=e(r(),1),E=`/EvaSik/assets/sad-uUWvnx3_.jpg`,D=n.main``,O=n.section`
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
		url(${E});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`,k=n.div`
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
	}
`,A=n.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* transform: translateX(-20%); */

	@media (max-width: 900px) {
		width: 100%;
		transform: none;

		img {
			max-width: auto;
			width: 170px;
		}
	}
`,j=n.div`
	width: 50%;

	@media (max-width: 900px) {
		width: 100%;
	}
`,M=n.div`
	margin-top: 40px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
	}
`,N=n.div`
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
`,P=n.div`
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
`,F=n.ul`
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
`,I=n.div`
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
`,L=n(d)`
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
`,R=n.div`
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
`,z=i(),B=()=>{let{t:e,i18n:n}=a(),{category:r,slug:i}=f(),d=h(),[E,B]=(0,T.useState)(1),[V,H]=(0,T.useState)(!1),U=l(r,i);if(!U)return(0,z.jsx)(o,{to:`/products`,replace:!0});let W=s(U,n.language),G=c(U.category,U.slug),K=u.filter(e=>e.key!==U.category),q=()=>{d(m({product:U,quantity:E})),H(!0),setTimeout(()=>H(!1),1800)},J=e=>{let t=Number(e);B(Number.isFinite(t)?Math.max(1,Math.floor(t)):1)};return(0,z.jsx)(D,{children:(0,z.jsxs)(O,{children:[(0,z.jsxs)(t,{children:[(0,z.jsxs)(k,{children:[(0,z.jsx)(A,{children:(0,z.jsx)(x,{direction:`left`,children:(0,z.jsx)(`img`,{src:U.img,alt:W.title})})}),(0,z.jsx)(j,{children:(0,z.jsxs)(x,{direction:`right`,children:[(0,z.jsx)(`h1`,{children:W.title}),(0,z.jsx)(`p`,{children:W.description}),(0,z.jsxs)(`ul`,{children:[(0,z.jsx)(`h5`,{children:e(`products.compositionTitle`)}),W.composition.map(e=>(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`span`,{children:e.name}),(0,z.jsx)(`i`,{}),(0,z.jsx)(`strong`,{children:e.percent})]},e.name))]}),(0,z.jsxs)(M,{children:[(0,z.jsxs)(N,{children:[(0,z.jsx)(`button`,{type:`button`,"aria-label":e(`products.decrease`),onClick:()=>B(e=>Math.max(1,e-1)),children:`-`}),(0,z.jsx)(`input`,{type:`number`,min:1,value:E,onChange:e=>J(e.target.value)}),(0,z.jsx)(`button`,{type:`button`,"aria-label":e(`products.increase`),onClick:()=>B(e=>e+1),children:`+`})]}),(0,z.jsx)(P,{children:(0,z.jsx)(`button`,{type:`button`,onClick:q,children:e(V?`products.added`:`products.addToCart`)})}),(0,z.jsx)(R,{children:(0,z.jsx)(`button`,{type:`button`,onClick:()=>history.back(),children:`Усі смаки`})})]})]})})]}),(0,z.jsxs)(F,{children:[(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`img`,{src:S,alt:``}),(0,z.jsx)(`strong`,{children:e(`products.detail.feature1Title`)}),(0,z.jsx)(`span`,{children:e(`products.detail.feature1Text`)})]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`img`,{src:_,alt:``}),(0,z.jsx)(`strong`,{children:e(`products.detail.feature2Title`)}),(0,z.jsx)(`span`,{children:e(`products.detail.feature2Text`)})]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`img`,{src:y,alt:``}),(0,z.jsx)(`strong`,{children:e(`products.detail.feature3Title`)}),(0,z.jsx)(`span`,{children:e(`products.detail.feature3Text`)})]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`img`,{src:g,alt:``}),(0,z.jsx)(`strong`,{children:e(`products.detail.feature4Title`)}),(0,z.jsx)(`span`,{children:e(`products.detail.feature4Text`)})]})]}),G.length>0&&(0,z.jsxs)(I,{children:[(0,z.jsx)(`h3`,{children:e(`products.detail.otherFlavors`)}),(0,z.jsx)(b,{ariaLabel:e(`products.detail.otherFlavors`),children:G.map(e=>{let t=s(e,n.language);return(0,z.jsx)(v,{$desktop:`16.6%`,$tablet:`33.333%`,children:(0,z.jsxs)(L,{to:e.link,children:[(0,z.jsx)(`img`,{src:e.img,alt:t.title,loading:`lazy`}),(0,z.jsx)(`span`,{children:t.title})]})},e.id)})})]})]}),(0,z.jsx)(C,{children:(0,z.jsxs)(t,{children:[(0,z.jsx)(`div`,{children:(0,z.jsx)(`h1`,{children:e(`products.needOtherFormat`)})}),(0,z.jsx)(w,{children:K.map(t=>(0,z.jsxs)(p,{to:t.link,children:[(0,z.jsx)(`img`,{src:t.img,alt:``}),(0,z.jsx)(`h3`,{children:e(`products.${t.key}.categoryLinkTitle`)})]},t.key))})]})})]})})};export{B as ProductDetailPage};
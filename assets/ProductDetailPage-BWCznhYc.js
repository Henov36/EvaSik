import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{c as t,f as n,n as r,s as i,t as a}from"./jsx-runtime-D19uldVM.js";import{T as o,b as s,c,d as l,o as u,r as d,v as f,w as p,y as m}from"./products-DX9TTxyP.js";import{r as h,t as g}from"./hooks-3Cyi0bwZ.js";import{a as _,i as v,n as y,r as b,t as x}from"./Slider-L8uIokTD.js";import{t as S}from"./Reveal-Cvrr1Tj_.js";import{t as C}from"./appleSVG-ChBF8fwl.js";import{n as w,r as T}from"./GlassJuicePageStyles-HVwBsxSl.js";var E=e(n(),1),D=`/EvaSik/assets/sad-BPHOQvv4.webp`,O=i.main``,k=i.section`
	padding-top: 0px;

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
`,A=i.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0px;
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
`,j=i.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		height: calc(100vh - 6vw);
		padding-top: 100px;
	}

	@media (max-width: 900px) {
		width: 100%;
		transform: none;

		img {
			padding-top: 100px;
			max-width: auto;
			height: 500px;
		}
	}
`,M=i.div`
	width: 50%;
	padding-top: 100px;
	@media (max-width: 900px) {
		width: 100%;
		padding-top: 40px;
		h1{
			font-size: 42px;
		}
	}
`,N=i.div`
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin-top: 16px;
	font-size: 18px;
	opacity: 0.8;

	strong {
		font-size: 32px;
		font-weight: 700;
		opacity: 1;
		color: #004b1b;
	}

	@media (max-width: 900px) {
		justify-content: center;
		font-size: 15px;

		strong {
			font-size: 26px;
		}
	}
`,P=i.div`
	margin-top: 40px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
	}
`,F=i.div`
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
`,I=i.div`
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
`,L=i.ul`
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
`,R=i.div`
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
`,z=i(f)`
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
`,B=i.div`
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
`,V=a(),H=()=>{let{t:e,i18n:n}=t(),{category:i,slug:a}=o(),f=p(),D=g(),[H,U]=(0,E.useState)(1),[W,G]=(0,E.useState)(!1),K=u(i,a);if(!K)return(0,V.jsx)(s,{to:`/products`,replace:!0});let q=c(K,n.language),J=l(K.category,K.slug),Y=d.filter(e=>e.key!==K.category),X=()=>{D(h({product:K,quantity:H})),G(!0),setTimeout(()=>G(!1),1800)},Z=e=>{let t=Number(e);U(Number.isFinite(t)?Math.max(1,Math.floor(t)):1)};return(0,V.jsx)(O,{children:(0,V.jsxs)(k,{children:[(0,V.jsxs)(r,{children:[(0,V.jsxs)(A,{children:[(0,V.jsx)(j,{children:(0,V.jsx)(S,{direction:`left`,children:(0,V.jsx)(`img`,{src:K.img,alt:q.title})})}),(0,V.jsx)(M,{children:(0,V.jsxs)(S,{direction:`right`,children:[(0,V.jsx)(`h1`,{children:q.title}),(0,V.jsx)(`p`,{children:q.description}),(0,V.jsxs)(`ul`,{children:[(0,V.jsx)(`h5`,{children:e(`products.compositionTitle`)}),q.composition.map(e=>(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`span`,{children:e.name}),(0,V.jsx)(`i`,{}),(0,V.jsx)(`strong`,{children:e.percent})]},e.name))]}),(0,V.jsxs)(N,{children:[e(`products.detail.priceLabel`),(0,V.jsx)(`strong`,{children:e(`products.detail.priceValue`,{price:K.price})}),K.sticks&&(0,V.jsxs)(`strong`,{children:[K.sticks,` `,e(`products.detail.sticks`)]})]}),(0,V.jsxs)(P,{children:[(0,V.jsxs)(F,{children:[(0,V.jsx)(`button`,{type:`button`,"aria-label":e(`products.decrease`),onClick:()=>U(e=>Math.max(1,e-1)),children:`-`}),(0,V.jsx)(`input`,{type:`number`,min:1,value:H,onChange:e=>Z(e.target.value)}),(0,V.jsx)(`button`,{type:`button`,"aria-label":e(`products.increase`),onClick:()=>U(e=>e+1),children:`+`})]}),(0,V.jsx)(I,{children:(0,V.jsx)(`button`,{type:`button`,onClick:X,children:e(W?`products.added`:`products.addToCart`)})}),(0,V.jsx)(B,{children:(0,V.jsx)(`button`,{type:`button`,onClick:()=>f(`/products/${K.category}`),children:e(`products.detail.allFlavors`)})})]})]})})]}),(0,V.jsxs)(L,{children:[(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:C,alt:``}),(0,V.jsx)(`strong`,{children:e(`products.detail.feature1Title`)}),(0,V.jsx)(`span`,{children:e(`products.detail.feature1Text`)})]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:v,alt:``}),(0,V.jsx)(`strong`,{children:e(`products.detail.feature2Title`)}),(0,V.jsx)(`span`,{children:e(`products.detail.feature2Text`)})]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:b,alt:``}),(0,V.jsx)(`strong`,{children:e(`products.detail.feature3Title`)}),(0,V.jsx)(`span`,{children:e(`products.detail.feature3Text`)})]}),(0,V.jsxs)(`li`,{children:[(0,V.jsx)(`img`,{src:_,alt:``}),(0,V.jsx)(`strong`,{children:e(`products.detail.feature4Title`)}),(0,V.jsx)(`span`,{children:e(`products.detail.feature4Text`)})]})]}),J.length>0&&(0,V.jsxs)(R,{children:[(0,V.jsx)(`h3`,{children:e(`products.detail.otherFlavors`)}),(0,V.jsx)(x,{ariaLabel:e(`products.detail.otherFlavors`),children:J.map(e=>{let t=c(e,n.language);return(0,V.jsx)(y,{$desktop:`16.6%`,$tablet:`33.333%`,children:(0,V.jsxs)(z,{to:e.link,children:[(0,V.jsx)(`img`,{src:e.img,alt:t.title,loading:`lazy`}),(0,V.jsx)(`span`,{children:t.title})]})},e.id)})})]})]}),(0,V.jsx)(w,{children:(0,V.jsxs)(r,{children:[(0,V.jsx)(`div`,{children:(0,V.jsx)(`h1`,{children:e(`products.needOtherFormat`)})}),(0,V.jsx)(T,{children:Y.map(t=>(0,V.jsxs)(m,{to:t.link,children:[(0,V.jsx)(`img`,{src:t.img,alt:``}),(0,V.jsx)(`h3`,{children:e(`products.${t.key}.categoryLinkTitle`)})]},t.key))})]})})]})})};export{H as ProductDetailPage};
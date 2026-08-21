import{c as e,n as t,s as n,t as r}from"./jsx-runtime-D19uldVM.js";import{g as i,h as a}from"./products-DuxCjXYv.js";import{t as o}from"./Logo-B322fVD0.js";import{n as s,t as c}from"./CategoriesSection-L3uhrLsb.js";import{t as l}from"./TitleSpan-B6ZzKOtg.js";import{t as u}from"./Reveal-Cvrr1Tj_.js";var d=n.section`
	margin: 0;
	padding: 0;
	height: 100vh;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fcf8f2;
	height: 100vh;
	position: relative;
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.7) 21%,
			rgba(230, 212, 184, 0.7) 83%
		),
		url(${`/EvaSik/assets/sad3-BfChywGT.webp`});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@media (max-width: 900px) {
		height: auto;
		min-height: 100svh;
		padding: 80px 0;
	}
`,f=n.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 24px;

		> div:first-child,
		> div:last-child {
			display: none;
		}
	}
	img {
		width: 100%;
		max-width: 360px;
	}
`,p=n.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	img {
		width: 50%;
	}
	h3 {
		width: 70%;
		text-align: center;
		font-family: "Cormorant";
		font-weight: 600;
		font-size: 38px;
	}

	@media (max-width: 900px) {
		img {
			width: 70%;
			max-width: 220px;
		}
		h3 {
			width: 100%;
			font-size: 26px;
		}
	}
`,m=n.a`
	position: absolute;
	bottom: 20px;
	left: 50%;
	animation: pulse 2s ease infinite;
	img {
		width: 80px;
	}

	@keyframes pulse {
		0% {
			transform: translateY(0) translateX(-50%);
		}
		50% {
			transform: translateY(-10px) translateX(-50%);
		}
		100% {
			transform: translateY(0) translateX(-50%);
		}
	}
`,h=n.section`
	background-color: #eee2cf;
	padding: 100px 0px;
`,g=n.div`
	max-width: 780px;
	margin: 0 auto;
	text-align: center;

	p {
		font-size: 19px;
		line-height: 1.6;
		color: #2b2b2b;
		margin-bottom: 20px;

		&:last-of-type {
			margin-bottom: 32px;
		}
	}

	@media (max-width: 900px) {
		p {
			font-size: 16px;
		}
	}
`,_=n.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 16px 34px;
	border-radius: 999px;
	background: var(--accent-color);
	color: var(--main-color);
	font-weight: 600;
	font-size: 15px;
	transition:
		transform 0.2s ease,
		opacity 0.2s ease;

	@media (hover: hover) {
		&:hover {
			transform: translateY(-3px);
			opacity: 0.92;
		}
	}
`,v=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20fill='none'%20stroke='%23000'%20viewBox='-2.4%20-2.4%2028.8%2028.8'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.8'%20d='m12%2020%206-6m-6%206-6-6m6%206V9.5M12%204v2.5'/%3e%3c/svg%3e`,y=`/EvaSik/assets/football-CS8lQ4bx.webp`,b=`/EvaSik/assets/TirasFootball-aGEH5DMl.webp`,x=`/EvaSik/assets/tiras2-CiCtGuXH.webp`,S=n.section`
	padding: 0px;
	background-color: ${e=>(e.$isReverse,`#EEE2CF`)};
`,C=n.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${e=>e.$isReverse?`row-reverse`:`row`};
	padding-bottom: ${e=>e.$isPaddingBot?`200px`:`0px`};

	.logo__block,
	.info__block {
		width: 50%;
		overflow: hidden;
	}
	.logo__block {
		img {
			width: 100%;
			height: 100%;
		}
	}
	.info__block {
		img {
			width: fit-content;
			margin: 0px 20px;
		}
	}
	img {
		width: 100%;
		height: 100%;
		transform: scale(1.1);
	}

	.info__block {
		position: relative;
		z-index: 300;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: ${e=>e.$isReverse?`0px 20px 0px 00px`:`0px 0px 0px 20px`};
		h3 {
			font-family: "Cormorant", sans-serif;
			font-weight: 600;
			font-size: 70px;
			margin-bottom: 20px;
		}
		p {
			font-size: 20px;
			position: relative;
			z-index: 100;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 20px;
		padding: 30px 0;

		.logo__block,
		.info__block {
			width: 100%;
		}
		.info__block {
			padding: 0;
			h3 {
				font-size: 34px;
				margin-bottom: 12px;
			}
			p {
				font-size: 16px;
			}
		}
	}
`,w=n.div`
	position: relative;
	z-index: 100;
	padding-top: 100px;
	div {
		margin: 20px 0px;
		width: 100%;
		h1 {
			text-align: center;
			width: 100%;
		}
	}
`,T=`/EvaSik/assets/aboutUs-mEz5pOWp.webp`,E=`/EvaSik/assets/AboutUs2-BHmNyhSy.webp`,D=`/EvaSik/assets/5-B7Q2MOj-.svg`,O=`/EvaSik/assets/aboutUs1-Cuxgvr0L.webp`,k=`/EvaSik/assets/church-DN6AvWiS.webp`,A=`/EvaSik/assets/AboutUs4-ot3AvwFj.webp`,j=r(),M=()=>{let{t:n}=e();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(S,{id:`about-history`,$isReverse:!0,children:[(0,j.jsxs)(t,{children:[(0,j.jsxs)(C,{$isReverse:!1,children:[(0,j.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:E,alt:``,loading:`lazy`})}),(0,j.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.historyTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.historyText`)})]})]}),(0,j.jsxs)(C,{$isReverse:!0,children:[(0,j.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:T,alt:``,loading:`lazy`})}),(0,j.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.rawMaterialTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.rawMaterialText`)})]})]}),(0,j.jsxs)(C,{$isReverse:!1,children:[(0,j.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:O,alt:``,loading:`lazy`})}),(0,j.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.trustTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.trustText`)})]})]}),(0,j.jsxs)(C,{$isReverse:!0,children:[(0,j.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:D,alt:``,loading:`lazy`,style:{padding:`50px`}})}),(0,j.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.allUkraineTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.allUkraineText`)})]})]})]}),(0,j.jsx)(c,{})]}),(0,j.jsxs)(S,{$isReverse:!1,children:[(0,j.jsxs)(t,{children:[(0,j.jsxs)(C,{$isReverse:!1,children:[(0,j.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:y,alt:``})}),(0,j.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.footballTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.footballText`)})]})]}),(0,j.jsxs)(C,{$isReverse:!0,children:[(0,j.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:b,alt:``})}),(0,j.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.tirasTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.tirasText`)})]})]}),(0,j.jsxs)(C,{$isReverse:!1,children:[(0,j.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:x,alt:``})}),(0,j.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.socialTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.socialText`)})]})]})]}),(0,j.jsx)(s,{})]}),(0,j.jsx)(S,{id:`about-history`,$isReverse:!0,children:(0,j.jsxs)(t,{children:[(0,j.jsxs)(C,{$isReverse:!1,children:[(0,j.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:k,alt:``,loading:`lazy`})}),(0,j.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.сhurchTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.сhurchText`)})]})]}),(0,j.jsxs)(C,{$isReverse:!0,children:[(0,j.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,j.jsx)(`img`,{src:A,alt:``,loading:`lazy`})}),(0,j.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.сhurchTitle1`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.сhurchText1`)})]})]}),(0,j.jsxs)(w,{style:{paddingBottom:`100px`},children:[(0,j.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,j.jsx)(l,{title:n(`aboutUs.volonterTitle`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.volonterText`)})]}),(0,j.jsx)(u,{direction:`right`,className:`info__block`,children:(0,j.jsx)(`p`,{children:n(`aboutUs.volonterText1`)})}),(0,j.jsx)(u,{direction:`right`,className:`info__block`,children:(0,j.jsx)(`p`,{children:n(`aboutUs.volonterText2`)})}),(0,j.jsx)(u,{direction:`right`,className:`info__block`,children:(0,j.jsx)(`p`,{children:n(`aboutUs.volonterText3`)})})]})]})})]})},N=`https://vitamin-2015.com/categories/1`,P=()=>{let{t:n}=e();return(0,j.jsxs)(`main`,{children:[(0,j.jsx)(d,{children:(0,j.jsx)(t,{children:(0,j.jsxs)(f,{children:[(0,j.jsx)(`div`,{children:(0,j.jsx)(`img`,{src:a,alt:``})}),(0,j.jsxs)(p,{children:[(0,j.jsx)(`img`,{src:o,alt:``}),(0,j.jsx)(`h3`,{children:n(`aboutUs.intro`)}),(0,j.jsx)(m,{href:`#about-history`,children:(0,j.jsx)(`img`,{src:v,alt:``})})]}),(0,j.jsx)(`div`,{children:(0,j.jsx)(`img`,{src:i,alt:``})})]})})}),(0,j.jsx)(h,{children:(0,j.jsx)(t,{children:(0,j.jsx)(u,{children:(0,j.jsxs)(g,{children:[(0,j.jsx)(`p`,{children:n(`aboutUs.concentrates.paragraph1`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.concentrates.paragraph2`)}),(0,j.jsx)(`p`,{children:n(`aboutUs.concentrates.paragraph3`)}),(0,j.jsx)(_,{href:N,target:`_blank`,rel:`noopener noreferrer`,children:n(`aboutUs.concentrates.cta`)})]})})})}),(0,j.jsx)(M,{})]})};export{P as AboutUsPage};
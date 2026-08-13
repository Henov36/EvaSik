import{C as e,_ as t,g as n,h as r,v as i,w as a}from"./products-Gl8LtO0w.js";import{t as o}from"./Logo-B322fVD0.js";import{n as s,r as c,t as l}from"./CategoriesSection-B_6QdNLD.js";import{t as u}from"./Reveal-CelFVuR9.js";var d=e.section`
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

	/* background: linear-gradient(
		1deg,
		rgba(230, 212, 184, 1) 8%,
		rgba(33, 99, 30, 1) 79%
	); */

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
`,f=e.div`
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
`,p=e.div`
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
`,m=e.a`
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
`,h=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20fill='none'%20stroke='%23000'%20viewBox='-2.4%20-2.4%2028.8%2028.8'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.8'%20d='m12%2020%206-6m-6%206-6-6m6%206V9.5M12%204v2.5'/%3e%3c/svg%3e`,g=`/EvaSik/assets/football-CS8lQ4bx.webp`,_=`/EvaSik/assets/TirasFootball-aGEH5DMl.webp`,v=`/EvaSik/assets/tiras2-DO1hvDpy.jfif`,y=e.section`
	padding: 0px;
	background-color: ${e=>(e.$isReverse,`#EEE2CF`)};
`,b=e.div`
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
`,x=e.div`
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
`,S=`/EvaSik/assets/aboutUs-w_G6EAXG.png`,C=`/EvaSik/assets/AboutUs2-BWCy9EnG.png`,w=`/EvaSik/assets/5-B7Q2MOj-.svg`,T=`/EvaSik/assets/aboutUs1-BcKgNrvK.png`,E=`/EvaSik/assets/church-CHQRQlCD.png`,D=`/EvaSik/assets/AboutUs4-9HanwcyZ.png`,O=t(),k=()=>{let{t:e}=a();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(y,{id:`about-history`,$isReverse:!0,children:[(0,O.jsxs)(i,{children:[(0,O.jsxs)(b,{$isReverse:!1,children:[(0,O.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:C,alt:``,loading:`lazy`})}),(0,O.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.historyTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.historyText`)})]})]}),(0,O.jsxs)(b,{$isReverse:!0,children:[(0,O.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:S,alt:``,loading:`lazy`})}),(0,O.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.rawMaterialTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.rawMaterialText`)})]})]}),(0,O.jsxs)(b,{$isReverse:!1,children:[(0,O.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:T,alt:``,loading:`lazy`})}),(0,O.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.trustTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.trustText`)})]})]}),(0,O.jsxs)(b,{$isReverse:!0,children:[(0,O.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:w,alt:``,loading:`lazy`,style:{padding:`50px`}})}),(0,O.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.allUkraineTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.allUkraineText`)})]})]})]}),(0,O.jsx)(l,{})]}),(0,O.jsxs)(y,{$isReverse:!1,children:[(0,O.jsxs)(i,{children:[(0,O.jsxs)(b,{$isReverse:!1,children:[(0,O.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:g,alt:``})}),(0,O.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.footballTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.footballText`)})]})]}),(0,O.jsxs)(b,{$isReverse:!0,children:[(0,O.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:_,alt:``})}),(0,O.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.tirasTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.tirasText`)})]})]}),(0,O.jsxs)(b,{$isReverse:!1,children:[(0,O.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:v,alt:``})}),(0,O.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.socialTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.socialText`)})]})]})]}),(0,O.jsx)(c,{})]}),(0,O.jsx)(y,{id:`about-history`,$isReverse:!0,children:(0,O.jsxs)(i,{children:[(0,O.jsxs)(b,{$isReverse:!1,children:[(0,O.jsx)(u,{direction:`left`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:E,alt:``,loading:`lazy`})}),(0,O.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.сhurchTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.сhurchText`)})]})]}),(0,O.jsxs)(b,{$isReverse:!0,children:[(0,O.jsx)(u,{direction:`right`,className:`logo__block`,children:(0,O.jsx)(`img`,{src:D,alt:``,loading:`lazy`})}),(0,O.jsxs)(u,{direction:`left`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.сhurchTitle1`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.сhurchText1`)})]})]}),(0,O.jsxs)(x,{style:{paddingBottom:`100px`},children:[(0,O.jsxs)(u,{direction:`right`,className:`info__block`,children:[(0,O.jsx)(s,{title:e(`aboutUs.volonterTitle`)}),(0,O.jsx)(`p`,{children:e(`aboutUs.volonterText`)})]}),(0,O.jsx)(u,{direction:`right`,className:`info__block`,children:(0,O.jsx)(`p`,{children:e(`aboutUs.volonterText1`)})}),(0,O.jsx)(u,{direction:`right`,className:`info__block`,children:(0,O.jsx)(`p`,{children:e(`aboutUs.volonterText2`)})}),(0,O.jsx)(u,{direction:`right`,className:`info__block`,children:(0,O.jsx)(`p`,{children:e(`aboutUs.volonterText3`)})})]})]})})]})},A=()=>{let{t:e}=a();return(0,O.jsxs)(`main`,{children:[(0,O.jsx)(d,{children:(0,O.jsx)(i,{children:(0,O.jsxs)(f,{children:[(0,O.jsx)(`div`,{children:(0,O.jsx)(`img`,{src:r,alt:``})}),(0,O.jsxs)(p,{children:[(0,O.jsx)(`img`,{src:o,alt:``}),(0,O.jsx)(`h3`,{children:e(`aboutUs.intro`)}),(0,O.jsx)(m,{href:`#about-history`,children:(0,O.jsx)(`img`,{src:h,alt:``})})]}),(0,O.jsx)(`div`,{children:(0,O.jsx)(`img`,{src:n,alt:``})})]})})}),(0,O.jsx)(k,{})]})};export{A as AboutUsPage};
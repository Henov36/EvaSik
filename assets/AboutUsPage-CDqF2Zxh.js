import{i as e,l as t,n,r,t as i,u as a}from"./granat-DKJZ7AX7.js";import{t as o}from"./Logo-B322fVD0.js";import{n as s,t as c}from"./TitleSpan-BY__rELu.js";import{t as l}from"./Reveal-BYyayRrn.js";var u=t.section`
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
`,d=t.div`
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
`,f=t.div`
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
`,p=t.a`
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
`,m=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20fill='none'%20stroke='%23000'%20viewBox='-2.4%20-2.4%2028.8%2028.8'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.8'%20d='m12%2020%206-6m-6%206-6-6m6%206V9.5M12%204v2.5'/%3e%3c/svg%3e`,h=`/EvaSik/assets/football-CS8lQ4bx.webp`,g=`/EvaSik/assets/TirasFootball-aGEH5DMl.webp`,_=`/EvaSik/assets/tiras2-DO1hvDpy.jfif`,v=t.section`
	padding: 0px;
	background-color: ${e=>(e.$isReverse,`#EEE2CF`)};
`,y=t.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${e=>e.$isReverse?`row-reverse`:`row`};

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
`,b=`/EvaSik/assets/21-45qVUK5v.webp`,x=`/EvaSik/assets/3-BK33Np8E.webp`,S=`/EvaSik/assets/4-DZasDXMa.webp`,C=`/EvaSik/assets/5-B7Q2MOj-.svg`,w=r(),T=()=>{let{t}=a();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(v,{id:`about-history`,$isReverse:!0,children:[(0,w.jsxs)(e,{children:[(0,w.jsxs)(y,{$isReverse:!1,children:[(0,w.jsx)(l,{direction:`left`,className:`logo__block`,children:(0,w.jsx)(`img`,{src:b,alt:``,loading:`lazy`})}),(0,w.jsxs)(l,{direction:`right`,className:`info__block`,children:[(0,w.jsx)(c,{title:t(`aboutUs.historyTitle`)}),(0,w.jsx)(`p`,{children:t(`aboutUs.historyText`)})]})]}),(0,w.jsxs)(y,{$isReverse:!0,children:[(0,w.jsx)(l,{direction:`right`,className:`logo__block`,children:(0,w.jsx)(`img`,{src:x,alt:``,loading:`lazy`})}),(0,w.jsxs)(l,{direction:`left`,className:`info__block`,children:[(0,w.jsx)(c,{title:t(`aboutUs.rawMaterialTitle`)}),(0,w.jsx)(`p`,{children:t(`aboutUs.rawMaterialText`)})]})]}),(0,w.jsxs)(y,{$isReverse:!1,children:[(0,w.jsx)(l,{direction:`left`,className:`logo__block`,children:(0,w.jsx)(`img`,{src:S,alt:``,loading:`lazy`})}),(0,w.jsxs)(l,{direction:`right`,className:`info__block`,children:[(0,w.jsx)(c,{title:t(`aboutUs.trustTitle`)}),(0,w.jsx)(`p`,{children:t(`aboutUs.trustText`)})]})]}),(0,w.jsxs)(y,{$isReverse:!0,children:[(0,w.jsx)(l,{direction:`right`,className:`logo__block`,children:(0,w.jsx)(`img`,{src:C,alt:``,loading:`lazy`,style:{padding:`50px`}})}),(0,w.jsxs)(l,{direction:`left`,className:`info__block`,children:[(0,w.jsx)(c,{title:t(`aboutUs.allUkraineTitle`)}),(0,w.jsx)(`p`,{children:t(`aboutUs.allUkraineText`)})]})]})]}),(0,w.jsx)(s,{})]}),(0,w.jsx)(v,{$isReverse:!1,children:(0,w.jsxs)(e,{children:[(0,w.jsxs)(y,{$isReverse:!1,children:[(0,w.jsx)(l,{direction:`left`,className:`logo__block`,children:(0,w.jsx)(`img`,{src:h,alt:``})}),(0,w.jsxs)(l,{direction:`right`,className:`info__block`,children:[(0,w.jsx)(c,{title:t(`aboutUs.footballTitle`)}),(0,w.jsx)(`p`,{children:t(`aboutUs.footballText`)})]})]}),(0,w.jsxs)(y,{$isReverse:!0,children:[(0,w.jsx)(l,{direction:`right`,className:`logo__block`,children:(0,w.jsx)(`img`,{src:g,alt:``})}),(0,w.jsxs)(l,{direction:`left`,className:`info__block`,children:[(0,w.jsx)(c,{title:t(`aboutUs.tirasTitle`)}),(0,w.jsx)(`p`,{children:t(`aboutUs.tirasText`)})]})]}),(0,w.jsxs)(y,{$isReverse:!1,style:{paddingBottom:`200px`},children:[(0,w.jsx)(l,{direction:`left`,className:`logo__block`,children:(0,w.jsx)(`img`,{src:_,alt:``})}),(0,w.jsxs)(l,{direction:`right`,className:`info__block`,children:[(0,w.jsx)(c,{title:t(`aboutUs.socialTitle`)}),(0,w.jsx)(`p`,{children:t(`aboutUs.socialText`)})]})]})]})})]})},E=()=>{let{t}=a();return(0,w.jsxs)(`main`,{children:[(0,w.jsx)(u,{children:(0,w.jsx)(e,{children:(0,w.jsxs)(d,{children:[(0,w.jsx)(`div`,{children:(0,w.jsx)(`img`,{src:i,alt:``})}),(0,w.jsxs)(f,{children:[(0,w.jsx)(`img`,{src:o,alt:``}),(0,w.jsx)(`h3`,{children:t(`aboutUs.intro`)}),(0,w.jsx)(p,{href:`#about-history`,children:(0,w.jsx)(`img`,{src:m,alt:``})})]}),(0,w.jsx)(`div`,{children:(0,w.jsx)(`img`,{src:n,alt:``})})]})})}),(0,w.jsx)(T,{})]})};export{E as AboutUsPage};
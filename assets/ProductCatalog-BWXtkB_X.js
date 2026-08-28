import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{c as t,f as n,s as r,t as i}from"./jsx-runtime-D19uldVM.js";import{c as a,l as o,s,u as c,y as l}from"./products-DX9TTxyP.js";var u=e(n(),1),d=r.div`
	padding: 0;
`,f=r.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding-bottom: 50px;
`,p=r.button`
	cursor: pointer;
	padding: 10px 20px;
	border-radius: 40px;
	border: 2px solid var(--accent-color);
	background: ${e=>e.$active?`var(--accent-color)`:`transparent`};
	color: ${e=>e.$active?`var(--main-color)`:`inherit`};
	font-size: 14px;
	font-weight: 600;
	transition: all 0.2s ease;

	@media (hover: hover) {
		&:hover {
			background: ${e=>e.$active?`var(--accent-color)`:`rgba(0, 0, 0, 0.08)`};
		}
	}

	@media (max-width: 600px) {
		padding: 8px 14px;
		font-size: 13px;
	}
`;r.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;
	padding-bottom: 30px;
	border-bottom: 2px solid var(--accent-color);
	margin-bottom: 30px;

	.count {
		font-size: 14px;
		opacity: 0.7;
	}

	select {
		border: 2px solid var(--accent-color);
		border-radius: 40px;
		padding: 8px 16px;
		background: var(--main-color);
		cursor: pointer;
		font-size: 14px;
	}
`;var m=r.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 20px;
	padding-bottom: 40px;

	@media (max-width: 1100px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 12px;
	}
	@media (max-width: 420px) {
		grid-template-columns: 1fr;
	}
`,h=r.div`
	position: relative;
	background: transparent;
	border: 2px solid var(--accent-color);
	border-radius: 18px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	transition: transform 0.25s ease, box-shadow 0.25s ease;

	a {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.img-wrap {
		height: 180px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-height: 100%;
			max-width: 100%;
			object-fit: contain;
		}
	}

	.tag {
		align-self: flex-start;
		font-size: 12px;
		font-weight: 600;
		padding: 4px 10px;
		border-radius: 20px;
		border: 1px solid var(--accent-color);
		margin-bottom: 10px;
	}

	h3 {
		font-size: 16px;
		margin-top: 12px;
		flex: 1;
	}

	.size {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
		opacity: 0.7;
		margin-top: 10px;
	}

	.details-btn {
		margin-top: 14px;
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
			transform: translate(-4px, -4px);
			box-shadow: 4px 4px 0px var(--accent-color);
		}
	}

	@media (max-width: 700px) {
		padding: 12px;
		.img-wrap {
			height: 130px;
		}
		h3 {
			font-size: 14px;
		}
	}
`,g=r.div`
	padding: 60px 0px;
	text-align: center;
	font-size: 18px;
	opacity: 0.7;
`,_=i(),v=({products:e})=>{let{t:n,i18n:r}=t(),[i,v]=(0,u.useState)(`all`),y=(0,u.useMemo)(()=>{let t=new Set;return e.forEach(e=>s(e).forEach(e=>t.add(e))),Array.from(t)},[e]),b=(0,u.useMemo)(()=>i===`all`?e:e.filter(e=>s(e).includes(i)),[e,i]);return(0,_.jsxs)(d,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(p,{type:`button`,$active:i===`all`,onClick:()=>v(`all`),children:n(`products.flavorFamily.all`)}),y.map(e=>(0,_.jsx)(p,{type:`button`,$active:i===e,onClick:()=>v(e),children:n(`products.flavorFamily.${e}`)},e))]}),b.length===0?(0,_.jsx)(g,{children:n(`products.catalog.empty`)}):(0,_.jsx)(m,{children:b.map(e=>{let t=a(e,r.language);return(0,_.jsx)(h,{children:(0,_.jsxs)(l,{to:e.link,children:[(0,_.jsx)(`span`,{className:`tag`,children:o(e,r.language)}),(0,_.jsx)(`div`,{className:`img-wrap`,children:(0,_.jsx)(`img`,{src:e.img,alt:t.title})}),(0,_.jsx)(`h3`,{children:t.title}),(0,_.jsx)(`span`,{className:`size`,children:c(e,r.language)}),(0,_.jsx)(`span`,{className:`details-btn`,children:n(`products.detail.moreDetails`)})]})},e.id)})})]})};export{v as t};
import{l as e}from"./granat-BAAw5UWT.js";var t=e.section`
	background-image:
		linear-gradient(
			270deg,
			rgba(230, 212, 184, 0.35) 21%,
			rgba(230, 212, 184, 0.81) 83%
		),
		url(${`/EvaSik/assets/sad4-Co5YALh7.webp`});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		
`,n=e.section`
	padding: 0;
	background: #eee2cf;
`,r=e.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px 0px;
	h2 {
		font-size: 70px;
	}
	h4 {
		font-size: 40px;
	}
	

	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
		padding: 30px 0px;

		h2 {
			font-size: 38px;
		}
		h4 {
			font-size: 22px;
		}
	}
`;e.ul`
	display: flex;
	justify-content: flex-start;
	align-items: start;
	flex-wrap: wrap;
	gap: 0px;
	padding-left: 6px;

	div {
		width: 25%;
		border: 2px solid black;
		margin: calc(-2px * 0.5);
	}

	@media (max-width: 900px) {
		div {
			width: 50%;
		}
	}
	@media (max-width: 480px) {
		div {
			width: 100%;
		}
	}
`;var i=e.div`
	width: 100%;
	border-top: 2px solid black;
	border-bottom: 2px solid black;
	overflow: hidden;
	white-space: nowrap;
	padding: 4px;
	margin-top: -1px;
	.marquee-content {
		display: flex;
		width: max-content;

		animation: marquee 50s linear infinite;

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24px;
			/* padding-right: 50px; */
			span {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 16px;
			}
			img {
				height: 20px;
				margin: 0px 15px;
			}

			@media (max-width: 600px) {
				font-size: 16px;
				span {
					font-size: 13px;
				}
				img {
					height: 16px;
					margin: 0px 10px;
				}
			}
		}

		@keyframes marquee {
			from {
				transform: translateX(0);
			}

			to {
				transform: translateX(-50%);
			}
		}
	}
`,a=e.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 40%;
		transition: all 0.3s ease;
		border: 2px solid var(--accent-color);
		padding: 20px;
		border-radius: 20px;

		img {
			/* width: 50%; */
			height: 236px;
		}
		@media (hover: hover) {
			&:hover {
				transform: translate(-4px, -4px);
				box-shadow: 4px 4px 0px var(--accent-color);
			}
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 30px;
		padding-bottom: 100px;

		a {
			width: 80%;
			img {
				height: 160px;
			}
		}
	}
`,o=e.section`
	height: 100vh;
	padding-bottom: 0;
	background-color: #eee2cf;

	h1 {
		font-family: "Gilroy Medium", sans-serif;
	}

	@media (max-width: 900px) {
		height: auto;
		padding: 50px 0;
	}
`;export{r as a,n as i,o as n,i as o,a as r,t};
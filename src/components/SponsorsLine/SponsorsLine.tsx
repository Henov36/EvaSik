import novusLogo from "../../assets/img/sponsors/novus.svg";
import rozetkaLogo from "../../assets/img/sponsors/rozetka.svg";
import sparLogo from "../../assets/img/sponsors/spar1.svg";
import atbLogo from "../../assets/img/sponsors/atb.svg";
import nivaLogo from "../../assets/img/sponsors/niva.webp";
import bromLogo from "../../assets/img/sponsors/brom.svg";
import rykaLogo from "../../assets/img/sponsors/ryka.svg";
import pchilkaLogo from "../../assets/img/sponsors/pchilka.svg";
import mozzarelaLogo from "../../assets/img/sponsors/mozzarella.webp";
import epic from "../../assets/img/sponsors/Epicentrk_logo.webp";
import cmMarket from "../../assets/img/sponsors/cm.webp";
import vinaSvity from "../../assets/img/sponsors/vinaSvity.svg";
import tamTam from "../../assets/img/sponsors/tamtam.svg";
import galicka from "../../assets/img/sponsors/galicka.webp";
import NashKrai from "../../assets/img/sponsors/nashKrai.svg";
import Kalina from "../../assets/img/sponsors/kalina.webp";
import Posad from "../../assets/img/sponsors/posad.svg";
import Rost from "../../assets/img/sponsors/rost.webp";
import ProdLux from "../../assets/img/sponsors/prodlux.webp";
import Coop from "../../assets/img/sponsors/coop.webp";
import psMarket from "../../assets/img/sponsors/psMarket.webp";
import ambar from "../../assets/img/sponsors/ambar-removebg-preview.webp";
import taistra from "../../assets/img/sponsors/taistra.svg";
import flashPlus from "../../assets/img/sponsors/freshplus_cover.webp";

export interface Sponsor {
	id: string;
	logoUrl: string;
	name: string;
	websiteUrl?: string;
}

const defaultSponsors: Sponsor[] = [
	{
		id: "0",
		name: "psMarket",
		logoUrl: psMarket,
	},
	{
		id: "1",
		name: "Rozetka",
		logoUrl: rozetkaLogo,
		websiteUrl: "https://rozetka.com.ua/",
	},
	{
		id: "2",
		name: "Spar",
		logoUrl: sparLogo,
		websiteUrl: "https://spar.ua/",
	},
	{
		id: "3",
		name: "Epicentr",
		logoUrl: epic,
		websiteUrl: "https://epicentrk.ua/",
	},
	{
		id: "4",
		name: "Brom",
		logoUrl: bromLogo,
	},
	{
		id: "5",
		name: "atb",
		logoUrl: atbLogo,
		websiteUrl: "https://www.atbmarket.com/",
	},
	{
		id: "6",
		name: "Niva",
		logoUrl: nivaLogo,
	},
	{
		id: "7",
		name: "ryka",
		logoUrl: rykaLogo,
	},
	{
		id: "8",
		name: "Pchilka",
		logoUrl: pchilkaLogo,
	},
	{
		id: "9",
		name: "Mozzarella",
		logoUrl: mozzarelaLogo,
	},
	{
		id: "10",
		name: "CM",
		logoUrl: cmMarket,
	},
	{
		id: "11",
		name: "Vina Svity",
		logoUrl: vinaSvity,
	},
];

const defaultSponsors1: Sponsor[] = [
	{
		id: "12",
		name: "TamTam",
		logoUrl: tamTam,
	},
	{
		id: "13",
		name: "Galicka",
		logoUrl: galicka,
	},
	{
		id: "14",
		name: "Nash Krai",
		logoUrl: NashKrai,
		websiteUrl: "https://nashkraj.ua/",
	},
	{
		id: "15",
		name: "Kalina",
		logoUrl: Kalina,
	},
	{
		id: "16",
		name: "Posad",
		logoUrl: Posad,
	},
	{
		id: "17",
		name: "Rost",
		logoUrl: Rost,
	},
	{
		id: "18",
		name: "ProdLux",
		logoUrl: ProdLux,
	},
	{
		id: "19",
		name: "COOP",
		logoUrl: Coop,
		websiteUrl: "http://www.coop.ua/",
	},
	{
		id: "20",
		name: "Novus",
		logoUrl: novusLogo,
		websiteUrl: "https://novus.ua/",
	},
	{
		id: "21",
		name: "ambar",
		logoUrl: ambar,
	},
	{
		id: "22",
		name: "taistra",
		logoUrl: taistra,
	},
	{
		id: "23",
		name: "freshPlus",
		logoUrl: flashPlus,
	},
];

export const ALL_SPONSORS: Sponsor[] = [...defaultSponsors, ...defaultSponsors1];

export const SPONSORS_ROW_1: Sponsor[] = defaultSponsors;
export const SPONSORS_ROW_2: Sponsor[] = defaultSponsors1;

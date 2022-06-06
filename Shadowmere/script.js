window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}

gtag("js", new Date());

gtag("config", "G-KQ4KMVJEXY");

window.addEventListener("load", function () {
	window.wpcc.init({
		border: "thin",
		corners: "small",
		colors: {
			popup: {
				background: "#f6f6f6",
				text: "#000000",
				border: "#cfcfcf",
			},
			button: {
				background: "#303030",
				text: "#ffffff",
			},
		},
		position: "bottom",
	});
});

function getFlagEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

function getPercentage(portion, total) {
	return Math.trunc((portion * 100) / total);
}

// document.getElementById(rangeSld).disabled = true;

// function toastNotification() {
// 	return {
// 		open2: false,
// 		title: "Toast Title",
// 		message: "Toast message",
// 		success: false,
// 		openToast() {
// 			this.ope2 = true;
// 			setTimeout(() => {
// 				this.open2 = false;
// 			}, 5000);
// 		},
// 	};
// }

document.addEventListener("alpine:init", () => {
	Alpine.store("comps", {
		proxies: null,
		home: false,
		last: false,
		serversonline: false,
		countries: false,
		marker: false,
		shadownav: false,
		modal1: false,
		modal2: false,
		stringPaises: [],
		open: false,
		rangeValue: 1,
		isDarkLoader: false,
		menu: "",
		qr_code: false,
		notTouchBgServers: false,
		notTouchBgCountries: false,
		notTouchBgMenuMobile: false,
		notTouchBgQR: false,
		idQrServer: null,
		//opciones menu navbar
		about: false,
		listaHome: true,
		why: false,
	});
});

function copyToClickBoard(content, flagSuccess) {
	navigator.clipboard.writeText(content);
}

const totalServersPages = (totalServers, entriesLimit) => {
	if (totalServers % entriesLimit == 0) {
		return Math.trunc(totalServers / entriesLimit);
	} else {
		return Math.trunc(totalServers / entriesLimit) + 1;
	}
};

const GoToNextPage = (count) => {
	count++;
};

// const getApiUrl = (counter) => {
//   const endPoint = 'https://shadowmere.akiel.dev/api/proxies/?format=json&page=' + counter.toString();
//   return endPoint;
// };

const getApiUrl = (code) => {
	const endPoint = "https://restcountries.com/v3.1/alpha/" + code;
	return endPoint;
};

// const createCache = async (limit) => {
//   const response = new Array();
//   for (let i = 0; i < limit; i++) {
//     response[i] = await fetch(getApiUrl(i));
//   }
//   if (response.status !== 200) {
//     throw new Error("Cannot fetch data. Response status is not 200.");
//   }
//   const data = await response.json();
//   return data
// };

const searchCountries = async (code) => {
	const response = await fetch(getApiUrl(code));

	if (response.status !== 200) {
		throw new Error("Cannot fetch data. Response status is not 200.");
	}

	const data = await response.json();
	return data;
};

const getCountry = async (code) => {
	const country = await (fetch("https://restcountries.com/v3.1/alpha/" + code));
  let response = await country.json();
  return response[0].name.common;
};

const generateCountryArray = async (arr) => {
  var codeString = new Array();
  for (i = 0; i < arr.length; i++) {
    var countryNames = await getCountry(arr[i]);
    codeString.push(countryNames.name.common);
  }
  return codeString;
};

const localArray = async (arr) => {
  var country = new Object();
  var codeString = new Array();
  for (i = 0; i < arr.length; i++) {
    var countryNames = await getCountry(arr[i]);
    country = {"code": arr[i], "name": countryNames};
    codeString.push(country);
    // var countryNames = await getCountry(arr[i]);
    // codeString.push(countryNames.name.common);
  }
  // let data = codeString.json();
  return codeString;
}

// console.log(Promise.all(createCache(5)));

// [
// 	{
// 		name: {
// 			common: "Peru",
// 			official: "Republic of Peru",
// 			nativeName: {
// 				aym: { official: "Piruw Suyu", common: "Piruw" },
// 				que: { official: "Piruw Ripuwlika", common: "Piruw" },
// 				spa: { official: "República del Perú", common: "Perú" },
// 			},
// 		},
// 		tld: [".pe"],
// 		cca2: "PE",
// 		ccn3: "604",
// 		cca3: "PER",
// 		cioc: "PER",
// 		independent: true,
// 		status: "officially-assigned",
// 		unMember: true,
// 		currencies: { PEN: { name: "Peruvian sol", symbol: "S/ " } },
// 		idd: { root: "+5", suffixes: ["1"] },
// 		capital: ["Lima"],
// 		altSpellings: ["PE", "Republic of Peru", "República del Perú"],
// 		region: "Americas",
// 		subregion: "South America",
// 		languages: { aym: "Aymara", que: "Quechua", spa: "Spanish" },
// 		translations: {
// 			ara: { official: "جمهورية بيرو", common: "بيرو" },
// 			ces: { official: "Peruánská republika", common: "Peru" },
// 			cym: { official: "Republic of Peru", common: "Peru" },
// 			deu: { official: "Republik Peru", common: "Peru" },
// 			est: { official: "Peruu Vabariik", common: "Peruu" },
// 			fin: { official: "Perun tasavalta", common: "Peru" },
// 			fra: { official: "République du Pérou", common: "Pérou" },
// 			hrv: { official: "Republika Peru", common: "Peru" },
// 			hun: { official: "Perui Köztársaság", common: "Peru" },
// 			ita: { official: "Repubblica del Perù", common: "Perù" },
// 			jpn: { official: "ペルー共和国", common: "ペルー" },
// 			kor: { official: "페루 공화국", common: "페루" },
// 			nld: { official: "Republiek Peru", common: "Peru" },
// 			per: { official: "جمهوری پرو", common: "پرو" },
// 			pol: { official: "Republika Peru", common: "Peru" },
// 			por: { official: "República do Peru", common: "Perú" },
// 			rus: { official: "Республика Перу", common: "Перу" },
// 			slk: { official: "Peruánska republika", common: "Peru" },
// 			spa: { official: "República de Perú", common: "Perú" },
// 			swe: { official: "Republiken Peru", common: "Peru" },
// 			urd: { official: "جمہوریہ پیرو", common: "پیرو" },
// 			zho: { official: "秘鲁共和国", common: "秘鲁" },
// 		},
// 		latlng: [-10.0, -76.0],
// 		landlocked: false,
// 		borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
// 		area: 1285216.0,
// 		demonyms: {
// 			eng: { f: "Peruvian", m: "Peruvian" },
// 			fra: { f: "Péruvienne", m: "Péruvien" },
// 		},
// 		flag: "\uD83C\uDDF5\uD83C\uDDEA",
// 		maps: {
// 			googleMaps: "https://goo.gl/maps/uDWEUaXNcZTng1fP6",
// 			openStreetMaps: "https://www.openstreetmap.org/relation/288247",
// 		},
// 		population: 32971846,
// 		gini: { 2019: 41.5 },
// 		fifa: "PER",
// 		car: { signs: ["PE"], side: "right" },
// 		timezones: ["UTC-05:00"],
// 		continents: ["South America"],
// 		flags: {
// 			png: "https://flagcdn.com/w320/pe.png",
// 			svg: "https://flagcdn.com/pe.svg",
// 		},
// 		coatOfArms: {
// 			png: "https://mainfacts.com/media/images/coats_of_arms/pe.png",
// 			svg: "https://mainfacts.com/media/images/coats_of_arms/pe.svg",
// 		},
// 		startOfWeek: "monday",
// 		capitalInfo: { latlng: [-12.05, -77.05] },
// 		postalCode: { format: "#####", regex: "^(\\d{5})$" },
// 	},
// ];

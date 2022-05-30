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

function getPercentage(portion, total){  
  return (Math.trunc((portion*100)/total));
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
    // search: async (pageCounter) => {
    //   return await (await fetch('https://shadowmere.akiel.dev/api/proxies/?format=json&page=' + pageCounter.toString())).json(),
    
    //   // if (response.status !== 200) {
    //   //   throw new Error('Cannot fetch data. Response status is not 200.')
    //   // }
    // }
	});
  // Search("response", {
    
  // });
});

function copyToClickBoard(content, flagSuccess) {
	// flagSuccess = false;
	navigator.clipboard.writeText(content);
}

// const search = async (pageCounter) => {
//   const response = await (await fetch('https://shadowmere.akiel.dev/api/proxies/?format=json&page=' + pageCounter.toString())).json();

//   if (response.status !== 200) {
//     throw new Error('Cannot fetch data. Response status is not 200.');
//   }
// }

// function arrayToValuesAlone(){
//   const arreglo = new Array();
//   for (proxy in Object.values($store.comps.proxies.results) ) {
//     arreglo.push(proxy.results.location_country_code);
//   }
//   return [...new Set(arreglo)];
// }

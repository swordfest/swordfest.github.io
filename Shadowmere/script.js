window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-KQ4KMVJEXY');

window.addEventListener("load", function() {
    window.wpcc.init({
        "border": "thin",
        "corners": "small",
        "colors": {
            "popup": {
                "background": "#f6f6f6",
                "text": "#000000",
                "border": "#cfcfcf"

            },
            "button": {
                "background": "#303030",
                "text": "#ffffff"
            }
        },
        "position": "bottom"
    })
});

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
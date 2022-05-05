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

// document.getElementById(rangeSld).disabled = true;

function toastNotification() {
    return {
        open2: false,
        title: "Toast Title",
        message: "Toast message",
        success: false,
        openToast() {
            this.ope2 = true
            setTimeout(() => {
                this.open2 = false
            }, 5000)
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.store('comps', {
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
            blackScreen: false,


            // toggle() {
            //     this.on = !this.on
            // }

        })
        // Alpine.data('dropdown', () => ({
        //     countries: false,
        //     menuFlags: {
        //         ['x-ref']: 'menuFlags',
        //         ['@click']() {
        //             this.countries = true
        //             this.modal = true
        //         },
        //     },
        //     modalx: {
        //         ['x-show']() {
        //             return this.modal
        //         },
        //         ['@click.outside']() {
        //             this.modal = false
        //         },
        //     }
        // }))
})
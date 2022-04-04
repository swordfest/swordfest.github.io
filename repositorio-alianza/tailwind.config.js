module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./*.{html,js}",
    ],
    theme: {
        extend: {
            color: {
                'blue-50': '#078BD6',
                current: 'currentColor',
            },
            screens: {
                '2xl': { 'max': '1535px' },
                // => @media (max-width: 1535px) { ... }

                'xl': { 'max': '1279px' },
                // => @media (max-width: 1279px) { ... }

                'lg': { 'max': '1023px' },
                // => @media (max-width: 1023px) { ... }

                'md': { 'max': '767px' },
                // => @media (max-width: 767px) { ... }

                'sm': { 'max': '639px' },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [],
}
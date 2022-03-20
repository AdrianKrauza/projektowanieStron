module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            m: { max: '1200px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            fontFamily: {
                playfair: ['Playfair Display'],
                roboto: ['"roboto"'],
                robotoMono: ['"Roboto Mono"'],
                AGaramondPro: ['"AGaramondPro"'],
                dalmatins: ['"Dalmatins"'],
            },
            colors: {
                transparent: 'transparent',
                lightGray: '#e7e6e8',
                darkGray: '#333333',
                'darkGray-900': '#141414',
            },
        },
    },
    plugins: [],
};

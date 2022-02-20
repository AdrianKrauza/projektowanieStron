module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
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

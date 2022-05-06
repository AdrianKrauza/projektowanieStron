const withFonts = require('nextjs-fonts');
module.exports = withFonts();
module.exports = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     // enabled: true
// });
// module.exports = withBundleAnalyzer({});

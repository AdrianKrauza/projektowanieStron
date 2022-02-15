import lottie from 'lottie-web';
const lottieLoad = (container, animationData, preserveAspectRatio) => {
    return lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: preserveAspectRatio && {
            preserveAspectRatio: 'none',
        },
    });
};
export default lottieLoad;

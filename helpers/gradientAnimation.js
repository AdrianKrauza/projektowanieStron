const GradientAnimation = (el) => {
    let currentState = 0;
    const animations = setInterval(() => {
        currentState++;
        el.current.style.backgroundImage = `radial-gradient( circle at ${
            window.innerWidth < 2600 ? '75vw 25vw' : '2170px 490px'
        } , transparent 0%, #141414 ${currentState}% )`;
        if (currentState > 85) clearInterval(animations);
    }, 10);
};
export { GradientAnimation };

import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const portfolioMove = (ref, y) => {
    gsap.to(ref.current, {
        y: -y + 'rem',
        ease: 'none',
        scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
    });
};

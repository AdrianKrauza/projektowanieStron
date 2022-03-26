import { useEffect } from 'react';
import gsap, { Expo, Power4, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

const UsePortfolio = () => {
    let container;
    const pinPortfolio = (containerRef) => {
        container = containerRef;
        ScrollTrigger.create({
            trigger: containerRef.current,
            pin: containerRef.current.querySelector('.pin'),
            start: '0% 0%',
            end: '100% 0%',
        });
    };
    const moveElement = (el, start, speed, responsive = true, stop = 0.7, scrub = 1) => {
        const element = container.current.querySelectorAll(el);

        const start2 = start / (14 / vw(1));
        console.log(speed, (speed * 20) / vw(1));
        gsap.to(element, {
            // y: -vh(100) +  container.current.querySelector(el)?.offsetHeight - 1000,
            y: -4000,
            // y: responsive ? -vh(100) - ((container.current.querySelector(el)?.offsetHeight / 5 || 0)  ):(-window.innerHeight + container.current.querySelector(el)?.offsetHeight * stop || 0) ,
            ease: 'none',
            scrollTrigger: {
                trigger: container.current,
                markers: true,
                id: el,
                // start: `${start / (20 / vw(1))}px 100%`,
                start: `${start / 2}px 0%`,
                end: `+=${speed}px 0%`,
                scrub,
            },
        });
    };
    const scrollAnimationElement = (el, from, to, start, end, scrollTriggerProps) => {
        const element = container.current.querySelectorAll(el);
        gsap.fromTo(element, from, {
            ease: 'none',
            ...to,
            scrollTrigger: {
                trigger: container.current,
                start: `${start}px 100%`,
                end: `+=${vh(100) + end} 100%`,
                scrub: 1,
                ...scrollTriggerProps,
            },
        });
    };
    return {
        pinPortfolio,
        moveElement,
        scrollAnimationElement,
    };
};

export default UsePortfolio;

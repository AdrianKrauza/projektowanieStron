import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const vh = (coef) => window.innerHeight * (coef / 100);

const UsePortfolio = () => {
    let container;
    const pinPortfolio = (containerRef) => {
        container = containerRef;
        ScrollTrigger.create({
            trigger: containerRef.current,
            pin: containerRef.current.querySelector('.pin2'),
            start: '0% 0%',
            end: '100% 0%',
        });
    };
    const moveElement = (el, start, speed) => {
        start += 50;
        gsap.to(container.current.querySelector(el), {
            y: -vh(100),
            ease: 'none',
            scrollTrigger: {
                trigger: container.current,
                start: `${typeof start === 'number' ? vh(start * 0.4) + 'px' : start} 100%`,
                end: `+=${vh(speed * 0.4)} 100%`,
                scrub: 1,
            },
        });
    };
    const scrollAnimationElement = (el, from, to, start, end, scrollTriggerProps) => {
        start += 50;
        gsap.fromTo(container.current.querySelectorAll(el), from, {
            ease: 'none',
            ...to,
            scrollTrigger: {
                trigger: container.current,
                start: `${vh(start * 0.4)}px 100%`,
                end: `+=${vh(end * 0.4)} 100%`,
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

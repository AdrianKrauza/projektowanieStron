import { useEffect } from 'react';
import gsap, { Expo, Power4, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

const UsePortfolio = (changeSpeed = 0) => {
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
    const moveElement = (el, start, speed, responsive = true, stop = 0.7, scrub = true) => {
        const element = container.current.querySelectorAll(el);
        gsap.set(element,{
            top:-element[0]?.clientHeight
            }
        )
        gsap.fromTo(
            element,
            {
                y: 2000 + speed + element[0]?.clientHeight,
            },
            {
                y: '0',
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: `${start * ( element[0]?.clientHeight / 1000)} 0%`,
                    end: `+=${2000} 0%`,
                    scrub,
                },
            },
        );
    };
    const scrollAnimationElement = (el, from, to, start, end, scrollTriggerProps) => {
        const element = container.current.querySelectorAll(el);
        gsap.fromTo(element, from, {
            ease: 'none',
            ...to,
            scrollTrigger: {
                trigger: container.current,
                start: `${vh(100) * changeSpeed + start * (changeSpeed ? 0.4 : 1)}px 100%`,
                end: `+=${(vh(100) + end) * (changeSpeed ? 0.4 : 1)} 100%`,
                scrub: true,
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

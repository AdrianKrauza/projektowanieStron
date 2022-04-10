import { useEffect } from 'react';
import gsap,{Expo,Power4,Power1} from 'gsap';
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
    const moveElement = (el, start, speed,responsive = true,stop = 0.7,scrub = true) => {
        const element = container.current.querySelectorAll(el);
        gsap.to(element, {

            y: responsive ? -vh(100) - ((container.current.querySelector(el)?.offsetHeight / 5 || 0)  ):(-window.innerHeight + container.current.querySelector(el)?.offsetHeight * stop || 0) ,
            ease:responsive ? 'none' : Expo.easeOut,
            scrollTrigger: {
                trigger: container.current,
                start: `${typeof start === 'number' ? (vh(100) * changeSpeed) + ( vh(50) + start)* ( changeSpeed ? 0.4 : 1) + 'px' :  start} 100%`,
                end: `+=${ (vh( 100 )  + speed) * ( changeSpeed ? 0.4 : 1)} 100%`,
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
                start: `${(vh(100) * changeSpeed) + start* ( changeSpeed ? 0.4 : 1)}px 100%`,
                end: `+=${(vh(100) + end)* ( changeSpeed ? 0.4 : 1)} 100%`,
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

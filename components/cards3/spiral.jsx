import { useEffect, useRef } from 'react';
import SpiralData from '../../assets/cards3/spiral.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import lottieLoad from '../../helpers/lottieLoad';
const vh = (coef) => window.innerHeight * (coef / 100);
export const Spiral = () => {
    gsap.registerPlugin(ScrollTrigger);
    const spiralRef = useRef();
    useEffect(() => {
        const spiral = lottieLoad(spiralRef.current, SpiralData, true);
        spiral.goToAndStop(-1, true);
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: 'body',
                pin: spiralRef.current,
                start: '0% 0%',
                end: `${vh(400)} 100%`,
            });
            ScrollTrigger.create({
                trigger: 'body',
                start: `${vh((2 + 1) * 20)}px 0%`,
                end: `${vh(2 * 20 + 100)}px 0%`,
                onUpdate: ({ progress }) => {
                    spiral.goToAndStop(Math.floor(28 * progress - 1), true);
                },
                onLeave: () => {
                    document.body.classList.remove('bg-darkGray-900');
                    document.body.classList.add('bg-lightGray');
                },
                onEnterBack: () => {
                    document.body.classList.remove('bg-lightGray');
                    document.body.classList.add('bg-darkGray-900');
                },
            });
        }, []);
        return () => (spiralRef.current.innerHTML = '');
    });
    return <div ref={spiralRef} className={'spiral absolute top-0 h-screen w-screen'} />;
};

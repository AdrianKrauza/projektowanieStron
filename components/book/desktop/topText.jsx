import UseTextAnimations from '../../../hooks/useTextAnimations';
import Arrow from './arrow';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TopText = ({ b }) => {
    const topTextRef = useRef();
    const headingRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            const { AnimationHeading } = UseTextAnimations();

            ScrollTrigger.create({
                trigger: topTextRef.current,
                start: '40% 60%',
                end: '100% 60%',
                onEnter: () => {
                    AnimationHeading(headingRef, true);
                },
            });
            ScrollTrigger.create({
                trigger: topTextRef.current,
                pin: topTextRef.current,
                start: '80% 70%',
                end: '150% 60%',
            });
        }, 0);
    }, []);
    return (
        <div ref={topTextRef} className={`ml-36 z-10 relative '}`}>
            <Arrow />
            <div>
                <h2 ref={headingRef} className={'text-[8.5rem] tracking-[-7px]  opacity-0  leading-[.9]'}>
                    <span>W trzech</span>
                    <span>prostych</span>
                    <span>słowach.</span>
                </h2>
                <p className={'text-4xl mt-6'}>Konwersja, Konwersja, Konwersja!</p>
            </div>
        </div>
    );
};

export default TopText;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useTextAnimations from '../../../hooks/useTextAnimations';
const vh = (coef) => window.innerHeight * (coef / 100);

import Cards from '../global/cards';
import { Clouds } from '../desktop/clouds';
gsap.registerPlugin(ScrollTrigger);
const Cards3 = () => {
    const cardsRef = useRef();
    const headingRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, { current: document.body }, vh(10), vh(15), true);
        }, 0);
    });
    return (
        <>
            <div
                ref={cardsRef}
                className={'bg-lightGray m:flex-col flex justify-center w-screen top-0 pointer-events-none'}
            >
                <Cards />
            </div>
        </>
    );
};

export default Cards3;

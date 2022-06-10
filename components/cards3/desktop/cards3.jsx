import Card from './card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Clouds } from './clouds';
import useTextAnimations from '../../../hooks/useTextAnimations';
const vh = (coef) => window.innerHeight * (coef / 100);
import image1 from '/assets/cards3/carrey_jp.jpg';
import image2 from '/assets/cards3/dicaprio_jp.jpg';
import image3 from '/assets/cards3/szydercze_ziomki_jp.jpg';
import Cards from '../global/cards';
gsap.registerPlugin(ScrollTrigger);
const Cards3 = ({ b }) => {
    const cardsRef = useRef();
    const headingRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, { current: document.body }, vh(10), vh(15), true);
            if (!b) {
                gsap.to(cardsRef.current, {
                    scrollTrigger: {
                        trigger: 'body',
                        end: `0 -350%`,
                        pin: cardsRef.current,
                    },
                });
            }
        }, 0);
    });
    return (
        <>
            <Clouds />
            <div
                ref={cardsRef}
                className={`${
                    !b ? 'absolute ' : 'mt-[60rem] -mb-[45rem]'
                }  m:flex-col flex justify-center w-screen top-0 pointer-events-none`}
            >
                {/*<div*/}
                {/*    ref={circleRef}*/}
                {/*    className={'w-screen h-[100vw] bg-[#E7E6E8] absolute rounded-[100%] top-[100vh]'}*/}
                {/*/>*/}
                <h2
                    className={`text-center text-[7rem] relative top-[20rem] opacity-0 m:block hidden`}
                    ref={headingRef}
                >
                    <span> Dla przedsiębiorców,</span>
                    <span>którzy oczekują </span>
                    <span>rezultatów</span>
                </h2>
                <Cards />
            </div>
        </>
    );
};

export default Cards3;

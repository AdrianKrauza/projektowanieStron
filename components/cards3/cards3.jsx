import Card from './card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Clouds } from './clouds';
import useTextAnimations from '../../hooks/useTextAnimations';
const vh = (coef) => window.innerHeight * (coef / 100);
import image1 from '/assets/cards3/carrey_jp.jpg';
import image2 from '/assets/cards3/dicaprio_jp.jpg';
import image3 from '/assets/cards3/szydercze_ziomki_jp.jpg';
gsap.registerPlugin(ScrollTrigger);
const Cards3 = () => {
    const cardsRef = useRef();
    const headingRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, { current: document.body }, vh(10), vh(15), true);
            gsap.to(cardsRef.current, {
                scrollTrigger: {
                    trigger: 'body',
                    end: `0 -500%`,
                    pin: cardsRef.current,
                },
            });
        }, 0);
    });
    return (
        <>
            <Clouds />
            <div
                ref={cardsRef}
                className={'absolute m:flex-col flex justify-center w-screen top-0 pointer-events-none'}
            >
                {/*<div*/}
                {/*    ref={circleRef}*/}
                {/*    className={'w-screen h-[100vw] bg-[#E7E6E8] absolute rounded-[100%] top-[100vh]'}*/}
                {/*/>*/}
                <h2
                    className={'text-center text-[7rem] relative top-[20rem] opacity-0 m:block hidden'}
                    ref={headingRef}
                >
                    <span> Dla przedsiębiorców,</span>
                    <span>którzy oczekują </span>
                    <span>rezultatów</span>
                </h2>
                <Card
                    mask={'/assets/cards3/maska_dicaprioSV.svg'}
                    video={'/assets/cards3/Logo+Identyfikacja.mp4'}
                    title={'UX & design'}
                    index={0}
                    image={image2}
                    paragraph={
                        <>
                            Wizualną różnicę <br /> łatwo zamienisz w <br /> poważanie i zaufanie.
                        </>
                    }
                />
                <Card
                    mask={'/assets/cards3/maska_carreySV.svg'}
                    video={'/assets/cards3/Copywriting.mp4'}
                    title={'Copywriting'}
                    image={image1}
                    index={1}
                    mobileRight
                    paragraph={
                        <>
                            2x lepsze słowa to <br /> najszybszy sposób <br /> na 2x lepsze wyniki.
                        </>
                    }
                />
                <Card
                    index={2}
                    mask={'/assets/cards3/maska_ziomkiSV.svg'}
                    video={'/assets/cards3/Konwersja.mp4'}
                    image={image3}
                    title={'Sales'}
                    paragraph={
                        <>
                            Gwarantujemy dużo <br /> więcej zapytań lub <br /> wyższą sprzedaż.
                        </>
                    }
                />
            </div>
        </>
    );
};

export default Cards3;

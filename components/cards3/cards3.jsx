import Card from './card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Spiral } from './spiral';
import useTextAnimations from '../../hooks/useTextAnimations';
const vh = (coef) => window.innerHeight * (coef / 100);
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
                    end: `${vh((2 + 1) * 20 + 35)}px 0%`,
                    pin: cardsRef.current,
                },
            });
        }, 0);
    });
    return (
        <>
            <Spiral />
            <div ref={cardsRef} className={'absolute m:flex-col flex justify-center w-screen top-0'}>
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
                    paragraph={
                        <>
                            Wizualną różnicę <br /> łatwo zamienisz w <br /> zaufanie i poważanie
                        </>
                    }
                />
                <Card
                    mask={'/assets/cards3/maska_carreySV.svg'}
                    video={'/assets/cards3/Copywriting.mp4'}
                    title={'Copywriting'}
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
                    title={'Konwersja'}
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

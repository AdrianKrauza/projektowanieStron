import { useEffect, useRef, useState } from 'react';
import useTextAnimations from '/hooks/useTextAnimations';
import gsap from 'gsap';
import lottieCloud from '/assets/banach/cloud.json';
import bottomLottie from '/assets/if/bottom.json';

import boxLottie from '/assets/if/lf20_j7bkleac.json';
import Lottie from 'lottie-react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IfBox from './ifBox';
gsap.registerPlugin(ScrollTrigger);
const start = 13500;

const vh = (coef) => window.innerHeight * (coef / 100);
const boxesData = [
    [
        'Chcesz podwoić liczbę <br/> klientów z takiej samej <br/> ilości odwiedzin strony.',
        'Bez zwiększania wydatków <br/> na reklamę i bez zwiększania <br/> liczby pracowników.',
    ],
    [
        'Zależy Ci, aby Twoja strona <br/> wyglądała świetnie a jej <br/> używanie było przyjemne.',
        'Chcesz zdobyć duże zaufanie <br/> już od pierwszego spojrzenia.<br/> Zyskać uwagę i zaangażowanie.',
    ],
    [
        'Szukasz ludzi, którzy zrobią <br/> wszystko za Ciebie. Tak by <br/> mieć wolną głowę i czas.',
        'Od napisania wyjątkowo <br/> przekonującej oferty, przez <br/> doskonałą grafikę i kodowanie.',
    ],
];
const If = ({ containerRef }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const ifSmokeRef = useRef();
    const ifContentRef = useRef();
    const headerRef = useRef();
    const boxesRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(
                headerRef,
                containerRef,
                `${(vh(70) + start) * 0.4} 0%`,
                `${(vh(200) + start) * 0.4} 0%`,
                false,
                true,
            );

            gsap.to(ifContentRef.current, {
                y: '-20vh',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${(vh(100) + start) * 0.4} 0%`,
                    end: `+=${vh(300) * 0.4} 0%`,
                    scrub: true,
                },
            });

            // gsap.fromTo(
            //     boxesRef.current,
            //     {
            //         y: '0',
            //     },
            //     {
            //         y: '-4rem',
            //         scrollTrigger: {
            //             trigger: containerRef.current,
            //             start: `${vh(160) + start} 0%`,
            //             end: `${vh(400) + start} 0%`,
            //             scrub: true,
            //         },
            //     },
            // );
            gsap.fromTo(
                boxesRef.current,
                {
                    y: '100vh',
                },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `${(vh(50) + start) * 0.4} 0%`,
                        end: `+=${vh(100) * 0.4} 0%`,
                        scrub: true,
                    },
                },
            );
        }, 0);
    }, []);
    return (
        <>
            <div
                ref={ifContentRef}
                style={{ transform: 'translate(-50%,0)', bottom: 'auto' }}
                className={'left-1/2 w-screen  h-screen '}
            >
                <h2 ref={headerRef} className={'text-center text-[6vw] text-[#dfdfdf] pt-[30vh] '}>
                    Owocne strony będą/ dla Ciebie idealne,
                </h2>
                <div
                    style={{ transform: 'translateY(100vh)' }}
                    ref={boxesRef}
                    className={'w-[75rem] m-auto justify-between flex mt-[10vh]'}
                >
                    {boxesData.map((el, index) => (
                        <IfBox containerRef={containerRef} key={el[0]} el={el} index={index} start={start * 0.4} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default If;

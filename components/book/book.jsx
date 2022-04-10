import { useEffect, useRef } from 'react';
import BookCanvas from './bookCanvas';
import Line from './textLine';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import WhiteSpheres from './whiteSpheres';

import UseTextAnimations from '../../hooks/useTextAnimations';
import isSlowNetwork from '../../hooks/useIsFirefox';
import useIsFirefox from '../../hooks/useIsFirefox';
gsap.registerPlugin(ScrollTrigger);
const textsSpace = [
    ['1/3 ', ' Klienci'],
    ['2/3 ', ' Konwersja'],
    ['3/3 ', ' Biznes'],
];
const texts = [
    [
        ['W sieci jest więcej ', 'klientów niż Twoja firma ', 'jest w stanie obsłużyć.  '],
        [
            'Jak kupuje się bułki w sklepie, ',
            'tak możesz kupić od Google',
            'czy Facebook więcej ruchu,',
            'niż udźwigną Twoje serwery.',
        ],
    ],
    [
        [
            'By opłacało Ci się kupować ',
            'więcej ruchu, Twoja strona ',
            'musi być zdolna zmieniać',
            'ten ruch w prawdziwych,',
            'płacących klientów. ',
        ],
        [
            'Jeśli przekonujesz ludzi lepiej',
            'od konkurencji to zarabiasz ',
            ' z zyskiem nawet wtedy, gdy',

            '  masz drogie frazy w Google.',
        ],
    ],
    [
        ['Dobry biznes w sieci zaczyna ', 'się od dobrej konwersji.'],
        ['Gdy Twoja strona konwertuje ', '2x lepiej, to Twoja firma ', 'też działa 2x lepiej. '],
        [
            'Masz 2x więcej klientów lub ',
            '2x niższe koszty reklam. Ale',
            'zanim zobaczysz realizacje, ',
            'zobacz tę grubą gwarancję.',
        ],
    ],
];
const Arrow = ({ color = 'black' }) => {
    return (
        <div style={{ top: '23rem', left: '-3rem' }} className={'absolute  top-[50rem]'}>
            <style jsx>{`
                .arrow {
                    position: absolute;
                    top: 1.5rem;
                    left: -0.6em;
                    width: 1.2rem;
                    height: 1.2rem;
                    transform: rotate(-45deg);
                    box-sizing: border-box;
                    border-left: 1px solid ${color};
                    border-bottom: 1px solid ${color};
                    animation: 1.5s ease 0.8s infinite normal none running sdb05;
                }

                @keyframes sdb05 {
                    0% {
                        transform: rotate(-45deg) translate(0, 0);
                        opacity: 0;
                    }

                    50% {
                        opacity: 1;
                    }

                    100% {
                        transform: rotate(-45deg) translate(-0.4vw, 0.4vw);
                        opacity: 0;
                    }
                }

                .line:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 14vw;
                    background: ${color};
                }

                .line:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 14rem;
                    background: ${color};
                    opacity: 0.4;
                }

                .line {
                    width: 0;
                    position: relative;
                    left: -1px;
                }

                .line:after {
                    animation: sdl06 2s 0.5s cubic-bezier(1, 0, 0, 1) infinite;
                }

                @keyframes sdl06 {
                    0% {
                        transform: scale(1, 0);
                        transform-origin: 0 0;
                    }

                    50% {
                        transform: scale(1, 1);
                        transform-origin: 0 0;
                    }

                    50.1% {
                        transform: scale(1, 1);
                        transform-origin: 0 100%;
                    }

                    100% {
                        transform: scale(1, 0);
                        transform-origin: 0 100%;
                    }
                }
            `}</style>
            <div className="line" />
            <div className="arrow" />
        </div>
    );
};
const TopText = () => {
    const topTextRef = useRef();
    const headingRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            const { AnimationHeading } = UseTextAnimations();

            ScrollTrigger.create({
                trigger: topTextRef.current,
                start: '80% 60%',
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
        <div ref={topTextRef} className={'ml-36 z-10 relative'}>
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

const Book = () => {
    const bookSectionRef = useRef();
    return (
        <div ref={bookSectionRef} className={'relative w-[100rem] m-auto  -mt-[28rem] z-20 '}>
            <BookCanvas bookSectionRef={bookSectionRef} />
            <WhiteSpheres bookSectionRef={bookSectionRef} />
            <div style={{ perspective: '100px' }} className={' right-0 mb-96 ml-[25rem] mt-[35rem] translate-y-[4rem]'}>
                <p
                    style={{ transform: ' rotateX(1deg) rotateZ(326deg) skew(19deg, 5deg) translateY(2rem)' }}
                    className={'leading-snug font-size'}
                >
                    <span>To czego się tu dowiesz zmieni </span>
                    <span>Twój sposób myślenia </span>
                    <span>o firmie w internecie</span>
                </p>
            </div>
            <div className={'hidden'}>
                <div className={'h-72'} />
                <div className={'h-2'} />
            </div>
            <TopText />
            {texts.map((text, index) => (
                <div key={index} className={'ml-36'}>
                    <div
                        className={`h-${
                            !index ? 60 : 65
                        } space m:h-[60rem] justify-center w-[32rem]  mt-20  z-20 relative flex items-center  `}
                    >
                        <p
                            className={`text-center text-[${useIsFirefox() ? 2 : 5}rem] font-[600] blur-[4px] font-${
                                !useIsFirefox() ? 'robotoMono' : 'roboto'
                            } text-[#E7E6E8]`}
                        >
                            {textsSpace[index][0]}
                            <span className={'text-[8rem]'}>{textsSpace[index][1]}</span>
                        </p>
                    </div>
                    <div className={'font-robotoMono'} />
                    {text.map((paragraph) => (
                        <p
                            className={`m:text-[8rem] text-[${useIsFirefox() ? 2.9 : 3.4}rem] mt-20 font-${
                                !useIsFirefox() ? 'robotoMono' : 'roboto'
                            }`}
                            key={paragraph.join()}
                        >
                            {paragraph.map((line) => (
                                <Line key={line} line={line} />
                            ))}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Book;

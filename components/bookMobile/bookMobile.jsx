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
        ['Jeszcze dziś kupisz od Google', 'czy Facebook więcej ruchu niż', 'udźwigną Twoje serwery.'],
        ['Ruch to nie problem.', 'Problem to konwersja.'],
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
const Arrow = ({ color = '#c2c2c2' }) => {
    //c2c2c2 //bg f5f5f6
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
                    height: 21rem;
                    background: ${color};
                }

                .line:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 21rem;
                    background: #f5f5f6;
                    opacity: 1;
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

const BookMobile = () => {
    const bookSectionRef = useRef();
    return (
        <div className={'bg-lightGray'}>
            <div ref={bookSectionRef} className={'relative w-[100rem] m-auto z-20 '}>
                <BookCanvas bookSectionRef={bookSectionRef} />
                <div className={'hidden'}>
                    <div className={'h-72'} />
                    <div className={'h-2'} />
                </div>
                {texts.map((text, index) => (
                    <div key={index} className={'ml-36'}>
                        <div
                            className={`space m:h-[30rem] justify-center w-[32rem]  mt-20  z-20 relative flex items-center  `}
                        >
                            <p
                                className={`text-center text-[${
                                    useIsFirefox() ? 2 : 5
                                }rem] font-[600] blur-[4px] font-${
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
            </div>{' '}
        </div>
    );
};

export default BookMobile;

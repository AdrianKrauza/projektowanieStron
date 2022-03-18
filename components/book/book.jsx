import { useEffect, useRef } from 'react';
import BookCanvas from './bookCanvas';
import Line from './textLine';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import WhiteSpheres from './whiteSpheres';

import UseTextAnimations from '../../hooks/useTextAnimations';
gsap.registerPlugin(ScrollTrigger);
const texts = [
    [
        ['W sieci jest więcej ', 'klientów niż Twoja firma ', 'jest w stanie obsłużyć.  '],
        [
            'Jak kupuje się bułki w sklepie ',
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
            'z zyskiem nawet gdy frazy ',
            'kluczowe Google są drogie.',
        ],
    ],
    [
        ['Dobry biznes w sieci zaczyna ', 'się od dobrej konwersji.'],
        ['Gdy Twoja strona konwertuje ', '2x lepiej, to Twoja firma ', 'też działa 2x lepiej. '],
        [
            'Masz 2x więcej klientów, lub ',
            '2x niższe koszty reklam. Ale',
            'zanim zobaczysz realizacje, ',
            'zobacz tą grubą gwarancję.',
        ],
    ],
];
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
                start: '80% 60%',
                end: '150% 60%',
            });
        }, 0);
    }, []);
    return (
        <div ref={topTextRef} className={'ml-36 z-10 relative'}>
            <div>
                <h2 ref={headingRef} className={'text-9xl opacity-0 '}>
                    <span>W trzech</span>
                    <span>prostych</span>
                    <span>słowach.</span>
                </h2>
                <p className={'text-4xl mt-6'}>Konwersja, Konwersja Konwersja!</p>
            </div>
        </div>
    );
};
const Book = () => {
    const bookSectionRef = useRef();
    return (
        <div ref={bookSectionRef} className={'relative w-[100rem] m-auto  -mt-96 z-20 '}>
            <BookCanvas bookSectionRef={bookSectionRef} />
            <WhiteSpheres bookSectionRef={bookSectionRef} />
            <div style={{ perspective: '100px' }} className={' right-0 mb-96 ml-[25rem] mt-[35rem]'}>
                <p
                    style={{ transform: ' rotateX(1deg) rotateZ(326deg) skew(19deg, 5deg) translateY(2rem)' }}
                    className={'leading-snug font-size'}
                >
                    <span>To czego się tu dowiesz zmieni </span>
                    <span>Twój sposób myślenia </span>
                    <span>o firmie w internecie</span>
                    <span className={'text-[3rem] mt-3'}>- Na zawsze!</span>
                </p>
            </div>
            <div className={'hidden'}>
                <div className={'h-72'} />
                <div className={'h-2'} />
            </div>
            <TopText />
            {texts.map((text, index) => (
                <div key={index} className={'ml-36'}>
                    <div className={`h-${!index ? 2 : 72} space`} />
                    {text.map((paragraph) => (
                        <p className={'text-[3.4rem] mt-20 font-robotoMono'} key={paragraph.join()}>
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

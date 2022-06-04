import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IfBox from '../pragmile/components/ifBox';
import vh from '/helpers/vh';
import useTextAnimations from '../../hooks/useTextAnimations';
import Cloud from './cloud';
import IfBoxMobile from './ifBoxMobile';

gsap.registerPlugin(ScrollTrigger);
const start = 13500;
const boxesData = [
    [
        'Chcesz podwoić liczbę / klientów z takiej samej / ilości odwiedzin strony.',
        'Bez zwiększania wydatków  / na reklamę w internecie.',
    ],
    [
        'Zależy Ci, aby Twoja strona / wyglądała świetnie a jej / używanie było przyjemne.',
        'Chcesz zdobyć duże zaufanie / już od pierwszego spojrzenia.',
    ],
    [
        'Szukasz ludzi, którzy zrobią / wszystko za Ciebie. Chcesz / mieć czas i wolną głowę.',
        'Od napisania przekonującej / oferty, do doskonałej grafiki.',
    ],
];
const IfMobile = () => {
    const ifContentRef = useRef();
    const headerRef = useRef();
    const boxesRef = useRef();
    const pinRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headerRef, { current: document.body }, '0 -20%', '0 -100%', true, true);
            gsap.fromTo(
                headerRef.current,
                {
                    y: '10vw',
                },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: 'body',
                        start: `0 -0%`,
                        end: `0 -150%`,
                        scrub: true,
                    },
                },
            );
            gsap.set(pinRef.current, {
                opacity: 1,
            });
            ScrollTrigger.create({
                trigger: 'body ',
                pin: pinRef.current,
                start: '0% 0%',
                end: `0 -250%`,
            });
        }, 0);
    }, []);
    return (
        <>
            <div ref={pinRef} className={'w-screen  h-screen absolute top-[0] opacity-0'}>
                <div ref={ifContentRef}>
                    <h2 ref={headerRef} className={'text-center text-[8.5rem] text-[#dfdfdf] h-[20vh] pt-[5vh]'}>
                        <span>Owocne strony będą</span>
                        <span>dla Ciebie idealne,</span>
                        <span> jeśli:</span>
                    </h2>
                    <div
                        ref={boxesRef}
                        className={'w-[75rem] m-auto justify-between h-[80vh] flex  flex-col pb-[10vh] '}
                    >
                        {boxesData.map((el, index) => (
                            <IfBoxMobile
                                containerRef={ifContentRef}
                                key={el[0]}
                                el={el}
                                index={index}
                                start={start}
                                second
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default IfMobile;

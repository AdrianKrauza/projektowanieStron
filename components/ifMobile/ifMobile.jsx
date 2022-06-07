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
        'Chcesz podwoić liczbę klientów / z tej samej ilości odwiedzin strony.',
        'Bez zwiększania wydatków  / na reklamę w internecie.',
    ],
    [
        'Chcesz prezentować profesjonalizm.',
        'Zależy Ci, by Twoja strona wyglądała / świetnie a jej używanie było przyjemne.',
    ],
    [
        'Chcesz mieć czas i wolną głowę.',
        'Szukasz ludzi, którzy zrobią wszystko / za Ciebie. Od napisania przekonującej / oferty, do doskonałej grafiki.',
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
            AnimationHeadingScrub(headerRef, { current: document.body }, '0 -5%', '0 -50%', true, true);
            // gsap.fromTo(
            //     headerRef.current,
            //     {
            //         y: '10vw',
            //     },
            //     {
            //         y: 0,
            //         scrollTrigger: {
            //             trigger: 'body',
            //             start: `0 -0%`,
            //             end: `0 -150%`,
            //             scrub: true,
            //         },
            //     },
            // );
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
                    <h2 ref={headerRef} className={'text-center text-[10rem] text-[#dfdfdf] mb-[7rem] mt-[21rem]'}>
                        <span> Owocne strony</span>
                        <span>będą dla Ciebie</span>
                        <span> idealne, jeśli:</span>
                    </h2>
                    <div ref={boxesRef} className={'w-[75rem] m-auto justify-between h-[70rem] flex  flex-col   '}>
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

/*











    */

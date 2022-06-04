import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IfBox from '../pragmile/components/ifBox';
import vh from '/helpers/vh';
import useTextAnimations from '../../hooks/useTextAnimations';
import Cloud from './cloud';

gsap.registerPlugin(ScrollTrigger);
const start = 13500;
const boxesData = [
    [
        'Chcesz podwoić liczbę <br/> klientów z takiej samej <br/> ilości odwiedzin strony.',
        'Bez zwiększania wydatków  <br/> na reklamę w internecie.',
    ],
    [
        'Zależy Ci, aby Twoja strona <br/> wyglądała świetnie a jej <br/> używanie było przyjemne.',
        'Chcesz zdobyć duże zaufanie <br/> już od pierwszego spojrzenia.',
    ],
    [
        'Szukasz ludzi, którzy zrobią <br/> wszystko za Ciebie. Chcesz <br/> mieć czas i wolną głowę.',
        'Od napisania przekonującej <br/> oferty, do doskonałej grafiki.',
    ],
];
const If = () => {
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
            <Cloud />
            <div ref={pinRef} className={'w-screen  h-screen absolute top-[20vh] opacity-0'}>
                <div ref={ifContentRef} className={''}>
                    <h2 ref={headerRef} className={'text-center text-[6.5rem] text-[#dfdfdf]  '}>
                        <span>Owocne strony będą</span>
                        <span>dla Ciebie idealne, jeśli:</span>
                    </h2>
                    <div ref={boxesRef} className={'w-[75rem] m-auto justify-between flex mt-[5rem]'}>
                        {boxesData.map((el, index) => (
                            <IfBox containerRef={ifContentRef} key={el[0]} el={el} index={index} start={start} second />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default If;

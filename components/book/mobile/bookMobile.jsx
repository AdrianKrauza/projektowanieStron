import { useEffect, useRef } from 'react';
import BookCanvas from './bookCanvas';
import Line from './textLine';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import useIsFirefox from '../../../hooks/useIsFirefox';
import Texts from '../global/texts';
import useTextAnimations from '../../../hooks/useTextAnimations';
import { Clouds } from '../../cards3/desktop/clouds';
import vh from '../../../helpers/vh';
gsap.registerPlugin(ScrollTrigger);

const BookMobile = () => {
    const bookSectionRef = useRef();
    const headingRef = useRef();
    const textContainer = useRef();
    const sphereRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, bookSectionRef, -vh(83) + 'px', -vh(52) + 'px', false, true);
            ScrollTrigger.create({
                trigger: 'body',
                pin: textContainer.current,
                start: '0% 0%',
                end: `0 -110%`,
            });
            ScrollTrigger.create({
                trigger: 'body',
                pin: sphereRef.current,
                start: '0% 0%',
                end: `0 -310%`,
            });
            gsap.to(sphereRef.current, {
                opacity: 0.9,
                scrollTrigger: { trigger: 'body', start: '0% -110%', end: `0 -110%`, scrub: true },
            });
        }, 0);
    }, []);
    return (
        <>
            <div ref={textContainer} className={'z-[99]  absolute w-screen top-[20rem]'}>
                <h2 ref={headingRef} className={' text-center text-darkGray text-[8rem]   '}>
                    Dla przedsiębiorców,/ którzy oczekują/ rezultatów.
                </h2>
            </div>
            <div ref={sphereRef} className={'opacity-0 w-[90rem] h-[90rem] left-[5rem] top-[60rem] absolute  z-[10]'}>
                <div className={`bg-white w-full h-full  absolute rounded-full blur-md `} />
            </div>
            <Clouds />
            <div className={'mt-[100vh] bg-lightGray  relative '}>
                <div
                    className={
                        'max-w-[300vw] w-[300vw] h-[100vw] bg-lightGray rounded-t-[100%] absolute top-[-25vw] left-[-100vw] '
                    }
                ></div>

                <div ref={bookSectionRef} className={'relative w-[100rem] m-auto z-20  '}>
                    <BookCanvas bookSectionRef={bookSectionRef} />
                    <div className={'hidden'}>
                        <div className={'h-72'} />
                        <div className={'h-2'} />
                    </div>
                    <Texts />
                </div>
            </div>
        </>
    );
};

export default BookMobile;

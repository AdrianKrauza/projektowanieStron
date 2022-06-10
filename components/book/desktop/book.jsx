import { useEffect, useRef } from 'react';
import BookCanvas from './bookCanvas';
import Line from './textLine';

import WhiteSpheres from './whiteSpheres';
import useIsFirefox from '../../../hooks/useIsFirefox';
import { TEXTS, TEXTS_SPACE } from '../global/const';
import TopText from './topText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Texts from '../global/texts';
import { Clouds } from '../../cards3/desktop/clouds';
import ForEntrepreneurs from '../../forEntrepreneurs/forEntrepreneurs';
import useTextAnimations from '../../../hooks/useTextAnimations';
import vh from '../../../helpers/vh';
gsap.registerPlugin(ScrollTrigger);

const Book = ({ b }) => {
    const bookSectionRef = useRef();
    const headingRef = useRef();
    const textContainer = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, bookSectionRef, -vh(75) + 'px', -vh(22) + 'px', false, false);
            ScrollTrigger.create({
                trigger: 'body',
                pin: textContainer.current,
                start: '0% 0%',
                end: `0 -260%`,
            });
            textContainer.current.style.opacity = 1;
        }, 0);
    }, []);
    return (
        <>
            {b && (
                <div
                    ref={textContainer}
                    className={
                        'z-[99] ml-[10rem] w-[100rem] left-1/2 -translate-x-1/2 absolute w-screen top-[12rem] opacity-0'
                    }
                >
                    <h2 ref={headingRef} className={' text-left text-darkGray text-[7rem] leading-[0.8]   '}>
                        Dla przedsiębiorców,/ którzy oczekują/ rezultatów.
                    </h2>
                </div>
            )}
            <div className={`bg-lightGray ${b && 'mt-[200vh]'} `}>
                <div ref={bookSectionRef} className={'relative w-[100rem] m-auto  -mt-[60rem] z-20 '}>
                    <div
                        className={
                            'max-w-[300vw] w-[300vw] h-[100vw] bg-lightGray rounded-t-[100%] absolute top-[5vw] left-[-100vw] '
                        }
                    ></div>
                    <BookCanvas bookSectionRef={bookSectionRef} b={b} />
                    <WhiteSpheres bookSectionRef={bookSectionRef} b={b} />
                    {!b && (
                        <div
                            style={{ perspective: '100px' }}
                            className={'mb-96 right-0  ml-[25rem] mt-[35rem] translate-y-[4rem]'}
                        >
                            <p
                                style={{
                                    transform: ' rotateX(1deg) rotateZ(326deg) skew(19deg, 5deg) translateY(2rem)',
                                }}
                                className={'leading-snug font-size'}
                            >
                                <span>To czego się tu dowiesz zmieni </span>
                                <span>Twój sposób myślenia </span>
                                <span>o firmie w internecie</span>
                            </p>
                        </div>
                    )}
                    <div className={'hidden'}>
                        <div className={'h-72'} />
                        <div className={'h-2'} />
                    </div>

                    {!b && <TopText />}
                    <Texts b={b} />
                    <div
                        className={`h-[10rem] space  justify-center w-[32rem]  mt-20  z-20 relative flex items-center  hidden m:block `}
                    />
                </div>
            </div>
        </>
    );
};

export default Book;

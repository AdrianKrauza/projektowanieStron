import { useEffect, useRef } from 'react';
import BookCanvas from './bookCanvas';
import Line from './textLine';

import WhiteSpheres from './whiteSpheres';
import useIsFirefox from '../../../hooks/useIsFirefox';
import { TEXTS, TEXTS_SPACE } from '../global/const';
import TopText from './topText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Book = () => {
    const bookSectionRef = useRef();
    return (
        <div className={'bg-lightGray'}>
            <div ref={bookSectionRef} className={'relative w-[100rem] m-auto  -mt-[60rem] z-20 '}>
                <BookCanvas bookSectionRef={bookSectionRef} />
                <WhiteSpheres bookSectionRef={bookSectionRef} />
                <div
                    style={{ perspective: '100px' }}
                    className={' right-0 mb-96 ml-[25rem] mt-[35rem] translate-y-[4rem]'}
                >
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
                {TEXTS.map((text, index) => (
                    <div key={index} className={'ml-36'}>
                        <div
                            className={`h-${
                                !index ? 60 : 65
                            } space m:h-[60rem] justify-center w-[32rem]  mt-20  z-20 relative flex items-center  `}
                        >
                            <p
                                className={`text-center text-[${
                                    useIsFirefox() ? 2 : 5
                                }rem] font-[600] blur-[4px] font-${
                                    !useIsFirefox() ? 'robotoMono' : 'roboto'
                                } text-[#E7E6E8]`}
                            >
                                {TEXTS_SPACE[index][0]}
                                <span className={'text-[8rem]'}>{TEXTS_SPACE[index][1]}</span>
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
                <div
                    className={`h-[10rem] space  justify-center w-[32rem]  mt-20  z-20 relative flex items-center  `}
                />
            </div>
        </div>
    );
};

export default Book;

import { useEffect, useRef, useState } from 'react';
import useTextAnimations from '../../hooks/useTextAnimations';
import gsap from 'gsap';
import Image from 'next/image';
import Tablet1Img from '/assets/tablets/Projekt-strony-internetowej1.jpg';
import Tablet2Img from '/assets/tablets/Projekt-strony-internetowej2.jpg';
import Tablet3Img from '/assets/tablets/Projekt-strony-internetowej3.jpg';
const positionBoxes = [
    { x: 0, y: 10 },
    { x: 18, y: 42 },
    { x: 45, y: 8 },
];
const gradients = [
    [
        'linear-gradient(156deg, rgba(104,159,198,1) 0%, rgba(150,182,205,1) 54%, rgba(184,201,211,1) 100%)',
        'linear-gradient(156deg, rgba(203,171,132,1) 0%, rgba(193,208,195,1) 54%, rgba(197,222,218,1) 100%)',
        'linear-gradient(156deg, rgba(183,120,151,1) 0%, rgba(180,163,185,1) 54%, rgba(182,202,211,1) 100%)',
    ],
    [
        'linear-gradient(156deg, rgba(237,233,230,1) 0%, rgba(234,226,215,1) 54%, rgba(230,217,199,1) 100%)',
        ' linear-gradient(156deg, rgba(237,233,230,1) 0%, rgba(234,226,215,1) 54%, rgba(230,217,199,1) 100%)',
        'linear-gradient(156deg, rgba(237,233,230,1) 0%, rgba(234,226,215,1) 54%, rgba(230,217,199,1) 100%)',
    ],
    [
        `linear-gradient(156deg, rgba(179,215,222,1) 0%, rgba(85,156,174,1) 39%, rgba(34,57,73,1) 100%)`,
        `linear-gradient(156deg, rgba(157,169,167,1) 0%, rgba(54,83,78,1) 54%, rgba(70,55,48,1) 100%)`,
        `linear-gradient(156deg, rgba(155,152,145,1) 0%, rgba(117,67,40,1) 54%, rgba(63,26,17,1) 100%)`,
    ],
];
const Tablets = () => {
    const headingRef = useRef();
    const mouseMoveRef = useRef();
    const tabletsRef = useRef();
    const convertRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    const [state, setState] = useState(0);
    const handleOnClick = (index) => {
        setState(index);
        gsap.to(tabletsRef.current.querySelectorAll('div')[state], {
            opacity: 0,
            duration: 2,
        });
        gsap.to(tabletsRef.current.querySelectorAll('div')[index], {
            opacity: 1,
            duration: 2,
        });
        convertRef.current.childNodes.forEach((el, i) => {
            gsap.to(el.querySelectorAll('.toRotate'), {
                rotateX: 0,
                duration: 0.6,
                stagger: 0.01,
                delay: 0,
            });
            gsap.to(el.querySelectorAll('.toRotate'), {
                rotateX: 90,
                duration: 0.6,
                stagger: 0.01,
                delay: 0.4,
            });
            gsap.set(el.querySelectorAll('.toRotate'), {
                background: gradients[index][i],
            });
        });
    };
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, headingRef, -50, 200, false, true);
        }, 0);

        const tl = gsap.timeline({
            repeat: -1,
        });
        tl.from(mouseMoveRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.6,
        }).to(mouseMoveRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
        });
    }, []);
    return (
        <div className={'relative z-20 mt-64'}>
            <h2 ref={headingRef} className={'text-center text-darkGray'}>
                Dla przedsiębiorców,/ którzy oczekują/ rezultatów.
            </h2>
            <p className={'text-center mt-28 leading-[1.3]'}>
                Zdobądź piękną, wysokowydajną stronę, która przekonuje
                <br />
                znacznie więcej klientów niż strony Twojej konkurencji.
                <br />
                24 godziny na dobę, 7 dni w tygodniu.
            </p>
            <div className={'absolute flex flex-col items-center w-full z-10'}>
                <div className={'flex '}>
                    {[0, 1, 2].map((index) => (
                        <svg
                            className={'cursor-pointer w-[50px] h-[50px] m-[17px] mt-24'}
                            key={index}
                            viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={'none'}
                            onClick={() => handleOnClick(index)}
                        >
                            <circle cx="64" cy="64" r="63.5" stroke={'black'} strokeWidth={'2px'} />
                            <circle
                                cx="64.5"
                                cy="64.5"
                                r="10"
                                fill="black"
                                className={`opacity-${index === state ? 1 : 0}`}
                            />
                        </svg>
                    ))}
                </div>
                <div className="w-[50px] h-[90px] rounded-full rounded-full border-[1px] border-black m-[17px] ">
                    <svg ref={mouseMoveRef} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <circle className="dot" cx="64.5" cy="64.5" r="10" fill="black " />
                    </svg>
                </div>
                <p className={'text-[25px]'}>więcej</p>
            </div>
            <div
                style={{ left: 'calc(50% )' }}
                className={'absolute mt-[100px] -translate-x-1/2 -z-10  relative ml-[2%]  '}
                ref={tabletsRef}
            >
                {[Tablet1Img, Tablet2Img, Tablet3Img].map((img, index) => (
                    <div
                        key={img.src}
                        className={` h-auto w-[160vw]  max-w-[2942px] ${
                            index ? 'absolute opacity-0' : 'relative'
                        } top-0 left-1/2 -translate-x-1/2 `}
                    >
                        <Image {...img} layout={`responsive`} quality={100} />
                    </div>
                ))}
                <div ref={convertRef}>
                    {positionBoxes.map(({ x, y }, index) => (
                        <div
                            key={`${x}${y}1`}
                            className={'top-0 absolute h-full w-[160vw] max-w-[2942px]  left-1/2 -translate-x-1/2'}
                            style={{
                                WebkitMaskBoxImage: `url(/assets/tablets/Laptopy${index}.svg)`,
                            }}
                        >
                            <div
                                key={`${x}${y}`}
                                className={`flex absolute flex-col   z-10 h-1/2 `}
                                style={{
                                    left: x + '%',
                                    top: y + '%',
                                }}
                            >
                                {new Array(50).fill(0).map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            transform: ' translateX(0) translateY(0) rotateZ(334deg) rotateX(90deg)',
                                        }}
                                        className={'toRotate bg-[gray] max-w-[1471px] w-[80vw] h-[40px] origin-bottom'}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tablets;

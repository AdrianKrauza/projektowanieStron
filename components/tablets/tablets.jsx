import { useEffect, useRef, useState } from 'react';
import useTextAnimations from '../../hooks/useTextAnimations';
import gsap from 'gsap';
import Image from 'next/image';
import Tablet1Img from '/assets/tablets/Projekt-strony-internetowej1.jpg';
import Tablet2Img from '/assets/tablets/Projekt-strony-internetowej2.jpg';
import Tablet3Img from '/assets/tablets/Projekt-strony-internetowej3.jpg';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const positionBoxes = [
    { x: -2, y: -10 },
    { x: 15, y: 15 },
    { x: 45, y: -12 },
];
const gradients = [
    [
        `linear-gradient(156deg, rgba(179,215,222,1) 0%, rgba(85,156,174,1) 39%, rgba(34,57,73,1) 100%)`,
        `linear-gradient(156deg, rgba(157,169,167,1) 0%, rgba(54,83,78,1) 54%, rgba(70,55,48,1) 100%)`,
        `linear-gradient(156deg, rgba(155,152,145,1) 0%, rgba(117,67,40,1) 54%, rgba(63,26,17,1) 100%)`,
    ],
    [
        'linear-gradient(156deg, rgba(237,233,230,1) 0%, rgba(234,226,215,1) 54%, rgba(230,217,199,1) 100%)',
        ' linear-gradient(156deg, rgba(237,233,230,1) 0%, rgba(234,226,215,1) 54%, rgba(230,217,199,1) 100%)',
        'linear-gradient(156deg, rgba(237,233,230,1) 0%, rgba(234,226,215,1) 54%, rgba(230,217,199,1) 100%)',
    ],
    [
        'linear-gradient(156deg, rgba(104,159,198,1) 0%, rgba(150,182,205,1) 54%, rgba(184,201,211,1) 100%)',
        'linear-gradient(156deg, rgba(203,171,132,1) 0%, rgba(193,208,195,1) 54%, rgba(197,222,218,1) 100%)',
        'linear-gradient(156deg, rgba(183,120,151,1) 0%, rgba(180,163,185,1) 54%, rgba(182,202,211,1) 100%)',
    ],
];
let stopDrawing = false;
const Tablets = () => {
    const headingRef = useRef();
    const mouseMoveRef = useRef();
    const tabletsRef = useRef();
    const convertRef = useRef();
    const circlesRef = useRef();
    const conRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    const [state, setState] = useState(0);
    const handleOnClick = (index) => {
        stopDrawing = true;
        circlesRef.current.querySelectorAll('svg .dot').forEach((el) => (el.style.opacity = 0));
        circlesRef.current.querySelectorAll('svg .dot')[index].style.opacity = 1;
        animationTables(index);
    };
    const animationTables = (index) => {
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
    const loading = (index, circles, dots) => {
        dots[index].style.opacity = 1;
        const obj = {
            length: 0,
            pathLength: circles[index].getTotalLength(),
        };
        const drawLine = () => {
            circles[index].style.strokeDasharray = !stopDrawing
                ? [obj.pathLength - obj.length, obj.pathLength].join(' ')
                : [obj.pathLength, obj.pathLength].join(' ');
        };
        gsap.to(obj, {
            duration: 5,
            length: obj.pathLength,
            onUpdate: drawLine,
            ease: 'none',
            onComplete: () => {
                if (stopDrawing) return;
                circles[index].style.strokeDasharray = [obj.pathLength, obj.pathLength].join(' ');
                loading((index + 1) % 3, circles, dots);
                dots[index].style.opacity = 0;
                animationTables(index);
            },
        });
    };

    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, headingRef, -50, 200, false, true);
            ScrollTrigger.create({
                trigger: conRef.current,
                start: '0% 50%',
                end: '100% 50%',
                onEnter: () => {
                    loading(
                        0,
                        circlesRef.current.querySelectorAll('svg .circle'),
                        circlesRef.current.querySelectorAll('svg .dot'),
                    );
                },
                onLeave: () => {
                    handleOnClick(state);
                },
            });
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
        <div ref={conRef} className={'relative z-20 mt-[8rem] '}>
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
                <div className={'flex '} ref={circlesRef}>
                    {[0, 1, 2].map((index) => (
                        <svg
                            className={'cursor-pointer w-[50px] h-[50px] m-[17px] mt-24 '}
                            key={index}
                            viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={'none'}
                            onClick={() => handleOnClick(index)}
                        >
                            <circle
                                cx="64"
                                cy="64"
                                r="63.5"
                                stroke={'black'}
                                strokeWidth={'2px'}
                                className={'circle'}
                            />
                            <circle cx="64.5" cy="64.5" r="10" fill="black" className={`dot opacity-0`} />
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
                className={'absolute mt-[100px] -translate-x-1/2 -z-10  relative ml-[-60px]  h-[1163px] '}
                ref={tabletsRef}
            >
                {[Tablet3Img, Tablet2Img, Tablet1Img].map((img, index) => (
                    <div
                        key={img.src}
                        className={` h-auto  max-w-[2436px]  ${
                            index ? 'absolute opacity-0' : 'absolute'
                        } top-0 left-1/2 -translate-x-1/2 `}
                    >
                        <Image {...img} layout={`fixed`} quality={70} placeholder={'blur'} />
                    </div>
                ))}
                <div ref={convertRef}>
                    {positionBoxes.map(({ x, y }, index) => (
                        <div
                            key={`${x}${y}1`}
                            className={
                                'top-0 absolute h-full  w-[2688px]  left-1/2 -translate-x-1/2 ml-[127px] h-[1163px]'
                            }
                            style={{
                                WebkitMaskBoxImage: `url(/assets/tablets/Laptopy${index}.svg)`,
                            }}
                        >
                            <div
                                key={`${x}${y}`}
                                className={`flex absolute flex-col   z-10 h-1/2  `}
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
                                        className={'toRotate bg-[gray] w-[2436px] h-[40px] origin-bottom'}
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

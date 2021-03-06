import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';

import LaptopImg from '/assets/header/Monitor-stron-M (1).png';
import LaptopMobileImg from '/assets/header/Laptop-Mobile.png';
import preVideo from '/assets/header/Projektowanie-stron-EKRAN.jpg';
import UseTextAnimations from '../../hooks/useTextAnimations.jsx';
import { GradientAnimation } from '../../helpers/gradientAnimation';
import Logo from './logo';
import getRatio from '../../helpers/getRatio';
import Arrow from './arrow';
const vh = (coef) => window.innerHeight * (coef / 100);
gsap.registerPlugin(ScrollTrigger);

const HeaderMobile = () => {
    const { AnimationHeading, AnimationParagraph } = UseTextAnimations();
    const headerRef = useRef();
    const waitingRef = useRef();
    const gradientRefMobile = useRef();
    const paragraphRef = useRef();
    const gradientRef = useRef();
    const imageRef = useRef();
    const mouseMoveRef = useRef();
    const mouseDownRef = useRef();
    const imageBgRef = useRef();
    const navRef = useRef();

    gsap.fromTo(
        headerRef.current,
        {
            color: '#a0a0a0',
        },
        {
            color: '#dfdfdf',
            delay: 3,
            duration: 2,
        },
    );
    useEffect(() => {
        gsap.to(waitingRef.current, {
            opacity: 0,
            duration: 0.5,
        });
        gsap.set(imageRef.current, {
            opacity: 1,
        });
        gsap.fromTo(
            imageRef.current,

            {
                rotate: 5,
                scale: 1.5,
            },
            {
                rotate: 0,
                scale: 1,
                delay: 0.5,
                duration: 1,
            },
        );
        let animations;
        setTimeout(() => {
            gsap.to('#header', {
                duration: 10,
                y: '20rem',
                opacity: 0,
                rotate: -10,
                scale: 0.25,
                scrollTrigger: {
                    trigger: 'body',
                    start: '0% 0%',
                    end: '0% -100%',
                    scrub: true,
                },
            });
            ScrollTrigger.matchMedia({
                '(min-width: 1200px)': () => {
                    ScrollTrigger.create({
                        trigger: 'body ',
                        pin: '#header > div ',
                        start: '0% 0%',
                        end: `0 150%`,
                    });
                },
            });
            ScrollTrigger.create({
                trigger: 'body ',
                start: '0% 0%',
                end: `${vh(20)}px 0%`,
                onUpdate: ({ progress }) => {
                    progress = (1 - progress) * 200;
                    gradientRefMobile.current.style.backgroundImage = `radial-gradient( circle at 50vw 30vw , transparent ${
                        progress - 100
                    }%, #141414 ${progress}% )`;
                },
            });
        }, 0);

        //a0a0a0
        let currentState = 0;
        animations = setInterval(() => {
            let position = '';
            if (window.innerWidth > 2600) {
                position = '2170px 490px';
            } else if (window.innerWidth < 1200) {
                position = '50vw 20vw';
            } else {
                position = '75vw 25vw';
            }
            currentState++;
            gradientRef.current.style.backgroundImage = `radial-gradient( circle at ${position} , transparent ${
                currentState - 100
            }%, #141414 ${currentState}% )`;
            if (currentState > 85) clearInterval(animations);
        }, 10);
        const tl = gsap.timeline({
            repeat: -1,
        });
        tl.from(mouseMoveRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.6,
        }).to(mouseMoveRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
        });

        setTimeout(() => {
            // AnimationHeading(headerRef, true);
            setTimeout(() => {
                gsap.to(mouseDownRef.current, {
                    duration: 2,
                    opacity: 1,
                    delay: 4,
                });
                AnimationParagraph(paragraphRef, true);
            }, 1000);
        }, 3000);

        return () => clearInterval(animations);
    }, []);
    return (
        <>
            <div id="header" className={'w-screen  h-[100rem] will-change-transform '}>
                <div style={{ background: 'linear-gradient(180deg, #212121 62%, #3f3f3f 77%)' }}>
                    <div
                        ref={gradientRefMobile}
                        className={'h-screen w-screen absolute left-0 top-0 z-[999] m:block hidden  '}
                    />
                    <div
                        ref={gradientRef}
                        className={
                            'pointer-events-none h-screen w-screen absolute left-0 top-0 z-10  bg-gradient-to-r from-darkGray-900 to-darkGray-900  '
                        }
                    />
                    <div className={'max-w-[90rem] m-auto relative h-screen top-10'}>
                        <div className={'m:top-[90rem] m:relative pointer-events-none'}>
                            <style jsx>{`
                                @media (min-width: 2000px) {
                                    h1,
                                    p {
                                        margin-left: -3rem;
                                    }
                                }
                            `}</style>
                            <h1
                                ref={headerRef}
                                className={
                                    'text-[6.5rem] m:ml-0 ml-14 text-[#dfdfdf] font-black font-playfair leading-[0.85] pt-40 relative z-20 m:text-center m:text-[12rem]'
                                }
                            >
                                <span className={'block tracking-[1px]'}>Tu si?? tworzy</span>
                                <span className={'block tracking-[1px]'}>dobre strony </span>
                            </h1>

                            <p
                                ref={paragraphRef}
                                className={
                                    'ml-14 m:ml-0 text-[2.2rem] text-[#dfdfdf] font-thin font-roboto mt-10 leading-[1.2] opacity-0  relative z-20  m:text-center m:text-[5rem]'
                                }
                            >
                                <span className={'block tracking-[-.1rem]'}>Projektujemy przyjemne, cyfrowe</span>
                                <span className={'block tracking-[-.17rem]'}>do??wiadczenia, kt??re dostarczaj??</span>
                                <span className={'block tracking-[-.20rem]'}>topowe wyniki biznesowe.</span>
                            </p>
                        </div>
                        <div
                            ref={mouseDownRef}
                            className={'m:hidden relative z-20 flex items-center ml-14 mt-6 opacity-0'}
                        >
                            <style jsx>{`
                                @media (min-width: 2000px) {
                                    div > div {
                                        margin-left: -6rem;
                                    }
                                    p {
                                        margin-left: 1rem;
                                    }
                                }
                            `}</style>
                            <div className=" w-[34px] h-[64px] rounded-full rounded-full border-[1px] border-[#545458] m-[17px] ">
                                <svg ref={mouseMoveRef} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="dot" cx="64.5" cy="64.5" r="10" fill="#545458 " />
                                </svg>
                            </div>
                            <p className={'font-normal text-[1.5rem] text-[#545458] tracking-[-0.1rem]'}>
                                Przewi?? w d????. Sprawd?? jak dzia??amy, <br />
                                zobacz cennik i przyk??ady realizacji.
                            </p>
                        </div>
                        <div
                            ref={imageRef}
                            style={{ top: `12rem` }}
                            className={`w-[80rem] absolute  -right-44 inline-block m:right-[-7rem] m:w-[105rem] m:mt-48 opacity-0`}
                        >
                            <div
                                ref={imageBgRef}
                                style={{
                                    WebkitMaskImage: `url(assets/header/Maska-Laptop-MOBILE.svg)`,
                                }}
                                className={'z-10 absolute w-[86rem] h-[52rem] left-[8.5rem]  top-[0.9rem]'}
                            >
                                <style jsx>{`
                                    video {
                                        width: 88rem;
                                        position: relative;
                                        left: 0;
                                        top: -1rem;
                                        max-width: unset !important;
                                        //display: none;
                                    }
                                `}</style>
                                <video
                                    src="/assets/header/Projektowannie-stron-MOBILE.mp4"
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline
                                />
                            </div>
                            <div className={'block '}>
                                <Image priority quality={85} layout={'responsive'} {...LaptopMobileImg} />
                            </div>
                        </div>
                        <div className={'absolute z-20 left-1/2 -translate-x-1/2 top-[145rem]'}>
                            <div className=" w-[8rem] h-[16rem] rounded-full rounded-full border-[1px] border-[#545458] m-auto mb-[2rem]  ">
                                <svg ref={mouseMoveRef} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="dot" cx="64.5" cy="64.5" r="10" fill="#545458 " />
                                </svg>
                            </div>
                            <p className={'text-[4rem] text-[#545458] font-normal text-center'}>Przewi??</p>
                        </div>
                        {/*{getRatio() < 0.55 && <Arrow />}*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMobile;

// get width / height of the viewport

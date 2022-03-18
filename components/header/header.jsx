import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
// import LaptopImg from '/assets/header/Monitor3.png';
// import LaptopImg from '/assets/header/aaa.jpg';
// import LaptopImg from '/assets/header/png-Test2 (1).png';
import LaptopImg from '/assets/header/Monitor-stron-M (1).png';
// import LaptopImg from '/assets/header/1 (2).jpg';
import UseTextAnimations from '../../hooks/useTextAnimations.jsx';
import { GradientAnimation } from '../../helpers/gradientAnimation';
import Logo from './logo';
const vh = (coef) => window.innerHeight * (coef / 100);
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
    const { AnimationHeading, AnimationParagraph } = UseTextAnimations();
    const headerRef = useRef();
    const paragraphRef = useRef();
    const gradientRef = useRef();
    const imageRef = useRef();
    const mouseMoveRef = useRef();
    const mouseDownRef = useRef();
    const imageBgRef = useRef();
    useEffect(() => {
        console.log('test');
        let animations;
        let animations2;
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: 'body ',
                pin: '#header > div ',
                start: '0% 0%',

                end: `${vh(2 * 20 + 125)}px 0%`,
            });
        }, 0);

        gsap.fromTo(
            imageRef.current,
            {
                rotate: 5,
                scale: 1.5,
            },
            {
                rotate: 0,
                scale: 1,
                delay: 1,
                duration: 1,
            },
        );
        let currentState = 0;
        let currentState2 = 0;
        animations = setInterval(() => {
            currentState++;
            gradientRef.current.style.backgroundImage = `radial-gradient( circle at ${
                window.innerWidth < 2600 ? '75vw 25vw' : '2170px 490px'
            } , transparent ${currentState - 100}%, #141414 ${currentState}% )`;
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
            // gsap.to(imageBgRef.current, {
            //     duration: 10,
            //     opacity: 0,
            //     // delay: 1,
            // });
        }, 2000);
        setTimeout(() => {
            AnimationHeading(headerRef, true);
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
            <nav className={'flex absolute opacity-20 z-50  top-[50px] w-[85rem] left-1/2 -translate-x-1/2'}>
                <Logo />
            </nav>
            <div id="header" className={'w-screen  h-[100rem] will-change-transform '}>
                <div style={{ background: 'linear-gradient(180deg, #212121 62%, #3f3f3f 77%)' }}>
                    <div
                        ref={gradientRef}
                        className={
                            'h-screen w-screen absolute left-0 top-0 z-10  bg-gradient-to-r from-darkGray-900 to-darkGray-900  '
                        }
                    />
                    <div className={'max-w-[90rem] m-auto relative h-screen top-10'}>
                        <div>
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
                                    'text-[6.5rem] ml-14 text-[#dfdfdf] font-black font-playfair leading-[0.85] pt-40 opacity-0 relative z-20'
                                }
                            >
                                <span className={'block tracking-[1px]'}> Tak się tworzy</span>
                                <span className={'block tracking-[1px]'}>dobre strony </span>
                            </h1>
                            <p
                                ref={paragraphRef}
                                className={
                                    'ml-14 text-[2.5rem] text-[#dfdfdf] font-thin font-roboto mt-10 leading-[1.2] opacity-0  relative z-20'
                                }
                            >
                                {/*14 -ml-12*/}
                                <span className={'block tracking-[-1px]'}>Projektujemy przyjemne, cyfrowe</span>
                                <span className={'block tracking-[-2px]'}>doświadczenia, które dostarczają</span>
                                <span className={'block tracking-[-3px]'}>topowych wyników biznesowych.</span>
                            </p>
                        </div>
                        <div ref={mouseDownRef} className={'relative z-20 flex items-center ml-14 mt-6 opacity-0'}>
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
                            <p className={'font-normal text-[1.5rem]'}>
                                Przewiń w dół. Sprawdź jak działamy, <br />
                                Zobacz cennik i przykłady realizacji.
                            </p>
                        </div>

                        <div ref={imageRef} className={'w-[80rem] absolute top-[2rem] -right-44 inline-block '}>
                            <div
                                ref={imageBgRef}
                                style={{
                                    WebkitMaskBoxImage: `url(assets/header/Monit1-Maska.svg)`,
                                }}
                                className={'z-10 absolute w-full h-full bg-black '}
                            >
                                <style jsx>{`
                                    video {
                                        width: 46rem;
                                        position: relative;
                                        left: 24rem;
                                        top: 4.8rem;
                                        max-width: unset !important;
                                    }
                                `}</style>
                                <video src="/assets/header/video.mp4" autoPlay={true} muted={true} loop={true} />
                            </div>
                            <Image quality={85} layout={'responsive'} {...LaptopImg} priority />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

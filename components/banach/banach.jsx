import Image from 'next/image';
import banach1 from '/assets/banach/Banach-1wszyi-planFIN.png';
import banach2 from '/assets/banach/Banach-2gi-plan-FIN.png';
import banach3 from '/assets/banach/Chmury-Tla (1).jpg';
import cloud from '/assets/banach/cloud.png';
import lottieCloud from '/assets/banach/cloud.json';
import cloud1 from '/assets/banach/Chmury.jpg';
import cloud2 from '/assets/banach/Chmurka-dol.jpg';
import cloud3 from '/assets/banach/ezgif.com-gif-maker (1).png';
// import lottieCloud from '/assets/'
import Lottie from 'lottie-react';
import page1 from '/assets/banach/Bprojekt1.jpg';
import page2 from '/assets/banach/B2.jpg';
import bp1 from '/assets/banach/Bp1.jpg';
import bp2 from '/assets/banach/Bp2.jpg';
import bp3 from '/assets/banach/Bp3.jpg';
import bp4 from '/assets/banach/Bp4.jpg';
import bp5 from '/assets/banach/Bp5.jpg';
import pattern from '/assets/banach/Tlo-telefon.jpg';
import video from '/assets/banach/Tlo-telefon.jpg';
import usePortfolio from '/hooks/usePortfolio2';
import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import useTextAnimations from '../../hooks/useTextAnimations';
import lottieLoad from "../../helpers/lottieLoad";
import logoGif from "../../assets/banach/Banach-Logo.gif";

const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0,
});
const banachTextScrollAnimation = (containerRef, el, start,spped = 65) => {
    const el2 = [...document.querySelectorAll(`${el} > span`)];
    el2.forEach((el, index2) => {
        [...el.children].forEach((el, index) => {
            gsap.to(el.querySelectorAll('span')[1], {
                y: '-120%',
                ease: 'expo.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${vh(start + index + index2 * 5)}px 100%`,
                    end: `+=${vh(spped + index + index2 * 5)} 100%`,
                    scrub: 5,
                },
            });
            gsap.to(el.querySelectorAll('span')[0], {
                y: 10,
                ease: 'expo.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${vh(start + index + index2 * 5)}px 100%`,
                    end: `+=${vh(spped + index + index2 * 5)} 100%`,
                    scrub: 5,
                },
            });
        });
    });
};

const UseBanachSplitText2 = ({ content, size,smallLine }) =>
    content.map((el,index) => (
        <span className={`block text-[${size}] ${smallLine && !index && "mb-[-2.5rem]"}`} key={el}>
            {el.split('').map((el) => (
                <span key={el} className="inline-block relative overflow-hidden ">
                    <span className={`absolute translate-y-[240%] block ${el === '/' && 'opacity-0'}`}>{el}</span>
                    <span className={`translate-y-[130%] block ${el === '/' && 'opacity-0'} `}>{el}</span>
                </span>
            ))}
        </span>
    ));
const vh = (coef) => window.innerHeight * (coef / 100);
gsap.registerPlugin(ScrollTrigger);
const Banach = () => {
    const containerRef = useRef();
    const videoRef = useRef()
    const percentTextRef = useRef();
    const headerRef = useRef();
    const paragraphRef = useRef();
    const lottieCloudRef = useRef();
    const cloudLottieData = useRef();
    const { Split,AnimationHeadingScrub,AnimationParagraphScrub } = useTextAnimations();
    const [currentTextState, setCurrentTextState ] = useState(0);
    const [odometerValue, setOdometerValue] = useState(25);
    const { pinPortfolio, moveElement, scrollAnimationElement } = usePortfolio();
    useEffect(() => {
        gsap.to(containerRef.current.querySelector('.pin2'), {
            opacity: 1,
            duration: 2,
        });
        setTimeout(() => {
            AnimationHeadingScrub(headerRef,headerRef,`${vh(800)} 0%`,`${vh(840)} 0%`,false,true)
            AnimationParagraphScrub(paragraphRef,headerRef,`${vh(830)} 0%`,`${vh(890)} 0%`,false)
            cloudLottieData.current.goToAndStop(0, true);
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: `${vh(750)}px 0%`,
                end: `${vh(850)}px 0%`,
                onUpdate: ({ progress }) => {
                    cloudLottieData.current.goToAndStop(Math.floor(24 * progress - 1), true);
                },
                onLeave: () => {
                    document.body.classList.remove('bg-darkGray-900');
                    document.body.classList.add('bg-lightGray');
                },
                onEnterBack: () => {
                    document.body.classList.remove('bg-lightGray');
                    document.body.classList.add('bg-darkGray-900');
                },
            });
            percentTextRef.current.querySelectorAll('h2').forEach((el) => {
                Split(el);
            });
            pinPortfolio(containerRef);
            moveElement('.banach1', 30, 450);
            moveElement('.banach2', -50, 600);
            moveElement('.banach3', 60, 400);
            moveElement('.cloud1', 20, 450);
            moveElement('.cloud2', 200, 250);
            moveElement('.cloud', 200, 150);
            moveElement('.page1', 290, 700);
            moveElement('.pattern', 640, 300);
            moveElement('.patternPhone', 650, 350);
            moveElement('.text-animation-header', 90, 400);
            moveElement('.patternConvert', 400, 1250);

            scrollAnimationElement(
                '.banach3',
                {
                    borderRadius: '100%',
                },
                {
                    borderRadius: '0%',
                },
                50,
                100,
            );
            scrollAnimationElement(
                '.signature',
                {
                    backgroundPositionX: '100%',
                },
                {
                    backgroundPositionX: '0%',
                },
                420,
                25,
            );
            scrollAnimationElement(
                '.signature2',
                {
                    backgroundPositionX: '100%',
                },
                {
                    backgroundPositionX: '0%',
                },
                600,
                25,
            );
            scrollAnimationElement(
                '.publications  img',
                {
                    y: '100%',
                },
                {
                    y: '0%',
                    ease: 'expo.inOut',
                    stagger: 0.05,
                },
                380,
                225,
                {},
            );
            scrollAnimationElement(".cloudText",{},{   y: '-300vh',},910,930,);
            banachTextScrollAnimation(containerRef, '.animation-header1', 350);
            banachTextScrollAnimation(containerRef, '.animation-header2', 500);
            banachTextScrollAnimation(containerRef, '.animation-header3', 400);
            banachTextScrollAnimation(containerRef, '.animation-header4', 200);

            gsap.to('.animation-header2', {
                onComplete: () => {


                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${vh(700)}px 100%`,
                    markers: true,
                },
            });
        }, 0);
        setInterval(() => {


            percentTextRef.current.querySelectorAll("h2").forEach((el)=>{
                anime
                    .timeline()

                    .add({
                        targets:  el.querySelectorAll("span"),
                        translateX: [0, -30],
                        opacity: [1, 0],
                        easing: 'easeInExpo',
                        duration: 1100,
                        delay: (el, i) =>  30 * i,
                    })
                    .add({
                        targets: el.querySelectorAll("span"),
                        translateX: [40, 0],
                        translateZ: 0,
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1200,
                        delay: (el, i) => 500 + 30 * i,
                    });
            })
            setTimeout(() => {
                setOdometerValue(0);
            },2000)
            setTimeout(() => {
                setCurrentTextState(prev => {
                    setOdometerValue(()=>{
                        if(prev === 1){
                            return 52
                        }else if(prev === 0){
                            return 59
                        }else if(prev === 2){
                            return 25
                        }
                    });
                    return (prev + 1) % 3;
                })

            },2400)
        }, 10000);
    }, []);
    return (
        <div ref={containerRef} className={'h-[650rem] bg-darkGray-900 mt-[30rem]'}>
            <div className={'pin2 w-[1350px] m-auto relative h-screen opacity-0'}>

        <div style={{transform: "translateX(-50%)"}} className={"pointer-events-none banachCloud z-50 w-screen  left-1/2 top-0 h-screen"}>
            <Lottie  lottieRef={cloudLottieData} animationData={lottieCloud} ref={lottieCloudRef} className={"pointer-events-none banachCloud z-50 w-screen  "}  />

        </div>
                <div style={{transform: "translateX(-50%)"}} className={"cloudText pointer-events-none w-screen h-screen z-50 w-screen absolute -translate-x-1/2 left-1/2 top-0 h-screen"}>
                    <h2 ref={headerRef} className={"text-[7rem] mt-[10rem] text-center text-lightGray"}>
                        2x lepsza strona,/
                        pomoże Ci stworzyć/
                        2x lepszy biznes.
                    </h2>
                    <div>
                        <p ref={paragraphRef} className={'text-[#dfdfdf] mt-[3rem] text-center text-[2rem]'}>2x więcej zapytań, 2x więcej sprzedaży, 2x więcej zysków. </p>
                    </div>
                    <div
                        className={`  flex flex-col justify-center h-[400px]  absolute items-center w-full mt-[20rem]`}
                    >
                        <div className={'mb-[4rem]'}>
                            <video ref={video} src="/assets/oko/Oko-logo.mp4"  muted className={'w-96'} />
                        </div>
                        <p className={'text-center text-[#dfdfdf]'}>
                            Studio OKO - Przykład strony dla <br/>
                            studia wideo rozszerzonej rzeczywistości.
                        </p>

                    </div>
                </div>
                <div
                    className={
                        'banach3 overflow-hidden gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <Image {...banach3} layout={'responsive'} />
                </div>

                <div
                    className={
                        'banach2 gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <Image {...banach2} layout={'responsive'} />
                </div>
                <div
                    className={
                        'animation-header4 text-[#c7c6c2] text-animation-header font-AGaramondPro font-thin text-[13rem] text-center leading-[0.8] font-AGaramondPro   absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <UseBanachSplitText2 smallLine size="13rem" content={['BANACH', 'OUTSOURCING']} />
                </div>
                <div
                    className={
                        'banach1 gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <Image {...banach1} layout={'responsive'} />
                    <div
                        className={
                            'h-screen bg-[#E2E2E2] absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                        }
                    />
                    <div
                        className={
                            'bgGradient bg-gradient-to-b from-[#e5e5e5] to-[#E2E2E2] h-56 absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                        }
                    />
                </div>
                <div
                    className={
                        'cloud gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <Image {...cloud} layout={'responsive'} />
                </div>
                {/*<div*/}
                {/*    className={*/}
                {/*        'cloud z-30 gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'*/}
                {/*    }*/}
                {/*>*/}
                {/*    <Image {...cloud} layout={'responsive'} />*/}
                {/*</div>*/}
                <div className={'-left-[300px] pattern  absolute bottom-0  translate-y-full'}>
                    <Image {...pattern} quality={100} />
                </div>
                <div className={'-left-[300px] z-40 h-[572px] patternPhone  absolute bottom-0  translate-y-full'}>
                    <video
                        src="/assets/banach/Design-pattern.mp4"
                        autoPlay
                        muted
                        loop
                        style={{ WebkitMaskBoxImage: `url(/assets/banach/phoneMask.svg)` }}
                    />
                </div>

                <div
                    className={'page1  absolute bottom-0  translate-y-full rounded-3xl  border-[#c9bfaa] border-[1px] '}
                >
                    <h1 className="z-20 scale-x-[0.8] animation-header1 absolute top-[170px] left-[140px] font-AGaramondPro font-thin text-[85px] leading-[0.8]">
                        {['HARMONIA', 'KSIĘGOWO', 'PODATKOWA'].map((el, index) => (
                            <span key={el} className={!index && 'text-[75px] top-[15px] relative'}>
                                {el.split('').map((el) => {
                                    if (el.toLowerCase() === 'ę') {
                                        return (
                                            <span className="inline-block relative overflow-hidden top-[15px] pb-[15px]">
                                                <span className="absolute translate-y-[240%]">{el}</span>
                                                <span className="translate-y-[130%]">{el}</span>
                                            </span>
                                        );
                                    }
                                    return (
                                        <span className="inline-block relative overflow-hidden">
                                            <span className="absolute translate-y-[240%]">{el}</span>
                                            <span className="translate-y-[130%]">{el}</span>
                                        </span>
                                    );
                                })}
                            </span>
                        ))}
                        <span className={' signature'}>Kompleksowa</span>
                    </h1>
                    <div className="rounded-3xl overflow-hidden">
                        <Image {...page1} layout={'fixed'} />
                    </div>

                    <div className="absolute top-[767px]">
                        <div
                            className={
                                'animation-header3 text-[#f0f0f0] pt-[60px] rounded-3xl w-[1550px] h-[600px] bg-[#685d57] text-[50px] font-AGaramondPro text-center scale-x-[0.8] leading-[0.8] -ml-[100px] absolute'
                            }
                        >
                            <div className={"text-[150px]"}/>
                            <UseBanachSplitText2 size={'150px'} content={['NASZE/PUBLIKACJE']} />
                        </div>
                        <div className={'publications flex justify-between mt-[200px] w-[1350px]'}>
                            <Image {...bp1} layout={'fixed'} />
                            <Image {...bp2} layout={'fixed'} />
                            <Image {...bp3} layout={'fixed'} />
                            <Image {...bp4} layout={'fixed'} />
                            <Image {...bp5} layout={'fixed'} />
                        </div>
                        <div
                            className={
                                'absolute w-[1400px] h-[20px] -ml-[1px] bg-gradient-to-t grad from-[#E2E2E2] to-transparent -translate-y-full '
                            }
                        />
                        <div className={' absolute w-[1400px] -ml-[1px] h-[200px]  bg-[#E2E2E2] '} />
                    </div>
                    <div className={"patternConvert w-[1551px] h-[406px] bg-[url('/assets/banach/Bpattern.png')]  absolute -translate-x-1/2 left-1/2"} />
                    <div className="rounded-3xl overflow-hidden ">
                        <Image {...page2} layout={'fixed'} />
                    </div>
                    <h1 className="z-20 scale-x-[0.8] animation-header2 absolute top-[1580px] left-[615px] font-AGaramondPro font-thin text-[97px] leading-[0.8]">
                        {['SPOKÓJ', 'PŁACOWO', '- KADROWY'].map((el, index) => (
                            <span key={el} className={!index && 'text-[90px] top-[5px] relative'}>
                                {el.split('').map((el) => {
                                    if (el.toLowerCase() === 'ę') {
                                        return (
                                            <span
                                                className="inline-block relative overflow-hidden top-[15px] pb-[15px]"
                                            >
                                                <span className="absolute translate-y-[240%]">{el}</span>
                                                <span className="translate-y-[130%]">{el}</span>
                                            </span>
                                        );
                                    }
                                    return (
                                        <span className="inline-block relative overflow-hidden">
                                            <span className="absolute translate-y-[240%]">{el}</span>
                                            <span className="translate-y-[130%]">{el}</span>
                                        </span>
                                    );
                                })}
                            </span>
                        ))}
                        <span className={'signature2'}>Kompleksowy</span>
                    </h1>
                    <div className={'absolute top-[2505px] left-[750px] font-[50px] odometerText '}>
                        <Odometer value={odometerValue} theme={'minimal'} duration={3000} format="dd%" />
                    </div>
                    <div ref={percentTextRef} className={'absolute top-[2550px] left-[220px] '}>
                        {[
                            'Ponad 25% redukcji/ kosztów operacyjnych',
                            'Większa elastyczność/ i łatwa skalowalność',
                            'Zgodność z aktualnymi/ regulacjami i przepisami',
                        ].map((text, index) => {
                            return (
                                <h2 className={`font-roboto text-[#5f4328] text-[45px] ${currentTextState !== index && 'hidden'}`}>
                                    {text}
                                </h2>
                            );
                        })}
                        <p className={"text-[30px] mt-[30px]"}>
                            Korzyści płynące z outsourceingu <br/>
                            na podstawie badań KPMG i HFS.

                        </p>
                    </div>

                    <video
                        src="/assets/banach/ezgif.com-gif-maker (19).mp4"
                        autoPlay
                        muted
                        loop
                        className={'w-[100px] absolute top-[3320px]  mix-blend-darken left-[1009px]'}
                        style={{ clipPath: 'polygon(0 0, 99% 0, 100% 99%, 0 99%)' }}
                    />
                    <video
                        src="/assets/banach/ezgif.com-gif-maker (22).mp4"
                        autoPlay
                        muted
                        loop
                        className={'w-[130px] absolute top-[3320px]  mix-blend-darken left-[575px]'}
                        style={{ clipPath: 'polygon(0 0, 99% 0, 100% 99%, 0 99%)' }}
                    />
                    <video
                        src="/assets/banach/ezgif.com-gif-maker (23).mp4"
                        autoPlay
                        muted
                        loop
                        className={'w-[130px] absolute top-[3320px]  mix-blend-darken left-[158px]'}
                        style={{ clipPath: 'polygon(0 0, 99% 0, 99% 100%, 0% 100%)' }}
                    />




                </div>
            </div>
        </div>
    );
};

export default Banach;
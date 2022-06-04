import usePortfolio from '/hooks/usePortfolioM';
import { useEffect, useRef, useState } from 'react';
import gsap, { Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import startImg from '/assets/pragmile/Tlo.jpg';
import Presentation from './components/presentation';
import StartImg from './components/startImg';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import End from './components/end';
import Phone from './components/phone';
import UseCanvasFrameAnimation from '../../hooks/useCanvasFrameAnimation';
import If from './components/if';
gsap.registerPlugin(ScrollTrigger);
const vh = (coef) => window.innerHeight * (coef / 100);
const Pragmile = ({ setPageState }) => {
    const containerRef = useRef();

    const { pinPortfolio, moveElement, scrollAnimationElement } = usePortfolio();
    const { initCanvas, updateImage } = UseCanvasFrameAnimation('pragmile/Comp 1_00', [0, 49]);
    useEffect(() => {
        setTimeout(() => {
            gsap.to(containerRef.current.querySelector('.pin'), {
                opacity: 1,
                duration: 2,
            });
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: `${(vh(300 + 100) + 16000) * 0.4} 0px`,

                onEnter: () => {
                    gsap.set('body', {
                        background: 'rgb(10,10,10)',
                    });
                    gsap.to('body', {
                        opacity: 0,
                        duration: 0.2,
                        onComplete: () => {
                            setPageState(1);
                        },
                    });
                },
            });
            pinPortfolio(containerRef);
            // moveElement('.startImg3', 1200, 6000, false, 0.3);
            moveElement('.page1', 1080, 500);
            moveElement('.gate1', 1250, 200);
            moveElement('.text1', 1250, 230);
            moveElement('.bg2', 1300, 600);
            moveElement('.text2', 1450, 200);
            moveElement('.gate2', 1440, 150);
            moveElement('.person', 1350, 400);
            moveElement('.page3', 1450, 1300);
            moveElement('.text3', 1670, 270);
            moveElement('.gate3', 1680, 230);
            moveElement('.sphere4', 2270, 80);
            moveElement('.gate4', 2250, 130);
            moveElement('.hoodie', 2320, 400);
            moveElement('.videoHand', 2390, 120);
            // moveElement('.hand', 11500, 2200);
            // moveElement('.text5', 12550, 800);
            moveElement('.hand', 2220, 400);

            //
            moveElement('.box1_1', 1500, 150);
            moveElement('.box1_2', 1550, 80);
            moveElement('.box1_3', 1600, 10);
            // //
            // moveElement('.box2_1', 12200, 1200);
            // moveElement('.box2_2', 12300, 1000);
            // moveElement('.box2_3', 12700, 300);
            //
            scrollAnimationElement(
                '.startImg3 img',
                {},
                {
                    webkitFilter: 'blur(10px)',
                },
                3580,
                500,
            );
            const tl = gsap.timeline({
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${5900 * 0.4}px 100%`,
                    end: `+=${(vh(100) + 1400) * 0.4} 100%`,
                    scrub: 1,
                },
            });
            tl.from(containerRef.current.querySelectorAll('.box1_3'), {
                scale: 0.9,
            })
                .to(containerRef.current.querySelectorAll('.box1_3'), {
                    ease: Power1.easeOut,
                    scale: 1.2,
                })
                .to(containerRef.current.querySelectorAll('.box1_3'), {
                    ease: Power1.easeIn,

                    scale: 0.9,
                });
            scrollAnimationElement('.startImg3', {}, {}, 2000, 0, {
                onLeave: () => {
                    // containerRef.current.querySelector(' .startImg3').style.overflow = 'visible';
                },
                onEnterBack: () => {
                    // containerRef.current.querySelector(' .startImg3').style.overflow = 'hidden';
                },
            });
            scrollAnimationElement(
                '.startImg3',
                {},
                {
                    opacity: 0,
                },
                3800,
                1500,
            );
            scrollAnimationElement(
                '.circleBorder',
                {},
                {
                    scale: 1.25,
                    opacity: 0,
                },
                5150,
                150,
            );
            scrollAnimationElement(
                '.circleText circle-text #t',
                { rotate: 130 },
                {
                    rotate: 0,
                },
                9500,
                400,
            );

            scrollAnimationElement(
                '.circleTextMain p',
                { y: '10rem' },
                {
                    y: 0,
                },
                2000,
                50,
            );
            scrollAnimationElement(
                '.circleText circle-text',
                { rotate: 130 },
                {
                    rotate: 40,
                },
                2100,
                100,
            );
            gsap.set('.m1_cGroup', { opacity: 0 });
            scrollAnimationElement('.m1_cGroup', {}, {}, 1500, 0, {
                onEnter: () => {
                    gsap.timeline({ defaults: { duration: 45 } })
                        .fromTo('.m1_cGroup', { opacity: 0 }, { duration: 0.07, opacity: 1, stagger: -0.1 }, 0)
                        .from(
                            '.m1_cGroup',
                            {
                                duration: 2.5,
                                scale: -0.3,
                                transformOrigin: '50% 50%',
                                stagger: -0.05,
                                ease: 'elastic',
                            },
                            0,
                        );
                },
            });
            scrollAnimationElement(
                '.m1_cGroup',
                {
                    y: (i) => i * -20 * -2,
                },
                {
                    y: (i) => i * -20 * 2,
                },
                5500,
                1400,
            );
            scrollAnimationElement(
                '.startImg3',
                {
                    borderTopLeftRadius: '100%',
                    borderTopRightRadius: '100%',
                },
                {
                    borderTopLeftRadius: '0%',
                    borderTopRightRadius: '0%',
                },
                1200,
                150,
            );
            scrollAnimationElement(
                '.startImg3 > span',
                {
                    scale: 3.5,
                },
                {
                    scale: 1.4,
                    transformOrigin: 'top',
                },
                1100,
                1000,
                {
                    scrub: 4,
                },
            );
            [
                [100, 100],
                [100, 0],
                [50, -50],
                [0, -100],
                [-50, -50],
                [-100, 0],
                [-100, 100],
            ].map(([x, y], index) => {
                scrollAnimationElement(
                    `.box${index}`,
                    {
                        x: x / 15 + 'rem',
                        y: y / 15 + 'rem',
                    },
                    {
                        x: 0,
                        y: 0,
                    },
                    2100,
                    50,
                );
            });
            scrollAnimationElement('.startImg3', {}, {}, 9600, 3300, {
                onUpdate: ({ progress }) => {
                    updateImage(Math.floor(progress * 50 * 5));
                },
            });
        }, 0);
    }, []);
    return (
        //
        <div ref={containerRef} className={'h-[20000px] bg-[#141414] w-screen -mt-[75rem] '}>
            <div className={'pin w-[95rem] relative h-screen  bg-[#141414] -translate-x-1/2 left-1/2 opacity-0 '}>
                {/*<StartImg />*/}
                <Page1 />
                <Page2 />
                <Page3 />
                <End />
                {/*<IfMobile containerRef={containerRef} />*/}
            </div>
        </div>
    );
};

export default Pragmile;

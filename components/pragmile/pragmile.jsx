import usePortfolio from '../../hooks/usePortfolio';
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
            console.log(containerRef);

            gsap.to(containerRef.current.querySelector('.pin'), {
                opacity: 1,
                duration: 2,
            });
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: `${vh(300 + 100) + 13500} 0px`,
                markers: true,
                onEnter: () => {
                    setPageState(1);
                },
            });
            pinPortfolio(containerRef);
            moveElement('.startImg3', vh(100) + 'px', 12000, false, 0.05);
            moveElement('.page1', 1080, 7000);
            moveElement('.gate1', 2750, 4100);
            moveElement('.text1', 2680, 4400);
            moveElement('.bg2', 3850, 6400);
            moveElement('.text2', 5100, 3500);
            moveElement('.gate2', 5100, 3100);
            moveElement('.person', 4250, 4900);
            moveElement('.page3', 5350, 11000);
            moveElement('.text3', 7150, 2000);
            moveElement('.gate3', 7150, 1700);
            moveElement('.imgWithGradient_Img', 10900, 2000);
            moveElement('.imgWithGradient_Gradient', 10930, 2000);
            moveElement('.sphere4', 11850, 1550);
            moveElement('.gate4', 11500, 1800);
            moveElement('.phone', 7600, 3300);
            moveElement('.hoodie', 11800, 2700);
            moveElement('.hand', 11500, 2200);
            moveElement('.text5', 11550, 800);
            moveElement('.videoHand', 11200, 900);

            //
            moveElement('.box1_1', 5250, 2700);
            moveElement('.box1_2', 5550, 2100);
            moveElement('.box1_3', 5900, 1400);
            //
            moveElement('.box2_1', 13200, 1200);
            moveElement('.box2_2', 13300, 1000);
            moveElement('.box2_3', 13700, 300);
            //
            scrollAnimationElement(
                '.startImg3 img',
                {},
                {
                    webkitFilter: 'blur(10px)',
                },
                2880,
                500,
            );
            const tl = gsap.timeline({
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${5900}px 100%`,
                    end: `+=${vh(100) + 1400} 100%`,
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
            scrollAnimationElement('.startImg3', {}, {}, 1100, 0, {
                onLeave: () => {
                    containerRef.current.querySelector(' .startImg3').style.overflow = 'visible';
                },
                onEnterBack: () => {
                    containerRef.current.querySelector(' .startImg3').style.overflow = 'hidden';
                },
            });
            scrollAnimationElement(
                '.startImg3',
                {},
                {
                    opacity: 0,
                },
                2800,
                1500,
            );
            scrollAnimationElement(
                '.circleBorder',
                {},
                {
                    scale: 1.25,
                    opacity: 0,
                },
                4150,
                150,
            );
            scrollAnimationElement(
                '.circleText circle-text #t',
                { rotate: 130 },
                {
                    rotate: 0,
                },
                8500,
                400,
            );

            scrollAnimationElement(
                '.circleTextMain p',
                { y: 300 },
                {
                    y: 0,
                },
                8900,
                400,
            );
            scrollAnimationElement(
                '.circleText circle-text',
                { rotate: 130 },
                {
                    rotate: 40,
                },
                8500,
                400,
            );
            gsap.set('.m1_cGroup', { opacity: 0 });
            scrollAnimationElement('.m1_cGroup', {}, {}, 6500, 0, {
                onEnter: () => {
                    gsap.timeline({ defaults: { duration: 45 } })
                        .fromTo('.m1_cGroup', { opacity: 0 }, { duration: 0.3, opacity: 1, stagger: -0.1 }, 0)
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
                100,
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
                        x,
                        y,
                    },
                    {
                        x: 0,
                        y: 0,
                    },
                    8900,
                    400,
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
        <div ref={containerRef} className={'h-[20000px] bg-[#141414] w-screen -mt-[25rem] '}>
            <div className={'pin w-[1350px] relative h-screen  bg-[#141414] -translate-x-1/2 left-1/2 opacity-0 '}>
                <StartImg />
                <Page1 />
                <Page2 />
                <Page3 />
                <Phone initCanvas={initCanvas} />
                <End />
                <If containerRef={containerRef} />
            </div>
        </div>
    );
};

export default Pragmile;

import usePortfolio from '/hooks/usePortfolio';
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
import Footer from './components/footer';
gsap.registerPlugin(ScrollTrigger);
const vh = (coef) => window.innerHeight * (coef / 100);
const Pragmile = ({ setPageState }) => {
    const containerRef = useRef();

    const { pinPortfolio, moveElement, scrollAnimationElement } = usePortfolio(true);
    const { initCanvas, updateImage } = UseCanvasFrameAnimation('pragmile/canvas/Poster_247_00', [0, 59]);
    useEffect(() => {
        setTimeout(() => {
            gsap.to(containerRef.current.querySelector('.pin'), {
                opacity: 1,
                delay: 0.9,
                duration: 2,
            });

            pinPortfolio(containerRef);
            // moveElement('.startImg3', 1200, 8000, false, 0.3);
            moveElement('.page1', 1080, 7000);
            moveElement('.gate1', 2750, 4100);
            moveElement('.text1', 2680, 4400);
            moveElement('.bg2', 3850, 6400);
            moveElement('.text2', 5100, 3500);
            moveElement('.gate2', 5100, 3100);
            moveElement('.person', 4250, 4900);
            moveElement('.page3', 5350, 11000);
            moveElement('.text3', 7150, 2800);
            moveElement('.gate3', 7150, 2500);
            moveElement('.imgWithGradient_Img', 10900, 2000);
            moveElement('.imgWithGradient_Gradient', 10930, 2000);
            moveElement('.sphere4', 10850, 2050);
            moveElement('.gate4', 10400, 2900);
            moveElement('.phone', 9300, 3800);
            moveElement('.hoodie', 11800, 2700);
            moveElement('.hand', 11500, 2200);
            moveElement('.text5', 12550, 800);
            moveElement('.videoHand', 12200, 900);

            //
            moveElement('.box1_1', 5250, 2700);
            moveElement('.box1_2', 5550, 2100);
            moveElement('.box1_3', 5900, 1400);
            //
            moveElement('.box2_1', 12200, 1200);
            moveElement('.box2_2', 12300, 1000);
            moveElement('.box2_3', 12700, 300);
            moveElement('.footer', 13500, 500);
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
                { y: 300 },
                {
                    y: 0,
                },
                9400,
                400,
            );
            scrollAnimationElement(
                '.circleText circle-text',
                { rotate: 130 },
                {
                    rotate: 40,
                },
                9400,
                400,
            );
            gsap.set('.m1_cGroup', { opacity: 0 });
            scrollAnimationElement('.m1_cGroup', {}, {}, 6500 * 0.4, 0, {
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
                    9900,
                    400,
                );
            });
            scrollAnimationElement('.startImg3', {}, {}, 3850, 6400, {
                onUpdate: ({ progress }) => {
                    updateImage(Math.floor(progress * 50 * 4));
                },
            });
        }, 0);
    }, []);
    return (
        //
        <div
            ref={containerRef}
            style={{ height: 'calc(5400px + 150vh)' }}
            className={' bg-[#141414] w-screen mt-[-35rem] overflow-hidden '}
        >
            <div className={'pin w-[1350px] relative h-screen  bg-[#141414] -translate-x-1/2 left-1/2 opacity-0 '}>
                <StartImg />
                <Page1 />
                <Page2 initCanvas={initCanvas} />
                <Page3 />
                <End />
                <Footer />
            </div>
        </div>
    );
};

export default Pragmile;

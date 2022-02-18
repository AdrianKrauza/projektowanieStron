import Image from 'next/image';
import banach1 from '/assets/banach/Banach-1wszyi-plan.png';
import banach2 from '/assets/banach/Banach-2gi-plan-(1) (2).png';
import banach3 from '/assets/banach/Chmury-Tla.jpg';
import cloud from '/assets/banach/cloud.png';
import cloud1 from '/assets/banach/Chmury.jpg';
import cloud2 from '/assets/banach/Chmurka-dol.jpg';
import cloud3 from '/assets/banach/ezgif.com-gif-maker (1).png';
import usePortfolio from '../../hooks/usePortfolio';
import { useEffect, useRef } from 'react';
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Banach = () => {
    const containerRef = useRef();
    const { pinPortfolio, moveElement } = usePortfolio();
    useEffect(() => {
        setTimeout(() => {
            pinPortfolio(containerRef);
            moveElement('.banach1', 30, 450);
            moveElement('.banach2', -50, 600);
            moveElement('.banach3', 0, 500);
            moveElement('.cloud1', 20, 450);
            moveElement('.cloud2', 200, 250);
            moveElement('.cloud', 200, 150);
            moveElement('.text-animation-header', 0, 450);
            [...document.querySelectorAll('.text-animation-header > span > span')].forEach((el, index) => {
                gsap.to(el.querySelectorAll('span')[1], {
                    y: '-120%',
                    duration: 6,
                    delay: index / 15,
                    ease: Expo.easeInOut,
                });
                gsap.to(el.querySelectorAll('span')[0], {
                    y: 10,
                    duration: 6,
                    delay: index / 15,
                    ease: Expo.easeInOut,
                });
            });
        }, 0);
    }, []);
    return (
        <div ref={containerRef} className={'h-[300rem] bg-[#E2E2E2]'}>
            <div className={'pin w-[1350px] m-auto relative h-screen '}>
                <div
                    className={
                        'banach3 gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <Image {...banach3} layout={'responsive'} />
                </div>
                <div
                    className={
                        'cloud1 mix-blend-screen gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <Image {...cloud1} layout={'responsive'} />
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
                        ' text-animation-header font-AGaramondPro font-thin text-[13rem] text-center leading-[0.8]    absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    {['BANACH', 'OUTSCORING'].map((el, index) => (
                        <span className={'block'} key={el}>
                            {el.split('').map((el) => {
                                return (
                                    <span className="inline-block relative overflow-hidden text-[#f0f0f0]">
                                        <span className="absolute translate-y-[240%] block">{el}</span>
                                        <span className="translate-y-[130%] block">{el}</span>
                                    </span>
                                );
                            })}
                        </span>
                    ))}
                </div>
                <div
                    className={
                        'banach1 gradientStart absolute bottom-0  translate-y-full w-screen -translate-x-1/2 left-1/2'
                    }
                >
                    <Image {...banach1} layout={'responsive'} />
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
            </div>
        </div>
    );
};

export default Banach;

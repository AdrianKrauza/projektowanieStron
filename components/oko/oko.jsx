import Image from 'next/image';
import usePortfolio from '../../hooks/usePortfolio';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useCanvasFrameAnimation from '../../hooks/useCanvasFrameAnimation';
import startImg from '/assets/oko/oko-background.jpg';
import okoHeaderImg from '/assets/oko/oko-tlo.jpg';
gsap.registerPlugin(ScrollTrigger);
const Oko = () => {
    const containerRef = useRef();
    const { pinPortfolio, moveElement, scrollAnimationElement } = usePortfolio();
    const el = (el) => containerRef.current.querySelector(el);
    const vh = (coef) => window.innerHeight * (coef / 100);
    useEffect(() => {
        setTimeout(() => {
            pinPortfolio(containerRef);
            moveElement('.gradientStart', '-95%', 50);
            moveElement('.text1', -50, 250);
            moveElement('.startImg3', 80, 500);
            moveElement('.headerImg', 310, 150);
            scrollAnimationElement(
                '.startImg3',
                {
                    borderRadius: '100%',
                },
                {
                    borderRadius: '0%',
                },
                80,
                150,
            );

            scrollAnimationElement(
                '.startImg3 img',
                {
                    scale: 7,
                },
                {
                    scale: 1,
                    transformOrigin: 'top',
                },
                70,
                150,
            );
        }, 0);
    }, []);
    return (
        <div ref={containerRef} className={'h-[400rem] bg-[#06051C] w-screen '}>
            <div className={'pin w-[1350px] relative h-screen  bg-[#06051C] -translate-x-1/2 left-1/2 '}>
                <div
                    className={
                        'gradientStart absolute bottom-0  translate-y-full h-[50vh] w-screen -translate-x-1/2 left-1/2 bg-gradient-to-b from-[#141414] to-[#06051C]'
                    }
                />
                <div
                    className={
                        'text1 absolute bottom-0  translate-y-full flex justify-center translate-y-[40vh]  absolute items-center w-full'
                    }
                >
                    <p className={'text-right text-white'}>
                        Strona da studia video <br />
                        rozszerzonej rzeczywistości.
                    </p>
                    <div className={'h-[100px] bg-white w-[1px] mx-10'} />
                    <div>
                        <video src="/assets/oko/Oko-logo.mp4" autoPlay muted className={'w-96'} />
                    </div>
                </div>
                <div
                    className={
                        'startImg3 absolute bottom-0 w-screen -translate-x-1/2 left-1/2 translate-y-full overflow-hidden'
                    }
                >
                    <Image {...startImg} layout={'responsive'} />
                </div>
                <div className={'headerImg absolute bottom-0 translate-y-full '}>
                    <Image {...okoHeaderImg} />
                </div>
                {/*<div className={'bg-[#06051C]'}></div>*/}
            </div>
        </div>
    );
};

export default Oko;

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useTextAnimations from '../../hooks/useTextAnimations';
import logo from '/assets/portfolios/Zrzut ekranu 2022-04-9 o 20.59.52.png';
gsap.registerPlugin(ScrollTrigger);
import Pragmile from './pragma';
import Banach from './banach';
import Oko from './oko';
import UseCanvasFrameAnimation from '../../hooks/useCanvasFrameAnimation';
const Portfolios = () => {
    const canvasRef = useRef();
    const { initCanvas, updateImage } = UseCanvasFrameAnimation('portfolios/logo/', [0, 75]);
    const { AnimationHeadingScrub } = useTextAnimations();
    const conRef = useRef();
    const openBlackRef = useRef();
    const heading3Ref = useRef();
    useEffect(() => {
        setTimeout(() => {
            initCanvas(canvasRef, 488, 202);
            // AnimationHeadingScrub(heading3Ref, heading3Ref, -50, 200, false, true);
            gsap.fromTo(
                openBlackRef.current,
                {
                    borderTopLeftRadius: '100%',
                    borderTopRightRadius: '100%',
                },
                {
                    borderTopLeftRadius: '0%',
                    borderTopRightRadius: '0%',
                    scrollTrigger: {
                        trigger: openBlackRef.current,
                        start: '0 80%',
                        end: '0% 50%',
                        scrub: true,
                    },
                },
            );
            gsap.to(canvasRef.current, {
                scrollTrigger: {
                    trigger: canvasRef.current,
                    start: '0 60%',
                    end: '0% 30%',
                    scrub: true,

                    onUpdate: ({ progress }) => {
                        updateImage(Math.floor(progress * 74));
                    },
                },
            });
            //
            ScrollTrigger.create({
                trigger: conRef.current,
                start: 'top top',
                end: 'bottom 50%',
            });
        }, 0);
    }, []);
    return (
        <div className={'bg-lightGray relative '}>
            <h2 className={'text-center py-[10rem] text-[10rem] '} ref={heading3Ref}>
                Przykłady <br /> realizacji
            </h2>
            <div>
                <svg viewBox="0 0 694 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={'mb-[-5px]'}>
                    <path d="M1 33C273.234 -9.66102 424.857 -9.67231 693 33H1Z" fill="#141414" />
                </svg>

                <div className={'bg-darkGray-900  w-screen pt-[4rem] pb-[20rem] '}>
                    <h2 className={'text-[#dfdfdf] text-center pt-[1rem] text-[4rem] font-roboto font-thin'}>
                        Jakiej jakości możesz oczekiwać <br />
                        po współpracy z nami? <br />
                    </h2>
                    <div className="flex justify-center py-[5rem] ">
                        <canvas ref={canvasRef} className={'shadow-[0_0_20px_20px_#151515]'} />
                    </div>
                    <p className={'text-[#dfdfdf] text-center  text-[2rem] leading-[1.3] '}>
                        W Owocnych nie ma sztampowych szablonów.
                        <br />
                        Tworzymy wyłącznie unikalne marki, które
                        <br />
                        wyróżniają się na tle całej konkurencji.
                        <br />
                        <br />
                        Przemyślane, wiarygodne, piękne!
                    </p>
                </div>
            </div>
            <Pragmile />
            <div className={'bg-[#E3E3E3] '}>
                <svg
                    viewBox="0 0 1400 38"
                    fill="#E3E3E3"
                    xmlns="http://www.w3.org/2000/svg"
                    className={'-translate-y-[2px]'}
                >
                    <path
                        d="M-0.583861 19.6394C-0.583861 19.6394 375.116 -5.76057 698.716 17.0395C1050.22 44.0395 1050.22 44.0395 1399.52 21.9395C1399.52 21.9395 1399.02 14.5395 1400.12 0.139515C1337.62 -0.0604905 17.2161 -0.0605999 -0.483883 0.239399C-1.58388 4.2394 -0.583861 19.6394 -0.583861 19.6394Z"
                        fill="#141414"
                    />
                </svg>
            </div>

            <Banach />
            <div className={'bg-[#E3E3E3] rotate-180 '}>
                <svg
                    viewBox="0 0 1400 38"
                    fill="#E3E3E3"
                    xmlns="http://www.w3.org/2000/svg"
                    className={'-translate-y-[2px]'}
                >
                    <path
                        d="M-0.583861 19.6394C-0.583861 19.6394 375.116 -5.76057 698.716 17.0395C1050.22 44.0395 1050.22 44.0395 1399.52 21.9395C1399.52 21.9395 1399.02 14.5395 1400.12 0.139515C1337.62 -0.0604905 17.2161 -0.0605999 -0.483883 0.239399C-1.58388 4.2394 -0.583861 19.6394 -0.583861 19.6394Z"
                        fill="#141414"
                    />
                </svg>
            </div>
            <Oko />
        </div>
    );
};

export default Portfolios;

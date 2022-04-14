import Image from 'next/image';
import page1 from '/assets/portfolios/Projektowanie-stron-IT.jpg';
import gate from '/assets/portfolios/Kratki.png';
import hand from '/assets/portfolios/Dlon-Mobilna.png';
import box1 from '/assets/portfolios/Kwadrat-przod.png';
import box2 from '/assets/portfolios/Kwadrat-srodek.png';
import box3 from '/assets/portfolios/Kwadrat-tyl.png';
import man from '/assets/portfolios/Projektant-stron.png';
import text1 from '/assets/portfolios/Tekst-strony1.png';
import text2 from '/assets/portfolios/Teskty-stron2.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import UseCanvasFrameAnimation from '../../hooks/useCanvasFrameAnimation';
gsap.registerPlugin(ScrollTrigger);
import Link from 'next/link';
//
const Pragmile2 = () => {
    const page1Ref = useRef();
    const gateRef = useRef();
    const gate2Ref = useRef();
    const handRef = useRef();
    const box1Ref = useRef();
    const box2Ref = useRef();
    const box3Ref = useRef();
    const manRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();
    const containerRef = useRef();
    const circle1Ref = useRef();
    const circle2Ref = useRef();
    const canvasRef = useRef();
    const { initCanvas, updateImage } = UseCanvasFrameAnimation('portfolios/canvas/', [0, 40]);
    useEffect(() => {
        setTimeout(() => {
            initCanvas(canvasRef, 242, 397);
            const ease = 'none';
            const scrollTrigger = {
                trigger: containerRef.current,
                start: '0 80%',
                end: '0% 20%',
                scrub: 3,
            };
            gsap.to(circle1Ref.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '0 100%',
                    end: '100% 0%',
                    scrub: true,

                    onUpdate: ({ progress }) => {
                        updateImage(Math.floor(progress * 40 * 12));
                    },
                },
            });
            gsap.to(circle1Ref.current, {
                x: -200,
                ease,
                scrollTrigger,
            });
            gsap.to(circle2Ref.current, {
                x: 200,
                ease,
                scrollTrigger,
            });
            gsap.to(page1Ref.current, {
                y: -240,
                ease,
                scrollTrigger,
            });
            gsap.to(gateRef.current, {
                y: -220,
                ease,
                scrollTrigger,
            });
            gsap.to(gate2Ref.current, {
                y: -150,
                ease,
                scrollTrigger,
            });
            gsap.to(box1Ref.current, {
                y: 170,
                ease,
                scrollTrigger,
            });
            gsap.to(box2Ref.current, {
                y: 20,
                ease,
                scrollTrigger,
            });
            gsap.to(box3Ref.current, {
                y: -100,
                ease,
                scrollTrigger,
            });
            gsap.to(manRef.current, {
                y: -60,
                ease,
                scrollTrigger,
            });
            gsap.to(text1Ref.current, {
                y: -170,
                ease,
                scrollTrigger,
            });
            gsap.to(text2Ref.current, {
                y: -140,
                ease,
                scrollTrigger,
            });
        }, 0);
    }, []);
    //
    return (
        <div className={'flex justify-center gap-[10rem] bg-darkGray-900 h-[45rem] overflow-hidden'}>
            <div className={'relative z-10 mt-[2rem]'}>
                <video
                    src={'/assets/portfolios/ezgif.com-gif-maker (36).mp4'}
                    autoPlay
                    muted
                    loop
                    className={'w-[247px] mb-[2rem]'}
                />
                <h2 className={'text-white font-roboto text-[2.5rem] font-thin mb-[2rem]'}>
                    Team Novate <br />
                    Innowacyjny projekt strony <br />
                    dla innowacyjnego zespołu IT
                </h2>
                <p
                    className={
                        'text-[#e7e7e9] ml-[1rem] border-l-[1px] pl-[1rem] opacity-50 font-roboto text-[1.7rem] mt-[1rem] leading-[1.2]'
                    }
                >
                    Współpracę rozpoczęliśmy już od nazwy. <br />
                    Różnicę w podejściu widać od razu. <br />
                    Owocni są nie do podrobienia. <br />
                </p>
                <p
                    className={
                        'text-[#e7e7e9] ml-[1rem] pl-[1rem] mt-[2rem] opacity-50 font-roboto text-[1rem] mt-[0.8rem] mb-[3rem]'
                    }
                >
                    Marcin Kowalski - Założyciel
                </p>
                <Link href={'/novate'} target={'_blank'} rel="noreferrer" passHref>
                    <a className={'text-[1.5rem] text-[#0e563f]'}>Zobacz realizacje</a>
                </Link>
            </div>
            <div ref={containerRef} className={'relative w-[40rem] mt-[10rem] '}>
                <div
                    ref={circle1Ref}
                    className={'left-[-100px] w-[500px] h-[500px] top-[150px] absolute '}
                    style={{ background: 'radial-gradient(circle, rgba(5,31,23,1) 0%, rgba(0,0,0,0) 74%)' }}
                />
                <div
                    ref={circle2Ref}
                    className={'left-[200px] w-[500px] h-[500px] top-[-100px] absolute '}
                    style={{ background: 'radial-gradient(circle, rgba(5,31,23,1) 0%, rgba(0,0,0,0) 74%)' }}
                />
                <div
                    ref={page1Ref}
                    className={
                        'rounded-t-[30px] overflow-hidden left-0 top-[100px] absolute border-[1px] border-[#022300]'
                    }
                >
                    <Image priority {...page1} />
                </div>
                <div ref={gateRef} className={'left-[120px] top-[190px] absolute'}>
                    <Image priority {...gate} />
                </div>
                <div ref={gate2Ref} className={'left-[190px] top-[290px] absolute'}>
                    <Image priority {...gate} />
                </div>
                <div ref={manRef} className={'left-0 top-[150px] absolute'}>
                    <div className={'w-[200px] h-[200px] bg-[#141414] absolute top-[200px] '} />
                    <Image priority {...man} />
                </div>
                <div ref={text1Ref} className={'left-[120px] top-[150px] absolute'}>
                    <Image priority {...text1} />
                    <style jsx>{`
                        @keyframes pulse {
                            0% {
                                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2), 0 0 0 5px rgba(255, 255, 255, 0.2),
                                    0 0 0 15px rgba(255, 255, 255, 0.2), 0 0 0 30px rgba(255, 255, 255, 0.2);
                            }

                            100% {
                                box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.2), 0 0 0 15px rgba(255, 255, 255, 0.2),
                                    0 0 0 30px rgba(255, 255, 255, 0.2), 0 0 0 45px rgba(255, 255, 255, 0);
                            }
                        }
                        .ring-button {
                            animation: pulse 5s linear infinite;
                            position: absolute;
                            border-radius: 100%;
                            width: 32px;
                            height: 32px;
                            bottom: 52px;
                            left: 27px;
                            z-index: -1;
                        }
                    `}</style>

                    <div className={'ring-button'} />
                </div>
                <div ref={text2Ref} className={'left-[200px] top-[300px] absolute '}>
                    <Image priority {...text2} />
                </div>
                <div ref={handRef} className={'left-0 top-[120px] absolute'}>
                    <div
                        className={
                            'bg-darkGray-900 absolute w-[1200px] translate-x-[-300px] translate-y-[250px] h-[250px]'
                        }
                    />
                    <Image priority {...hand} />
                    <canvas
                        className={'ml-[20px] absolute top-[11px] left-[337px]'}
                        ref={canvasRef}
                        style={{ WebkitMaskImage: `url(/assets/portfolios/maska.svg)` }}
                    />
                </div>

                <div ref={box3Ref} className={'left-[-20px] top-[300px] absolute'}>
                    <Image priority {...box3} />
                </div>
                <div ref={box2Ref} className={'left-[-40px] top-[220px] absolute'}>
                    <Image priority {...box2} />
                </div>
                <div ref={box1Ref} className={'left-[-20px] top-[130px] absolute'}>
                    <Image priority {...box1} />
                </div>
            </div>
        </div>
    );
};
//
export default Pragmile2;

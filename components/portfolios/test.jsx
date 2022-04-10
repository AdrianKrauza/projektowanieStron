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
gsap.registerPlugin(ScrollTrigger);
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
    useEffect(() => {
        setTimeout(() => {
            const ease = 'none';
            const scrollTrigger = {
                trigger: containerRef.current,
                start: '0 80%',
                end: '0% 10%',
                scrub: 3,
                markers: true,
            };
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
        <div className={'flex justify-center gap-[10rem] bg-darkGray-900 h-[50rem]'}>
            <div className={'relative z-10 mt-[2rem]'}>
                <video
                    src={'/assets/portfolios/ezgif.com-gif-maker (35).mp4'}
                    autoPlay
                    muted
                    loop
                    className={'w-[15rem] mb-[2rem]'}
                />
                <h2 className={'text-white font-roboto text-[3rem] font-thin'}>
                    Team Novate <br /> Projekt strony da
                    <br /> zespotu IT z Warszawy
                </h2>
                <p className={'text-white font-roboto text-[1.2rem] mt-[1rem]'}>
                    0d roku 2015 pisze posty da Kawiarni Cafe Klaps organizuje proste
                    <br /> kampanie marketingowe. W 2018 roku narodzila sie moja pasja
                    <br /> do pisania wierszy, co przerodzito sie w pisanie tekstów.
                </p>
                <button className={'w-[14rem] mt-[2rem] h-[3rem] bg-[#082219] rounded-[2rem]'} />
            </div>
            <div ref={containerRef} className={'relative w-[40rem] mt-[5rem] '}>
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
                    <Image {...page1} />
                </div>
                <div ref={gateRef} className={'left-[120px] top-[190px] absolute'}>
                    <Image {...gate} />
                </div>
                <div ref={gate2Ref} className={'left-[190px] top-[290px] absolute'}>
                    <Image {...gate} />
                </div>
                <div ref={manRef} className={'left-0 top-[150px] absolute'}>
                    <Image {...man} />
                </div>
                <div ref={text1Ref} className={'left-[120px] top-[150px] absolute'}>
                    <Image {...text1} />
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
                <div ref={text2Ref} className={'left-[200px] top-[300px] absolute'}>
                    <Image {...text2} />
                </div>
                <div ref={handRef} className={'left-0 top-[120px] absolute'}>
                    <div
                        className={
                            'bg-darkGray-900 absolute w-[1200px] translate-x-[-300px] translate-y-[250px] h-[400px]'
                        }
                    />
                    <Image {...hand} />
                </div>

                <div ref={box3Ref} className={'left-[-20px] top-[300px] absolute'}>
                    <Image {...box3} />
                </div>
                <div ref={box2Ref} className={'left-[-40px] top-[220px] absolute'}>
                    <Image {...box2} />
                </div>
                <div ref={box1Ref} className={'left-[-20px] top-[130px] absolute'}>
                    <Image {...box1} />
                </div>
            </div>
        </div>
    );
};
//
export default Pragmile2;

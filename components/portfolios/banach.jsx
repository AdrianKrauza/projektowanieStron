import Image from 'next/image';
import city1 from '/assets/portfolios/Banach-1wszyi-planFIN.png';
import city2 from '/assets/portfolios/Banach-2gi-plan-FIN.png';
import page1 from '/assets/portfolios/Tworzenie-strony-finanse.jpg';
import page2 from '/assets/portfolios/Tworzenie-strony-konsulting.jpg';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
//
const Banach = () => {
    const containerRef = useRef();
    const city1Ref = useRef();
    const city2Ref = useRef();
    const page1Ref = useRef();
    const page2Ref = useRef();
    const phoneRef = useRef();

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
            gsap.to(phoneRef.current, {
                y: -150,
                ease,
                scrollTrigger,
            });
            gsap.to(city1Ref.current, {
                y: -100,
                ease,
                scrollTrigger,
            });
            gsap.to(city2Ref.current, {
                y: -250,
                ease,
                scrollTrigger,
            });
            gsap.to(page2Ref.current, {
                y: -150,
                ease,
                scrollTrigger,
            });
        }, 0);
    }, []);
    //
    return (
        <div className={'flex justify-center gap-[10rem] bg-[#E3E3E3] h-[70rem] pt-[20rem] '}>
            <div className={'relative z-10 mt-[2rem]'}>
                <video
                    src={'/assets/portfolios/ezgif.com-gif-maker (35).mp4'}
                    autoPlay
                    muted
                    loop
                    className={'w-[15rem] mb-[2rem]'}
                />
                <h2 className={'text-white font-roboto text-[3rem] font-thin'}>
                    Banach Outsourcing <br />
                    Przyklad strony w branzy
                    <br />
                    Konsultingu, doradztwa i fin
                    <br />
                </h2>
                <p className={'text-white font-roboto text-[1.2rem] mt-[1rem]'}>
                    0d roku 2015 pisze posty da Kawiarni Cafe Klaps organizuje proste
                    <br />
                    kampanie marketingowe. W 2018 roku narodzila sie moja pasja
                    <br />
                    do pisania wierszy, co przerodzito sie w pisanie tekstów.
                </p>
                <button className={'w-[14rem] mt-[2rem] h-[3rem] bg-[#082219] rounded-[2rem]'} />
            </div>

            <div ref={containerRef} className={'relative w-[40rem] mt-[5rem] '}>
                <div ref={city2Ref} className={'left-[-130px] top-[-100px] absolute'}>
                    <Image {...city2} layout={'fixed'} />
                </div>
                <div ref={city1Ref} className={'left-[-120px] top-[-200px] absolute '}>
                    <Image {...city1} layout={'fixed'} />
                </div>

                <div ref={page2Ref} className={'rounded-t-[30px] overflow-hidden left-0 top-[0] absolute '}>
                    <Image {...page2} />
                    <video
                        src={'/assets/portfolios/Strona-pattern1.mp4'}
                        autoPlay
                        muted
                        loop
                        className={'left-[17px] top-[410px] absolute'}
                        style={{ clipPath: 'polygon(0 0, 90% 0, 100% 90%, 0 90%)' }}
                    />
                    <video
                        src={'/assets/portfolios/Strona-pattern2.mp4'}
                        autoPlay
                        muted
                        loop
                        className={'left-[17px] top-[480px] absolute'}
                        style={{ clipPath: 'polygon(0 0, 99% 0, 100% 99%, 0 99%)' }}
                    />
                    <video
                        src={'/assets/portfolios/Strona-pattern3.mp4'}
                        autoPlay
                        muted
                        loop
                        className={'left-[25px] top-[570px] absolute'}
                        style={{ clipPath: 'polygon(0 0, 99% 0, 99% 100%, 0% 100%)' }}
                    />
                </div>
                <div ref={page1Ref} className={'rounded-t-[30px] overflow-hidden top-[200px] left-[160px] absolute '}>
                    <Image {...page1} />
                </div>
                <video
                    ref={phoneRef}
                    style={{ WebkitMaskImage: `url(/assets/portfolios/phoneMaskdesign.svg)` }}
                    src={'/assets/portfolios/Mobile-Design.mp4'}
                    autoPlay
                    muted
                    loop
                    className={'left-[570px] top-[420px] absolute'}
                />
            </div>
        </div>
    );
};
//
export default Banach;

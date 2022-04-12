import Image from 'next/image';
import city1 from '/assets/portfolios/Banach-1wszyi-planFIN (1).png';
import city2 from '/assets/portfolios/Banach-2gi-plan-FIN.jpg';
import page1 from '/assets/portfolios/Tworzenie-strony-finanse.jpg';
import page2 from '/assets/portfolios/Tworzenie-strony-konsulting.jpg';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import banach from '../../assets/portfolios/Strona-Banach-logo.jpg';
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
        <div className={'flex justify-center gap-[10rem] bg-[#E3E3E3] h-[60rem] pt-[10rem] overflow-hidden'}>
            <div className={'relative z-10 mt-[2rem]'}>
                <div className={'mb-[2rem]'}>
                    <Image priority {...banach} />
                </div>
                <h2 className={'text-[#382924] font-roboto text-[2.5rem] font-thin mb-[2rem]'}>
                    Banach Outsourcing <br />
                    Strona firmy księgowej, <br />
                    która działa jak w zegarku.
                </h2>
                <p
                    className={
                        'text-[#9c907b] border-[#9c907b] ml-[1rem] border-l-[1px] pl-[1rem] font-roboto text-[1.7rem] mt-[1rem] leading-[1.2]'
                    }
                >
                    Nasza marka prezentowała się dość nudno,
                    <br />
                    ale Owocni tchnęli w nią zupełnie nową jakość.
                    <br /> Jesteśmy bardzo zadowoleni z efektów.”
                </p>
                <p
                    className={
                        'text-[#9c907b] ml-[1rem] pl-[1rem] mt-[2rem] font-roboto text-[1rem] mt-[0.8rem] mb-[3rem]'
                    }
                >
                    Piotr Banach - Manager
                </p>
                <Link href={'/banach'} target={'_blank'} rel="noreferrer" passHref>
                    <a className={'text-[1.5rem] text-[#ab854a]'}>Zobacz realizacje</a>
                </Link>
            </div>

            <div ref={containerRef} className={'relative w-[40rem] mt-[5rem] '}>
                <div ref={city2Ref} className={'left-[-130px] top-[-100px] absolute'}>
                    <Image priority {...city2} layout={'fixed'} />
                </div>
                <div ref={city1Ref} className={'left-[-120px] top-[-200px] absolute '}>
                    <Image priority {...city1} layout={'fixed'} />
                </div>

                <div ref={page2Ref} className={'rounded-t-[30px] overflow-hidden left-0 top-[0] absolute '}>
                    <Image priority {...page2} />
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
                    <Image priority {...page1} />
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

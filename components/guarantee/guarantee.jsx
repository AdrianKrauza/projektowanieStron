import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import img3 from '/assets/guarantee/Projektowanie-UX-Makieta.jpg';
import gif from '/assets/guarantee/ezgif.com-gif-maker (17).gif';
import shadow from '/assets/guarantee/Cien.jpg';
import FAQ from './FAQ';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
const month = [
    'W styczniu',
    'W lutym',
    'W marcu',
    'W kwietniu',
    'W maju',
    'W czerwcu',
    'W lipcu',
    'W sierpniu',
    'W wrześniu',
    'W październiku',
    'W listopadzie',
    'W grudniu',
];
const getMonth = () => {
    const date = new Date();
    return date.getMonth();
};

const Guarantee = ({ setPageState }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    const heading2Ref = useRef();
    const heading3Ref = useRef();
    const conRef = useRef();
    const pulsRef = useRef();
    const openBlackRef = useRef();
    const router = useRouter();
    const [videoName, setVideoName] = useState('');
    const [videoName2, setVideoName2] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => setVideoName('/assets/gu/Projektowanie-stron-statystyki.mp4 '), 6000);
            setTimeout(() => setVideoName2('/assets/gu/Projektowanie-UX.mp4 '), 8000);
            AnimationHeadingScrub(heading2Ref, heading2Ref, -50, 200, false, true);
            AnimationHeadingScrub(heading3Ref, heading3Ref, -50, 200, false, true);
            AnimationHeadingScrub(headerRef, headerRef, -150, 100, false, true);
            gsap.to(headerRef.current, {
                y: '-5vw',
                scrollTrigger: {
                    start: `${-150}% 50%`,
                    end: `${100}% 50%`,
                    scrub: true,
                    trigger: headerRef.current,
                },
            });
            gsap.to(pulsRef.current, {
                ease: 'none',
                scale: 2,
                transformOrigin: 'top',
                scrollTrigger: {
                    start: `0 100%`,
                    end: `0 00%`,
                    scrub: true,
                    trigger: pulsRef.current,
                },
            });
        }, 0);
    }, []);
    return (
        <div ref={conRef} className={`w-screen   relative z-10 pt-[35rem] bg-lightGray `}>
            <div
                ref={pulsRef}
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 45%)' }}
                className={'left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] absolute -z-10 -mt-[3rem] z-[]'}
            />
            <h2 className={'text-center text-[15rem]  my-0 '}>GWARANCJA</h2>
            <h3 ref={headerRef} className={'text-center   text-[5.5rem] mt-[10rem] '}>
                Zwiększymy konwersję Twojej/ strony albo zwrócimy Ci/ 100% środków!
            </h3>
            <p className={'font-normal text-[1rem] m-auto block w-fit leading-[1.3] mt-[-1rem]'}>
                <b>Łatwo policzyć:</b> Jeśli przebijemy konwersję Twojej strony to też nie tracisz. <br />
                Bo każda złotówka, którą nam zapłacisz, wróci do Ciebie z dodatkowych <br />
                zamówień i sprzedaży zdobytych dzięki dużo wyższej konwersji strony.
            </p>
            <button
                className={
                    'bg-[#E7E6E8] border-[rgb(51,51,51)] border-[1px] p-[1rem] px-[3.5rem] m-auto block my-[8rem]  rounded-[3rem] text-[1.5rem]'
                }
            >
                Wyceń swój projekt
            </button>
            <div className={'flex justify-center items-end mb-[5rem]'}>
                <div className={' w-[25rem]'}>
                    <p className={' text-[3.5rem]'}>
                        Świetna
                        <br />
                        konwersja
                        <br />
                        zaczyna się
                        <br />
                        od świetnego
                        <br />
                        projektowania.
                    </p>
                    <p className={'text-white mt-[2rem] text-[2.5rem]'}>
                        To nie są szczegóły. <br /> To są fundamenty!
                    </p>
                </div>
                <video
                    className={'-mb-[50px]'}
                    style={{ clipPath: 'polygon(0 0, 99% 0, 99% 100%, 0% 100%)' }}
                    src={videoName}
                    loop
                    autoPlay
                    muted
                />
            </div>

            <div className={'m-auto w-[43rem]  '}>
                <p className={'text-[2rem]'}>
                    Nie da się ukryć, że uwielbiamy się z grafikami,
                    <br />
                    ale konwersję projektujemy zupełnie inaczej.
                    <br />
                    <br />
                    U nas na długo przed grafikiem medytują:
                    <br />
                    Copywriter, Projektant UX, oraz Marketer.
                    <br />
                    <br />
                    Badają konkurencję i zasady konkurowania.
                    <br />
                    Porządkują twoją ofertę. Piszą świetne treści.
                    <br />
                    <br />
                    Budują klikalny prototyp Twojej nowej strony, <br />
                    zorientowany na wysokie rezultaty biznesowe. <br />
                    <i> - Wszystko co dobre zaczyna się od makiety UX!</i>
                </p>
            </div>
            <p className={'text-center mt-[6rem] text-[3.5rem]'}>User Experience Design</p>
            <a
                href={'https://copywriting.pl/makiety'}
                target={'_blank'}
                className={'text-center mt-[1rem] text-[1rem] text-white underline block mb-[2rem]'}
                rel="noreferrer"
            >
                ( Kompletny proces zobaczysz tutaj )
            </a>
            <div className={'flex justify-center'}>
                <Image priority quality={100} {...img3} />
                <div className={'absolute w-[670px] translate-y-[45px] translate-x-[-5px] -mb-[4rem]'}>
                    <video
                        style={{
                            WebkitMaskImage: `url(assets/header/Maska-Laptop-MOBILE.svg)`,
                        }}
                        src={videoName2}
                        className={' w-[670px] '}
                        muted
                        loop
                        autoPlay
                    />
                </div>
            </div>
            <div />
            <div className={'flex align-center justify-center mt-[-86px] ml-[100px] z-10 relative'}>
                <style jsx>{`
                    .shimmer {
                        color: rgba(255, 255, 255, 0.1);
                        background: -webkit-gradient(
                            linear,
                            left top,
                            right top,
                            from(#d2952a),
                            to(#d2952a),
                            color-stop(0.5, #fff)
                        );
                        background: -moz-gradient(
                            linear,
                            left top,
                            right top,
                            from(#d2952a),
                            to(#d2952a),
                            color-stop(0.5, #fff)
                        );
                        background: gradient(
                            linear,
                            left top,
                            right top,
                            from(#d2952a),
                            to(#d2952a),
                            color-stop(0.01, #fff)
                        );

                        background-size: 120px 100%;
                        -webkit-background-clip: text;
                        -moz-background-clip: text;
                        background-clip: text;
                        -webkit-animation-name: shimmer;
                        -moz-animation-name: shimmer;
                        animation-name: shimmer;
                        animation-duration: 6s;
                        -webkit-animation-iteration-count: infinite;
                        -moz-animation-iteration-count: infinite;
                        animation-iteration-count: infinite;
                        background-repeat: no-repeat;
                        background-position: 0 0;
                        background-color: #d2952a;
                        padding: 2px 0;
                        margin-top: 86px;
                    }
                    @keyframes shimmer {
                        0% {
                            background-position: 0%;
                        }
                        10% {
                            background-position: 120%;
                        }
                        100% {
                            background-position: 120%;
                        }
                    }
                `}</style>
                {/*text-[#D2952A]*/}
                <div>
                    <p className={'text-[55px] font-black  mt-[90px] shimmer '}>Projekt UX - GRATIS! *</p>
                    <p className={'text-[21px] mt-[10px] font-normal'}>
                        * {month[getMonth()]} opracowujemy projekt makiety UX w cenie strony.
                    </p>
                </div>
                <div
                    className={'flex flex-col justify-center items-center mt-[-5px] ml-[-30px] -z-10 '}
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className={'ml-[30px]'}>
                        <Image {...gif} />
                    </div>

                    <div className={'mt-[-45px]  -z-10 relative'}>
                        <Image {...shadow} />
                    </div>
                </div>
            </div>
            <p className={'text-center mt-[5rem] text-[3rem]'}>A gdy idzie o kwestie techniczne to:</p>
            <h2 className={'text-center my-[5rem] mt-[1rem] text-[10rem] tracking-[-0.6rem]'} ref={heading2Ref}>
                Wszystkie/ odpowiedzi/ brzmią - Tak!
            </h2>
            <FAQ />
        </div>
    );
};

export default Guarantee;

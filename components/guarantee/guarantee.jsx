import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import logoWebp from '/assets/pragmile/TeamNovate-WebP.webp';
import logoGif from '/assets/pragmile/TeamNovate-GF.gif';
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
    const month = date.getMonth();
    return month;
};

const Guarantee = ({ setPageState }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    const heading2Ref = useRef();
    const heading3Ref = useRef();
    const conRef = useRef();
    const openBlackRef = useRef();
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
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
                        start: '0 100%',
                        end: '50% 100%',
                        scrub: true,
                    },
                },
            );
            ScrollTrigger.create({
                trigger: conRef.current,
                start: 'top top',
                end: 'bottom 50%',
            });
            AnimationHeadingScrub(heading2Ref, heading2Ref, -50, 200, false, true);
            AnimationHeadingScrub(heading3Ref, heading3Ref, -50, 200, false, true);
            AnimationHeadingScrub(headerRef, headerRef, -50, 200, false, true);
        }, 0);
    }, []);
    return (
        <div ref={conRef} className={`w-screen   relative z-10 mt-[32rem] bg-lightGray `}>
            <h2 className={'text-center text-[16rem]  my-0 '}>GWARANCJA</h2>
            <h3 ref={headerRef} className={'text-center   text-[5.5rem] mt-[10rem] '}>
                Zwiększymy konwersję Twojej/ strony albo zwrócimy Ci/ 100% środków!
            </h3>
            <p className={'text-2xl mt-10 text-darkGray-900 text-center mb-[5rem]'}>+ Szczegóły w sekcji FAQ</p>
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
                    src="/assets/gu/Projektowanie-stron-statystyki.mp4"
                    loop
                    autoPlay
                    muted
                />
            </div>

            <div className={'m-auto w-[41rem]  '}>
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
                    Budują klikalny prototyp Twojej strony,
                    <br />
                    zorientowany na wysokie rezultaty:
                </p>
            </div>
            <p className={'text-center mt-[3rem] text-[2rem]'}>
                Wszystko zaczyna się od <br /> makiety UX <i>User Experience.</i>
            </p>
            <a
                href={'https://copywriting.pl/makiety'}
                className={'text-center mt-[1rem] text-[1rem] text-white underline block'}
            >
                ( Kompletny proces zobaczysz tutaj )
            </a>
            <div className={'flex justify-center'}>
                <Image priority quality={100} {...img3} />
                <video
                    style={{
                        WebkitMaskImage: `url(assets/header/Maska-Laptop-MOBILE.svg)`,
                    }}
                    src="/assets/gu/Projektowanie-UX.mp4 "
                    className={'absolute w-[670px] translate-y-[45px] translate-x-[-5px] -mb-[4rem]'}
                    muted
                    loop
                    autoPlay
                />
            </div>
            <div />
            <div className={'flex align-center justify-center mt-[-86px] ml-[-100px]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <Image {...gif} />
                    <div className={'mt-[-40px] -z-10 relative'}>
                        <Image {...shadow} />
                    </div>
                </div>

                <div>
                    <p className={'text-[55px] font-black text-[#D2952A] mt-[90px]'}>Projekt UX - GRATIS *</p>
                    <p className={'text-[21px] mt-[10px] font-normal'}>
                        * {month[getMonth()]} opracowujemy projekt makiety UX w cenie strony.
                    </p>
                </div>
            </div>
            <p className={'text-center mt-[5rem] text-[3rem]'}>A gdy idzie o kwestie techniczne to:</p>
            <h2 className={'text-center my-[5rem] mt-[1rem] text-[10rem] tracking-[-0.6rem]'} ref={heading2Ref}>
                Wszystkie/ odpowiedzi/ brzmią - Tak!
            </h2>
            <FAQ />
            <h2 className={'text-center my-[10rem] text-[10rem] '} ref={heading3Ref}>
                Przykłady/ realizacji
            </h2>
            <div className={'h-[30rem] -z-10 relative overflow-hidden'}>
                <div ref={openBlackRef} className={'bg-darkGray-900 h-[100vw] w-screen'}>
                    <div
                        className={
                            '  mt-[5rem] flex flex-col justify-center h-[400px] bg-red  absolute items-center w-full'
                        }
                    >
                        <div className={'mb-[4rem]'}>
                            <picture>
                                <source srcSet={logoWebp.src} type="image/webp" />
                                <img src={logoGif.src} className={'shadow-[0_0_60px_50px_#141414] '} />
                            </picture>
                        </div>
                        <p className={'text-center text-[#dfdfdf]'}>
                            Team Novate - Przykład strony dla <br />
                            innowacyjnego zespołu programistów
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guarantee;

import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import logoWebp from '/assets/pragmile/TeamNovate-WebP.webp';
import logoGif from '/assets/pragmile/TeamNovate-GF.gif';
import img3 from '/assets/guarantee/Projektowanie-UX-Makieta.jpg';
import FAQ from './FAQ';
import Image from 'Next/Image';
gsap.registerPlugin(ScrollTrigger);
const Guarantee = ({ setPageState }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    const heading2Ref = useRef();
    const heading3Ref = useRef();
    const conRef = useRef();
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
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
        <div ref={conRef} className={`w-screen   relative z-10 `}>
            <h2 className={'text-center text-[16rem]  my-0 '}>GWARANCJA</h2>
            <h3 ref={headerRef} className={'text-center   text-[5.5rem] mt-[10rem] '}>
                Zwiększymy konwersję Twojej/ strony, albo zwrócimy Ci/ 100% środków!
            </h3>
            <p className={'text-2xl mt-10 text-darkGray-900 text-center mb-[15rem]'}>+ Szczegóły w sekcji FAQ</p>
            <div className={'my-[10rem] m-auto w-[30rem]'}>
                <p className={' text-[3rem]'}>
                    Lepsza <br />
                    konwersja <br />
                    zaczyna się <br /> od lepszego
                    <br /> projektowania.
                </p>
                <p className={'text-white mt-[2rem] text-[2rem]'}>
                    To nie są szczegóły. <br /> To są fundamenty!
                </p>
            </div>
            <div className={'m-auto w-[50rem]  '}>
                <p className={'text-[2rem]'}>
                    Nie da się ukryć, że uwielbiamy się z grafikami,
                    <br />
                    ale konwersję projektujemy zupełnie inaczej.
                    <br />
                    <br />
                    U nas na długo przed grafikiem medytują:
                    <br />
                    Marketer, Copywriter oraz Projektant UX
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
            <p className={'text-center mt-[3rem] text-[2rem]'}>Makietę “User Expirience”</p>
            <p className={'text-center mt-[1rem] text-[1rem] text-white underline'}>Makietę “User Expirience”</p>
            <div className={'flex justify-center'}>
                <Image quality={100} {...img3} />
                <video
                    style={{
                        WebkitMaskBoxImage: `url(assets/header/Maska-Laptop-MOBILE.svg)`,
                    }}
                    src="/assets/gu/Projektowanie-UX.mp4 "
                    className={'absolute w-[670px] translate-y-[45px] translate-x-[-5px]'}
                    muted
                    loop
                    autoPlay
                />
            </div>
            <p className={'text-center mt-[5rem] text-[3rem]'}>A gdy idzie o kwestie techniczne to:</p>
            <h2 className={'text-center my-[5rem] mt-[1rem] text-[10rem] tracking-[-0.6rem]'} ref={heading2Ref}>
                Wszystkie/ odpowiedzi/ brzmią - Tak!
            </h2>
            <FAQ />
            <h2 className={'text-center my-[10rem] text-[10rem]'} ref={heading3Ref}>
                Prayklady/ realizacji
            </h2>
            <div
                className={
                    'presentation  bg-darkGray-900 flex flex-col justify-center h-[400px] bg-red  absolute items-center w-full'
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
    );
};

export default Guarantee;

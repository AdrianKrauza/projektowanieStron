import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import logoWebp from '/assets/pragmile/TeamNovate-WebP.webp';
import logoGif from '/assets/pragmile/TeamNovate-GF.gif';
gsap.registerPlugin(ScrollTrigger);
const Guarantee = ({ setPageState, disable }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    const conRef = useRef();
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: conRef.current,
                start: 'top top',
                end: 'bottom 50%',
                markers: true,

                onLeave: () => {
                    // router.push('/test');
                    // setPageState(1);
                },
            });
            !disable && AnimationHeadingScrub(headerRef, headerRef, -50, 200, false, true);
        }, 0);
    }, []);
    return (
        <div ref={conRef} className={`w-screen bg-darkGray-900   ${!disable && 'mt-[65rem]'} relative z-10 `}>
            {!disable && (
                <>
                    <h2
                        className={
                            'text-center text-[16rem] -translate-y-full text-darkGray-900 my-0 leading-[0.88] -mt-[25rem] -mb-[5rem]'
                        }
                    >
                        GWARANCJA
                    </h2>
                    <h3 ref={headerRef} className={'text-center text-lightGray text-[5.5rem] '}>
                        Zwiększymy konwersję Twojej/ strony, albo zwrócimy Ci/ 100% środków!
                    </h3>
                    <p className={'text-2xl mt-10 text-[#dfdfdf] text-center mb-[15rem]'}>+ Szczegóły w sekcji FAQ</p>
                </>
            )}

            <div className={'border-[#dfdfdf] border-[1px] w-[50rem] m-auto my-12'} />

            <p className={'text-[#dfdfdf] text-center text-[4.5rem]'}>Przykład realizacji:</p>
            <div className={'border-[#dfdfdf] border-[1px] w-[50rem] m-auto mt-12  mb-[10rem] '} />
            <div className={'presentation  flex justify-center h-[400px] bg-red  absolute items-center w-full'}>
                <p className={'text-right text-[#dfdfdf]'}>
                    Innowacyjny software house. <br /> Zespół programistów online.
                </p>
                <div className={'h-[100px] bg-[#dfdfdf] w-[1px] mx-10 '} />
                <div>
                    <picture>
                        <source srcSet={logoWebp.src} type="image/webp" />
                        <img src={logoGif.src} />
                    </picture>
                    {/*<video src="/assets/pragmile/Logo-TeamNovate.mp4" autoPlay loop muted className={'w-96'} />*/}
                </div>
            </div>
        </div>
    );
};

export default Guarantee;

import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
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
        <div ref={conRef} className={`w-screen bg-darkGray-900   ${!disable && 'mt-[60rem]'} relative z-10 `}>
            {!disable && (
                <>
                    <h2
                        className={
                            'text-center text-[16rem] -translate-y-full text-darkGray-900 my-0 leading-[0.8] -mt-[25rem] '
                        }
                    >
                        GWARANCJA
                    </h2>
                    <h3 ref={headerRef} className={'text-center text-lightGray text-[5.5rem] '}>
                        Zwiększymy konwersję Twojej/ strony, albo zwrócimy Ci/ 100% środków!
                    </h3>
                    <p className={'text-2xl mt-10 text-white text-center mb-[15rem]'}>+ Szczegóły w sekcji FAQ</p>
                </>
            )}

            <div className={'border-white border-[1px] w-[50rem] m-auto my-12'} />

            <p className={'text-white text-center text-[4.5rem]'}>Przykłady realizacji:</p>
            <div className={'border-white border-[1px] w-[50rem] m-auto mt-12'} />
        </div>
    );
};

export default Guarantee;

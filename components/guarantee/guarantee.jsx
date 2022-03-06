import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';

const Guarantee = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headerRef, headerRef, -50, 200, false, true);
        }, 0);
    }, []);
    return (
        <div className={'w-screen bg-darkGray-900   mt-[60rem] relative z-10 '}>
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
            <div className={'border-white border-[1px] w-[50rem] m-auto my-12'} />

            <p className={'text-white text-center text-[4.5rem]'}>Przykłady realizacji:</p>
            <div className={'border-white border-[1px] w-[50rem] m-auto mt-12'} />
            <div className={'presentation  flex justify-center h-[400px] bg-red  absolute items-center w-full'}>
                <p className={'text-right text-white'}>
                    Innowacyjny software house. <br /> Zespół programistów online.
                </p>
                <div className={'h-[100px] bg-white w-[1px] mx-10'} />
                <div>
                    <video src="/assets/pragmile/Logo-TeamNovate.mp4" autoPlay loop muted className={'w-96'} />
                </div>
            </div>
        </div>
    );
};

export default Guarantee;

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useTextAnimations from '../../hooks/useTextAnimations';
import logo from '/assets/portfolios/Zrzut ekranu 2022-04-9 o 20.59.52.png';
gsap.registerPlugin(ScrollTrigger);
import Pragmile from './test';
import Banach from './banach';
import Oko from './oko';
const Portfolios = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const conRef = useRef();
    const openBlackRef = useRef();
    const heading3Ref = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(heading3Ref, heading3Ref, -50, 200, false, true);
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
        }, 0);
    }, []);
    return (
        <div className={'bg-lightGray relative'}>
            <h2 className={'text-center py-[10rem] text-[10rem] '} ref={heading3Ref}>
                Przykłady/ realizacji
            </h2>
            <div className={'h-[40rem] -z-10 relative overflow-hidden'}>
                <div ref={openBlackRef} className={'bg-darkGray-900 h-[100vw] w-screen'}>
                    <div className="flex justify-center pt-[10rem]">
                        <Image {...logo} />
                    </div>
                </div>
            </div>
            <Pragmile />
            <Banach />
            <Oko />
            <div className={'h-[100vh]'} />
        </div>
    );
};

export default Portfolios;

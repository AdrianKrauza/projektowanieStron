import useTextAnimations from '/hooks/useTextAnimations';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import boxLottie from '/assets/if/lf20_j7bkleac.json';
import Image from 'next/image';
import boxGif from '/assets/if/ezgif.com-gif-maker (13).gif';
import { useEffect, useRef } from 'react';
const vh = (coef) => window.innerHeight * (coef / 100);
const IfBox = ({ el, index, containerRef, start, second }) => {
    console.log(boxGif);
    const headerRef = useRef();
    const boxRef = useRef();
    const lottieRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        if (second) return;
        setTimeout(() => {
            gsap.fromTo(
                boxRef.current,
                { opacity: 0.1 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `${vh((150 + 100 * index) * 0.4) + start} 0%`,
                        end: `${vh((220 + 100 * index) * 0.4) + start} 0%`,
                        scrub: true,
                    },
                },
            );
            gsap.fromTo(
                lottieRef.current,
                { opacity: 0 },
                {
                    opacity: 0.01,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `${vh((150 + 100 * index) * 0.4) + start} 0%`,
                        end: `${vh((220 + 100 * index) * 0.4) + start} 0%`,
                        scrub: true,
                    },
                },
            );
            AnimationHeadingScrub(
                headerRef,
                containerRef,
                `${vh((160 + 100 * index) * 0.4) + start} 0%`,
                `${vh((230 + 100 * index) * 0.4) + start} 0%`,
            );
        }, 0);
    }, []);
    return (
        <div ref={boxRef} className={`relative ${!second && 'opacity-30'}`}>
            <div
                ref={lottieRef}
                className={` ${
                    !second && '-z-10'
                }  w-[60rem] h-[70rem] rotate-90 -translate-x-1/2 left-1/2 -top-[25rem] absolute  opacity-[0.01]`}
            >
                <Image priority src={boxGif} layout={'fill'} />
            </div>

            <h3 ref={headerRef} className={'text-center font-playfair text-[#dfdfdf] text-[5rem] mb-[2vw]'}>
                Jeśli:
            </h3>
            <p
                className={'text-[1.6rem] text-[#CBCBCB] leading-[1.1]'}
                dangerouslySetInnerHTML={{
                    __html: `<b class="text-[#dfdfdf] font-black">${el[0]}</b><br/><br/>${el[0]}`,
                }}
            />
        </div>
    );
};

export default IfBox;

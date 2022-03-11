import useTextAnimations from '/hooks/useTextAnimations';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import boxLottie from '/assets/if/lf20_j7bkleac.json';
import { useEffect, useRef } from 'react';
const vh = (coef) => window.innerHeight * (coef / 100);
const IfBox = ({ el, index, containerRef, start }) => {
    const headerRef = useRef();
    const boxRef = useRef();
    const lottieRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(
                boxRef.current,
                { opacity: 0.3 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `${vh(index ? 130 + 100 * index : 0) + start} 0%`,
                        end: `${vh(200 + 100 * index) + start} 0%`,
                        scrub: true,
                    },
                },
            );
            gsap.fromTo(
                lottieRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `${vh(index ? 130 + 100 * index : 0) + start} 0%`,
                        end: `${vh(200 + 100 * index) + start} 0%`,
                        scrub: true,
                    },
                },
            );
            AnimationHeadingScrub(
                headerRef,
                containerRef,
                `${vh(140 + 100 * index) + start} 0%`,
                `${vh(210 + 100 * index) + start} 0%`,
            );
        }, 0);
    }, []);
    return (
        <div ref={boxRef} className={'relative opacity-30'}>
            <div ref={lottieRef} className={'relative -z-10'}>
                <Lottie
                    animationData={boxLottie}
                    className={` w-[31rem] h-[29rem] rotate-90 -translate-x-1/2 left-1/2 -top-[7rem] absolute -z-10`}
                    loop={false}
                    rendererSettings={{
                        preserveAspectRatio: 'none',
                    }}
                />
            </div>

            <h3 ref={headerRef} className={'text-center font-playfair text-white text-[4rem] mb-[2vw]'}>
                Jeśli:
            </h3>
            <p
                className={'text-[1.2rem] text-[#CBCBCB]'}
                dangerouslySetInnerHTML={{
                    __html: `<b class="text-white font-black">${el[0]}</b><br/><br/>${el[0]}`,
                }}
            />
        </div>
    );
};

export default IfBox;

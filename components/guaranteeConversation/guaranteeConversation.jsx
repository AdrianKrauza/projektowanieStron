import gsap from 'gsap';
import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef, useState } from 'react';

const GuaranteeConversation = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    const pulsRef = useRef();
    useEffect(() => {
        setTimeout(() => {
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
        <div>
            <div
                ref={pulsRef}
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 45%)' }}
                className={'left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] absolute -z-10 -mt-[3rem] z-[]'}
            />
            <h2 className={'text-center text-[15rem]  my-0 '}>GWARANCJA</h2>
            <h3 ref={headerRef} className={'text-center   text-[5.5rem] mt-[10rem] '}>
                Zwiększymy konwersję Twojej/ strony albo zwrócimy Ci/ 100% środków!
            </h3>
        </div>
    );
};

export default GuaranteeConversation;

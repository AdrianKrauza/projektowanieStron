import useTextAnimations from '/hooks/useTextAnimations';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import boxLottie from '/assets/if/lf20_j7bkleac.json';
import Image from 'next/image';
import boxGif from '/assets/if/ezgif.com-gif-maker (13).gif';
import { useEffect, useRef } from 'react';
const vh = (coef) => window.innerHeight * (coef / 100);
const IfBox = ({ el, index, containerRef, start, second }) => {
    const headerRef = useRef();
    const boxRef = useRef();
    const textRef = useRef();
    const lottieRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(
                textRef.current.querySelectorAll('*'),
                {
                    opacity: 0.1,
                },
                {
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: 'body',
                        start: `0 ${-90 - index * 30}%`,
                        end: `0 ${-110 - index * 30}%`,
                        scrub: true,
                    },
                },
            );

            gsap.fromTo(
                boxRef.current,
                { y: '100vh' },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: 'body',
                        start: `0 ${-30}%`,
                        end: `0 ${-130}%`,
                        scrub: true,
                    },
                },
            );
        }, 0);
    }, []);
    return (
        <div ref={boxRef} className={`relative `}>
            <p ref={textRef} className={'text-[5.1rem] text-[#CBCBCB] leading-[1.1]'}>
                {el[0].split('/').map((text) => (
                    <b key={text} className={'inline font-black'}>
                        {text} <br />
                    </b>
                ))}
                <br />

                {el[1].split('/').map((text) => (
                    <span key={text} className={'inline'}>
                        {text} <br />
                    </span>
                ))}
            </p>
        </div>
    );
};

export default IfBox;

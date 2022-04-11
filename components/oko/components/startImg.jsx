import Image from 'next/image';
import startImg from '/assets/oko/oko-background.jpg';
import szejp from '/assets/oko/Szejp.png';
import { useEffect, useRef, useState } from 'react';
import Arrow from '../../arrow/arrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const StartImg = ({ gradient1State }) => {
    const ArrowRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            gsap.to(ArrowRef.current, {
                y: '5vw',
                scrollTrigger: {
                    start: `0 100%`,
                    end: `0% 50%`,

                    scrub: true,
                    trigger: ArrowRef.current,
                },
            });
        }, 0);
    }, []);
    return (
        <>
            <div
                className={'startImg3  w-screen -translate-x-1/2 left-1/2 overflow-hidden'}
                style={{ transform: 'translate(-50%,-25vw)   ', bottom: 'auto' }}
            >
                <Image priority {...startImg} layout={'responsive'} />
                <div
                    style={{
                        background: `  radial-gradient(circle, rgba(11,5,44,0) ${-gradient1State}%, #06051c ${
                            100 - gradient1State
                        }%)`,
                    }}
                    className={'absolute w-screen h-[100%]  top-[0rem]'}
                />
                <div ref={ArrowRef}>
                    <Arrow color={'#9e94bb'} top1={'calc( 25vw + 30vh)'} top2={'calc( 25vw + 50vh)'} />
                </div>
            </div>
            {/*<div className={'szejp '} style={{ left: 'calc((-50vw + (1350px / 2))' }}>*/}
            {/*    <Image priority  {...szejp} />*/}
            {/*</div>*/}
            <div className={'szejp2 rotate-180'} style={{ right: 'calc((-50vw + (1350px / 2))' }}>
                <Image priority {...szejp} />
            </div>
        </>
    );
};

export default StartImg;

import { useEffect, useRef } from 'react';

import gsap, { Back } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Sphere = ({ index, bookSectionRef }) => {
    const sphereRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            gsap.to(sphereRef.current, {
                // delay: index * 5,
                ease: 'none',
                rotate: 360,
                z: -14,
                repeat: -1,
                duration: 6 + index,
            });
            let pos = {};
            if (index === 0) {
                pos.x = '100vw';
                pos.y = '100vh';
            } else if (index === 1) {
                pos.x = '100vw';
                pos.y = '-100vh';
            } else if (index === 2) {
                pos.x = '-100vw';
                pos.y = '100vh';
            }
            gsap.fromTo(
                sphereRef.current.querySelector('div'),
                {
                    ...pos,
                    opacity: 0,
                    scale: 0.5,
                },
                {
                    y: index * 20,
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    ease: Back.easeOut.config(1.4 + index * 0.2),
                    duration: 0.7 + 0.3 * index,
                    delay: 1,

                    scrollTrigger: {
                        trigger: bookSectionRef.current,
                        start: '0% 0%',
                        end: '100% 0%',
                        toggleActions: 'play  reverse play reverse ',
                        markers: true,
                    },
                },
            );
        }, 0);
    }, []);
    return (
        <div ref={sphereRef} className={'w-[35rem] h-[35rem] absolute opacity-[0.5]'}>
            <div
                className={`bg-white w-full h-full  absolute rounded-full blur-md translate-x-[${
                    index * 50
                }rem] translate-y-[${index * 3}rem]`}
            />
        </div>
    );
};
const WhiteSpheres = ({ bookSectionRef }) => {
    const spheresRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: bookSectionRef.current,
                pin: spheresRef.current,
                start: '0% 10%',
                end: '105% 50%',
            });

            bookSectionRef.current.querySelectorAll('.space').forEach((el, index) => {
                if (!index) {
                    gsap.fromTo(
                        spheresRef.current,
                        {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            scrollTrigger: {
                                scrub: true,
                                trigger: el,
                                start: '-10% 100%',
                            },
                        },
                    );
                    return;
                }
            });
        }, 0);
    }, []);
    return (
        <div ref={spheresRef} className={'pointer-events-none absolute left-28 m:hidden'}>
            <Sphere index={0} bookSectionRef={bookSectionRef} />
            <Sphere index={1} bookSectionRef={bookSectionRef} />
            <Sphere index={2} bookSectionRef={bookSectionRef} />
        </div>
    );
};

export default WhiteSpheres;

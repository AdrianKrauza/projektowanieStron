import { useEffect, useRef } from 'react';

import gsap, { Back } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Sphere = ({ index, bookSectionRef }) => {
    const sphereRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            // gsap.to(sphereRef.current, {
            //     delay: index * 5,
            //     rotate: 360,
            //     z: -14,
            //     repeat: -1,
            //     duration: 3,
            // });
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
                    y: 0,
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
        <div ref={sphereRef} className={'w-[35rem] h-[35rem] absolute'}>
            <div
                className={`bg-white w-full h-full  absolute rounded-full blur-md translate-x-[${
                    index * 6
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
                start: '0% 16%',
                end: '105% 50%',
            });
            // return;
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
                                // start: '100% 100%',
                            },
                        },
                    );
                    return;
                }
                gsap.fromTo(
                    spheresRef.current,
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                        ease: 'linear',
                        scrollTrigger: {
                            trigger: el,
                            scrub: true,
                            start: '120% center',
                            end: '150% center',
                        },
                    },
                );
                gsap.fromTo(
                    spheresRef.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        ease: 'linear',
                        scrollTrigger: {
                            trigger: el,
                            scrub: true,
                            start: '220% center',
                            end: '280% center',
                        },
                    },
                );
            });
        }, 0);
    }, []);
    return (
        <div ref={spheresRef} className={'pointer-events-none absolute left-24'}>
            <Sphere index={0} bookSectionRef={bookSectionRef} />
            <Sphere index={1} bookSectionRef={bookSectionRef} />
            <Sphere index={2} bookSectionRef={bookSectionRef} />
        </div>
    );
};

export default WhiteSpheres;

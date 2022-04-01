import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useTextAnimations from '../../hooks/useTextAnimations';
import snot from '/assets/cards3/snot.json';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
import Lottie from 'lottie-react';
import isSlowNetwork from '../../helpers/isSlovNetwork';
const vh = (coef) => window.innerHeight * (coef / 100);
const Card = ({ title, paragraph, video, mask, index, mobileRight, image }) => {
    const cardRef = useRef();
    const titleRef = useRef();
    const snotRef = useRef();
    const paragraphRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            // snotRef.current.setSpeed(0.5);
            ScrollTrigger.create({
                trigger: cardRef.current,
                start: `${index * 45}% 100%`,
                // onEnter: () => snotRef.current.playSegments([0, 12], true),
            });

            ScrollTrigger.matchMedia({
                '(min-width: 1200px)': () => {
                    if (index === 0) {
                        AnimationHeadingScrub(
                            titleRef,
                            'body',
                            `${vh((index + 1) * 5)} 0%`,
                            `${vh((index + 2) * 25)} 0%`,
                        );
                    } else if (index === 1) {
                        AnimationHeadingScrub(
                            titleRef,
                            'body',
                            `${vh((index + 1) * 20)} 0%`,
                            `${vh((index + 2) * 35)} 0%`,
                        );
                    } else {
                        AnimationHeadingScrub(
                            titleRef,
                            'body',
                            `${vh((index + 1) * 25)} 0%`,
                            `${vh((index + 2) * 35)} 0%`,
                        );
                    }
                    gsap.to(cardRef.current, {
                        background: 'linear-gradient( rgba(231,230,232,1) 30%, rgba(231,230,232,1) 61%)',
                        duration: 0.5,
                    });
                    gsap.to(cardRef.current, {
                        scrollTrigger: {
                            trigger: 'body',
                            start: `${vh((2 + 1) * 30)}px 0%`,
                            end: `${vh((2 + 1) * 30)}px 0%`,
                            onLeave: () =>
                                gsap.to(cardRef.current, {
                                    background: 'linear-gradient( #e4e2e4  30%, rgba(255,255,255,1) 61%)',
                                    duration: 0.5,
                                }),
                            onEnterBack: () =>
                                gsap.to(cardRef.current, {
                                    background: 'linear-gradient( rgba(231,230,232,1) 30%, rgba(231,230,232,1) 61%)',
                                    duration: 0.5,
                                }),
                        },
                    });
                    gsap.fromTo(
                        cardRef.current,
                        {
                            y: '100vh',
                        },
                        {
                            y: '15vh',
                            scrollTrigger: {
                                start: `${vh(index * 20)}px 0%`,
                                end: `${vh((index + 1) * 20 + 20)}px 0%`,
                                trigger: 'body',
                                scrub: true,
                            },
                        },
                    );
                },
                '(max-width: 1200px)': () => {
                    gsap.fromTo(
                        [paragraphRef.current, titleRef.current],
                        {
                            color: 'white',
                        },
                        {
                            color: '#151515',
                            scrollTrigger: {
                                start: `${vh(30)}px 0%`,
                                end: `${vh(45)}px 0%`,
                                trigger: 'body',
                                scrub: true,
                            },
                        },
                    );
                    gsap.fromTo(
                        cardRef.current,
                        {
                            y: `${100 + 40 * index}vh`,
                        },
                        {
                            y: '15vh',
                            scrollTrigger: {
                                start: `${vh(0)}px 0%`,
                                end: `${vh(40)}px 0%`,
                                trigger: 'body',
                                scrub: true,
                            },
                        },
                    );
                },
            });

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: 'body',
                    start: '0% 0%',
                    end: '0% -150%',
                    scrub: true,
                },
            });
            ScrollTrigger.matchMedia({
                '(min-width: 1200px)': () => {
                    tl.from('#header', {
                        opacity: 1,
                        scale: 1,
                        webkitFilter: 'blur(0px)',
                        rotate: 0,
                        duration: 0,
                        y: '0vw',
                    })
                        .to('#header', {
                            webkitFilter: 'blur(4px)',
                            scale: 0.9,
                            y: '-10vw',
                            duration: 3,
                            ease: 'sine.out',
                        })
                        .to('#header', {
                            duration: 10,
                            y: '20vw',
                            opacity: 0,
                            rotate: 10,
                            scale: 0.45,
                            webkitFilter: 'blur(10px)',
                            ease: 'linear',
                        });
                },
            });
        }, 0);
    }, []);
    console.log(isSlowNetwork(), 'ds');
    return (
        <div
            ref={cardRef}
            className={
                'pointer-events-none bg-lightGray rounded-3xl  w-[24rem] m:w-[90rem] m:h-[40rem] m:ml-[5rem] mx-12 p-[1.8rem] relative mt-44 h-96 m:mt-[5rem] translate-y-[100vh] will-change-transform m:bg-transparent'
            }
        >
            {!isSlowNetwork() ? (
                <video
                    autoPlay
                    muted
                    loop
                    src={video}
                    className={`absolute left-1/2 max-w-none w-[28rem] -translate-y-3/4 -translate-x-1/2 m:w-[50rem] m:translate-x-0 m:translate-y-[0rem] ${
                        mobileRight && 'm:left-[0rem]'
                    }`}
                    style={{ WebkitMaskBoxImage: `url(${mask})` }}
                />
            ) : (
                <div
                    style={{ WebkitMaskBoxImage: `url(${mask})` }}
                    className={`absolute left-1/2 max-w-none w-[27rem] -translate-y-3/4 -translate-x-1/2 m:w-[50rem] m:translate-x-0 m:translate-y-[0rem] ${
                        mobileRight && 'm:left-[0rem]'
                    }`}
                >
                    <Image {...image} />
                </div>
            )}
            <h3
                ref={titleRef}
                className={`font-playfair text-[3.4rem] m:text-[5rem] mt-24 ${mobileRight && 'm:ml-[50rem]'}`}
            >
                {title}
            </h3>
            <p
                ref={paragraphRef}
                className={`mt-9 font-roboto text-[2.2rem] m:text-[4rem] m:leading-[1] ${
                    mobileRight && 'm:ml-[50rem]'
                }`}
            >
                {paragraph}
            </p>
            <div
                animationData={snot}
                lottieRef={snotRef}
                className={'-translate-x-1/2 left-1/2 absolute bottom-32 translate-y-full w-[25rem] -z-10 m:hidden'}
            />
        </div>
    );
};

export default Card;

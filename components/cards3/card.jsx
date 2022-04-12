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
            ScrollTrigger.matchMedia({
                '(min-width: 1200px)': () => {
                    AnimationHeadingScrub(titleRef, 'body', `0 ${-190 - index * 10}%`, `0 ${-220 - index * 40}%`);

                    gsap.fromTo(
                        cardRef.current,
                        {
                            y: '100vh',
                        },
                        {
                            y: '-100vh',
                            scrollTrigger: {
                                start: `0 ${-140}%`,
                                end: `0 ${-430}%`,
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
        }, 0);
    }, []);
    return (
        <div
            ref={cardRef}
            className={
                'bg-white rounded-3xl  w-[24rem] m:w-[90rem] m:h-[40rem] m:ml-[5rem] mx-[1.8rem] p-[1.8rem] relative mt-44 h-[30rem] m:mt-[5rem] translate-y-[100vh] will-change-transform m:bg-transparent'
            }
        >
            <p className={'text-center font-playfair text-[1.4rem] font-normal'}>Premium</p>
            <h3
                ref={titleRef}
                className={`text-center font-playfair text-[3.4rem] m:text-[5rem] mt-[1rem] ${
                    mobileRight && 'm:ml-[50rem]'
                }`}
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
            {!isSlowNetwork() ? (
                <video
                    autoPlay
                    muted
                    loop
                    src={video}
                    className={` absolute max-w-none w-[28rem] bottom-[-5rem] left-1/2 -translate-x-1/2 m:w-[50rem] m:translate-x-0 m:translate-y-[0rem] ${
                        mobileRight && 'm:left-[0rem]'
                    }`}
                    style={{ WebkitMaskImage: `url(${mask})` }}
                />
            ) : (
                <div
                    style={{ WebkitMaskImage: `url(${mask})` }}
                    className={`absolute left-1/2 max-w-none w-[27rem] -translate-y-3/4 -translate-x-1/2 m:w-[50rem] m:translate-x-0 m:translate-y-[0rem] ${
                        mobileRight && 'm:left-[0rem]'
                    }`}
                >
                    <Image {...image} />
                </div>
            )}
            {/*<div*/}
            {/*    animationData={snot}*/}
            {/*    lottieRef={snotRef}*/}
            {/*    className={'-translate-x-1/2 left-1/2 absolute bottom-32 translate-y-full w-[25rem] -z-10 m:hidden'}*/}
            {/*/>*/}
        </div>
    );
};

export default Card;

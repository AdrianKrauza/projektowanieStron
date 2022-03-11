import { useEffect, useRef } from 'react';
import gsap from 'gsap';
const vh = (coef) => window.innerHeight * (coef / 100);
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useTextAnimations from '../../hooks/useTextAnimations';
import snot from '/assets/cards3/snot.json';

gsap.registerPlugin(ScrollTrigger);
import Lottie from 'lottie-react';
const Card = ({ title, paragraph, video, mask, index }) => {
    const cardRef = useRef();
    const titleRef = useRef();
    const snotRef = useRef();
    const paragraphRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        gsap.to(cardRef.current, {
            background: 'linear-gradient( rgba(231,230,232,1) 30%, rgba(231,230,232,1) 61%)',
            duration: 0.5,
        });

        setTimeout(() => {
            snotRef.current.setSpeed(0.5);
            ScrollTrigger.create({
                trigger: cardRef.current,
                start: `${index * 45}% 100%`,
                onEnter: () => snotRef.current.playSegments([0, 12], true),
            });
            if (index === 0) {
                AnimationHeadingScrub(titleRef, 'body', `${vh((index + 1) * 5)} 0%`, `${vh((index + 2) * 25)} 0%`);
            } else if (index === 1) {
                AnimationHeadingScrub(titleRef, 'body', `${vh((index + 1) * 20)} 0%`, `${vh((index + 2) * 35)} 0%`);
            } else {
                AnimationHeadingScrub(titleRef, 'body', `${vh((index + 1) * 25)} 0%`, `${vh((index + 2) * 35)} 0%`);
            }
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
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: 'body',
                    start: '0% 0%',
                    end: '0% -150%',
                    scrub: true,
                },
            });
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
        }, 0);
    }, []);
    return (
        <div
            ref={cardRef}
            className={
                'bg-lightGray rounded-3xl  w-[24rem] mx-12 p-8 relative mt-44 h-96  translate-y-[100vh] will-change-transform'
            }
        >
            <video
                autoPlay
                muted
                loop
                src={video}
                className={'absolute left-1/2 max-w-none w-[28rem] -translate-y-3/4 -translate-x-1/2'}
                style={{ WebkitMaskBoxImage: `url(${mask})` }}
            />
            <h3 ref={titleRef} className={'font-playfair text-5xl mt-24'}>
                {title}
            </h3>
            <p ref={paragraphRef} className={'mt-9 font-roboto text-3xl'}>
                {paragraph}
            </p>
            <Lottie
                animationData={snot}
                lottieRef={snotRef}
                className={'-translate-x-1/2 left-1/2 absolute bottom-32 translate-y-full w-[25rem] -z-10'}
            />
        </div>
    );
};

export default Card;

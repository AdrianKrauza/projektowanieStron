import { useEffect, useRef, useState } from 'react';
import useTextAnimations from '../../hooks/useTextAnimations';
import gsap from 'gsap';
import lottieCloud from '/assets/banach/cloud.json';
import bottomLottie from '/assets/if/bottom.json';
import boxLottie from '/assets/if/lf20_j7bkleac.json';
import Lottie from 'lottie-react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const boxesData = [
    [
        'Chcesz podwoić liczbę <br/> klientów z takiej samej <br/> ilości odwiedzin strony.',
        'Bez zwiększania wydatków <br/> na reklamę i bez zwiększania <br/> liczby pracowników.',
    ],
    [
        'Zależy Ci, aby Twoja strona <br/> wyglądała świetnie a jej <br/> używanie było przyjemne.',
        'Chcesz zdobyć duże zaufanie <br/> już od pierwszego spojrzenia.<br/> Zyskać uwagę i zaangażowanie.',
    ],
    [
        'Szukasz ludzi, którzy zrobią <br/> wszystko za Ciebie. Tak by <br/> mieć wolną głowę i czas.',
        'Od napisania wyjątkowo <br/> przekonującej oferty, przez <br/> doskonałą grafikę i kodowanie.',
    ],
];

gsap.registerPlugin(ScrollTrigger);

const Box = ({ isActive, el, containerRef, index }) => {
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
                        start: `${index ? 130 + 100 * index : 0}% 0%`,
                        end: `${200 + 100 * index}% 0%`,
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
                        start: `${index ? 130 + 100 * index : 0}% 0%`,
                        end: `${200 + 100 * index}% 0%`,
                        scrub: true,
                    },
                },
            );
            AnimationHeadingScrub(headerRef, containerRef, `${140 + 100 * index}% 0%`, `${210 + 100 * index}% 0%`);
        }, 0);
    }, [isActive]);
    return (
        <div ref={boxRef} className={'relative opacity-30'}>
            <div ref={lottieRef} className={'relative -z-10'}>
                <Lottie
                    animationData={boxLottie}
                    className={` w-[31rem] h-[29rem] rotate-90 -translate-x-1/2 left-1/2 -top-[7rem] absolute -z-10`}
                    loop={true}
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

const If = () => {
    const headerRef = useRef();
    const containerRef = useRef();
    const pinRef = useRef();
    const cloudRef = useRef();
    const bottomRef = useRef();
    const boxesRef = useRef();
    const [activeBox, setActiveBox] = useState(0);
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headerRef, containerRef, `70% 0%`, `${200}% 0%`, false, true);
            // cloudRef.current.goToAndStop(0, true);
            bottomRef.current.goToAndStop(0, true);
            gsap.to(containerRef.current, {
                y: '-100vh',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100% 0%',
                    end: '1500% 0%',
                    scrub: true,
                },
            });
            ScrollTrigger.create({
                trigger: containerRef.current,
                pin: pinRef.current,
                start: '0 0%',
                end: '400% 0%',
            });

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: '50% 0%',
                end: '100% 0%',
                onUpdate: ({ progress }) => {
                    bottomRef.current.goToAndStop(Math.floor(32 * progress - 1), true);
                },
            });
            gsap.fromTo(
                boxesRef.current,
                {
                    y: '0',
                },
                {
                    y: '-4rem',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: '160% 0%',
                        end: '400% 0%',
                        scrub: true,
                    },
                },
            );
            gsap.fromTo(
                boxesRef.current,
                {
                    y: '100vh',
                },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: '50% 0%',
                        end: '150% 0%',
                        scrub: true,
                    },
                },
            );
        }, 0);
    }, []);
    return (
        <div ref={containerRef} className={'w-screen bg-darkGray-900 h-screen'}>
            <div ref={pinRef} className={'bg-darkGray-900 h-screen'}>
                {/*<Lottie animationData={lottieCloud} lottieRef={cloudRef} className={'cloud absolute w-screen'} />*/}
                <Lottie
                    animationData={bottomLottie}
                    lottieRef={bottomRef}
                    className={'bottomSvg absolute top-[15vh] w-[100rem] mx-auto left-1/2 -translate-x-1/2'}
                />

                <h2 ref={headerRef} className={'text-center text-[6vw] text-white pt-[30vh] '}>
                    Owocne strony będą/ dla Ciebie idealne,
                </h2>

                <div
                    style={{ transform: 'translateY(100vh)' }}
                    ref={boxesRef}
                    className={'w-[60rem] m-auto justify-between flex mt-[10vh]'}
                >
                    {boxesData.map((el, index) => (
                        <Box
                            containerRef={containerRef}
                            key={el[0]}
                            el={el}
                            index={index}
                            start={start}
                            isActive={index === activeBox}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default If;

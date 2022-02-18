import Image from 'next/image';
import testImg from '/assets/banach/2.jpg';
import usePortfolio from '../../hooks/usePortfolio';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Banach = () => {
    const containerRef = useRef();
    const { pinPortfolio, moveElement } = usePortfolio();
    const el = (el) => containerRef.current.querySelector(el);
    useEffect(() => {
        setTimeout(() => {
            pinPortfolio(containerRef);
            moveElement(containerRef, '.startImg', 60, 100);

            gsap.to('.animation-header1', {
                opacity: 1,
                duration: 0,
            });
            [...document.querySelectorAll('.animation-header1 > span >span')].forEach((el, index) => {
                console.log(index, el);
                gsap.to(el.querySelectorAll('span')[1], {
                    y: '-120%',
                    duration: 1.5,
                    delay: index / 15,
                    ease: 'Power3.easeOuteaseOut',
                    scrollTrigger: {
                        trigger: el,
                        start: `-${(index < 8 ? 790 : 890) - index * 5}px 50%`,
                        end: `-${(index < 8 ? 740 : 840) - index * 20}px 50%`,
                        scrub: true,
                        // markers: true,
                    },
                });
                gsap.to(el.querySelectorAll('span')[0], {
                    y: 10,
                    duration: 1.5,
                    delay: index / 15,
                    ease: 'Power3.easeOuteaseOut',
                    scrollTrigger: {
                        trigger: el,
                        start: `-${(index < 8 ? 790 : 890) - index * 5}px 50%`,
                        end: `-${(index < 8 ? 740 : 840) - index * 20}px 50%`,
                        scrub: true,
                    },
                });
            });
        }, 0);
    }, []);
    return (
        <div ref={containerRef} className={'h-[300rem] '}>
            {/*<div className={'pin w-[1350px] m-auto relative h-screen '}>*/}
            {/*    <div className={'absolute bottom-0 startImg translate-y-full'}>*/}
            {/*        <Image {...testImg} />*/}
            {/*        <h1 className="scale-x-[0.8] animation-header1 absolute top-44 left-32 font-AGaramondPro font-thin text-6xl leading-[0.8]">*/}
            {/*            {['Harmonia', 'KSIĘGOWO', 'PODATKOWA'].map((el, index) => (*/}
            {/*                <span key={el} className={!index && 'font-5xl towp-[40px] relative'}>*/}
            {/*                    {el.split('').map((el) => {*/}
            {/*                        if (el.toLowerCase() === '22ę') {*/}
            {/*                            return (*/}
            {/*                                <span*/}
            {/*                                    className="inline-block relative overflow-hidden top-[40px] pb-[40px]"*/}
            {/*                                    // style=" padding-bottom: 40px; position: relative;top:40px; "*/}
            {/*                                >*/}
            {/*                                    <span className="absolute translate-y-[240%]">{el}</span>*/}
            {/*                                    <span className="translate-y-[130%]">{el}</span>*/}
            {/*                                </span>*/}
            {/*                            );*/}
            {/*                        }*/}
            {/*                        return (*/}
            {/*                            <span className="inline-block relative overflow-hidden">*/}
            {/*                                <span className="absolute translate-y-[240%]">{el}</span>*/}
            {/*                                <span className="translate-y-[130%]">{el}</span>*/}
            {/*                            </span>*/}
            {/*                        );*/}
            {/*                    })}{' '}*/}
            {/*                </span>*/}
            {/*            ))}*/}
            {/*            /!*<span className="signature">Kompleksowa</span>*!/*/}
            {/*        </h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Banach;

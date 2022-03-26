import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import LaptopImg from '/assets/header/Monitor3.png';
import UseTextAnimations from '../../hooks/useTextAnimations.jsx';
import { GradientAnimation } from '../../helpers/gradientAnimation';
const vh = (coef) => window.innerHeight * (coef / 100);
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
    const { AnimationHeading, AnimationParagraph } = UseTextAnimations();
    const headerRef = useRef();
    const paragraphRef = useRef();
    const gradientRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: 'body ',
                pin: '#header > div ',
                start: '0% 0%',
                end: `${vh(2 * 20 + 125)}px 0%`,
            });
        }, 0);
        setTimeout(() => {
            AnimationHeading(headerRef, true);
            setTimeout(() => {
                GradientAnimation(gradientRef);
                setTimeout(() => {
                    AnimationParagraph(paragraphRef, true);
                }, 500);
            }, 1500);
        }, 500);
    }, []);
    return (
        <>
            <div id="header" className={'w-screen  h-[100rem]  '}>
                <div style={{ background: 'linear-gradient(180deg, #212121 62%, #3f3f3f 77%)' }}>
                    <div
                        ref={gradientRef}
                        className={
                            'h-screen w-screen absolute left-0 top-0 z-10  bg-gradient-to-r from-darkGray-900 to-darkGray-900  '
                        }
                    />
                    <div className={'max-w-[90rem] m-auto relative h-screen top-10'}>
                        <h1
                            ref={headerRef}
                            className={
                                'text-[6.5rem] text-white font-black font-playfair leading-[0.85] pt-36 opacity-0 relative z-20'
                            }
                        >
                            <span className={'block tracking-[1px]'}> Tak się tworzy</span>
                            <span className={'block tracking-[1px]'}>dobre strony </span>
                        </h1>
                        <p
                            ref={paragraphRef}
                            className={
                                'text-[2.5rem] text-white font-thin font-roboto mt-10 leading-[1.2] opacity-0  relative z-20'
                            }
                        >
                            <span className={'block tracking-[-1px]'}>Projektujemy przyjemne, cyfrowe</span>
                            <span className={'block tracking-[-2px]'}>doświadczenia, które dostarczają</span>
                            <span className={'block tracking-[-3px]'}>topowych wyników biznesowych.</span>
                        </p>
                        <div className={'w-[70rem] absolute top-0 -right-44 inline-block '}>
                            <Image priority  layout={'responsive'} {...LaptopImg} priority />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

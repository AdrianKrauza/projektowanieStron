import { useEffect, useRef } from 'react';
import SpiralData from '../../assets/cards3/spiral.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'lottie-react';
const vh = (coef) => window.innerHeight * (coef / 100);

export const Spiral = () => {
    gsap.registerPlugin(ScrollTrigger);
    const spiralRef = useRef();
    const spiralDataRef = useRef();
    useEffect(() => {
        spiralDataRef.current.goToAndStop(-1, true);
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: 'body',
                pin: spiralRef.current,
                start: '0% 0%',
                end: `${vh(400)} 100%`,
            });
            ScrollTrigger.matchMedia({
                '(min-width: 1200px)': () => {
                    ScrollTrigger.create({
                        trigger: 'body',
                        start: `${vh((2 + 1) * 20)}px 0%`,
                        end: `${vh(2 * 20 + 100)}px 0%`,
                        onUpdate: ({ progress }) => {
                            spiralDataRef.current.goToAndStop(Math.floor(24 * progress - 1), true);
                        },
                        onLeave: () => {
                            document.body.classList.remove('bg-darkGray-900');
                            document.body.classList.add('bg-lightGray');
                        },
                        onEnterBack: () => {
                            document.body.classList.remove('bg-lightGray');
                            document.body.classList.add('bg-darkGray-900');
                        },
                    });
                },
                '(max-width: 1200px)': () => {
                    ScrollTrigger.create({
                        trigger: 'body',
                        start: `${vh(0)}px 0%`,
                        end: `${vh(50)}px 0%`,
                        onUpdate: ({ progress }) => {
                            spiralDataRef.current.goToAndStop(Math.floor(24 * progress - 1), true);
                        },
                        onLeave: () => {
                            document.body.classList.remove('bg-darkGray-900');
                            document.body.classList.add('bg-lightGray');
                        },
                        onEnterBack: () => {
                            document.body.classList.remove('bg-lightGray');
                            document.body.classList.add('bg-darkGray-900');
                        },
                    });
                },
            });
        }, 0);
    }, []);
    return (
        <div ref={spiralRef} className={'absolute top-0 h-screen w-screen'}>
            <Lottie
                style={{ transform: 'rotateY(183deg)' }}
                lottieRef={spiralDataRef}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                className={'spiral  h-screen '}
                animationData={SpiralData}
            />
        </div>
    );
};

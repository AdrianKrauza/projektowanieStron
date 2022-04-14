import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Line = ({ color, top }) => {
    return (
        <div style={{ top: top }} className={'absolute  left-1/2 -translate-x-1/2'}>
            <style jsx>{`
                .arrow {
                    position: absolute;
                    top: -0.2vw;
                    left: -0.15vw;
                    width: 0.3vw;
                    height: 0.3vw;
                    transform: rotate(-45deg);
                    box-sizing: border-box;
                    border-left: 1px solid ${color};
                    border-bottom: 1px solid ${color};
                    animation: 1.5s ease 0.8s infinite normal none running sdb05;
                }

                @keyframes sdb05 {
                    0% {
                        transform: rotate(-45deg) translate(0, 0);
                        opacity: 0;
                    }

                    50% {
                        opacity: 1;
                    }

                    100% {
                        transform: rotate(-45deg) translate(-0.4vw, 0.4vw);
                        opacity: 0;
                    }
                }

                .line:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 3vw;
                    background: ${color};
                }

                .line:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 3vw;
                    background: ${color};
                    opacity: 0.4;
                }

                .line {
                    width: 0;
                    position: relative;
                    left: -1px;
                }

                .line:after {
                    animation: sdl06 1.5s 0.5s cubic-bezier(1, 0, 0, 1) infinite;
                }

                @keyframes sdl06 {
                    0% {
                        transform: scale(1, 0);
                        transform-origin: 0 0;
                    }

                    50% {
                        transform: scale(1, 1);
                        transform-origin: 0 0;
                    }

                    50.1% {
                        transform: scale(1, 1);
                        transform-origin: 0 100%;
                    }

                    100% {
                        transform: scale(1, 0);
                        transform-origin: 0 100%;
                    }
                }
            `}</style>
            <div className="line" />
            <div className="arrow" />
        </div>
    );
};
const Arrow = ({ color, top1, top2, children }) => {
    const containerRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            gsap.to(containerRef.current, {
                y: '-100vh',
                scrollTrigger: {
                    trigger: 'body',
                    start: '0 0%',
                    end: '0% -40%',
                    scrub: 1,
                },
            });
        }, 0);
    }, []);
    return (
        <div ref={containerRef} className={'w-screen absolute top-0'}>
            <p style={{ top: top1, color }} className={` absolute  left-1/2 -translate-x-1/2 text-[2rem] text-center`}>
                {children}
            </p>
            <Line color={color} top={top2} />
        </div>
    );
};

export default Arrow;

import letterC from '/assets/letters/literaC.json';
import letterF from '/assets/letters/LiteraF.json';
import letterO from '/assets/letters/LiteraO.json';
import letterR from '/assets/letters/LiteraR.json';
import letterT from '/assets/letters/LiteraT.json';
import letterW from '/assets/letters/LiteraW.json';
import letterY from '/assets/letters/literaY.json';
import letterZ from '/assets/letters/LiteraZ.json';
import letterS from '/assets/letters/LiteraS.json';
import Lottie from 'lottie-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const LottieLetter = ({ container, data, left, top, to = 0, second = false }) => {
    let isAnimated = false;
    const letterRef = useRef();
    const letterRefEl = useRef();
    useEffect(() => {
        setTimeout(() => {
            if (!second) {
                const letterSize = letterRefEl.current.querySelector(' svg > g >g:nth-child(1)');
                window.addEventListener('mousemove', (e) => {
                    const { x, width, y, height } = letterSize.getBoundingClientRect();
                    if (x < e.clientX && e.clientX < x + width && y < e.clientY && e.clientY < y + height) {
                        if (isAnimated) return;
                        letterRef.current.playSegments([0, 96], true);
                        letterRef.current.playSegments([96, 0], false);
                        isAnimated = true;
                        setTimeout(() => {
                            isAnimated = false;
                        }, 2000);
                    }
                });
            } else {
                ScrollTrigger.create({
                    trigger: container.current,
                    start: '0% 20%',
                    end: `0% -60%`,

                    onUpdate: ({ progress }) => {
                        letterRef.current.goToAndStop(progress * to, true);
                    },
                });
            }
        }, 0);
        letterRef.current.goToAndStop(0);
    });
    return (
        <div ref={letterRefEl}>
            <Lottie
                animationData={data}
                lottieRef={letterRef}
                style={{ top: `${top}rem`, left: `${left}rem` }}
                className={`h-[40rem] absolute ${second && 'pointer-events-none'}`}
            />
        </div>
    );
};
const Letters = () => {
    const containerRef = useRef();
    return (
        // <div ref={containerRef} className={'relative z-50 -top-[22rem] flex mb-[30rem] w-[100rem] m-auto'}>
        <div ref={containerRef} className={'tablets1 relative z-50 -top-[20rem] flex mb-[30rem] w-[100rem] m-auto'}>
            <LottieLetter container={containerRef} data={letterY} left={53} top={-25.9} />
            <LottieLetter container={containerRef} data={letterW} left={42} top={-19.9} />
            <LottieLetter container={containerRef} data={letterO} left={35} top={-16.4} />
            <LottieLetter container={containerRef} data={letterR} left={25} top={-11.3} />
            <LottieLetter container={containerRef} data={letterF} left={18} top={-8} />
            <LottieLetter container={containerRef} data={letterY} left={10} top={-5} />
            <LottieLetter container={containerRef} data={letterC} left={4} top={-0.4} />
            <LottieLetter second container={containerRef} data={letterT} left={64} top={-21} to={34} />
            <LottieLetter second container={containerRef} data={letterS} left={57} top={-17} to={22} />
            <LottieLetter second container={containerRef} data={letterO} left={49} top={-13.3} to={14} />
            <LottieLetter second container={containerRef} data={letterR} left={39} top={-8.1} to={8} />
            <LottieLetter second container={containerRef} data={letterZ} left={32} top={-4} to={4} />
            <LottieLetter second container={containerRef} data={letterW} left={21} top={0.4} />
        </div>
    );
};

export default Letters;

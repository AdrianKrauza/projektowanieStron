import usePortfolio from '../../hooks/usePortfolio';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import StartImg from './components/startImg';
import Header from './components/header';
import Presentation from './components/presentation';
import Page2 from './components/page2';
import Parallax from './components/parallax';
import Page3 from './components/page3';
import Slider from './components/slider';
// import Header from '/components/oko/components/header/header';

gsap.registerPlugin(ScrollTrigger);

const Oko = () => {
    const containerRef = useRef();
    const { pinPortfolio, moveElement, scrollAnimationElement } = usePortfolio();
    const [gradient1State, setGradient1State] = useState(0);
    const [slideState, setSlideState] = useState(0);
    const [gradient2State, setGradient2State] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            pinPortfolio(containerRef);
            moveElement('.presentation', 200, 850);
            moveElement('.startImg3', 900, 4000, false);
            moveElement('.headerImg', 2000, 2400);
            moveElement('.szejp', 1600, 2000);
            moveElement('.szejp2', 1600, 2000);
            moveElement('.szejp3', 5600, 500);
            moveElement('.page2', 3200, 1800);
            moveElement('.slider', 5450, 700);
            moveElement('.woman', 4400, 1300);
            moveElement('.gate', 4300, 1250);
            moveElement('.textPara', 4850, 100);
            moveElement('.item1', 4950, 100);
            moveElement('.item2', 4900, 100);
            moveElement('.lamp', 4500, 120);
            moveElement('.textSlider', 4700, 650);
            moveElement('.page3', 6000, 700);
            moveElement('.ending', 6500, -200);
            scrollAnimationElement(
                '.startImg3',
                {
                    borderRadius: '100%',
                },
                {
                    borderRadius: '0%',
                },
                500,
                150,
            );
            scrollAnimationElement(
                '.page2 .boxes > div',
                {
                    scale: 0.7,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                },
                3480,
                150,
            );
            scrollAnimationElement(
                '.page2 video',
                {
                    opacity: 0.1,
                },
                {
                    opacity: 1,
                },
                4380,
                150,
            );
            scrollAnimationElement(
                '.startImg3 img',
                {
                    scale: 3.5,
                },
                {
                    scale: 1,
                    transformOrigin: 'top',
                },
                580,
                150,
            );
            scrollAnimationElement(
                '.item2',
                {
                    scale: 0.5,
                },
                {
                    scale: 1,
                },
                4900,
                100,
            );
            scrollAnimationElement('.szejp', {}, { x: '-100%' }, 1600, 2000, {});
            scrollAnimationElement('.szejp2', {}, { x: '100%' }, 1600, 2000, {});
            scrollAnimationElement('.startImg3 div', {}, {}, 2500, 710, {
                onUpdate: (e) => {
                    setGradient1State(e.progress * 100);
                },
            });
            scrollAnimationElement('.startImg3 div', {}, {}, 3700, -125, {
                onUpdate: (e) => {
                    setGradient2State(e.progress * 200);
                },
            });
            scrollAnimationElement('.startImg3 div', {}, {}, 4850, 1200, {
                onUpdate: (e) => {
                    setSlideState(e.progress * 100);
                },
            });
        }, 0);
    }, []);
    return (
        <div ref={containerRef} className={'h-[10500px] bg-[#06051C] w-screen '}>
            <div className={'pin w-[1350px] relative h-screen  bg-[#06051C] -translate-x-1/2 left-1/2  '}>
                <div
                    style={{ transform: 'translate(-50%,-100%)' }}
                    className={
                        'gradientStart top-0 translate-y-0  h-[500px] w-screen -translate-x-1/2 left-1/2 bg-gradient-to-b from-[#141414] to-[#06051C]'
                    }
                />
                <Presentation />
                <StartImg gradient1State={gradient1State} />
                <Header gradient2State={gradient2State} />

                <Page2 />
                <Parallax />

                <Slider slideState={slideState} setSlideState={setSlideState} />
                <Page3 />
            </div>
        </div>
    );
};

export default Oko;

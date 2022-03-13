import Image from 'next/image';
import Lottie from 'lottie-react';
import crowd from '/assets/oko/oko-tlum.png';
import boxImage1 from '/assets/oko/OKO1.jpg';
import boxImage2 from '/assets/oko/OKO2.jpg';
import boxImage3 from '/assets/oko/OKO3.jpg';
import icon1 from '/assets/oko/lf20_jrf5g8nc.json';
import icon2 from '/assets/oko/lf20_nvlbupxb.json';
import icon3 from '/assets/oko/lf20_tjoisgkg.json';
import studio from '/assets/oko/Studio.png';
import { useEffect, useRef, useState } from 'react';

const sliderData = [
    'Pisz, rysuj i prezentuj multimedia <br/>na tablicy interaktywnej OKO',
    'Pożegnaj nudne nagrania, przywitaj filmowe akcje. <br/>Zaznaczaj obiekty, przewijaj slajdy, rysuj <br/>i olśniewaj interakcjami na żywo.',
    'Działaj samodzielnie. Osiągając <br/>efekty pracy całej ekipy filmowej.',
    'Brzmisz cudownie i wyglądasz bosko. Zawsze! <br/>Osiągasz filmową jakość, bez angażowania<br/>kogokolwiek do nagrywania czy edycji.',
    'Pisz, rysuj i prezentuj multimedia <br/>na tablicy interaktywnej OKO',
    'Pożegnaj nudne nagrania, przywitaj filmowe akcje. <br/>Zaznaczaj obiekty, przewijaj slajdy, rysuj<br/>i olśniewaj interakcjami na żywo.',
];
const Slide = ({ el, index, slideState }) => (
    <p
        className={`absolute py-[40px] ${index % 2 ? 'text-[20px]' : 'text-[32px] mt-[20px]'} text-[#6a648d] w-[730px]`}
        style={{ transform: `rotateX(${50 - 20 * index - (40 - (40 * slideState) / 100)}deg) translateZ(300px) ` }}
        dangerouslySetInnerHTML={{ __html: el }}
    />
);
const Range = ({ slideState, setSlideState }) => {
    const [isActive, setIsActive] = useState(false);
    const [rangePercents, setRangePercents] = useState(0);
    const [rangePosition, setRangePosition] = useState(0);
    const rangeRef = useRef();
    useEffect(() => {
        let targetRect = rangeRef.current.getBoundingClientRect();
        setRangePercents(100 - slideState);
        setRangePosition((targetRect.height * slideState) / 100);
    }, [slideState]);
    const handleOnMouseDown = () => {
        setIsActive(true);
        window.addEventListener('mousemove', handleOnMouseMove);
        window.addEventListener('mouseup', handleOnMouseUp);
    };
    const handleOnMouseMove = (e) => {
        e.preventDefault();
        let targetRect = rangeRef.current.getBoundingClientRect();
        let y = e.pageY - targetRect.top + 10;
        if (y > targetRect.height) y = targetRect.height;
        if (y < 0) y = 0;
        let percentPosition = (y / targetRect.height) * 100;
        setSlideState(percentPosition);
    };
    const handleOnMouseUp = () => {
        window.removeEventListener('mousemove', handleOnMouseMove);
    };
    return (
        <div
            ref={rangeRef}
            onMouseDown={handleOnMouseDown}
            style={{ boxShadow: `inset 3.2px 3.2px 8px #322c51, inset -3.2px -3.2px 8px #000` }}
            className={
                'rounded-3xl  h-[220px] w-[8px] self-center flex flex-col  left-[-50px] bg-red relative shadow-[inset_.2rem_.2rem_.5rem_#fff_inset_-.2rem_-.2rem_.5rem_#fff]'
            }
        >
            <div>
                <span
                    style={{
                        height: `${rangePercents}%`,
                        background:
                            'linear-gradient(-1deg, rgb(138, 189, 255) 0%, rgb(109, 93, 252) 50%, rgb(91, 14, 235) 100%)',
                    }}
                    className={`rounded-3xl w-full  absolute bottom-0`}
                />
                <span
                    style={{ top: `${rangePosition}px` }}
                    className={`absolute rounded-full bg-[#221d43] w-[24px] h-[24px] left-1/2 -translate-x-1/2 `}
                />
            </div>
        </div>
    );
};
const Slider = ({ slideState, setSlideState }) => {
    return (
        <>
            <div className={'textSlider z-10 relative w-[1350px] left-[-30px]'}>
                <style jsx>{`
                    h2 {
                        background-image: linear-gradient(307deg, #99968f, #efede9);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    h2:after {
                        padding: 15px;
                        content: 'Superprodukcje\A superprosto';
                        white-space: pre;
                        -webkit-text-stroke: 4px transparent;
                        position: absolute;
                        -webkit-text-fill-color: #0f092f;
                        width: 100%;
                        background-image: linear-gradient(324deg, #2cc5de, #6f67d4 33%, #e04f7a 66%, #ff8153);
                        -webkit-background-clip: text;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        transform: translate(3px, 3px);
                    }
                `}</style>
                <h2 className={'text-[120px] text-center font-roboto text-white relative p-[15px] mt-[700px]'}>
                    Superprodukcje <br />
                    superprosto
                </h2>
            </div>
        </>
    );
};

export default Slider;

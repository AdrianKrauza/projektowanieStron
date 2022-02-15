import { useEffect, useRef, useState } from 'react';
import useTextAnimations from '../../hooks/useTextAnimations';
import gsap from 'gsap';
import Image from 'next/image';
import Tablet1Img from '/assets/tablets/A.jpg';
import Tablet2Img from '/assets/tablets/B.jpg';
const Tablets = () => {
    const headingRef = useRef();
    const mouseMoveRef = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    const [state, setState] = useState(0);
    const handleOnClick = (index) => {
        setState(index);
    };
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, headingRef);
        }, 0);

        const tl = gsap.timeline({
            repeat: -1,
        });
        tl.from(mouseMoveRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.6,
        }).to(mouseMoveRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
        });
    }, []);
    return (
        <div className={'relative z-20'}>
            <h2 ref={headingRef} className={'text-center text-darkGray'}>
                Dla przedsiębiorców,/ którzy oczekują/ rezultatów.
            </h2>
            <p className={'text-center mt-28'}>
                Zdobądź piękną, wysokowydajną stronę, która przekonuje
                <br />
                znacznie więcej klientów niż strony Twojej konkurencji.
                <br />
                24 godziny na dobę, 7 dni w tygodniu.
            </p>
            <div className={'absolute flex flex-col items-center w-full z-10'}>
                <div className={'flex '}>
                    {[0, 1, 2].map((index) => (
                        <svg
                            className={'cursor-pointer w-[50px] h-[50px] m-[17px] mt-24'}
                            key={index}
                            viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={'none'}
                            onClick={() => handleOnClick(index)}
                        >
                            <circle cx="64" cy="64" r="63.5" stroke={'black'} strokeWidth={'2px'} />
                            <circle
                                cx="64.5"
                                cy="64.5"
                                r="10"
                                fill="black"
                                className={`opacity-${index === state ? 1 : 0}`}
                            />
                        </svg>
                    ))}
                </div>
                <div className="w-[50px] h-[90px] rounded-full rounded-full border-[1px] border-black m-[17px] ">
                    <svg ref={mouseMoveRef} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <circle className="dot" cx="64.5" cy="64.5" r="10" fill="black " />
                    </svg>
                </div>
                <p>więcej</p>
            </div>
            <div className={'absolute left-1/2 -translate-x-1/2 -z-10 h-[1400px] relative'}>
                {[Tablet1Img, Tablet2Img].map((img, index) => (
                    <div
                        key={img.src}
                        className={`absolute top-0 left-1/2 -translate-x-1/2 opacity-${index === state ? 1 : 0}`}
                    >
                        <Image {...img} layout={`fixed`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tablets;

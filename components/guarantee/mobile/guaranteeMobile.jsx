import useTextAnimations from '../../../hooks/useTextAnimations';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

const Guarantee = ({ setPageState }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    const heading2Ref = useRef();
    const heading3Ref = useRef();
    const conRef = useRef();
    const pulsRef = useRef();
    const openBlackRef = useRef();
    const router = useRouter();
    const [videoName, setVideoName] = useState('');
    const [videoName2, setVideoName2] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => setVideoName('/assets/gu/Projektowanie-stron-statystyki.mp4 '), 6000);
            setTimeout(() => setVideoName2('/assets/gu/Projektowanie-UX.mp4 '), 8000);
            AnimationHeadingScrub(heading2Ref, heading2Ref, -50, 200, false, true);
            AnimationHeadingScrub(heading3Ref, heading3Ref, -50, 200, false, true);
            AnimationHeadingScrub(headerRef, headerRef, -150, 100, false, true);
            console.log(headerRef.current);
            headerRef.current.querySelectorAll('span').forEach((el) => {
                if (el.innerHTML === '1' || el.innerHTML === '0') {
                    el.style.fontSize = '16rem';
                }
                if (el.innerHTML === '%') {
                    el.style.fontSize = '14rem';
                }
            });
            gsap.to(headerRef.current, {
                y: '-5vw',
                scrollTrigger: {
                    start: `${-150}% 50%`,
                    end: `${100}% 50%`,
                    scrub: true,
                    trigger: headerRef.current,
                },
            });
            gsap.to(pulsRef.current, {
                ease: 'none',
                scale: 2,
                transformOrigin: 'top',
                scrollTrigger: {
                    start: `0 100%`,
                    end: `0 00%`,
                    scrub: true,
                    trigger: pulsRef.current,
                },
            });
        }, 0);
    }, []);
    return (
        <div ref={conRef} className={`w-screen m:-z-10  relative z-10  bg-lightGray `}>
            <div
                ref={pulsRef}
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 45%)' }}
                className={'left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] absolute -z-10 -mt-[3rem] z-[]'}
            />
            <h2 className={'text-center text-[15rem]  my-0 '}>GWARANCJA</h2>
            <h3 ref={headerRef} className={'text-center text-[7.5rem] mt-[11rem] '}>
                Zwiększymy konwersję/ Twojej strony, albo/ zwrócimy Ci/ 100%/ środków!/
            </h3>

            <button
                className={
                    'form-open bg-[#E7E6E8] border-[rgb(51,51,51)] border-[1px] py-[3rem] px-[5.5rem] m-auto block my-[12rem]  rounded-[5rem] text-[4.5rem]'
                }
            >
                Wyceń swój projekt
            </button>
            <div>
                <video
                    className={' w-[80vw] m-auto'}
                    style={{ clipPath: 'polygon(0 0, 99% 0, 99% 100%, 0% 100%)' }}
                    src={videoName}
                    loop
                    autoPlay
                    muted
                />
            </div>
            <h2 className={'text-center text-[10rem]'}>
                Świetne wyniki <br />
                zaczynają się tutaj.
            </h2>
            <p className={'mt-28 leading-[1.3] relative z-10 text-[4.5rem] ml-[6rem]'}>
                Zdobądź piękną, wysokowydajną stronę,
                <br />
                która przekonuje znacznie więcej klientów <br />
                niż strony Twojej konkurencji.
                <br />
                <br />
                Ciesz się nawet 2x większymi <br /> zyskami w sieci. 24 godziny <br /> na dobę, 7 dni w tygodniu.
                <br />
            </p>
        </div>
    );
};

export default Guarantee;

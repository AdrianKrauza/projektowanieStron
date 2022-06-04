import Image from 'next/image';
import Tablet1Img from '/assets/tablets/Projektowanie-stron-rezultaty.jpg';
import Tablet2Img from '/assets/tablets/Wzrost-stron.jpg';

import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Tablets = () => {
    const headingRef = useRef();
    const maskImage = useRef();
    const { AnimationHeadingScrub } = useTextAnimations();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, headingRef, -50, 200, false, true);
            gsap.fromTo(
                maskImage.current,
                {
                    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
                },
                {
                    clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
                    scrollTrigger: {
                        trigger: maskImage.current,
                        scrub: 1,
                        start: '10% center',
                        end: '60% center',
                    },
                },
            );
        }, 0);
    }, []);
    return (
        <div className={'mt-[160vh] bg-lightGray '}>
            <h2 ref={headingRef} className={'text-center text-darkGray '}>
                Dla przedsiębiorców,/ którzy oczekują/ rezultatów.
            </h2>
            <p className={'text-center mt-28 leading-[1.3] relative z-10'}>
                Zdobądź piękną, wysokowydajną stronę, która przekonuje <br />
                znacznie więcej klientów niż strony Twojej konkurencji.
                <br />
                <br />
                Ciesz się nawet 3x większymi zyskami w sieci.
                <br />
                24 godziny na dobę, 7 dni w tygodniu.
                <br />
            </p>
            <div className={'flex justify-center mt-[-150px]  relative w-[2000px] left-1/2 -translate-x-1/2'}>
                <Image priority {...Tablet1Img} layout={'fixed'} quality={100} />
                <div ref={maskImage} className={'absolute top-0'}>
                    <Image priority {...Tablet2Img} layout={'fixed'} quality={100} />
                </div>
            </div>
        </div>
    );
};

export default Tablets;

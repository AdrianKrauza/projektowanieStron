import Image from 'next/image';
import Tablet1Img from '/assets/tablets/Projektowanie-stron-rezultaty.jpg';
import Tablet2Img from '/assets/tablets/Wzrost-stron.jpg';

import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ForEntrepreneurs from '../forEntrepreneurs/forEntrepreneurs';
gsap.registerPlugin(ScrollTrigger);
const Tablets = ({ b }) => {
    const maskImage = useRef();
    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(
                maskImage.current,
                {
                    clipPath: 'polygon(0 62%, 48% 11%, 68% 48%, 19% 100%)',
                },
                {
                    clipPath: 'polygon(38% 19%, 46% 14%, 68% 48%, 61% 52%)',
                    scrollTrigger: {
                        trigger: maskImage.current,
                        scrub: 1,
                        start: '10% center',
                        end: '90% center',
                    },
                },
            );
        }, 0);
    }, []);
    return (
        <div className={`${!b ? 'mt-[160vh]' : '-mt-[10rem]'} bg-lightGray `}>
            {!b && <ForEntrepreneurs />}
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

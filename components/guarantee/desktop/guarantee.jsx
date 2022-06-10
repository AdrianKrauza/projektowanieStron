import useTextAnimations from '../../../hooks/useTextAnimations';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import img3 from '/assets/guarantee/Projektowanie-UX-Makieta.jpg';
import gif from '/assets/guarantee/ezgif.com-gif-maker (17).gif';
import shadow from '/assets/guarantee/Cien.jpg';
import Image from 'next/image';
import GuaranteeConversation from '../../guaranteeConversation/guaranteeConversation';
import Statistics from '../../statistics/statistics';
import Faq from '../../faq/desktop/faq';

gsap.registerPlugin(ScrollTrigger);

const Guarantee = ({ setPageState }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const heading2Ref = useRef();
    const heading3Ref = useRef();
    const conRef = useRef();
    const [videoName, setVideoName] = useState('');
    const [videoName2, setVideoName2] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => setVideoName('/assets/gu/Projektowanie-stron-statystyki.mp4 '), 6000);
            setTimeout(() => setVideoName2('/assets/gu/Projektowanie-UX.mp4 '), 8000);
            AnimationHeadingScrub(heading2Ref, heading2Ref, -50, 200, false, true);
            AnimationHeadingScrub(heading3Ref, heading3Ref, -50, 200, false, true);
        }, 0);
    }, []);
    return (
        <div ref={conRef} className={`w-screen   relative z-10 pt-[15rem] bg-lightGray `}>
            <GuaranteeConversation />
            <p className={'font-normal text-[1rem] m-auto block w-fit leading-[1.3] mt-[-1rem]'}>
                <b>Łatwo policzyć:</b> Jeśli przebijemy konwersję Twojej strony to też nie tracisz. <br />
                Bo każda złotówka, którą nam zapłacisz, wróci do Ciebie z dodatkowych <br />
                zamówień i sprzedaży zdobytych dzięki dużo wyższej konwersji strony.
            </p>
            <button
                className={
                    'form-open bg-[#E7E6E8] border-[rgb(51,51,51)] border-[1px] p-[1rem] px-[3.5rem] m-auto block my-[8rem]  rounded-[3rem] text-[1.5rem]'
                }
            >
                Wyceń swój projekt
            </button>
            <Statistics />
            <Faq />
        </div>
    );
};

export default Guarantee;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IfBox from '../pragmile/components/ifBox';
import logoGif from '/assets/banach/Banach-Logo.gif';
import logoWebp from '../../assets/pragmile/TeamNovate-WebP.webp';

gsap.registerPlugin(ScrollTrigger);
const start = 13500;
const boxesData = [
    [
        'Chcesz podwoić liczbę <br/> klientów z takiej samej <br/> ilości odwiedzin strony.',
        'Bez zwiększania wydatków <br/> na reklamę i bez zwiększania <br/> liczby pracowników.',
    ],
    [
        'Zależy Ci, aby Twoja strona <br/> wyglądała świetnie a jej <br/> używanie było przyjemne.',
        'Chcesz zdobyć duże zaufanie <br/> już od pierwszego spojrzenia.<br/> Zyskać uwagę i zaangażowanie.',
    ],
    [
        'Szukasz ludzi, którzy zrobią <br/> wszystko za Ciebie. Tak by <br/> mieć wolną głowę i czas.',
        'Od napisania wyjątkowo <br/> przekonującej oferty, przez <br/> doskonałą grafikę i kodowanie.',
    ],
];
const If = ({}) => {
    const ifContentRef = useRef();
    const headerRef = useRef();
    const boxesRef = useRef();
    useEffect(() => {
        setTimeout(() => {}, 0);
    }, []);
    return (
        <>
            <div ref={ifContentRef} style={{ bottom: 'auto' }} className={' w-screen  h-screen bg-darkGray-900'}>
                <h2 ref={headerRef} className={'text-center text-[6vw] text-[#dfdfdf] pt-[10vh] '}>
                    Owocne strony będą <br /> dla Ciebie idealne,
                </h2>
                <div ref={boxesRef} className={'w-[75rem] m-auto justify-between flex mt-[10vh]'}>
                    {boxesData.map((el, index) => (
                        <IfBox containerRef={ifContentRef} key={el[0]} el={el} index={index} start={start} second />
                    ))}
                </div>

                <div
                    // style={{ marginBottom: `-20rem` }}
                    className={
                        'presentation  flex  flex-col justify-center h-[400px] bg-red  items-center w-full mt-[20rem]'
                    }
                >
                    <div className={'mb-[4rem]'}>
                        <picture>
                            <img src={logoGif.src} />
                        </picture>
                    </div>
                    <p className={'text-center text-[#dfdfdf]'}>
                        Banach Outsourcing - Przykład strony <br />w branży Konsultingu, doradztwa i finansów
                    </p>
                </div>
            </div>
        </>
    );
};

export default If;

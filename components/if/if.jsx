import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IfBox from '../pragmile/components/ifBox';
import logoGif from '/assets/banach/Banach-Logo.gif';

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
            <div ref={ifContentRef} style={{ bottom: 'auto' }} className={' w-screen  h-screen'}>
                <h2 ref={headerRef} className={'text-center text-[6vw] text-[#dfdfdf] pt-[10vh] '}>
                    Owocne strony będą <br /> dla Ciebie idealne,
                </h2>
                <div ref={boxesRef} className={'w-[60rem] m-auto justify-between flex mt-[10vh]'}>
                    {boxesData.map((el, index) => (
                        <IfBox containerRef={ifContentRef} key={el[0]} el={el} index={index} start={start} second />
                    ))}
                </div>
                <div className={'border-[#dfdfdf] border-[1px] w-[50rem] m-auto mb-12 mt-[15rem]'} />

                <p className={'text-[#dfdfdf] text-center text-[4.5rem]'}>Przykład realizacji:</p>
                <div className={'border-[#dfdfdf] border-[1px] w-[50rem] m-auto mt-12  mb-[10rem] '} />
                <div
                    // style={{ marginBottom: `-20rem` }}
                    className={'presentation  flex justify-center h-[400px] bg-red  absolute items-center w-full'}
                >
                    <p className={'text-right text-[#dfdfdf]'}>Strona dla Banach</p>
                    <div className={'h-[100px] bg-[#dfdfdf] w-[1px] mx-10'} />
                    <div>
                        <picture>
                            {/*<source srcSet={logoWebp.src} type="image/webp" />*/}
                            <img src={logoGif.src} />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    );
};

export default If;

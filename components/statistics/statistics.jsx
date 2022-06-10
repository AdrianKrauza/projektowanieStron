import { useEffect, useState } from 'react';
import Image from 'next/image';
import img3 from '../../assets/guarantee/Projektowanie-UX-Makieta.jpg';
import gif from '../../assets/guarantee/ezgif.com-gif-maker (17).gif';
import shadow from '../../assets/guarantee/Cien.jpg';
const month = [
    'W styczniu',
    'W lutym',
    'W marcu',
    'W kwietniu',
    'W maju',
    'W czerwcu',
    'W lipcu',
    'W sierpniu',
    'W wrześniu',
    'W październiku',
    'W listopadzie',
    'W grudniu',
];
const getMonth = () => {
    const date = new Date();
    return date.getMonth();
};
const Statistics = ({ b }) => {
    const [videoName, setVideoName] = useState('');
    const [videoName2, setVideoName2] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => setVideoName('/assets/gu/Projektowanie-stron-statystyki.mp4 '), 6000);
            setTimeout(() => setVideoName2('/assets/gu/Projektowanie-UX.mp4 '), 8000);
        }, 0);
    }, []);
    return (
        <>
            <div className={`flex justify-center items-end mb-[5rem] ${b && '-mt-[10rem]'}`}>
                <div className={' w-[25rem]'}>
                    <p className={' text-[3.5rem]'}>
                        Świetna
                        <br />
                        konwersja
                        <br />
                        zaczyna się
                        <br />
                        od świetnego
                        <br />
                        projektowania.
                    </p>
                    <p className={'text-white mt-[2rem] text-[2.5rem]'}>
                        To nie są szczegóły. <br /> To są fundamenty!
                    </p>
                </div>
                <div>
                    <video
                        className={'-mb-[50px]'}
                        style={{ clipPath: 'polygon(0 0, 99% 0, 99% 100%, 0% 100%)' }}
                        src={videoName}
                        loop
                        autoPlay
                        playsInline
                        muted
                    />
                </div>
            </div>
            <div className={'m-auto w-[43rem]  '}>
                <p className={'text-[2rem]'}>
                    Nie da się ukryć, że uwielbiamy się z grafikami,
                    <br />
                    ale konwersję projektujemy zupełnie inaczej.
                    <br />
                    <br />
                    U nas na długo przed grafikiem medytują:
                    <br />
                    Copywriter, Projektant UX, oraz Marketer.
                    <br />
                    <br />
                    Badają konkurencję i zasady konkurowania.
                    <br />
                    Porządkują twoją ofertę. Piszą świetne treści.
                    <br />
                    <br />
                    Budują klikalny prototyp Twojej nowej strony, <br />
                    zorientowany na wysokie rezultaty biznesowe. <br />
                    <i> - Wszystko co dobre zaczyna się od makiety UX!</i>
                </p>
            </div>
            <p className={'text-center mt-[6rem] text-[3.5rem]'}>User Experience Design</p>
            <a
                href={'https://copywriting.pl/makiety'}
                target={'_blank'}
                className={'text-center mt-[1rem] text-[1rem] text-white underline block mb-[2rem]'}
                rel="noreferrer"
            >
                ( Kompletny proces zobaczysz tutaj )
            </a>
            <div className={'flex justify-center'}>
                <Image priority quality={100} {...img3} />
                <div className={'absolute w-[670px] translate-y-[45px] translate-x-[-5px] -mb-[4rem]'}>
                    <video
                        style={{
                            WebkitMaskImage: `url(assets/header/Maska-Laptop-MOBILE.svg)`,
                            filter: 'contrast(101%)',
                        }}
                        src={videoName2}
                        className={' w-[670px] '}
                        muted
                        loop
                        playsInline
                        autoPlay
                    />
                </div>
            </div>
            <div />
            <div className={'flex align-center justify-center mt-[-126px] ml-[100px] z-10 relative'}>
                <style jsx>{`
                    .shimmer {
                        color: rgba(255, 255, 255, 0.1);
                        background: -webkit-gradient(
                            linear,
                            left top,
                            right top,
                            from(#d2952a),
                            to(#d2952a),
                            color-stop(0.5, #fff)
                        );
                        background: -moz-gradient(
                            linear,
                            left top,
                            right top,
                            from(#d2952a),
                            to(#d2952a),
                            color-stop(0.5, #fff)
                        );
                        background: gradient(
                            linear,
                            left top,
                            right top,
                            from(#d2952a),
                            to(#d2952a),
                            color-stop(0.01, #fff)
                        );

                        background-size: 120px 100%;
                        -webkit-background-clip: text;
                        -moz-background-clip: text;
                        background-clip: text;
                        -webkit-animation-name: shimmer;
                        -moz-animation-name: shimmer;
                        animation-name: shimmer;
                        animation-duration: 6s;
                        -webkit-animation-iteration-count: infinite;
                        -moz-animation-iteration-count: infinite;
                        animation-iteration-count: infinite;
                        background-repeat: no-repeat;
                        background-position: 0 0;
                        background-color: #d2952a;
                        padding: 2px 0;
                        margin-top: 86px;
                    }
                    @keyframes shimmer {
                        0% {
                            background-position: 0%;
                        }
                        10% {
                            background-position: 120%;
                        }
                        100% {
                            background-position: 120%;
                        }
                    }
                `}</style>
                {/*text-[#D2952A]*/}
                <div className={'scale-[1.25]  '}>
                    <div
                        className={' flex flex-col justify-center items-center mt-[-5px] ml-[-30px] -z-10 '}
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <div className={'ml-[30px]'}>
                            <Image {...gif} />
                        </div>

                        <div className={'mt-[-45px]  -z-10 relative'}>
                            <Image {...shadow} />
                        </div>
                    </div>
                    <div className={'mt-[-80px]'}>
                        <p className={'text-[55px] font-black  shimmer '}>Projekt UX - GRATIS! *</p>
                        <p className={'text-[21px] mt-[10px] font-normal'}>
                            * {month[getMonth()]} opracowujemy projekt makiety UX w cenie strony.
                        </p>
                    </div>
                </div>{' '}
            </div>
        </>
    );
};

export default Statistics;

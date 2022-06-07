import Image from 'next/image';
import img3 from '../../../assets/guarantee/Projektowanie-UX-Makieta.jpg';
import gif from '../../../assets/guarantee/ezgif.com-gif-maker (17).gif';
import { useEffect, useState } from 'react';

const UxMobile = () => {
    const [videoName2, setVideoName2] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => setVideoName2('/assets/gu/Projektowanie-UX.mp4 '), 8000);
        }, 0);
    }, []);
    return (
        <div className={'bg-lightGray'}>
            <h2 className={'text-center text-[10rem] mb-[5rem] '}>
                Teraz makieta <br />
                User Experience <br />w cenie projektu
            </h2>
            <div className={'flex justify-center'}>
                <Image priority quality={100} {...img3} />
                <div className={'absolute w-[670px] translate-y-[45px] translate-x-[-5px] -mb-[4rem]'}>
                    <video
                        src={videoName2}
                        style={{
                            WebkitMaskImage: `url(assets/header/Maska-Laptop-MOBILE.svg)`,
                        }}
                        className={'absolute left-1/2 -translate-x-1/2 w-[50vw] -top-[7rem] '}
                        muted
                        loop
                        autoPlay
                    />
                </div>
            </div>
            <div className={'flex justify-center -mt-[10rem]'}>
                <Image {...gif} />
            </div>
            <button
                className={
                    'text-[7rem] text-center m-auto bg-[red] px-[7rem] py-[5rem] bg-[#ff9600] block rounded-[5rem] font-playfair'
                }
            >
                Wyślijcie mi ofertę
            </button>
        </div>
    );
};

export default UxMobile;

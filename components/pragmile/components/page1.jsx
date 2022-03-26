import Image from 'next/image';

import page1 from '/assets/pragmile/Strona.jpg';
import gate1 from '/assets/pragmile/Kratki.png';
import text1 from '/assets/pragmile/Tekst-strony-Team-Novate1.png';
const Page1 = () => {
    return (
        <>
            <div
                className={
                    'page1 border-[1px] border-[#022300]  rounded-t-[60px]   shadow-[-1px_-10px_22px_10px_#090e0760]'
                }
            >
                <div className={'   rounded-t-[60px] overflow-hidden '}>
                    <Image priority {...page1} />
                </div>

                <div
                    className={
                        'absolute h-[200px] bottom-[-180px] w-[1350px] bg-[#111111] shadow-[0px_-10px_40px_11px_#111111]'
                    }
                />
            </div>
            <div className={'gate1 left-[280px] '}>
                <Image priority {...gate1} />
            </div>
            <div className={'text1 left-[280px]  '}>
                <Image priority {...text1} />
                <style jsx>{`
                    @keyframes pulse {
                        0% {
                            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2), 0 0 0 10px rgba(255, 255, 255, 0.2),
                                0 0 0 30px rgba(255, 255, 255, 0.2), 0 0 0 60px rgba(255, 255, 255, 0.2);
                        }

                        100% {
                            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2), 0 0 0 30px rgba(255, 255, 255, 0.2),
                                0 0 0 60px rgba(255, 255, 255, 0.2), 0 0 0 90px rgba(255, 255, 255, 0);
                        }
                    }
                    .ring-button {
                        animation: pulse 3s linear infinite;
                        position: absolute;
                        border-radius: 100%;
                        width: 78px;
                        height: 78px;
                        bottom: 123px;
                        left: 69px;
                        z-index: -1;
                    }
                `}</style>

                <div className={'ring-button'} />
            </div>
        </>
    );
};

export default Page1;

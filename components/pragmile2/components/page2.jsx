import Image from 'next/image';
import gate1 from '/assets/pragmile/Kratki.png';
import text1 from '/assets/pragmile/Novate-teksty2.png';
import person from '/assets/pragmile/Novate2-M.png';
import box1 from '/assets/pragmile/Kwadrat1.jpg';
import box2 from '/assets/pragmile/Kwadrat2.jpg';
import box3 from '/assets/pragmile/Kwadrat-Front.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
const Page2 = () => {
    const greenGradientRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            window.onresize = window.onload = function () {
                gsap.set('.m1_stage', { x: '50%', opacity: 1 });
            };
            gsap.to(greenGradientRef.current, {
                scale: 0.7,
                yoyo: true,
                repeat: -1,
                duration: 5,
            });
        }, 0);
    });

    return (
        <>
            <div className={'bg2 w-[95rem] h-[70rem] bg-[#18181A]  rounded-t-[10rem] overflow-hidden'}>
                <style jsx>
                    {`
                        .gradient {
                            position: absolute;
                            right: -55rem;
                            bottom: -60rem;
                            width: 150rem;
                            height: 150rem;
                            border-radius: 100%;
                            background: #012515;
                            background: radial-gradient(circle, #012515 0%, #18181a 71%);
                        }
                    `}
                </style>
                <div className={'gradient'} ref={greenGradientRef} />
                <svg width="100%" height="100%" fill={'transparent'} className={'main1 relative opacity-[0.5] '}>
                    <defs>
                        <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop offset="10%" style={{ stopColor: '#284a2c', stopOpacity: 0.9 }} />
                            <stop offset="99%" style={{ stopColor: 'rgb(0,255,0)', stopOpacity: 0.1 }} />
                        </linearGradient>
                    </defs>
                    <rect className="m1Bg" width="100%" height="100%" />
                    <g className="m1_stage" opacity="0">
                        <g className="m1_cGroup">
                            <circle
                                className="c1_line c1_line4"
                                cx="15vw"
                                cy="-10vw"
                                r="25vw"
                                fill="none"
                                strokeWidth="2"
                                stroke="url(#grad1)"
                                opacity="0.4"
                            />
                        </g>
                        <g className="m1_cGroup">
                            <circle
                                className="c1_line c1_line3"
                                cx="350"
                                cy="300"
                                r="450"
                                fill="none"
                                strokeWidth="2"
                                stroke="url(#grad1)"
                                opacity="0.4"
                            />
                        </g>
                        <g className="m1_cGroup">
                            <circle
                                className="c1_line c1_line2"
                                cx="350"
                                cy="300"
                                r="360"
                                fill="none"
                                strokeWidth="2"
                                stroke="url(#grad1)"
                                opacity="0.5"
                            />
                        </g>
                        <g className="m1_cGroup">
                            <circle
                                className="c1_line c1_line1"
                                cx="350"
                                cy="300"
                                r="280"
                                fill="none"
                                strokeWidth="3"
                                stroke="url(#grad1)"
                                opacity="0.5"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <div className={'gate2 left-[52rem] w-[10rem] '}>
                <Image priority {...gate1} />
            </div>
            <div className={'text2 left-[55rem] w-[30rem] '}>
                <Image priority {...text1} />
            </div>
            <div className={'box1_1 left-[12rem] w-[8rem]  '}>
                <Image priority {...box1} />
            </div>
            <div className={'box1_2 left-[2rem] w-[10rem] '}>
                <Image priority {...box2} />
            </div>
            <div className={'person  w-[40rem]  '}>
                <div className={' relative left-[15rem]   '}>
                    <Image priority {...person} />
                </div>

                {/*<div className={'bg-gradient-to-t from-[#18181A] h-[100px] absolute bottom-0 w-[1350px] '} />*/}
                {/*<div className={' bg-[#18181A] h-[500px] absolute bottom-[-500px] w-[1350px] '} />*/}
            </div>

            <div className={'box1_3 left-[2rem] w-[14rem]  '}>
                <Image priority {...box3} />
            </div>
        </>
    );
};

export default Page2;

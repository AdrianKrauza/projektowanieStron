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
            // .add(() => {
            window.addEventListener('mousemove', (e) => {
                gsap.to('.m1_cGroup', {
                    duration: 1,
                    x: (i) => (e.clientX / window.innerWidth / (i + 1)) * 150,
                    rotation: Math.random() * 0.1,
                    overwrite: 'auto',
                });
            });
            // }, 'orbs+=0.5');
        }, 0);
    });

    return (
        <>
            <div className={'bg2 w-[1350px] h-[700px] bg-[#18181A]  rounded-t-[90px] overflow-hidden'}>
                <style jsx>
                    {`
                        .gradient {
                            position: absolute;
                            right: -507px;
                            bottom: -947px;
                            width: 2000px;
                            height: 2000px;
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
                                cx="350"
                                cy="300"
                                r="550"
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
            <div className={'gate2 left-[650px] '}>
                <Image priority {...gate1} />
            </div>
            <div className={'text2 left-[700px]  '}>
                <Image priority {...text1} />
            </div>
            <div className={'box1_1 left-[210px]  '}>
                <Image priority {...box1} />
            </div>
            <div className={'box1_2 left-[50px]  '}>
                <Image priority {...box2} />
            </div>
            <div className={'person    '}>
                <div className={' relative left-[185px]   '}>
                    <Image priority {...person} />
                </div>

                <div className={'bg-gradient-to-t from-[#18181A] h-[100px] absolute bottom-0 w-[1350px] '} />
                <div className={' bg-[#18181A] h-[500px] absolute bottom-[-500px] w-[1350px] '} />
            </div>

            <div className={'box1_3 left-[100px]  '}>
                <Image priority {...box3} />
            </div>
        </>
    );
};

export default Page2;

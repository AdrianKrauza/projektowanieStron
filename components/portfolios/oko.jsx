import Image from 'next/image';
import page1 from '/assets/portfolios/Projektowanie-strony-OKO.jpg';
import page3 from '/assets/portfolios/Przyklad-strony (1).png';
import shape2 from '/assets/portfolios/Dlon-Artefakt.png';
import hand from '/assets/portfolios/Dlon-Mobile-Design.png';
import shape1 from '/assets/portfolios/Tlo-strony.png';
import crowd from '/assets/portfolios/Tlum.png';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
//
const Oko = () => {
    const containerRef = useRef();
    const page1Ref = useRef();
    const page3Ref = useRef();
    const shape1Ref = useRef();
    const shape2Ref = useRef();
    const handRef = useRef();
    const crowdRef = useRef();
    const videoRef = useRef();
    const circle1Ref = useRef();
    const [gradient2State, setGradient2State] = useState(200);
    useEffect(() => {
        const mouseMove = ({ clientX, clientY }) => {
            const { innerHeight, innerWidth } = window;
            shape2Ref.current.style.transform = `translate(${(clientX / innerWidth) * 20 - 20}px,${
                (clientY / innerHeight) * 20 - 20
            }px)`;
            handRef.current.style.transform = `translate(${(clientX / innerWidth) * 5 - 5}px,${
                (clientY / innerHeight) * 5 - 5
            }px)`;
        };
        window.addEventListener('mousemove', mouseMove);
        setTimeout(() => {
            const ease = 'none';
            const scrollTrigger = {
                trigger: containerRef.current,
                start: '0 70%',
                end: '0% 40%',
                scrub: 3,
                markers: true,
            };
            gsap.to(circle1Ref.current, {
                y: -66,
                x: -66,
                ease,
                scrollTrigger,
            });
            gsap.to(shape1Ref.current, {
                y: -240,
                ease,
                scrollTrigger: {
                    ...scrollTrigger,
                    scrub: 7,
                },
            });

            gsap.to(page1Ref.current, {
                y: -160,
                ease,
                scrollTrigger,
            });
            gsap.to(page3Ref.current, {
                scrollTrigger: {
                    onUpdate: (e) => {
                        setGradient2State(200 - e.progress * 200);
                    },
                    ...scrollTrigger,
                    start: '0 70%',
                    end: '0% 20%',
                },
            });
            gsap.to(page3Ref.current, {
                y: 200,
                ease,
                scrollTrigger: {
                    ...scrollTrigger,
                    start: '0 40%',
                    end: '0% 20%',
                },
            });
        }, 0);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);
    //
    return (
        <div className={'flex justify-center gap-[10rem] bg-darkGray-900 h-[80rem] pt-[20rem] '}>
            <div className={'relative z-10 mt-[2rem]'}>
                <video
                    src={'/assets/portfolios/ezgif.com-gif-maker (35).mp4'}
                    autoPlay
                    muted
                    loop
                    className={'w-[15rem] mb-[2rem]'}
                />
                <h2 className={'text-white font-roboto text-[3rem] font-thin'}>
                    Banach Outsourcing <br />
                    Przyklad strony w branzy
                    <br />
                    Konsultingu, doradztwa i fin
                    <br />
                </h2>
                <p className={'text-white font-roboto text-[1.2rem] mt-[1rem]'}>
                    0d roku 2015 pisze posty da Kawiarni Cafe Klaps organizuje proste
                    <br />
                    kampanie marketingowe. W 2018 roku narodzila sie moja pasja
                    <br />
                    do pisania wierszy, co przerodzito sie w pisanie tekstów.
                </p>
                <button className={'w-[14rem] mt-[2rem] h-[3rem] bg-[#082219] rounded-[2rem]'} />
            </div>

            <div ref={containerRef} className={'relative w-[40rem] mt-[5rem] '}>
                <div
                    ref={circle1Ref}
                    className={'left-[200px] w-[500px] h-[500px] top-[-150px] absolute '}
                    style={{ background: 'radial-gradient(circle, #1D1932 0%, rgba(0,0,0,0) 74%);' }}
                />
                <div ref={shape1Ref} className={'left-[300px] top-[70px] absolute '}>
                    <Image {...shape1} />
                </div>
                <div ref={page1Ref} className={'left-0 top-[100px] absolute rounded-t-[30px] overflow-hidden'}>
                    <Image {...page1} />
                    <div ref={shape2Ref} className={'left-[380px] top-[100px] absolute '}>
                        <Image {...shape2} />
                    </div>
                    <div ref={handRef} className={'left-[350px] top-[160px] absolute'}>
                        <Image {...hand} />
                    </div>
                    <div
                        style={{
                            background: `  radial-gradient(circle at 430px 170px, rgba(11,5,44,0) ${
                                -gradient2State + 100
                            }%, #0B052C ${200 - gradient2State}%)`,
                        }}
                        className={'absolute w-full h-full  top-[0rem]'}
                    />
                </div>

                <div ref={crowdRef} className={'left-0 top-[180px] absolute'}>
                    <Image {...crowd} />
                </div>
                <div ref={videoRef} className={'left-[25px] top-[290px] absolute'}>
                    <div className={'bg-[#0C012B] w-[538px] h-[200px] absolute top-0 left-[-25px] '} />
                    <video
                        src={'/assets/portfolios/Hipnotyzuj-strona-oko.mp4'}
                        autoPlay
                        muted
                        loop
                        className={'relative'}
                    />
                </div>
                <div ref={page3Ref} className={'left-[15px] top-[180px] absolute scale-x-[1.7]'}>
                    <Image {...page3} />
                    <div className={'bg-[#141414] w-[538px] h-[400px] absolute left-[-30px] translate-y-[-20px] '} />
                </div>
            </div>
        </div>
    );
};
//
export default Oko;

import Image from 'next/image';
import page1 from '/assets/portfolios/Projektowanie-strony-OKO.jpg';
import page3 from '/assets/portfolios/Przyklad-strony (1).png';
import shape2 from '/assets/portfolios/Dlon-Artefakt.png';
import hand from '/assets/portfolios/Dlon-Mobile-Design.png';
import shape1 from '/assets/portfolios/Tlo-strony.png';
import crowd from '/assets/portfolios/Tlum.png';
import oko from '/assets/portfolios/Logo-strony-oko.jpg';
import hipnotyzuj from '/assets/oko/Hipnotyzuj.gif';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
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
        <div className={'flex justify-center gap-[10rem] bg-darkGray-900 h-[50rem] pt-[10rem] '}>
            <div className={'relative z-10 mt-[2rem]'}>
                <div className={'mb-[2rem]'}>
                    <Image priority {...oko} />
                </div>

                <h2 className={'text-[#60578f] font-roboto text-[2.5rem] font-thin mb-[2rem]'}>
                    OKO - Filmowy projekt <br />
                    strony dla studia wideo
                    <br />
                    rozszerzonej rzeczywistości.
                </h2>
                <p
                    className={
                        'text-[#3e3e3f] ml-[1rem] border-l-[1px] pl-[1rem] font-roboto text-[1.7rem] mt-[1rem] leading-[1.2]'
                    }
                >
                    Jestem bardzo zadowolony z finalnego efektu
                    <br />
                    i dopracowania wszystkich szczegółów.
                    <br />
                    Pełen profesjonalizm. Polecam.
                </p>
                <p
                    className={
                        'text-[#3e3e3f] ml-[1rem] pl-[1rem] mt-[2rem] font-roboto text-[1rem] mt-[0.8rem] mb-[3rem]'
                    }
                >
                    Witalij Bińkowski - Właściciel
                </p>
                <Link href={'/oko'} target={'_blank'} rel="noreferrer" passHref>
                    <a className={'text-[1.5rem] text-[#342c5d]'}>Zobacz realizacje</a>
                </Link>
            </div>

            <div ref={containerRef} className={'relative w-[40rem] mt-[5rem] '}>
                <div
                    ref={circle1Ref}
                    className={'left-[200px] w-[500px] h-[500px] top-[-150px] absolute '}
                    style={{ background: 'radial-gradient(circle, #1D1932 0%, rgba(0,0,0,0) 74%);' }}
                />
                <div ref={shape1Ref} className={'left-[300px] top-[70px] absolute '}>
                    <Image priority {...shape1} />
                </div>
                <div ref={page1Ref} className={'left-0 top-[100px] absolute rounded-t-[30px] overflow-hidden'}>
                    <Image priority {...page1} />
                    <div ref={shape2Ref} className={'left-[380px] top-[100px] absolute '}>
                        <Image priority {...shape2} />
                    </div>
                    <div ref={handRef} className={'left-[350px] top-[160px] absolute'}>
                        <Image {...hand} priority />
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
                    <Image {...crowd} priority />
                </div>
                <div ref={videoRef} className={'left-[25px] top-[290px] absolute'}>
                    <div className={'bg-[#0C012B] w-[538px] h-[200px] absolute top-0 left-[-25px] '} />
                    <div className={'flex justify-center w-[490px]'}>
                        <Image {...hipnotyzuj} />
                    </div>
                    {/*<video*/}
                    {/*    src={'/assets/portfolios/Hipnotyzuj-strona-oko.mp4'}*/}
                    {/*    autoPlay*/}
                    {/*    muted*/}
                    {/*    loop*/}
                    {/*    className={'relative'}*/}
                    {/*/>*/}
                </div>
                <div ref={page3Ref} className={'left-[15px] top-[180px] absolute scale-x-[1.7]'}>
                    <Image {...page3} priority />
                    <div className={'bg-[#141414] w-[538px] h-[400px] absolute left-[-30px] translate-y-[-20px] '} />
                </div>
            </div>
        </div>
    );
};
//
export default Oko;

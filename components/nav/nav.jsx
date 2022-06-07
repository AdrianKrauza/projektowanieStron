import Logo from '../header/logo';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
    const navRef = useRef();
    useEffect(() => {}, []);
    return (
        <div className={'absolute w-screen '}>
            <div className={'relative overflow-hidden h-[52px] black z-50 bg-black '}>
                <nav ref={navRef} className={'bg-black  absolute z-[999]  w-screen h-[42px] '}>
                    <div
                        className={
                            'p-[3px] w-[85rem] relative flex left-1/2 -translate-x-1/2 items-center justify-between h-[52px] m:w-full m:p-0'
                        }
                    >
                        <div className={'flex items-center '}>
                            <div className={'m:scale-[.8]'}>
                                <Logo />
                            </div>
                            <p className={' m:hidden text-[12px] ml-[5px] font-bold'}>Dlaczego owocne strony?</p>
                            <p className={' m:hidden text-[12px] ml-[5px] font-bold'}>|</p>
                            <p className={' m:hidden text-[12px] ml-[5px] font-bold'}>Gwarancja</p>
                            <p className={' m:hidden text-[12px] ml-[5px] font-bold'}>|</p>
                            <p className={' m:hidden text-[12px] ml-[5px] font-bold'}>Przykłady realizacji </p>
                        </div>
                        <div className={'flex items-center m:mr-[10px] m:flex-row-reverse'}>
                            <button
                                className={
                                    'form-open font-bold bg-[#0071e3] text-white text-[12px] px-[20px] py-[10px] mr-[20px] m:mx-[10px] rounded-[50px] m:text-[9px] m:px-[10px] m:py-[8px]'
                                }
                            >
                                Poproszę o ofertę
                            </button>
                            <a
                                href=""
                                className={
                                    'font-bold text-white text-[12px] m:border-2 m:border-[#2f2f2f] px-[20px] py-[10px] rounded-[50px] m:text-[9px] m:px-[10px] m:py-[8px]'
                                }
                            >
                                +48 660 970 980
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;

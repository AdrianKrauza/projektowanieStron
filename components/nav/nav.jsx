import Logo from '../header/logo';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const vh = (coef) => window.innerHeight * (coef / 100);
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
    const navRef = useRef();
    useEffect(() => {}, []);
    return (
        <div className={'absolute w-screen m:hidden'}>
            <div className={'relative overflow-hidden h-[52px] black z-50 bg-black '}>
                <nav ref={navRef} className={'bg-black m:hidden absolute z-[999]  w-screen h-[42px] '}>
                    <div
                        className={
                            'p-[3px] w-[85rem] relative flex left-1/2 -translate-x-1/2 items-center justify-between'
                        }
                    >
                        <div className={'flex items-center'}>
                            <Logo />
                            <p className={'text-[12px] ml-[5px] font-bold'}>Dlaczego owocne strony?</p>
                            <p className={'text-[12px] ml-[5px] font-bold'}>|</p>
                            <p className={'text-[12px] ml-[5px] font-bold'}>Gwarancja</p>
                            <p className={'text-[12px] ml-[5px] font-bold'}>|</p>
                            <p className={'text-[12px] ml-[5px] font-bold'}>Przykłady realizacji </p>
                        </div>
                        <div className={'flex items-center'}>
                            <button
                                className={
                                    'form-open font-bold bg-[#0071e3] text-white text-[12px] px-[20px] py-[10px] mr-[20px] rounded-[50px]'
                                }
                            >
                                Poproszę o ofertę
                            </button>
                            <a href="" className={'font-bold text-white text-[12px]'}>
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

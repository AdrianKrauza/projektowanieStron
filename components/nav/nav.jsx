import Logo from '../header/logo';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const vh = (coef) => window.innerHeight * (coef / 100);
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
    const navRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: '.scroll-content ',
                pin: navRef.current,
                start: '0% 0%',

                end: `100% 100%`,
            });
        }, 0);
    }, []);
    return (
        <div className={' h-[50px] '}>
            <nav ref={navRef} className={'bg-black m:hidden absolute z-[999]  w-screen h-[50px] '}>
                <div
                    className={
                        'p-[10px] w-[85rem] relative flex left-1/2 -translate-x-1/2 items-center justify-between'
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
                                'font-bold bg-[#0071e3] text-white text-[12px] px-[20px] py-[10px] mr-[20px] rounded-[50px]'
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
    );
};

export default Nav;

import useTextAnimations from '../../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerImage from '/assets/footer/Wierzymy-w-Male-Firmy.png';
import form from '/assets/footer/form.png';
const vh = (coef) => window.innerHeight * (coef / 100);
const Footer = ({ containerRef }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    useEffect(() => {
        setTimeout(() => {}, 1000);
    }, []);
    return (
        <div className={'footer bg-black '} style={{ width: 'inherit' }}>
            <div className={'m-auto flex justify-center'}>
                <Image {...footerImage} />
            </div>
            <button
                className={
                    ' bg-[#E3E3E3] color-[#E3E3E3]  text-[1.6rem] py-[1rem] rounded-[2rem] font-normal text-center w-[37rem] m-auto block my-[2rem]'
                }
            >
                Wyślijcie mi niezobowiązującą ofertę
            </button>

            <div className={'flex w-[37rem] gap-[2rem] m-auto '}>
                <a
                    href={'/'}
                    className={
                        'border-[1px] border-[#E3E3E3] color-[#E3E3E3] text-[1.6rem] font-normal px-[2rem] py-[1rem] rounded-[2rem] w-1/2 text-center'
                    }
                >
                    Powrót
                </a>

                <a
                    href={'/banach'}
                    className={
                        'border-[1px] border-[#E3E3E3] color-[#E3E3E3] text-[1.6rem] font-normal px-[2rem] py-[1rem] rounded-[2rem] w-1/2 text-center'
                    }
                >
                    Następny projekt
                </a>
            </div>
        </div>
    );
};

export default Footer;

import Image from 'next/image';
import footerImage from '../../assets/footer/Wierzymy.jpg';
import form from '../../assets/footer/form.png';
import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';

const Footer = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headerRef, headerRef, -50, 250, false, true);
        }, 1000);
    }, []);
    return (
        <div className={'footer bg-darkGray-900 pt-[5rem] '} style={{ width: 'inherit' }}>
            <div className={'text-center mb-[5rem]'}>
                <Image {...footerImage} priority />
            </div>
            <h2 ref={headerRef} className={'text-center text-[white] mb-[10rem]'}>
                Dobry pomysł na/ biznes jest wart/ dobrej strony.
            </h2>

            <div className={'text-center mb-[1.5rem]'}>
                <Image {...form} priority />
            </div>

            <p className={'text-center text-white opacity-60 pb-[10rem] text-[1rem]'}>© Owocni.pl</p>
        </div>
    );
};

export default Footer;

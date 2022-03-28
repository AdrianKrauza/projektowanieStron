import useTextAnimations from '../../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import footerImage from '/assets/footer/Wierzymy.jpg';
import form from '/assets/footer/form.png';
const vh = (coef) => window.innerHeight * (coef / 100);
const Footer = ({ containerRef }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            console.log(containerRef);
            AnimationHeadingScrub(
                headerRef,
                containerRef,
                6300 + vh(100) + 'px 100%',
                6610 + vh(100) + 'px 100%',
                false,
                true,
            );
        }, 1000);
    }, []);
    return (
        <div className={'footer bg-black '} style={{ width: 'inherit' }}>
            <div className={'text-center mb-[10rem]'}>
                <Image {...footerImage} />
            </div>

            <h2 ref={headerRef} className={'text-center text-[white] mb-[10rem]'}>
                Dobry pomysł na/ biznes jest wart/ dobrej strony.
            </h2>
            <div className={'text-center'}>
                <Image {...form} />
            </div>
        </div>
    );
};

export default Footer;

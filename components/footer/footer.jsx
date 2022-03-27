import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import footerImage from '/assets/footer/Wierzymy.jpg';
const Footer = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headerRef, headerRef);
        }, 1000);
    }, []);
    return (
        <div className={'bg-[black] relative mt-[-40rem]'}>
            <div className={'text-center'}>
                <Image {...footerImage} />
            </div>

            <h2 ref={headerRef} className={'text-center text-[white]'}>
                Dobry pomysł na/ biznes jest wart/ dobrej strony.
            </h2>
        </div>
    );
};

export default Footer;

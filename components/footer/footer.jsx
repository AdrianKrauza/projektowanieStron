import Image from 'next/image';
import footerImage from '../../assets/footer/Wierzymy.jpg';
import form from '../../assets/footer/form.png';
import useTextAnimations from '../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';
import Form from '../form/form';

const Footer = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headerRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headerRef, headerRef, -50, 250, false, true);
        }, 1000);
    }, []);
    return (
        <div
            className={'footer bg-darkGray-900 pt-[5rem] relative z-50 -mt-[2px] m:pt-[25rem] '}
            style={{ width: 'inherit' }}
        >
            <div className={'text-center mb-[5rem]'}>
                <Image {...footerImage} priority />
            </div>
            <h2 ref={headerRef} className={'text-center text-[white] mb-[5rem] m:text-[10rem] m:mb-[25rem]'}>
                Dobry pomysł na/ biznes jest wart/ dobrej strony.
            </h2>
            {/**/}
            <div className={'text-center mb-[1.5rem]'}>
                <Form />
            </div>

            <p className={'text-center text-white opacity-60 pb-[10rem] text-[1rem]'}>© Owocni.pl</p>
        </div>
    );
};

export default Footer;

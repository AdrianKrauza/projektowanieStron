import { useEffect, useRef } from 'react';
import logoImg from '/assets/header/logo-anim.png';
import Image from 'next/image';
import gsap, { SteppedEase } from 'gsap';

const Logo = () => {
    const logoRef = useRef(null);
    useEffect(() => {
        const logo = gsap.to(logoRef.current, {
            duration: 4,
            // delay: 9,
            y: -5670 + 91,
            ease: SteppedEase.config(62),
        });
        logo.progress(100);
        const handleMouseEnter = () => {
            logo.reverse();
        };

        const handleMouseLeave = () => {
            logo.play();
        };

        logoRef.current.addEventListener('mouseover', handleMouseEnter);
        logoRef.current.addEventListener('mouseout', handleMouseLeave);
    }, []);

    return (
        <div className={'inline-block w-[130px] h-[45px] overflow-hidden relative opacity-[0.2]'}>
            <div ref={logoRef} className={'absolute'}>
                <Image priority {...logoImg} />
            </div>
        </div>
    );
};

export default Logo;

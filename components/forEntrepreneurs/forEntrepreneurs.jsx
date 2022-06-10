import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useTextAnimations from '../../hooks/useTextAnimations';

const ForEntrepreneurs = ({ align = 'center' }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const headingRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(headingRef, headingRef, -50, 200, false, true);
        }, 0);
    }, []);
    return (
        <h2 ref={headingRef} className={`relative z-20 text-${align} text-darkGray `}>
            Dla przedsiębiorców,/ którzy oczekują/ rezultatów.
        </h2>
    );
};

export default ForEntrepreneurs;

import FAQ from '../../guarantee/desktop/FAQ';
import useTextAnimations from '../../../hooks/useTextAnimations';
import { useEffect, useRef } from 'react';

const Faq = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const heading2Ref = useRef();
    useEffect(() => {
        setTimeout(() => {
            const w = '';
            AnimationHeadingScrub(heading2Ref, heading2Ref, -50, 200, false, true);
        }, 0);
    }, []);
    return (
        <div>
            <p className={'text-center mt-[5rem] text-[3rem]'}>A gdy idzie o kwestie techniczne to:</p>
            <h2 className={'text-center my-[5rem] mt-[1rem] text-[10rem] tracking-[-0.6rem]'} ref={heading2Ref}>
                Wszystkie/ odpowiedzi/ brzmią - tak!
            </h2>
            <FAQ />
        </div>
    );
};

export default Faq;

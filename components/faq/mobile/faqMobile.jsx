import Faq from '../../guarantee/desktop/FAQ';
import { useEffect, useRef } from 'react';
import useTextAnimations from '../../../hooks/useTextAnimations';

const FaqMobile = () => {
    const { AnimationHeadingScrub } = useTextAnimations();
    const heading2Ref = useRef();
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(heading2Ref, heading2Ref, -50, 200, false, true);
        }, 0);
    }, []);
    return (
        <div className={'bg-lightGray mt-[25rem] pb-[20vw]'}>
            <h2 className={'text-center my-[5rem] mt-[1rem] text-[10rem] tracking-[-0.6rem]'} ref={heading2Ref}>
                Wszystkie/ odpowiedzi/ brzmią - tak!
            </h2>
            <div className={'mt-[15rem]'}>
                <Faq />
            </div>
        </div>
    );
};

export default FaqMobile;

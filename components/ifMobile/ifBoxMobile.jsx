import gsap from 'gsap';

import { useEffect, useRef } from 'react';
const IfBox = ({ el, index, containerRef, start, second }) => {
    const boxRef = useRef();
    const textRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(
                textRef.current.querySelectorAll('*'),
                {
                    opacity: 0.1,
                },
                {
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: 'body',
                        start: `0 ${-30 - index * 10}%`,
                        end: `0 ${-40 - index * 10}%`,
                        scrub: true,
                    },
                },
            );

            gsap.fromTo(
                boxRef.current,
                { y: `${100 + 70 * index}vh ` },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: 'body',
                        start: `0 ${0}%`,
                        end: `0 ${-40}%`,
                        scrub: true,
                    },
                },
            );
        }, 0);
    }, []);
    return (
        <div ref={boxRef} className={`relative `}>
            <p ref={textRef} className={'text-[4.3rem] text-[#CBCBCB] leading-[1.1]'}>
                {el[0].split('/').map((text) => (
                    <b key={text} className={'inline font-black'}>
                        <br />
                        {text}
                    </b>
                ))}
                <br />

                {el[1].split('/').map((text) => (
                    <span key={text} className={'inline'}>
                        {text} <br />
                    </span>
                ))}
            </p>
        </div>
    );
};

export default IfBox;

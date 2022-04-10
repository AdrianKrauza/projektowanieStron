import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const elementMove = (ref, y, nieWiemCoToTakiego = 0) => {
    gsap.fromTo(
        ref.current,
        {
            y: `${-2000}px`,
        },
        {
            y: `${2000}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        },
    );
};

const Element = ({ children, start, end, left, width, className, nieWiemCoToTakiego }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            elementMove(elementRef, end, nieWiemCoToTakiego);
        }, 0);
    }, []);
    return (
        <div
            ref={elementRef}
            style={{ top: `${start}px`, left: `${left}px`, width: `${width}px` }}
            className={`absolute  ${className}`}
        >
            {children}
        </div>
    );
};

export default Element;

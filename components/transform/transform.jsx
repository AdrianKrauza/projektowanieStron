import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
const delays = [0, 0.6, 0.4, 0.2, 0.1];
gsap.registerPlugin(ScrollTrigger);
const Transform = ({ currentPageState }) => {
    const containerRef = useRef(null);
    const [first, setFirst] = useState(true);
    useEffect(() => {
        if (first) {
            setFirst(false);
            return;
        }
        const tl = gsap.timeline();
        tl.to(
            containerRef.current.querySelectorAll('div'),

            {
                y: '100%',
                duration: 0.45,
                delay: (el) => delays[el],
                ease: 'Power2.easeInOut',
            },
        ).to(containerRef.current.querySelectorAll('div'), {
            y: '200%',
            duration: 0.45,
            delay: (el) => delays[el],
            ease: 'Power2.easeOut',
        });
    }, [currentPageState]);
    return (
        <div ref={containerRef} className={'fixed top-0 left-0 h-screen w-screen pointer-events-none'}>
            {['#A1FA78', '#56F8B2', '#72FBA1', '#8CFB8D', '#A2FA77'].map((color) => (
                <div key={color} className={`w-full h-full absolute -top-full left-0`} style={{ background: color }} />
            ))}
        </div>
    );
};

export default Transform;

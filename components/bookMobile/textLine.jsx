import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Line = ({ line }) => {
    const lineRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: lineRef.current,
                    scrub: true,
                    start: 'top-=310% top+=60%',
                    end: 'bottom+=310% top+=60%',
                },
            });
            tl.to(lineRef.current, {
                opacity: 0.4,
                '--font-weight': 100,
            });
            tl.to(lineRef.current, {
                opacity: 1,
                '--font-weight': 350,
            });
        }, []);
    }, []);

    return (
        <span
            className={'block opacity-40'}
            ref={lineRef}
            key={line}
            style={{ fontVariationSettings: `"wght"var(--font-weight, 100)` }}
        >
            {line}
        </span>
    );
};
export default Line;

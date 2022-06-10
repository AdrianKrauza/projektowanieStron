// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// const Line = ({ line }) => {
//     const lineRef = useRef();
//     useEffect(() => {
//         setTimeout(() => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: lineRef.current,
//                     scrub: true,
//                     start: 'top-=410% top+=60%',
//                     end: 'bottom+=410% top+=60%',
//                 },
//             });
//             tl.to(lineRef.current, {
//                 opacity: 0.4,
//                 '--font-weight': 100,
//             });
//             tl.to(lineRef.current, {
//                 opacity: 1,
//                 '--font-weight': 350,
//             });
//         }, []);
//     }, []);
//
//     return (
//         <span
//             className={'block opacity-40'}
//             ref={lineRef}
//             key={line}
//             style={{ fontVariationSettings: `"wght"var(--font-weight, 100)` }}
//         >
//             {line}
//         </span>
//     );
// };
// export default Line;
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const size = {
    zobacz: 6,
    'tę grubą': 7,
    'gwarancję...': 8,
};
const sizeMobile = {
    zobacz: 6,
    'tę grubą': 7,
    'gwarancję...': 8,
};

const Line = ({ line }) => {
    const [isMobile, setIsMobile] = useState(false);
    const lineRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            if (window.innerWidth < 1000) {
                setIsMobile(true);
            }
            ScrollTrigger.matchMedia({
                '(min-width: 1000px)': () => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: lineRef.current,
                            scrub: true,
                            start: 'top-=300% top+=40%',
                            end: 'bottom+=300% top+=40%',
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
                    tl.to(lineRef.current, {
                        opacity: 0.4,
                        '--font-weight': 100,
                    });
                },
                '(max-width: 1000px)': () => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: lineRef.current,
                            scrub: true,
                            start: 'top-=550% top+=75%',
                            end: 'bottom+=550% top+=75%',
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
                },
            });
        }, 0);
    }, []);
    return (
        <span
            className={'block opacity-40'}
            ref={lineRef}
            key={line}
            style={{
                textAlign: size[line] && isMobile && 'center',
                fontVariationSettings: `"wght"var(--font-weight, 100)`,
                fontSize: !isMobile && size[line] + 'rem',
                color: line === '|' && 'transparent',
            }}
        >
            {line}
        </span>
    );
};
export default Line;

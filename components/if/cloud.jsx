import Lottie from 'lottie-react';
import SpiralData from '../../assets/cards3/spiral.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
const Cloud = () => {
    const spiralRef = useRef();
    const spiralDataRef = useRef();
    useEffect(() => {
        spiralDataRef.current.goToAndStop(-1, true);
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: 'body',
                pin: spiralRef.current,
                start: '0% 0%',
                end: `0 -200%`,
            });
            ScrollTrigger.create({
                trigger: 'body',
                start: `0 0%`,
                end: `0 -50%`,
                onUpdate: ({ progress }) => {
                    spiralDataRef.current.goToAndStop(Math.floor(24 * progress - 1), true);
                },
                // onLeave: () => {
                //     document.body.classList.remove('bg-darkGray-900');
                //     document.body.classList.add('bg-lightGray');
                // },
                // onEnterBack: () => {
                //     document.body.classList.remove('bg-lightGray');
                //     document.body.classList.add('bg-darkGray-900');
                // },
            });
        }, 0);
    }, []);
    return (
        <div ref={spiralRef} className={'absolute top-0 h-screen w-screen cloudIf'}>
            <Lottie
                style={{ transform: 'rotateY(183deg)' }}
                lottieRef={spiralDataRef}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                className={'spiral  h-screen '}
                animationData={SpiralData}
            />
        </div>
    );
};

export default Cloud;

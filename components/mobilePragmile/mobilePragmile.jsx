import { useEffect, useRef } from 'react';
import Page1 from './components/Page1';
import useMobilePortfolio from '/hooks/useMobilePortfolio';
// import usePortfolio from '../../hooks/usePortfolio';
const MobilePragmile = () => {
    const containerRef = useRef();
    const { pinPortfolio, moveElement, scrollAnimationElement } = useMobilePortfolio();
    useEffect(() => {
        setTimeout(() => {
            pinPortfolio(containerRef);
            moveElement('.page1', 1000, 6000);
            moveElement('.text1', 1000, 6500);
            moveElement('.gate1', 1000, 6700);
        }, 0);
    }, []);
    return (
        <div ref={containerRef} className={'h-[20000px]'}>
            <div className={'pin w-[95vw] relative h-screen  bg-[#141414] -translate-x-1/2 left-1/2 '}>
                <Page1 />
            </div>
        </div>
    );
};

export default MobilePragmile;

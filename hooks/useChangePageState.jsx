import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const UseChangePageState = () => {
    const [pageState, setPageState] = useState(0);
    const [currentPageState, setCurrentPageState] = useState(0);
    const [countDown, setCuntDown] = useState(false);
    const [fromEnter, setFromEnter] = useState();
    useEffect(() => {
        if (!countDown) {
            setFromEnter(pageState > currentPageState ? 'top' : 'bottom');

            setCurrentPageState(pageState);
            // setCuntDown(true);
            // setTimeout(() => {
            //     setCuntDown(false);
            // }, 3000);
        } else {
            setPageState(currentPageState);
        }
    }, [pageState]);
    useEffect(() => {
        const t = ScrollTrigger.getAll();
        t.forEach((t) => t.kill());
    }, [currentPageState]);
    return { fromEnter, setPageState, currentPageState };
};

export default UseChangePageState;

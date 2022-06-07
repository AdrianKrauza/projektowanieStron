import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const UseSmoothScrollBar = ({ children }) => {
    const [scrollBarCreated, setScrollBarCreated] = useState(false);
    const scroller = useRef();
    const bodyScrollBar = useRef();

    useEffect(() => {
        setTimeout(() => {


        document.querySelector('.footerForm').addEventListener('click',()=>{
            bodyScrollBar.current?.scrollTo(0, 7550);
        })   }, 0);
        scroller.current = document.querySelector('.scroller');
        bodyScrollBar.current = Scrollbar.init(scroller.current, {
            damping: 0.05,
            delegateTo: document,
            alwaysShowTracks: true,
            syncCallbacks: true,
        });

        setScrollBarCreated(true);
        setTimeout(() => {
            if (document.querySelector('.gsap-marker-scroller-start')) {
                const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
                bodyScrollBar.current.addListener(({ offset }) => {
                    gsap.set(markers, {
                        marginTop: -offset.y,
                    });
                });
            }
        }, 0);
        setTimeout(() => {
            document.querySelector('.scroll-content >div').classList.remove('stopScroll');
        }, 1000);
        return () => {
            const t = ScrollTrigger.getAll();
            t.forEach((t) => t.kill());
        };
    }, []);
    // useEffect(() => {
    //     if(fromEnter === "top"){
    //         bodyScrollBar.current?.scrollTo(0, 50);
    //
    //         setTimeout(() => {
    //             // document.querySelector(".scroll-content >div").classList.add("stopScroll");
    //         }, 100);
    //
    //         setTimeout(() => {

    //         }, 1000);
    //
    //     }else if(fromEnter === "bottom"){
    //         // setTimeout(() => {
    //         //     bodyScrollBar.current?.scrollTo(0, 30);
    //         // }, 3500);
    //     }
    // }, [pageState]);
    useEffect(() => {
        if (scrollBarCreated) {
            ScrollTrigger.scrollerProxy(scroller.current, {
                scrollTop(value) {
                    if (arguments.length) {
                        bodyScrollBar.current.scrollTop = value;
                    }
                    return bodyScrollBar.current.scrollTop;
                },
            });

            bodyScrollBar.current.addListener(ScrollTrigger.update);
            ScrollTrigger.defaults({ scroller: scroller.current });
        }
    }, [scrollBarCreated]);
    return (
        <div className="scroller" style={{ height: '100vh', width: '100vw' }}>
            {children}
        </div>
    );
};

export default UseSmoothScrollBar;

import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useIsMobile from "./useIsMobile";
gsap.registerPlugin(ScrollTrigger);

const UseSmoothScrollBar = ({ children }) => {
    const [scrollBarCreated, setScrollBarCreated] = useState(false);
    const scroller = useRef();
    const bodyScrollBar = useRef();
    const isMobile = useIsMobile()
    useEffect(() => {
        setTimeout(() => {



        document.querySelector('.footerForm')?.addEventListener('click',()=>{
            window.innerWidth < 1000 && bodyScrollBar.current?.scrollTo(0, 7550);
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
            const y = document.querySelector("#__next > div > div.scroller > div.scroll-content > div > div > div.bg-lightGray.mt-\\[200vh\\] > div")?.getBoundingClientRect().y
            document.querySelector('#nav1')?.addEventListener('click',()=>{

            // console.log(getOffset(document.querySelector("#__next > div > div.scroller > div.scroll-content > div > div > div.bg-lightGray.mt-\\[200vh\\] > div > div.absolute.-right-20.mt-40.m\\:z-30.m\\:shadow-\\[\\#e6e8ec_0px_-9px_13px_5px\\] > div > canvas")));
            bodyScrollBar.current?.scrollTo(0, y);
            })
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

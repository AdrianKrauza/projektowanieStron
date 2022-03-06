import Header from '../components/header/header';
import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Cards3 from '../components/cards3/cards3';
import Tablets from '../components/tablets/tablets';
import Oko from '../components/oko/oko';
import Book from '../components/book/book';
import Banach from '../components/banach/banach';

import { useRouter } from 'next/router';
import Guarantee from '../components/guarantee/guarantee';
import Pragmile from '../components/pragmile/pragmile';
import Letters from '../components/letters/letters';
import If from '../components/if/if';
gsap.registerPlugin(ScrollTrigger);
export default function Home({ index }) {
    const [scrollBarCreated, setScrollBarCreated] = useState(false);
    const scroller = useRef();
    const bodyScrollBar = useRef();
    const router = useRouter();
    useEffect(() => {
        // const {pathname} = Router
        // if(pathname == '/' ){


        // }
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
        });
        return () => {
            const t = ScrollTrigger.getAll();
            t.forEach((t) => t.kill());
        };
    }, []);

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
    const components = {
        header: <Header />,
        cards3: <Cards3 />,
        tablets: <Tablets />,
        book: <Book />,
        guarantee: <Guarantee />,
        oko: <Oko />,
    };
    return (
        // <div className="scroller" style={{ height: '100vh' }}>
        <div className="scroller" style={{ height: '100vh' }}>
            {/*<>{index && index.map((el) => components[el])}</>*/}
            {/*{index?.map((el) => {*/}
            {/*    if (el === 'oko') return <Oko />;*/}
            {/*})}*/}
            <Header />
            <Cards3 />
            <Tablets />
            <Letters />
            <Book />
            <Guarantee />
            <Pragmile />
            {/**/}
            <Banach />
            <Oko />
        </div>
    );
}
// export async function getStaticProps(context) {
//     return {
//         props: { index: context.params.index || '' }, // will be passed to the page component as props
//     };
// }

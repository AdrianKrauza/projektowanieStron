import Header from '../components/header/header';
import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import Cards3 from '../components/cards3/cards3';
import Tablets from '../components/tablets/tablets';
import Oko from '../components/oko/oko';
import Book from '../components/book/book';
import Banach from '../components/banach/banach';
import Guarantee from '../components/guarantee/guarantee';
import Pragmile from '../components/pragmile/pragmile';
import Letters from '../components/letters/letters';
import If from '../components/if/if';
import UseSmoothScrollBar from '../hooks/useSmoothScrollBar';
import UseChangePageState from '../hooks/useChangePageState';
import Transform from '../components/transform/transform';

const pageState = {
    0: (setPageState) => (
        <div>
            <Header />
            <Cards3 />
            <Tablets />
            {/*<Letters />*/}
            <Book />
            <Guarantee setPageState={setPageState} />
            <Pragmile setPageState={setPageState} />
            {/*<If />*/}
            {/*<If />*/}
            {/*<Banach />*/}
            {/*<Oko />*/}
        </div>
    ),
    1: (setPageState) => (
        <>
            <If />
            <Banach />
            <Oko />
        </>
    ),
};
export default function Home({ index }) {
    const [pageState2, setPageState2] = useState(0);
    const { fromEnter, setPageState, currentPageState } = UseChangePageState();
    useEffect(() => {
        setPageState2(currentPageState);
    }, [currentPageState]);
    return (
        <>
            <UseSmoothScrollBar pageState={pageState2} fromEnter={fromEnter}>
                <div>{pageState[pageState2](setPageState)}</div>
                {/*<Pragmile setPageState={setPageState} />*/}
                {/*<div className={'h-[40rem]'} />*/}
                {/*<Cards3 />*/}

                {/*<Pragmile />*/}
                {/*<Banach />*/}
                {/*<Oko />*/}
            </UseSmoothScrollBar>
            {/*<Transform currentPageState={currentPageState} />*/}
        </>
    );
}

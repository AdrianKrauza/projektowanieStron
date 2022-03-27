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
import MobilePragmile from '../components/mobilePragmile/mobilePragmile';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';

const pageState = {
    0: (setPageState) => (
        <div>
            <Header />
            {/**/}
            <div className={'pointer-events-none'}>
                <Cards3 />
                <Tablets />
            </div>
            <Letters />
            {/*<div className={'h-[50vh]'} />*/}
            <Book />
            <Guarantee />
            <Pragmile setPageState={setPageState} />
            {/*<If />*/}
            {/*<If />*/}
            {/*<Banach />*/}
            {/*<Oko />*/}
        </div>
    ),
    1: (setPageState) => (
        <div className={'bg-darkGray-900 min-h-[100vh]'}>
            <If />
            <Banach />/
            <Oko />
        </div>
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
                {/*<Nav />*/}
                {/*<div className={'h-[50vh]'} />*/}
                {/*<div className={'h-[100vh]'} />*/}
                {/*<MobilePragmile />*/}
                {/*<div className={'h-[100vh]'} />*/}
                {/*<div className={'h-[100vh]'} />*/}
                {/*<div className={'h-[100vh]'} />*/}
                {/*<div className={'h-[100vh]'} />*/}
                {/*<Pragmile setPageState={setPageState} />*/}
                <div>{pageState[pageState2](setPageState)}</div>
                {/*<Footer />*/}
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

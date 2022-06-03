import Header from '../components/header/header';
import Cards3 from '../components/cards3/cards3';
import Tablets from '../components/tablets/tablets';
import Book from '../components/book/book';
import Guarantee from '../components/guarantee/guarantee';
import Letters from '../components/letters/letters';
import If from '../components/if/if';
import Portfolios from '../components/portfolios/portfolios';
import Footer from '../components/footer/footer';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isMobile, setIsMobile] = useState('init');
    useEffect(() => {
        console.log(window.innerWidth, isMobile);
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    });
    if (isMobile === 'init') return <div></div>;
    return isMobile ? (
        <div style={{ display: isMobile ? 'block' : 'none' }}>mobile</div>
    ) : (
        <div style={{ display: !isMobile ? 'block' : 'none' }}>
            <Header />
            <If />
            <Cards3 />
            <Tablets />
            <Letters />
            <Book />
            <Guarantee />
            <Portfolios />
            <Footer />
        </div>
    );
}

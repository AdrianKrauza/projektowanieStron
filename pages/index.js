import Header from '../components/header/header';
import Cards3 from '../components/cards3/cards3';
import Tablets from '../components/tablets/tablets';
import Book from '../components/book/desktop/book';
import Guarantee from '../components/guarantee/guarantee';
import Letters from '../components/letters/letters';
import If from '../components/if/if';
import Portfolios from '../components/portfolios/portfolios';
import Footer from '../components/footer/footer';
import { useEffect, useState } from 'react';
import HeaderMobile from '../components/headerMobile/headerMobile';
import Form from '../components/form/formEl';
import IfMobile from '../components/ifMobile/ifMobile';
// import BookMobile from '../components/bookMobile/bookMobile';

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
        <div>
            <HeaderMobile />
            <IfMobile />
            {/*<div className={'h-[150vh]'}></div>*/}
            {/*<BookMobile />*/}
            {/*<div className={'h-[150vh]'}></div>*/}
            {/*<div className={'mt-[100vh] top-0 absolute '}>*/}
            {/*    <Form />*/}
            {/*    */}
            {/*</div>*/}
        </div>
    ) : (
        <div>
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

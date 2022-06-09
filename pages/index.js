import Header from '../components/header/header';
import Cards3 from '../components/cards3/desktop/cards3';
import Tablets from '../components/tablets/tablets';
import Book from '../components/book/desktop/book';
import Guarantee from '../components/guarantee/desktop/guarantee';
import Letters from '../components/letters/letters';
import If from '../components/if/if';
import Portfolios from '../components/portfolios/portfolios';
import Footer from '../components/footer/footer';
import { useEffect, useState } from 'react';
import HeaderMobile from '../components/headerMobile/headerMobile';
import Form from '../components/form/form';
import IfMobile from '../components/ifMobile/ifMobile';
import BookMobile from '../components/book/mobile/bookMobile';
import GuaranteeMobile from '../components/guarantee/mobile/guaranteeMobile';
import Cards3Mobile from '../components/cards3/mobile/cards3Mobile';
import getRatio from '../helpers/getRatio';
import UxMobile from '../components/ux/mobile/uxMobile';
import FaqMobile from '../components/faq/mobile/faqMobile';
// import BookMobile from '../components/bookMobile/bookMobile';

export default function Home() {
    const [isMobile, setIsMobile] = useState('init');
    useEffect(() => {
        console.log(window.innerWidth, isMobile);
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            return;
        }

        if (getRatio() < 0.55) {
            document.querySelector('html').style.fontSize = '1vw';
        } else {
            document.querySelector('html').style.fontSize = '.5vh';
        }
        window.onresize = () => {
            document.querySelector('html').style.fontSize = `${1 * getRatio()}vw`;
            if (getRatio() < 0.55) {
                document.querySelector('html').style.fontSize = '1vw';
            } else {
                document.querySelector('html').style.fontSize = '.5vh';
            }
        };
    }, []);
    if (isMobile === 'init') return <div></div>;
    return isMobile ? (
        <div className={'relative z-10'}>
            <HeaderMobile />
            <IfMobile />
            <BookMobile />
            <GuaranteeMobile />
            <Cards3Mobile />
            <UxMobile />
            <FaqMobile />
            <Footer />
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

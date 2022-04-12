import Header from '../components/header/header';
import Cards3 from '../components/cards3/cards3';
import Tablets from '../components/tablets/tablets';
import Book from '../components/book/book';
import Guarantee from '../components/guarantee/guarantee';
import Letters from '../components/letters/letters';
import If from '../components/if/if';
import Portfolios from '../components/portfolios/portfolios';
import Footer from '../components/footer/footer';

export default function Home({ index }) {
    return (
        <>
            <Header />
            <If />
            <Cards3 />
            <Tablets />
            <Letters />
            <Book />
            <Guarantee />
            <Portfolios />
            <Footer />
        </>
    );
}

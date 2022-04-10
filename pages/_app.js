import '../styles/globals.css';
import '../styles/odometer-theme-minimal.css';
import UseSmoothScrollBar from '../hooks/useSmoothScrollBar';
import Nav from '../components/nav/nav';
import { Main, NextScript } from 'next/document';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Nav />
            <UseSmoothScrollBar>
                <Component {...pageProps} />
            </UseSmoothScrollBar>
        </div>
    );
}

export default MyApp;

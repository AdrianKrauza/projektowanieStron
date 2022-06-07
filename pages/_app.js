import '../styles/globals.css';
import 'animate.css';
import '../styles/odometer-theme-minimal.css';
import UseSmoothScrollBar from '../hooks/useSmoothScrollBar';
import Nav from '../components/nav/nav';
import { useEffect, useState } from 'react';
import PopUpForm from '../components/form/popUpForm';
const Resize = () => {
    const [isResize, setIsResize] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsResize(true);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        isResize && (
            <div
                className={'m:hidden absolute z-[99999] bottom-0   bg-white bg-opacity-30 p-3 m-3 rounded'}
                style={{ backdropFilter: 'blur(12px)' }}
            >
                <p className={'text-[1.5rem] '}>
                    Wykryliśmy zmiany w<br /> rozmiarze okna przeglądarki. <br /> Prosze odświeżyć stronę.
                </p>
            </div>
        )
    );
};
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Resize />
            <Nav />
            <UseSmoothScrollBar>
                <div className={'max-w-screen overflow-hidden min-h-screen stopScroll'}>
                    {/*<div>*/}
                    <Component {...pageProps} />
                    {/*</div>*/}
                </div>
            </UseSmoothScrollBar>
            <PopUpForm />
        </div>
    );
}

export default MyApp;

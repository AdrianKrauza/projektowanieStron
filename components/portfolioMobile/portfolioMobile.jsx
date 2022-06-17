import useIsMobile from '../../hooks/useIsMobile';

const PortfolioMobile = ({ children }) => {
    const isMobile = useIsMobile();
    if (isMobile === 'loading') return <div />;
    return (
        <div>
            {isMobile ? (
                <div className={'bg-black'}>
                    <h1
                        className={
                            'flex-col text-white text-center text-[8rem] flex h-screen items-center w-screen justify-center'
                        }
                    >
                        Strona dostępna
                        <br />
                        dla monitorów
                        <br />
                        stacjonarnych
                        <a
                            href={'https://strony.owocni.pl'}
                            className={'text-white border-2 rounded-[5rem] mt-[5rem] p-[2rem] text-[6rem]'}
                        >
                            Wróć do oferty
                        </a>
                    </h1>
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default PortfolioMobile;

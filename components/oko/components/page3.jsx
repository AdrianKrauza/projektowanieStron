import Image from 'next/image';
import ending from '/assets/oko/Reflexy-compress.png';
import page3 from '/assets/oko/Strona-firmowa-oko.jpg';
import szejp from '../../../assets/oko/Szejp.png';
const Page2 = () => {
    return (
        <>
            <div
                className={
                    'page3  overflow-hidden rounded-t-[90px] border-[2px] border-[#0e082e]  shadow-[-1px_-10px_12px_10px_#06051c9e]'
                }
            >
                <Image priority {...page3} />
            </div>
            <div className={'ending w-[1350px]'}>
                <Image priority layout={'responsive'} {...ending} quality={100} />
                <div
                    className={
                        'absolute h-[300px] bg-gradient-to-t -translate-y-full from-[#000] to-transparent w-screen -translate-x-1/2 left-1/2'
                    }
                />
                <div className={'absolute h-[150vh] -translate-y-[2px] bg-[#000] w-screen -translate-x-1/2 left-1/2'} />
            </div>
        </>
    );
};

export default Page2;

import Image from 'next/image';
import woman from '/assets/oko/Bez-nazwy-1_2.png';
import gate from '/assets/oko/Ekran-Strona-oko.png';
import item1 from '/assets/oko/Edukacja-Babka-DlonA.png';
import item2 from '/assets/oko/Edukacja-Babka-DlonB.png';
import lamp from '/assets/oko/Lampa-Strona-oko.png';
import szejp from '../../../assets/oko/Szejp.png';

const Parallax = () => {
    return (
        <>
            <div className={'lamp -left-[201px] opacity-20 w-[350px]'}>
                <Image priority {...lamp} layout={'responsive'} />
            </div>
            <div className={'gate w-[1100px] h-[990px] left-[120px] opacity-50'}>
                <Image priority {...gate} layout={'fill'} />
            </div>

            <div className={'item1 -left-[350px] opacity-50'}>
                <Image priority {...item1} />
            </div>
            <div className={'item2 left-[950px] opacity-50'}>
                <Image priority {...item2} />
            </div>
            <div className={'textPara left-[480px] opacity-50 '}>
                <p className={'text-[70px] text-right text-[#6F6780] font-bold italic'}>
                    <span className={'block'}> Nauka na żywo</span>
                    <span className={'block mr-[-25px]'}> prezentacje</span>
                    <span className={'block mr-[-50px]'}> webinary</span>
                </p>
            </div>
            <div className={'woman -left-[300px]'}>
                <Image priority {...woman} />
            </div>
            <div className={'szejp3 '} style={{ left: 'calc((-50vw + (1350px / 2))' }}>
                <Image priority {...szejp} />
            </div>
        </>
    );
};

export default Parallax;

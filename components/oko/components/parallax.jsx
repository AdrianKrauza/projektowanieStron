import Image from 'next/image';
import woman from '/assets/oko/Bez-nazwy-1_2.png';
import gate from '/assets/oko/Ekran-Strona-oko.png';
import item1 from '/assets/oko/Edukacja-Babka-DlonA.png';
import item2 from '/assets/oko/Edukacja-Babka-DlonB.png';
import lamp from '/assets/oko/Lampa-Strona-oko.png';

const Parallax = () => {
    return (
        <>
            <div className={'lamp -left-[201px] opacity-20 w-[350px]'}>
                <Image {...lamp} layout={'responsive'} />
            </div>
            <div className={'gate w-[1100px] h-[990px] left-[120px] opacity-50'}>
                <Image {...gate} layout={'fill'} />
            </div>

            <div className={'item1 -left-[350px] opacity-50'}>
                <Image {...item1} />
            </div>
            <div className={'item2 left-[950px] opacity-50'}>
                <Image {...item2} />
            </div>
            <div className={'textPara left-[480px] opacity-50 '}>
                <p className={'text-[70px] text-right text-[#6F6780] font-bold italic'}>
                    <span className={'block'}> Nauka na żywo</span>
                    <span className={'block mr-[-25px]'}> prezentacje</span>
                    <span className={'block mr-[-50px]'}> webinary</span>
                </p>
            </div>
            <div className={'woman -left-[300px]'}>
                <Image {...woman} />
            </div>
        </>
    );
};

export default Parallax;

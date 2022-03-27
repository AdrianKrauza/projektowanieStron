import Image from 'next/image';

import page1 from '/assets/pragmile/Strona.jpg';
import gate1 from '/assets/pragmile/Kratki.png';
import text1 from '/assets/pragmile/Tekst-strony-Team-Novate1.png';

import Element from '../../../hooks/useMobilePortfolio';
import { useEffect } from 'react';

const Page1 = () => {
    return (
        <>
            <Element
                start={0}
                end={25}
                left={0}
                className={' border-[1px] border-[#022300]  rounded-t-[60px]   shadow-[-1px_-10px_22px_10px_#090e0760]'}
            >
                <div className={' w-[95vw] rounded-t-[60px] overflow-hidden '}>
                    <img priority layout={'responsive'} {...page1} />
                </div>
            </Element>
            <Element nieWiemCoToTakiego={0.026} start={20} end={60} width={10} left={20}>
                <img priority layout={'responsive'} {...gate1} />
            </Element>
            <Element nieWiemCoToTakiego={0.0265} start={20} end={55} left={20} width={50}>
                <img priority layout={'responsive'} {...text1} />
            </Element>
        </>
    );
};

export default Page1;

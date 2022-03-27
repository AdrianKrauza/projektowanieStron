import Image from 'next/image';
import gate1 from '/assets/pragmile/Kratki.png';
import text1 from '/assets/pragmile/Novate-teksty2.png';
import person from '/assets/pragmile/Novate2-M.png';
import box1 from '/assets/pragmile/Kwadrat1.jpg';
import box2 from '/assets/pragmile/Kwadrat2.jpg';
import box3 from '/assets/pragmile/Kwadrat-Front.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import UsePortfolio from '../../../hooks/useMobilePortfolio';
const Page2 = () => {
    const Element = UsePortfolio();

    return (
        <>
            <Element
                end={50}
                start={40}
                width={95}
                className={' h-[50rem] bg-[#18181A]  rounded-t-[90px] overflow-hidden'}
            />
            {/*<Element left={20} top={60}>*/}
            {/*    <Image priority {...gate1} />*/}
            {/*</Element>*/}
            <Element left={10} start={40} end={90} width={35}>
                <Image layout={'responsive'} priority {...person} />
            </Element>
            {/*<div className={'text2 left-[700px]  '}>*/}
            {/*    <Image priority {...text1} />*/}
            {/*</div>*/}
            {/*<div className={'box1_1 left-[210px]  '}>*/}
            {/*    <Image priority {...box1} />*/}
            {/*</div>*/}
            {/*<div className={'box1_2 left-[50px]  '}>*/}
            {/*    <Image priority {...box2} />*/}
            {/*</div>*/}
            {/*<div className={'person    '}>*/}
            {/*    <div className={' relative left-[185px]   '}>*/}
            {/*        <Image priority {...person} />*/}
            {/*    </div>*/}

            {/*    <div className={'bg-gradient-to-t from-[#18181A] h-[100px] absolute bottom-0 w-[1350px] '} />*/}
            {/*    <div className={' bg-[#18181A] h-[500px] absolute bottom-[-500px] w-[1350px] '} />*/}
            {/*</div>*/}

            {/*<div className={'box1_3 left-[100px]  '}>*/}
            {/*    <Image priority {...box3} />*/}
            {/*</div>*/}
        </>
    );
};

export default Page2;

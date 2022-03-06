import Image from 'next/image';
import startImg from '/assets/pragmile/Tlo.jpg';
import { useEffect } from 'react';

const StartImg = ({ gradient1State }) => {
    return (
        <div
            className={'startImg3  w-screen  left-1/2 -translate-x-1/2 overflow-hidden  '}
            // style={{ transform: 'translateX(-50%) ' }}
        >
            <Image {...startImg} layout={'responsive'} quality={100} />
            <div className={'bg-gradient-to-t from-[#141414] w-screen h-[150px] absolute bottom-[-40%]'} />
        </div>
    );
};

export default StartImg;

import Image from 'next/image';
import startImg from '/assets/pragmile/Tlo.jpg';
import { useEffect } from 'react';

const StartImg = () => {
    return (
        <div
            className={'startImg3  w-screen  left-1/2 -translate-x-1/2 overflow-hidden '}
            style={{ transform: 'translateX(-50%)  scale(1.5)', bottom: 'auto' }}
        >
            <Image priority {...startImg} layout={'responsive'} quality={100} />

            <div className={'bg-gradient-to-t from-[#141414] w-screen h-[150px] absolute bottom-[-40%]'} />
            <div
                style={{
                    background: `  radial-gradient(circle, rgba(11,5,44,0) ${-0}%, #181818 ${100 - 10}%)`,
                }}
                className={'absolute w-screen h-[150rem]  top-[0rem]'}
            />
        </div>
    );
};

export default StartImg;

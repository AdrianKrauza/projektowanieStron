import Image from 'next/image';
import startImg from '/assets/oko/oko-background.jpg';
import szejp from '/assets/oko/Szejp.png';
import { useEffect, useState } from 'react';

const StartImg = ({ gradient1State }) => {
    return (
        <>
            <div className={'startImg3  w-screen -translate-x-1/2 left-1/2 overflow-hidden'}>
                <Image priority {...startImg} layout={'responsive'} />
                <div
                    style={{
                        background: `  radial-gradient(circle, rgba(11,5,44,0) ${-gradient1State}%, #06051c ${
                            100 - gradient1State
                        }%)`,
                    }}
                    className={'absolute w-screen h-[100%]  top-[0rem]'}
                />
            </div>
            {/*<div className={'szejp '} style={{ left: 'calc((-50vw + (1350px / 2))' }}>*/}
            {/*    <Image priority  {...szejp} />*/}
            {/*</div>*/}
            <div className={'szejp2 rotate-180'} style={{ right: 'calc((-50vw + (1350px / 2))' }}>
                <Image priority {...szejp} />
            </div>
        </>
    );
};

export default StartImg;

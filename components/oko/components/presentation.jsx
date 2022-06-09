import { useEffect, useRef, useState } from 'react';

const Presentation = () => {
    const video = useRef();
    const [marginTop, setMarginTop] = useState(0);
    useEffect(() => {
        video.current.playbackRate = 2.0;
        setMarginTop(document.querySelector('.startImg3').offsetHeight * 0.7);
    }, []);

    return (
        <div
            style={{ marginBottom: `${marginTop / 8 + 100}px` }}
            className={`presentation  flex justify-center h-[400px]  absolute items-center w-full`}
        >
            <p className={'text-right text-white'}>
                Strona dla studia video <br />
                rozszerzonej rzeczywistości.
            </p>
            <div className={'h-[100px] bg-white w-[1px] mx-10'} />
            <div>
                <video playsInline ref={video} src="/assets/oko/Oko-logo.mp4" autoPlay muted className={'w-96'} />
            </div>
        </div>
    );
};

export default Presentation;

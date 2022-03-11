import { useEffect, useState } from 'react';

const Presentation = () => {
    const [marginTop, setMarginTop] = useState(0);
    // useEffect(() => {
    //     setMarginTop(document.querySelector(".startImg3")?.offsetHeight * 0.7);
    // }, []);
    return (
        <div
            // style={{ marginBottom: `-20rem` }}
            className={'presentation  flex justify-center h-[400px] bg-red  absolute items-center w-full'}
        >
            <p className={'text-right text-white'}>
                Innowacyjny software house. <br /> Zespół programistów online.
            </p>
            <div className={'h-[100px] bg-white w-[1px] mx-10'} />
            <div>
                <video src="/assets/pragmile/Logo-TeamNovate.mp4" autoPlay loop muted className={'w-96'} />
            </div>
        </div>
    );
};

export default Presentation;

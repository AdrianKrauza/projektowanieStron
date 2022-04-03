import Image from 'next/image';
import hoodie from '/assets/pragmile/Bluza.png';
import text5 from '/assets/pragmile/Mobile-design-copywriting.png';
import hand from '/assets/pragmile/Reka.png';
import box1 from '/assets/pragmile/Box1.png';
import box2 from '/assets/pragmile/Box2.png';
import box3 from '/assets/pragmile/Box3.png';

const End = () => {
    return (
        <>
            <div className={'box2_1 left-[-150px]  scale-[0.6]'}>
                <Image priority {...box2} />
            </div>
            <div className={'hoodie left-[-300px] scale-[0.8]'}>
                <Image priority {...hoodie} />
                <style jsx>{`
                    .gr {
                        bottom: 0px;
                        height: 700px;
                        width: 100vw;
                        left: 50%;
                        transform: translateX(-50%);
                        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
                        position: absolute;
                    }
                    //.gr:after {
                    //    // content: "";
                    //    height: 2000px;
                    //    width: 100vw;
                    //    background-color: black;
                    //    position: absolute;
                    //    top: 199px;
                    //}
                `}</style>
                <div className={'gr'} />
            </div>
            <div className={'hand  w-screen left-1/2 -translate-x-1/2'}>
                <div className={'translate-x-[-4px] scale-[0.6] origin-bottom-right mx-auto w-[1580px]'}>
                    <Image priority {...hand} />
                </div>

                <style jsx>{`
                    .gr {
                        bottom: 0;
                        width: 100vw;
                        height: 200px;
                        left: calc(50%);
                        transform: translateX(-50%);
                        position: absolute;
                        background: linear-gradient(0deg, #141414 0%, rgba(0, 0, 0, 0) 100%);
                    }
                    .gr:after {
                        content: '';
                        height: 2000px;
                        width: 100vw;
                        background-color: #141414;
                        position: absolute;
                        top: 199px;
                    }
                `}</style>
                <div className={'gr'} />
            </div>
            <video
                className={'videoHand translate-x-[1090px] w-[350px] scale-[0.7] mix-blend-difference h-[304px]'}
                src={'/assets/pragmile/Badz-soba-animacja.mp4'}
                loop
                muted
                autoPlay
            />
            <div className={'text5 translate-x-[1060px] h-[267px] scale-[0.7]'}>
                <Image priority {...text5} />
            </div>

            <div className={'box2_2 left-[-360px] h-[398px] scale-[0.6]'}>
                <Image priority {...box1} />
            </div>

            <div className={'box2_3 left-[-200px] h-[398px] scale-[0.6]'}>
                <Image priority {...box3} />
            </div>
        </>
    );
};

export default End;

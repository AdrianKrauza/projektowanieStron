import Image from 'next/image';
import Lottie from 'lottie-react';
import crowd from '/assets/oko/oko-tlum.png';
import boxImage1 from '/assets/oko/OKO1.jpg';
import boxImage2 from '/assets/oko/OKO2.jpg';
import boxImage3 from '/assets/oko/OKO3.jpg';
import icon1 from '/assets/oko/lf20_jrf5g8nc.json';
import icon2 from '/assets/oko/lf20_nvlbupxb.json';
import icon3 from '/assets/oko/lf20_tjoisgkg.json';
const boxesData = [
    [boxImage1, '4 krotnie niższe', 'koszty produkcji', icon1],
    [boxImage2, '20-40% krótszy', 'koszty produkcji', icon2],
    [boxImage3, 'Bez żadnych', 'umiejętności', icon3],
];

const Box = () => (
    <div className={'boxes flex justify-center w-full mt-[0px] mb-[40px]'}>
        {boxesData.map(([image, text1, text2, lottie]) => (
            <div key={text1} className={'mx-[30px]'}>
                <div className={'w-[300px] rounded-t-2xl overflow-hidden'}>
                    <Image {...image} />
                </div>
                <div className={'flex items-center'}>
                    <Lottie className={'w-[100px]'} animationData={lottie} loop={true} />
                    <p className={'text-[25px] text-[#6a648d]'}>
                        {text1} <br />
                        {text2}
                    </p>
                </div>
            </div>
        ))}
    </div>
);
const Page2 = () => {
    return (
        <div className={'page2  '}>
            <div className={'-mb-[40px]'}>
                <Image {...crowd} />
            </div>
            <div className={' bg-[#0C052C] pt-[150px]'}>
                <Box />
                <video className={'m-auto block'} muted loop autoPlay src="/assets/oko/Hipnotyzuj-transcode.mp4" />
            </div>
            <div className={'absolute h-[1300px] w-[1350px] bg-[#0C052C]'} />
        </div>
    );
};

export default Page2;

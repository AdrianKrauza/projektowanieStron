import useIsFirefox from '../../../hooks/useIsFirefox';
import Line from '../mobile/textLine';
import { TEXTS, TEXTS_SPACE } from './const';
const Space = ({ index }) => {
    return (
        <div
            className={`h-${
                !index ? 60 : 65
            } space m:h-[60rem] justify-center w-[32rem]  mt-20  z-20 relative flex items-center m:w-[70rem] `}
        >
            <p
                className={`text-center text-[${useIsFirefox() ? 2 : 5}rem] font-[600] blur-[4px] m:blur-[2px] font-${
                    !useIsFirefox() ? 'robotoMono' : 'roboto'
                } text-[#E7E6E8] m:text-[13rem]`}
            >
                {TEXTS_SPACE[index][0]}
                <span className={'text-[8rem] m:text-[16rem]'}>{TEXTS_SPACE[index][1]}</span>
            </p>
        </div>
    );
};
const Texts = ({ b }) => {
    return (
        <div className={`m:pt-[70rem] ${b && 'pt-[30rem]'}`}>
            {TEXTS.map((text, index) => (
                <div key={index} className={'ml-36 '}>
                    <Space index={index} />
                    <div className={'font-robotoMono'} />
                    {text.map((paragraph) => (
                        <p
                            className={`m:text-[8rem] text-[${useIsFirefox() ? 2.9 : 3.4}rem] mt-20 font-${
                                !useIsFirefox() ? 'robotoMono' : 'roboto'
                            }`}
                            key={paragraph.join()}
                        >
                            {paragraph.map((line) => (
                                <Line key={line} line={line} />
                            ))}
                        </p>
                    ))}
                </div>
            ))}
            <div className={`h-[10rem] space  justify-center w-[32rem]  mt-20  z-20 relative flex items-center  `} />
        </div>
    );
};

export default Texts;

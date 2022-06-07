import { useState } from 'react';
import done from '/assets/form/done.png';
import Image from 'next/image';
const Input = ({ label, optional = false, textarea = false, handleOnChange, popUp }) => {
    const [isClick, setIsClick] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [value, setValue] = useState('');
    const isActive = () => isClick || value;
    const checkValid = () => {
        setIsClick(false);
        setIsValid(!!value.length);
    };
    return (
        <div
            className={'relative w-full flex items-center box-border'}
            style={{
                border: isClick ? '2px solid #438d07' : '1px solid #a4a4a4',
                margin: isClick ? '1px' : '2px',
            }}
        >
            {!textarea ? (
                <input
                    className={'p-[10px] w-full  outline-0 text-[16px] text-[#919191]'}
                    onFocus={() => setIsClick(true)}
                    onBlur={checkValid}
                    onChange={(e) => {
                        handleOnChange(e);
                        setValue(e.target.value);
                    }}
                />
            ) : (
                <>
                    <textarea
                        style={{
                            height: isActive() ? '200px' : '46px',
                            paddingTop: isActive() ? '85px' : '0',
                            transition: 'height 0.2s linear',
                        }}
                        className={`${
                            popUp ? 'popUp' : 'footerForm'
                        } p-[10px] w-full  outline-0 text-[16px] text-[#919191] `}
                        onFocus={() => {
                            if (popUp) {
                                document.querySelector('.popUpForm').scrollTop = 300;
                                // document
                                //     .querySelector('.popUp')
                                //     .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                            }
                            setIsClick(true);
                        }}
                        onBlur={checkValid}
                        onChange={(e) => {
                            handleOnChange(e);
                            setValue(e.target.value);
                        }}
                    />
                    <p
                        style={{ opacity: isActive() ? '1' : '0' }}
                        className={
                            'z-50 text-left absolute text-[16px] pb-[5px] py-[15px] top-0 pl-[10px] pointer-events-none text-[#438d07] leading-[1.4] bg-white w-full m:text-[10px]'
                        }
                    >
                        Im więcej się dowiemy, tym lepiej Ci pomożemy. <br />
                        Daj nam jak najwięcej informacji. Jakie masz plany i cele? <br />
                        Co jest dla Ciebie bardzo ważne? Kiedy tego potrzebujesz?
                    </p>
                </>
            )}

            <label
                htmlFor="firstName"
                style={{
                    top: isActive() ? '-15px' : '7px',
                    color: isActive() ? '#438d07' : '#919191',
                    opacity: isValid ? '0' : '1',
                }}
                className={`z-50 p-[2px] absolute left-[10px] bg-white text-[16px] pointer-events-none `}
            >
                {label}{' '}
                {optional && (
                    <span
                        className={'text-[#cfcfcf]'}
                        style={{
                            display: isClick ? 'none' : 'inline-block',
                        }}
                    >
                        Opcjonalnie
                    </span>
                )}
            </label>
            <div className={`absolute right-[8px] pointer-events-none opacity-${!textarea && isValid ? 1 : 0}`}>
                <Image {...done} />
            </div>
            <div
                style={{
                    transform: isClick ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.3s linear',
                }}
                className={'origin-left w-full h-[2px] bg-[#438d07] absolute bottom-[-2px]'}
            />
        </div>
    );
};

export default Input;

import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Input from './input';
const Shield = () => (
    <svg width="66" height="80" viewBox="0 0 66 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M33 67.5C33 67.5 55 56.5 55 40V18L33 12.5L11 18V40C11 56.5 33 67.5 33 67.5Z"
            fill="#E0E0E0"
            stroke="#E0E0E0"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <g clipPath="url(#clip0_1143_1926)">
            <path
                d="M46.4942 29.2322L44.0375 26.7755C43.7006 26.4384 43.2909 26.2698 42.8094 26.2698C42.3274 26.2698 41.9177 26.4384 41.5808 26.7755L29.7303 38.6439L24.4193 33.3148C24.0821 32.9776 23.6726 32.8091 23.1911 32.8091C22.7092 32.8091 22.2998 32.9776 21.9625 33.3148L19.5058 35.7716C19.1686 36.1088 19 36.5183 19 37.0002C19 37.4816 19.1686 37.8915 19.5058 38.2286L26.045 44.7678L28.502 47.2245C28.839 47.5619 29.2486 47.7303 29.7303 47.7303C30.2119 47.7303 30.6214 47.5614 30.9587 47.2245L33.4155 44.7678L46.4942 31.6892C46.8311 31.3519 47 30.9424 47 30.4606C47.0003 29.979 46.8311 29.5695 46.4942 29.2322Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_1143_1926">
                <rect width="28" height="28" fill="white" transform="translate(19 23)" />
            </clipPath>
        </defs>
    </svg>
);

const Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const formAnimationRef = useRef(null);
    const open = () => {
        setIsOpen(true);
        formAnimationRef.current.style.opacity = 1;
        formAnimationRef.current.classList.remove('animate__zoomOut');
        formAnimationRef.current.classList.add('animate__zoomInDown');
    };
    const close = () => {
        setIsOpen(false);
        formAnimationRef.current.classList.remove('animate__zoomInDown');
        formAnimationRef.current.classList.add('animate__zoomOut');
    };
    useEffect(() => {
        document.querySelectorAll('.form-open').forEach((el) => {
            el.addEventListener('click', open);
        });
    }, []);
    return (
        <div className={'fixed top-0 w-screen'}>
            <div
                onClick={close}
                style={{
                    transition: 'all .7s',
                    width: isOpen ? '4000px' : '0px',
                    height: isOpen ? '4000px' : '0px',
                    transform: isOpen ? ' translate(-50%,-50%)' : '  translate(-50%,-50%)',
                }}
                className={' bg-[black] opacity-[0.9] absolute  z-[9999] rounded-full left-[50vw] top-[50vh]'}
            ></div>
            <div className={'w-[560px]  z-[9999] absolute left-1/2 -translate-x-1/2 top-[50vh] -translate-y-1/2'}>
                <div ref={formAnimationRef} className={'bg-white opacity-0 animate__animated py-[40px] px-[40px]'}>
                    <svg
                        onClick={close}
                        className={'absolute cursor-pointer translate-x-[530px] translate-y-[-70px]'}
                        width="30"
                        height="30"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.41 10.9999L20.7 2.70994C20.8638 2.51864 20.9494 2.27256 20.9397 2.02089C20.93 1.76921 20.8256 1.53047 20.6475 1.35238C20.4694 1.17428 20.2307 1.06995 19.979 1.06023C19.7274 1.05051 19.4813 1.13612 19.29 1.29994L11 9.58994L2.70997 1.28994C2.52167 1.10164 2.26627 0.99585 1.99997 0.99585C1.73367 0.99585 1.47828 1.10164 1.28997 1.28994C1.10167 1.47825 0.995881 1.73364 0.995881 1.99994C0.995881 2.26624 1.10167 2.52164 1.28997 2.70994L9.58997 10.9999L1.28997 19.2899C1.18529 19.3796 1.10027 19.4899 1.04025 19.614C0.980225 19.738 0.946494 19.8732 0.941175 20.0109C0.935855 20.1486 0.959061 20.2859 1.00934 20.4143C1.05961 20.5426 1.13587 20.6591 1.23332 20.7566C1.33078 20.854 1.44733 20.9303 1.57565 20.9806C1.70398 21.0309 1.84131 21.0541 1.97903 21.0487C2.11675 21.0434 2.25188 21.0097 2.37594 20.9497C2.50001 20.8896 2.61033 20.8046 2.69997 20.6999L11 12.4099L19.29 20.6999C19.4813 20.8638 19.7274 20.9494 19.979 20.9397C20.2307 20.9299 20.4694 20.8256 20.6475 20.6475C20.8256 20.4694 20.93 20.2307 20.9397 19.979C20.9494 19.7273 20.8638 19.4812 20.7 19.2899L12.41 10.9999Z"
                            fill="white"
                        />
                    </svg>
                    <h2 className={'text-[28px] pb-[50px] text-[#0d0701] font-[400]'}>
                        Napisz kilka słów o swoim projekcie <br />i otrzymaj{' '}
                        <b className={'text-[#438d07] font-bold'}>niezobowiązującą</b> ofertę.
                    </h2>
                    <form>
                        <div className={'flex gap-[20px]'}>
                            <Input label={'Imię:'} />
                            <Input label={'Mój email to:'} />
                            <Input optional label={'Tel.'} />
                        </div>
                        <div className={'flex gap-[2rem] mt-[1rem]'}>
                            <Input textarea label={'Napisz kilka słów o swoim projekcie'} />
                        </div>
                        <div className={'flex gap-[30px] items-center'}>
                            <div className={'relative w-full z-10 top-[5px]'}>
                                <button
                                    className={
                                        'top-0 relative top-[-5px] hover:top-0 bg-[#438d07] font-[400] text-white text-[22px] rounded-[10px] py-[10px] w-full '
                                    }
                                    type="submit"
                                >
                                    Wyślijcie mi niezobowiązującą ofertę
                                </button>
                                <div
                                    className={
                                        'h-[42px] -z-10 top-0 absolute bg-[#31600b] font-[400] text-[#31600b] text-[22px] rounded-[10px] py-[10px] w-full '
                                    }
                                >
                                    Wyślijcie mi niezobowiązującą ofertę
                                </div>
                            </div>
                            <Shield />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;

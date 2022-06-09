import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Input from './input';
import Shield from './shield';
import Form from './form';

const PopUpForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const formAnimationRef = useRef(null);
    const open = () => {
        // document.querySelector('.scroller').style.display = 'none';
        setIsOpen(true);
        formAnimationRef.current.style.opacity = 1;
        formAnimationRef.current.classList.remove('animate__zoomOut');
        formAnimationRef.current.classList.add('animate__zoomInDown');
    };
    const close = () => {
        // document.querySelector('.scroller').style.display = 'block';
        setIsOpen(false);
        formAnimationRef.current.classList.remove('animate__zoomInDown');
        formAnimationRef.current.classList.add('animate__zoomOut');
    };
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.form-open').forEach((el) => {
                el.addEventListener('click', open);
            });
        }, 0);
    }, []);
    return (
        <div className={`fixed z-[9999] top-0  w-screen ${!isOpen && 'pointer-events-none'}`}>
            <div
                onClick={close}
                style={{
                    transition: 'all .7s',
                    width: isOpen ? '4000px' : '0px',
                    height: isOpen ? '4000px' : '0px',
                }}
                className={
                    'max-w-[4000px] bg-[black] opacity-[0.9] absolute -translate-x-1/2 -translate-y-1/2 m:translate-y-[0]  z-[9999] rounded-full left-[50vw] m:top-0 top-[50vh]'
                }
            />

            <div
                // style={{ scrollBehavior: 'smooth' }}
                className={
                    'w-[560px] max-h-screen  popUpForm m:overflow-scroll z-[9999] absolute left-1/2 -translate-x-1/2 top-[50vh] -translate-y-1/2 m:top-0 m:translate-y-[0] '
                }
            >
                <div ref={formAnimationRef} className={'opacity-0 animate__animated'}>
                    <svg
                        onClick={close}
                        className={
                            'z-10 m:scale-[0.8] absolute cursor-pointer translate-x-[580px] translate-y-[-40px] cursor-pointer m:translate-x-[90vw] m:translate-y-[10px]'
                        }
                        width="30"
                        height="30"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.41 10.9999L20.7 2.70994C20.8638 2.51864 20.9494 2.27256 20.9397 2.02089C20.93 1.76921 20.8256 1.53047 20.6475 1.35238C20.4694 1.17428 20.2307 1.06995 19.979 1.06023C19.7274 1.05051 19.4813 1.13612 19.29 1.29994L11 9.58994L2.70997 1.28994C2.52167 1.10164 2.26627 0.99585 1.99997 0.99585C1.73367 0.99585 1.47828 1.10164 1.28997 1.28994C1.10167 1.47825 0.995881 1.73364 0.995881 1.99994C0.995881 2.26624 1.10167 2.52164 1.28997 2.70994L9.58997 10.9999L1.28997 19.2899C1.18529 19.3796 1.10027 19.4899 1.04025 19.614C0.980225 19.738 0.946494 19.8732 0.941175 20.0109C0.935855 20.1486 0.959061 20.2859 1.00934 20.4143C1.05961 20.5426 1.13587 20.6591 1.23332 20.7566C1.33078 20.854 1.44733 20.9303 1.57565 20.9806C1.70398 21.0309 1.84131 21.0541 1.97903 21.0487C2.11675 21.0434 2.25188 21.0097 2.37594 20.9497C2.50001 20.8896 2.61033 20.8046 2.69997 20.6999L11 12.4099L19.29 20.6999C19.4813 20.8638 19.7274 20.9494 19.979 20.9397C20.2307 20.9299 20.4694 20.8256 20.6475 20.6475C20.8256 20.4694 20.93 20.2307 20.9397 19.979C20.9494 19.7273 20.8638 19.4812 20.7 19.2899L12.41 10.9999Z"
                            fill="white"
                            className={'m:fill-black'}
                        />
                    </svg>
                    <Form popUp />
                </div>
            </div>
        </div>
    );
};

export default PopUpForm;

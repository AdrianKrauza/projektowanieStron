import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Input from './input';
import getCid from '../../helpers/getCid';
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
const time = new Date().getTime();
const Form = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState({
        'form[Imię]': '',
        'form[Mail]': '',
        'form[Telefon]': '',
        'form[Wiadomość]': '',
    });
    // object to  URLSearchParams

    const onSubmit = async () => {
        const formdata = new FormData();
        formdata.append('session-start', time);
        formdata.append('form[tid]', 'UA-7397797-1');
        formdata.append('form[cid]', getCid());
        formdata.append('time', 0);
        formdata.append('url', 'www.strony.owocni.pl');
        formdata.append('form[Imię]', data['form[Imię]']);
        formdata.append('form[Mail]', data['form[Mail]']);
        formdata.append('form[Telefon]', data['form[Telefon]']);
        formdata.append('form[Wiadomość]', data['form[Wiadomość]']);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };
        fetch('https://form.owocni.pl/send.php', requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
    };
    return (
        <div className={'w-[560px] z-[9999] relative left-1/2 -translate-x-1/2 '}>
            <div className={'bg-white  animate__animated py-[40px] px-[40px]'}>
                <h2 className={'text-[28px] pb-[50px] text-[#0d0701] font-[400]'}>
                    Napisz kilka słów o swoim projekcie <br />i otrzymaj{' '}
                    <b className={'text-[#438d07] font-bold'}>niezobowiązującą</b> ofertę.
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'flex gap-[20px]'}>
                        <Input
                            label={'Imię:'}
                            handleOnChange={(e) => {
                                setData((data) => ({ ...data, 'form[Imię]': e.target.value }));
                            }}
                            name={'form[Imię]'}
                        />
                        <Input
                            label={'Mój email to:'}
                            handleOnChange={(e) => {
                                setData((data) => ({ ...data, 'form[Mail]': e.target.value }));
                            }}
                        />
                        <Input
                            optional
                            label={'Tel.'}
                            register={register}
                            name={'form[Telefon]'}
                            handleOnChange={(e) => {
                                setData((data) => ({ ...data, 'form[Telefon]': e.target.value }));
                            }}
                        />
                    </div>
                    <div className={'flex gap-[2rem] mt-[1rem]'}>
                        <Input
                            textarea
                            label={'Napisz kilka słów o swoim projekcie'}
                            handleOnChange={(e) => {
                                console.log(data);
                                setData((data) => ({ ...data, 'form[Wiadomość]': e.target.value }));
                            }}
                            name={'form[Wiadomość]'}
                        />
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
    );
};

export default Form;

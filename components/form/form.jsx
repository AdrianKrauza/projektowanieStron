import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Input from './input';
import getCid from '../../helpers/getCid';
import getClientId from '../../helpers/getCid';
import onSubmit from './onSubmit';
import Shield from './shield';

const time = new Date().getTime();
const Form = ({ popUp }) => {
    const { handleSubmit } = useForm();
    const [data, setData] = useState({
        'form[Imię]': '',
        'form[Mail]': '',
        'form[Telefon]': '',
        'form[Wiadomość]': '',
    });

    return (
        <div className={`w-screen max-w-[560px]  relative left-1/2 -translate-x-1/2 ${popUp && 'm:h-[500rem]'}`}>
            <div className={`bg-white  animate__animated py-[40px] px-[40px] ${popUp && 'm:h-[100%] '}`}>
                <h2
                    className={
                        'text-[28px] pb-[50px] text-[#0d0701] font-[400] m:text-[24px] m:pb-[25px] m:text-left font-[400]'
                    }
                >
                    Napisz kilka słów o swoim projekcie <br className={'m:hidden'} />i otrzymaj{' '}
                    <b className={'text-[#438d07] font-bold'}>niezobowiązującą</b> ofertę.
                </h2>
                <form onSubmit={handleSubmit(() => onSubmit(data, time))}>
                    <div className={'flex gap-[20px] m:flex-col m:gap-[10px]'}>
                        <Input
                            label={'Imię:'}
                            handleOnChange={(e) => {
                                setData((data) => ({ ...data, 'form[Imię]': e.target.value }));
                            }}
                            autocomplete="name"
                            name={'form[Imię]'}
                        />
                        <Input
                            label={'Mój email to:'}
                            autocomplete="email"
                            handleOnChange={(e) => {
                                setData((data) => ({ ...data, 'form[Mail]': e.target.value }));
                            }}
                        />
                        <Input
                            optional
                            label={'Tel.'}
                            autocomplete="tel"
                            name={'form[Telefon]'}
                            handleOnChange={(e) => {
                                setData((data) => ({ ...data, 'form[Telefon]': e.target.value }));
                            }}
                        />
                    </div>
                    <div className={'flex gap-[20px] mt-[10px]'}>
                        <Input
                            textarea
                            label={'Napisz kilka słów o swoim projekcie'}
                            handleOnChange={(e) => {
                                setData((data) => ({ ...data, 'form[Wiadomość]': e.target.value }));
                            }}
                            name={'form[Wiadomość]'}
                            popUp={popUp}
                        />
                    </div>
                    <div className={'flex gap-[30px] items-center m:flex-col'}>
                        <div className={'relative w-full z-10 top-[5px] m:mt-[20px]'}>
                            <button
                                className={
                                    'form-close top-0 relative top-[-5px] hover:top-0 bg-[#438d07] font-[400] text-white text-[22px] rounded-[10px] py-[10px] w-full m:text-[16px]'
                                }
                                type="submit"
                            >
                                Wyślijcie mi niezobowiązującą ofertę
                            </button>
                            <div
                                className={
                                    'h-[42px] -z-10 top-0 absolute bg-[#31600b] font-[400] text-[#31600b00] text-[22px] rounded-[10px] py-[10px] w-full m:text-[16px] m:hidden '
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

// import { useForm } from 'react-hook-form';
// import { useEffect, useRef, useState } from 'react';
// import Input from '../components/form/input';
// const Shield = () => (
//     <svg width="66" height="80" viewBox="0 0 66 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//             d="M33 67.5C33 67.5 55 56.5 55 40V18L33 12.5L11 18V40C11 56.5 33 67.5 33 67.5Z"
//             fill="#E0E0E0"
//             stroke="#E0E0E0"
//             strokeWidth="5.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//         <g clipPath="url(#clip0_1143_1926)">
//             <path
//                 d="M46.4942 29.2322L44.0375 26.7755C43.7006 26.4384 43.2909 26.2698 42.8094 26.2698C42.3274 26.2698 41.9177 26.4384 41.5808 26.7755L29.7303 38.6439L24.4193 33.3148C24.0821 32.9776 23.6726 32.8091 23.1911 32.8091C22.7092 32.8091 22.2998 32.9776 21.9625 33.3148L19.5058 35.7716C19.1686 36.1088 19 36.5183 19 37.0002C19 37.4816 19.1686 37.8915 19.5058 38.2286L26.045 44.7678L28.502 47.2245C28.839 47.5619 29.2486 47.7303 29.7303 47.7303C30.2119 47.7303 30.6214 47.5614 30.9587 47.2245L33.4155 44.7678L46.4942 31.6892C46.8311 31.3519 47 30.9424 47 30.4606C47.0003 29.979 46.8311 29.5695 46.4942 29.2322Z"
//                 fill="white"
//             />
//         </g>
//         <defs>
//             <clipPath id="clip0_1143_1926">
//                 <rect width="28" height="28" fill="white" transform="translate(19 23)" />
//             </clipPath>
//         </defs>
//     </svg>
// );
//
// function getClientId(uaid) {
//     try {
//         var trackers = ga.getAll();
//         var i, len;
//         for (i = 0, len = trackers.length; i < len; i += 1) {
//             if (trackers[i].get('trackingId') === uaid) {
//                 return trackers[i].get('clientId');
//             }
//         }
//     } catch (e) {}
//     return 'false';
// }
// const Novate = () => {
//     const { register, handleSubmit } = useForm();
//     const [cid, setCid] = useState(getClientId('UA-4854057-1'));
//     const [time, setTime] = useState(new Date().getTime());
//     const onSubmit = async (data) => {
//         Object.entries(data.form).forEach(([key, val]) => {
//             data[`form[${key}]`] = val;
//         });
//         delete data.form;
//         console.log(data);
//         // const response = await fetch(`https://form2020.owocni.pl/send.php`, {
//         // const response = await fetch(`https://form2020.owocni.pl/send.php`, {
//         //     body: data,
//         //     method: 'POST',
//         // });
//     };
//     const [isOpen, setIsOpen] = useState(false);
//     const formAnimationRef = useRef(null);
//     useEffect(() => {
//         setTimeout(() => {
//             setIsOpen(true);
//             formAnimationRef.current.classList.add('animate__zoomInDown');
//         }, 2000);
//     }, []);
//
//     return (
//         <>
//             <div
//                 style={{
//                     transition: 'transform 1s',
//                     transform: isOpen ? 'scale(1) ' : 'scale(0) ',
//                 }}
//                 className={
//                     'w-[150vmax] h-[150vmax] bg-[black] opacity-[0.4] absolute  z-[9999] rounded-full left-[-25vmax] top-[-50vmax]'
//                 }
//             ></div>
//             <div className={'w-[560px]  z-[9999] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'}>
//                 <div ref={formAnimationRef} className={'bg-white  animate__animated py-[40px] px-[40px]'}>
//                     <h2 className={'text-[30px] pb-[50px] text-[#0d0701] font-thin'}>
//                         Napisz kilka słów o swoim projekcie <br />i otrzymaj{' '}
//                         <b className={'text-[#438d07] font-bold'}>niezobowiązującą</b> ofertę.
//                     </h2>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className={'flex gap-[20px]'}>
//                             <Input label={'Imię:'} />
//                             <Input label={'Mój email to:'} />
//                             <Input optional label={'Tel.'} />
//                         </div>
//                         <div className={'flex gap-[2rem] mt-[1rem]'}>
//                             <Input textarea label={'Napisz kilka słów o swoim projekcie'} />
//                         </div>
//                         <div className={'flex gap-[30px] items-center'}>
//                             <div className={'relative w-full z-10 top-[5px]'}>
//                                 <button
//                                     className={
//                                         'top-0 relative top-[-5px] hover:top-0 bg-[#438d07] font-[400] text-white text-[22px] rounded-[10px] py-[10px] w-full '
//                                     }
//                                     type="submit"
//                                 >
//                                     Wyślijcie mi niezobowiązującą ofertę
//                                 </button>
//                                 <div
//                                     className={
//                                         'h-[42px] -z-10 top-0 absolute bg-[#31600b] font-[400] text-[#31600b] text-[22px] rounded-[10px] py-[10px] w-full '
//                                     }
//                                 >
//                                     Wyślijcie mi niezobowiązującą ofertę
//                                 </div>
//                             </div>
//                             <Shield />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default Novate;
//
// // <input placeholder={'form[Imię]'} {...register('form[Imię]')} />
// // <input placeholder={'form[Mail]'} {...register('form[Mail]')} />
// // <input placeholder={'form[Telefon]'} {...register('form[Telefon]')} />
// // <input placeholder={'form[Wiadomość]'} {...register('form[Wiadomość]')} />
// // <input defaultValue={'UA-7397797-1'} placeholder={'form[tid]'} {...register('form[tid]')} />
// // <input defaultValue={cid} placeholder={'form[cid]'} {...register('form[cid]')} />
// // <input defaultValue="www.strony.owocni.pl/" placeholder={'url'} {...register('url')} />
// // <input defaultValue={time} placeholder={'session-start'} {...register('session-start')} />
// // <input defaultValue="0" placeholder={'time'} {...register('time')} />
// // <input type={'submit'} value={'ddsads'} />
// // form[Imię]
// // form[Mail]
// // form[Telefon]
// // form[Wiadomość]
// // form[tid]
// // form[cid]
// // url
// // time
// // session-start

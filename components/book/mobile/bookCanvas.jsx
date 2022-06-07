// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//
// const currentFrame = (index) => `/assets/book/Main_${index.toString().padStart(5, '0')}.jpg`;
// const bookImages = [
//     [48, 105 - 49],
//     [189, 244 - 189],
//     [330, 390 - 330],
// ];
// const vh = (coef) => window.innerHeight * (coef / 100);
// const images = [];
// const preloadImages = (updateImage) => {
//     setTimeout(() => {
//         bookImages.map((book) => {
//             for (let i = book[0]; i < book[0] + book[1] + 1; i++) {
//                 images[i] = new Image();
//                 images[i].src = currentFrame(i);
//             }
//         });
//     }, 5000);
//
//     updateImage(bookImages[0][0]);
// };
// const BookCanvas = ({ bookSectionRef }) => {
//     const bookCanvasRef = useRef();
//     useEffect(() => {
//         const context = bookCanvasRef.current.getContext('2d');
//         context.fillRect(25, 25, 100, 100);
//
//         gsap.registerPlugin(ScrollTrigger);
//         const img = new Image();
//         img.src = currentFrame(bookImages[0][0]);
//         bookCanvasRef.current.width = 845;
//         bookCanvasRef.current.height = 476;
//         img.onload = () => context.drawImage(img, 0, 0);
//
//         const updateImage = (index) => {
//             images[index * 2] && context.drawImage(images[index * 2], 0, 0);
//         };
//
//         preloadImages(updateImage);
//
//         let lastState;
//         setTimeout(() => {
//             ScrollTrigger.create({
//                 trigger: bookSectionRef.current,
//                 pin: bookCanvasRef.current,
//                 start: `0% 10%`,
//                 end: '105% 70%',
//             });
//
//             bookSectionRef.current.querySelectorAll('.space').forEach((el, index) => {
//                 if (!index) {
//                     ScrollTrigger.create({
//                         trigger: bookSectionRef.current,
//                         start: '0 0%',
//                         end: '19% center',
//                         onUpdate: (e) => {
//                             const state = Math.floor(e.progress * bookImages[index][1] + bookImages[index][0]);
//                             if (lastState !== state) {
//                                 requestAnimationFrame(() => updateImage(state));
//                                 lastState = state;
//                             }
//                         },
//                     });
//                     return;
//                 }
//                 ScrollTrigger.create({
//                     trigger: el,
//                     start: '160% center',
//                     end: '220% center',
//                     onUpdate: (e) => {
//                         const state = Math.floor(e.progress * bookImages[index][1] + bookImages[index][0]);
//                         if (lastState !== state) {
//                             requestAnimationFrame(() => updateImage(state));
//                             lastState = state;
//                         }
//                     },
//                 });
//             }, 0);
//         });
//     }, []);
//     return (
//         <div className={'absolute -right-20 mt-40 z-30 shadow-[#e6e8ec_0px_-9px_13px_5px]'}>
//             <canvas ref={bookCanvasRef} className={'w-[110rem]'} />
//         </div>
//     );
// };
//
// export default BookCanvas;
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BOOK_IMAGES_COUNT } from '../global/const';
import updateBook from '../global/updateBook';
import currentFrame from '../global/currentFrame';
import preloadImages from '../global/loadBook';
import handleOnUpdate from '../global/handleOnUpdateBook';

let images = [[], [], [], []];
let frameLast;

const BookCanvas = ({ bookSectionRef }) => {
    const bookCanvasRef = useRef();
    const bgRef = useRef();
    // const [timer, setTimer] = useState(0);
    useEffect(() => {
        const context = bookCanvasRef.current.getContext('2d');
        context.fillRect(25, 25, 100, 100);

        const img = new Image();
        img.src = currentFrame(0, 0);
        bookCanvasRef.current.width = 845;
        bookCanvasRef.current.height = 476;
        img.onload = () => context.drawImage(img, 0, 0);

        setTimeout(() => {
            images = preloadImages(images);
            console.log(images);
            updateBook(images[0][0], context);
        }, 6000);

        setTimeout(() => {
            ScrollTrigger.create({
                trigger: bookSectionRef.current,
                pin: bgRef.current,
                start: `0% 10%`,
                end: '115% 90%',
            });

            bookSectionRef.current.querySelectorAll('.space').forEach((el, index) => {
                if (!index) {
                    ScrollTrigger.create({
                        trigger: bookSectionRef.current,
                        start: '-10% 6%',
                        end: '20% center',
                        onUpdate: (e) => (frameLast = handleOnUpdate(e, index, frameLast, images, context)),
                    });
                    return;
                }
                if (index === 3) {
                    ScrollTrigger.create({
                        trigger: el,
                        start: '120% center',
                        end: '250% center',
                        onUpdate: (e) => (frameLast = handleOnUpdate(e, index, frameLast, images, context)),
                    });
                    return;
                }
                ScrollTrigger.create({
                    trigger: el,
                    start: '10% center',
                    end: '100% center',
                    onUpdate: (e) => (frameLast = handleOnUpdate(e, index, frameLast, images, context)),
                });
            });
        }, 0);
    }, []);
    return (
        <div className={'absolute -right-20 mt-40 m:z-30'}>
            <style jsx>{`
                canvas:after {
                    width: 100vw;
                    height: 20vh;
                    top: 0;
                    position: absolute;
                    transform: translateY(-100%);
                    background-color: #e6e8ec;
                }
            `}</style>
            {/*<div ref={bgRef} className={''}></div>*/}
            <div ref={bgRef} className={'h-[90rem] '}>
                <div className={'w-[120vw]  left-0 h-[15vh] top-0 absolute -translate-y-full bg-lightGray'}></div>
                <canvas
                    ref={bookCanvasRef}
                    className={'w-[66rem] m:w-[110rem] shadow-[#E6E7E9_0px_0px_17px_20px] canvasBook'}
                />
            </div>
        </div>
    );
};

export default BookCanvas;

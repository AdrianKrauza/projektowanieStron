import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BOOK_IMAGES_COUNT } from '../global/const';
import updateBook from '../global/updateBook';
import currentFrame from '../global/currentFrame';
import preloadImages from '../global/loadBook';
import handleOnUpdate from '../global/handleOnUpdateBook';

let images = [[], [], [], []];
let frameLast;

const BookCanvas = ({ bookSectionRef, b }) => {
    const bookCanvasRef = useRef();
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
                pin: bookCanvasRef.current,
                start: '0 6%',
                end: `${b ? 80 : 95}% 15%`,
            });
            bookSectionRef.current.querySelectorAll('.space').forEach((el, index) => {
                if (!index) {
                    ScrollTrigger.create({
                        trigger: bookSectionRef.current,
                        start: `${b ? -10 : 0}% 6%`,
                        end: '19% center',
                        onUpdate: (e) => (frameLast = handleOnUpdate(e, index, frameLast, images, context)),
                    });
                    return;
                }
                if (index === 3) {
                    ScrollTrigger.create({
                        trigger: el,
                        start: '150% center',
                        end: '240% center',
                        onUpdate: (e) => (frameLast = handleOnUpdate(e, index, frameLast, images, context)),
                    });
                    return;
                }
                ScrollTrigger.create({
                    trigger: el,
                    start: '200% center',
                    end: `${b ? 300 : 340}% center`,
                    onUpdate: (e) => (frameLast = handleOnUpdate(e, index, frameLast, images, context)),
                });
            });
        }, 0);
    }, []);
    return (
        <div className={'absolute -right-20 mt-40 m:z-30 m:shadow-[#e6e8ec_0px_-9px_13px_5px]'}>
            <canvas ref={bookCanvasRef} className={'w-[66rem] m:w-[110rem] canvasBook'} />
        </div>
    );
};

export default BookCanvas;
// setInterval(() => {
//     console.log(timer, 'dsad');
//
//     setTimer((data) => {
//         if (data > 100) {
//             requestAnimationFrame(() => {
//                 updateImage(lastState - data + 100);
//             });
//         }
//
//         return data + 1;
//     });
// }, 100);

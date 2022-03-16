import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const currentFrame = (index) => `/assets/book/Main_${index.toString().padStart(5, '0')}.jpg`;
const bookImages = [
    [49, 103 - 49],
    [189, 244 - 189],
    [330, 390 - 330],
];
const images = [];
const preloadImages = (updateImage) => {
    bookImages.map((book) => {
        for (let i = book[0]; i < book[0] + book[1] + 1; i++) {
            console.log(i);
            images[i] = new Image();
            images[i].src = currentFrame(i);
        }
    });
    updateImage(bookImages[0][0]);
};
const BookCanvas = ({ bookSectionRef }) => {
    const bookCanvasRef = useRef();
    useEffect(() => {
        const context = bookCanvasRef.current.getContext('2d');
        context.fillRect(25, 25, 100, 100);

        gsap.registerPlugin(ScrollTrigger);
        const img = new Image();
        img.src = currentFrame(bookImages[0][0]);
        bookCanvasRef.current.width = 960;
        bookCanvasRef.current.height = 540;
        img.onload = () => context.drawImage(img, 0, 0);

        const updateImage = (index) => {
            images[index] && context.drawImage(images[index], 0, 0);
        };

        preloadImages(updateImage);

        let lastState;
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: bookSectionRef.current,
                pin: bookCanvasRef.current,
                start: '0 6%',
                end: '105% 35%',
            });

            bookSectionRef.current.querySelectorAll('.space').forEach((el, index) => {
                if (!index) {
                    ScrollTrigger.create({
                        trigger: bookSectionRef.current,
                        start: '0 6%',
                        end: '19% center',
                        onUpdate: (e) => {
                            const state = Math.floor(e.progress * bookImages[index][1] + bookImages[index][0]);
                            if (lastState !== state) {
                                requestAnimationFrame(() => updateImage(state));
                                lastState = state;
                            }
                        },
                    });
                    return;
                }
                ScrollTrigger.create({
                    trigger: el,
                    start: '160% center',
                    end: '220% center',
                    onUpdate: (e) => {
                        const state = Math.floor(e.progress * bookImages[index][1] + bookImages[index][0]);
                        if (lastState !== state) {
                            requestAnimationFrame(() => updateImage(state));
                            lastState = state;
                        }
                    },
                });
            }, 0);
        });
    }, []);
    return (
        <div className={'absolute -right-12 mt-40'}>
            <canvas ref={bookCanvasRef} className={'w-[66rem]'} />
        </div>
    );
};

export default BookCanvas;

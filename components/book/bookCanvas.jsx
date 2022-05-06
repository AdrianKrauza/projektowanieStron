import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const currentFrame = (index) => `/assets/book/Main_${index.toString().padStart(5, '0')}.jpg`;
const bookImages = [
    [48, 105 - 49],
    [189, 244 - 189],
    [330, 390 - 330],
];
const vh = (coef) => window.innerHeight * (coef / 100);
const images = [];
const preloadImages = (updateImage) => {
    setTimeout(() => {
        bookImages.map((book) => {
            for (let i = book[0]; i < book[0] + book[1] + 1; i++) {
                images[i] = new Image();
                images[i].src = currentFrame(i);
            }
        });
    }, 5000);

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
        bookCanvasRef.current.width = 845;
        bookCanvasRef.current.height = 476;
        img.onload = () => context.drawImage(img, 0, 0);

        const updateImage = (index) => {
            images[index] && context.drawImage(images[index], 0, 0);
        };

        preloadImages(updateImage);

        let lastState;
        setTimeout(() => {
            ScrollTrigger.matchMedia({
                '(min-width: 1200px)': () => {
                    ScrollTrigger.create({
                        trigger: bookSectionRef.current,
                        pin: bookCanvasRef.current,
                        start: '0 6%',
                        end: '105% 15%',
                    });
                },
                '(max-width: 1200px)': () => {
                    ScrollTrigger.create({
                        trigger: bookSectionRef.current,
                        pin: bookCanvasRef.current,
                        start: `0% ${vh(100) - window.innerWidth * 0.8}`,
                        end: '105% 70%',
                    });
                },
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
        <div className={'absolute -right-20 mt-40 m:z-30 m:shadow-[#e6e8ec_0px_-9px_13px_5px]'}>
            <canvas ref={bookCanvasRef} className={'w-[66rem] m:w-[110rem]'} />
        </div>
    );
};

export default BookCanvas;

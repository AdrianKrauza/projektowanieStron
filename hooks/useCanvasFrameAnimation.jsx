import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const UseCanvasFrameAnimation = (path, images) => {
    let img;
    let context;
    const currentFrame = (index) => `assets/${path}${index.toString().padStart(3, '0')}.jpg`;

    const preloadImages = () => {
        for (let i = images[0]; i < images[0] + images[1]; i++) {
            const img = new Image();
            img.src = currentFrame(i);
        }
    };

    const initCanvas = (el, width, height) => {
        context = el.current.getContext('2d');
        context.fillRect(25, 25, 100, 100);
        img = new Image();
        img.src = currentFrame(1);
        el.current.width = width;
        el.current.height = height;
        img.onload = () => context.drawImage(img, 0, 0);

        preloadImages();
        updateImage(images[0]);
    };

    const updateImage = (index) => {
        img.src = currentFrame(index);
        context.drawImage(img, 0, 0);
    };

    return { initCanvas, updateImage };
};

export default UseCanvasFrameAnimation;

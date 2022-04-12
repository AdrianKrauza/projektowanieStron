import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const UseCanvasFrameAnimation = (path, images) => {
    const images2 = [null];
    let img;
    let context;
    const currentFrame = (index) => `assets/${path}${index.toString().padStart(3, '0')}.jpg`;

    const preloadImages = () => {
        setTimeout(() => {
            for (let i = images[0]; i < images[0] + images[1]; i++) {
                images2[i] = new Image();
                images2[i].src = currentFrame(i);
            }
        }, 5000);
    };

    const initCanvas = (el, width, height) => {
        context = el.current.getContext('2d');
        context.fillRect(25, 25, 100, 100);
        img = new Image();
        img.src = currentFrame(images[0]);
        el.current.width = width;
        el.current.height = height;
        img.onload = () => context.drawImage(img, 0, 0);

        preloadImages();
        updateImage(images[0]);
    };

    const updateImage = (index) => {
        console.log(images2[index % images[1]], images, index);
        images2[index % images[1]] && context.drawImage(images2[index % images[1]], 0, 0);
    };

    return { initCanvas, updateImage };
};

export default UseCanvasFrameAnimation;

import { BOOK_IMAGES_COUNT } from './const';
import updateBook from './updateBook';

const handleOnUpdate = (e, index, frameLast, images, context) => {
    let frame = Math.floor(e.progress * (BOOK_IMAGES_COUNT[index] - 1));
    if (frameLast === frame) return frame;
    if (!images[index]) return frame;
    if (frame !== 0) document.querySelector('.canvasBook').style.filter = 'contrast(97.5%)';
    if (frame === 0) document.querySelector('.canvasBook').style.filter = 'contrast(99.5%)';
    if (frame === BOOK_IMAGES_COUNT[index] - 1) document.querySelector('.canvasBook').style.filter = 'contrast(99.5%)';
    requestAnimationFrame(() => updateBook(images[index][frame], context));
    return frame;
};

export default handleOnUpdate;

import { BOOK_IMAGES_COUNT } from './const';
import updateBook from './updateBook';

const handleOnUpdate = (e, index, frameLast, images, context) => {
    let frame = Math.floor(e.progress * (BOOK_IMAGES_COUNT[index] - 1));
    if (frameLast === frame) return frame;
    requestAnimationFrame(() => updateBook(images[index][frame], context));
    return frame;
};

export default handleOnUpdate;

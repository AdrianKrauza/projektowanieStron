import { BOOK_IMAGES_COUNT } from './const';
import currentFrame from './currentFrame';

const preloadImages = (images) => {
    BOOK_IMAGES_COUNT.map((count, index) => {
        for (let i = 0; i < count; i++) {
            images[index][i] = new Image();
            console.log(currentFrame(index, i), i);
            images[index][i].src = currentFrame(index, i);
        }
    });
    return images;
};

export default preloadImages;

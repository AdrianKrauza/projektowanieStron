const updateBook = (image, context) => {
    console.log(image);
    image && context.drawImage(image, 0, 0);
};

export default updateBook;

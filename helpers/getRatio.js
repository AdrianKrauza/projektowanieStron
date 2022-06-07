const getRatio = () => {
    if (!window) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    return ratio;
};
export default getRatio;

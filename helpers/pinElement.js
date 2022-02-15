

const pinElement = (trigger,pin start end) => {
    setTimeout(() => {
        ScrollTrigger.create({
            trigger: 'body ',
            pin: '#header > div ',
            start: '0% 0%',
            end: 900,
        });
    }, 0);
}
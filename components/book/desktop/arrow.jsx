const Arrow = ({ color = '#c2c2c2' }) => {
    return (
        <div style={{ top: '23rem', left: '-3rem' }} className={'absolute  top-[50rem]'}>
            <style jsx>{`
                .arrow {
                    position: absolute;
                    top: 1.5rem;
                    left: -0.6em;
                    width: 1.2rem;
                    height: 1.2rem;
                    transform: rotate(-45deg);
                    box-sizing: border-box;
                    border-left: 1px solid ${color};
                    border-bottom: 1px solid ${color};
                    animation: 1.5s ease 0.8s infinite normal none running sdb05;
                }

                @keyframes sdb05 {
                    0% {
                        transform: rotate(-45deg) translate(0, 0);
                        opacity: 0;
                    }

                    50% {
                        opacity: 1;
                    }

                    100% {
                        transform: rotate(-45deg) translate(-0.4vw, 0.4vw);
                        opacity: 0;
                    }
                }

                .line:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 21rem;
                    background: ${color};
                }

                .line:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 21rem;
                    background: #f5f5f6;
                    opacity: 1;
                }

                .line {
                    width: 0;
                    position: relative;
                    left: -1px;
                }

                .line:after {
                    animation: sdl06 2s 0.5s cubic-bezier(1, 0, 0, 1) infinite;
                }

                @keyframes sdl06 {
                    0% {
                        transform: scale(1, 0);
                        transform-origin: 0 0;
                    }

                    50% {
                        transform: scale(1, 1);
                        transform-origin: 0 0;
                    }

                    50.1% {
                        transform: scale(1, 1);
                        transform-origin: 0 100%;
                    }

                    100% {
                        transform: scale(1, 0);
                        transform-origin: 0 100%;
                    }
                }
            `}</style>
            <div className="line" />
            <div className="arrow" />
        </div>
    );
};

export default Arrow;

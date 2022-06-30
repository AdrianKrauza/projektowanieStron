import { useEffect } from 'react';
import marta from '/assets/thank/Marta-owocni.png';
import Image from 'next/image';

const months = [
    'styczniu',
    'lutym',
    'marcu',
    'kwietniu',
    'maju',
    'czerwcu',
    'lipcu',
    'sierpniu',
    'wrześniu',
    'październiku',
    'listopadzie',
    'grudniu',
];

const getMonth = () => {
    const date = new Date();
    return date.getMonth();
};
const Dziekujemy = () => {
    useEffect(() => {
        // LOL CONFETTI!!!
        //-----------Var Inits--------------
        const canvas = document.querySelector(' #confetticanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let cx = ctx.canvas.width / 2;
        let cy = ctx.canvas.height / 2;

        let confetti = [];
        const confettiCount = 300;
        const gravity = 0.5;
        const terminalVelocity = 5;
        const drag = 0.075;
        const colors = [
            {
                front: '#ffbe0b',
                back: '#fb5607',
            }, // red
            {
                front: '#ff006e',
                back: '#8338ec',
            }, // orange
            {
                front: '#3a86ff',
                back: '#5390d9',
            },
        ];

        //-----------Functions--------------
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            cx = ctx.canvas.width / 2;
            cy = ctx.canvas.height / 2;
        };

        const randomRange = (min, max) => Math.random() * (max - min) + min;

        const initConfetti = () => {
            for (let i = 0; i < confettiCount; i++) {
                confetti.push({
                    color: colors[Math.floor(randomRange(0, colors.length))],
                    dimensions: {
                        x: randomRange(10, 20),
                        y: randomRange(10, 30),
                    },
                    position: {
                        x: randomRange(0, canvas.width),
                        y: canvas.height - 1,
                    },
                    rotation: randomRange(0, 2 * Math.PI),
                    scale: {
                        x: 1,
                        y: 1,
                    },
                    velocity: {
                        x: randomRange(-25, 25),
                        y: randomRange(0, -50),
                    },
                });
            }
        };

        //---------Render-----------
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confetti.forEach((confetto, index) => {
                let width = confetto.dimensions.x * confetto.scale.x;
                let height = confetto.dimensions.y * confetto.scale.y;

                // Move canvas to position and rotate
                ctx.translate(confetto.position.x, confetto.position.y);
                ctx.rotate(confetto.rotation);

                // Apply forces to velocity
                confetto.velocity.x -= confetto.velocity.x * drag;
                confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
                confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

                // Set position
                confetto.position.x += confetto.velocity.x;
                confetto.position.y += confetto.velocity.y;

                // Delete confetti when out of frame
                if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

                // Loop confetto x position
                if (confetto.position.x > canvas.width) confetto.position.x = 0;
                if (confetto.position.x < 0) confetto.position.x = canvas.width;

                // Spin confetto by scaling y
                confetto.scale.y = Math.cos(confetto.position.y * 0.1);
                ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

                // Draw confetto
                ctx.fillRect(-width / 2, -height / 2, width, height);

                // Reset transform matrix
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });

            window.requestAnimationFrame(render);
        };

        window.addEventListener('resize', function () {
            resizeCanvas();
        });

        setTimeout(function () {
            initConfetti();
            render();
        }, 400);
    });
    return (
        <div
            className={
                'flex justify-start pt-[150px] m:pt-[100px] pb-[8rem] items-center min-h-screen bg-lightGray flex-col '
            }
        >
            <h1 className={'text-[5rem] m:text-[10rem] text-center'}>Udało się! Mamy Twoją wiadomość.</h1>
            <div className={'mt-[5rem] flex items-start'}>
                <div className={'w-[6rem]'}>
                    <Image {...marta} />
                </div>
                <p className={'text-[2.2rem] ml-[3rem] italic font-playfair m:text-[3.5rem]'}>
                    Hej tu Marta. O ile nie jest to weekend postaram <br />
                    się odpisać w ciągu najbliższych godzin... <br />
                    <br />
                    Do usłyszenia!
                </p>
            </div>
            <div className={'flex items-center mt-[5rem] m:flex-col-reverse'}>
                <div className={'m:flex m:justify-center flex-col items-center'}>
                    <p className={'m:text-[5rem] m:mt-[10rem]'}>
                        Ps: Pewnie już wiesz, że każdą
                        <br />
                        realizację zaczynamy od stworzenia
                        <br />
                        klikalnego prototypu - Makiety UX.
                        <br />
                        <br />
                        Ale czy wiesz, że w {months[getMonth()]}
                        <br />
                        opracowujemy za darmo?
                        <br />
                    </p>
                    <a
                        href=""
                        className={
                            'm:mt-[5rem] m:text-[5rem] m:p-[2rem]  bg-[#50764C] inline-block mt-[2rem] text-white text-center text-[1.5rem] font-normal p-[.5rem]'
                        }
                    >
                        Sprawdz co doktadnie <br /> otrzymasz i zobacz przyklady
                    </a>
                </div>

                <div>
                    <video
                        src="/assets/thank/video.mp4"
                        className={'w-[30rem] m:w-[70rem]'}
                        muted
                        playsInline
                        loop
                        autoPlay
                    ></video>
                </div>
            </div>
            <canvas
                className={'fixed click-event-none z-[999999] top-0 h-screen '}
                id="confetticanvas"
                width="2560"
                height="1240"
            ></canvas>
        </div>
    );
};

export default Dziekujemy;

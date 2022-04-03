import Image from 'next/image';

import page3c1 from '/assets/pragmile/Projekt-strony-Team-Novate3.jpg';
import page3c2 from '/assets/pragmile/Team-strona-teskty.jpg';
import page3c3 from '/assets/pragmile/Team-strona-dol2.jpg';
import text3 from '/assets/pragmile/Novate-teksty3.1f9cd7b2.png';
import gate3 from '/assets/pragmile/Kratki.png';
import box from '/assets/pragmile/Box.png';
import shadow from '/assets/pragmile/Cien.png';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import icon1 from '/assets/pragmile/icon1.json';
import icon2 from '/assets/pragmile/icon2.json';
import icon3 from '/assets/pragmile/icon3.json';
import img from '/assets/pragmile/Team-design.jpg';
import gate4 from '/assets/pragmile/Team-strona-kratka.jpg';
import sphere from '/assets/pragmile/Team-Kratka.png';

const boxesData = [
    {
        className: '-left-[38rem] -top-[2rem]',
        textClassName: 'right-[5rem]',
        text: 'Wspólne <br />cele',
    },
    {
        className: '-left-[36rem] top-[13rem]',
        textClassName: 'right-[5rem]',
        text: 'Więzi <br />i zaufanie',
    },
    {
        className: '-left-[30rem] top-[27rem]',
        textClassName: 'right-[6rem]',
        text: 'Pozytywne <br /> konflikty',
    },
    {
        className: '-left-[13rem] top-[37rem]',
        textClassName: 'left-[7rem] top-[10rem]',
        text: 'Wartościowa <br /> różnorodność',
    },
    {
        className: 'left-[1rem] top-[27rem]',
        textClassName: 'left-[18rem]',
        text: 'Otwarta, <br /> jasna komunikacja',
    },
    {
        className: 'left-[7rem] top-[13rem]',
        textClassName: 'left-[18rem]',
        text: 'Bezpieczne <br /> środowisko',
    },
    {
        className: 'left-[11rem] -top-[2rem]',
        textClassName: 'left-[18rem]',
        text: 'Wymienność <br /> ról',
    },
];
const Page3 = () => {
    useEffect(() => {
        if (window.customElements && document.body.attachShadow) {
            class CircleText extends HTMLElement {
                static get observedAttributes() {
                    return ['r', 'rotate'];
                }
                constructor() {
                    super();
                    let shadow = this.attachShadow({
                        mode: 'open',
                    });
                    shadow.innerHTML = `
                        <svg id="s">
                          <style>
                            svg { margin:auto; display: block; overflow: visible; padding: 1em; }
                            textPath { fill: currentColor; }
                          </style>
                          <defs><path id="p"/><circle id="r"/></defs>
                          <text id="t"><textPath id="tp" xlink:href="#p"></textPath></text>
                        </svg>`;
                    this.svg = shadow.getElementById('s');
                    this.path = shadow.getElementById('p');
                    this.text = shadow.getElementById('t');
                    this.textPath = shadow.getElementById('tp');
                    this.radius = shadow.getElementById('r').r.baseVal;
                    this.updateText();
                    let watchText = new MutationObserver(this.updateText.bind(this));
                    watchText.observe(this, {
                        childList: true,
                        characterData: true,
                    });
                }
                connectedCallback() {
                    this.updateRadius(this.getAttribute('r'));
                }
                attributeChangedCallback(name, oldValue, newValue) {
                    switch (name) {
                        case 'r':
                            if (this.svg.isConnected) this.updateRadius(newValue);
                            break;
                        case 'rotate':
                            this.updateTransform(newValue);
                            break;
                    }
                }
                updateRadius(newValue) {
                    var r;
                    if (this.svg.isConnected) {
                        let f = getComputedStyle(this.svg)['font-size'];
                    }
                    try {
                        this.radius.valueAsString = newValue;
                        r = window.innerWidth * 0.35;
                    } catch (e) {
                        r = 100;
                    }
                    let d = 2 * r;
                    let offset = -1 * r;
                    [
                        {
                            name: 'height',
                            value: d,
                        },
                        {
                            name: 'width',
                            value: d,
                        },
                        {
                            name: 'viewBox',
                            value: [offset, offset, d, d].join(),
                        },
                    ].forEach(({ name, value }) => this.svg.setAttribute(name, value));
                    this.path.setAttribute('d', `M${-r},0 A${r},${r},0 1 1 ${r},0 A${r},${r},0 1 1 ${-r},0Z`);
                }
                updateTransform(rotate) {
                    if (rotate) {
                        this.text.style['transform'] = `rotate(${rotate})`;
                    } else {
                        this.text.style['transform'] = 'none';
                    }
                }
                updateText() {
                    this.textPath.textContent = this.textContent.trim();
                }
            }
            console.log(customElements);

            customElements.get('circle-text') || customElements.define('circle-text', CircleText, {});
        }
    }, []);
    return (
        <>
            {/*overflow-hiddens*/}
            <div
                className={
                    'rounded-t-[10rem] w-[95vw]  page3 shadow-[1px_-9px_100px_18px_#141414]  border-[#022300]' +
                    ' overflow-hidden' +
                    ''
                }
            >
                <div className={'absolute h-[80rem] w-[95vw] top-[90px]  bg-[#F2EEE9]'} />
                {/*<div className={'bg-black'}>*/}
                <Image priority {...page3c1} />
                {/*</div>*/}
                <div className={'relative '}>
                    <div className="circleText w-[80rem] h-[80rem] text-[3rem] text-white rounded-full absolute left-1/2 bg-[#efede9] flex justify-center -translate-y-[10rem] -translate-x-1/2 ">
                        <circle-text
                            r="140"
                            style={{ transform: ' translate(-1vw,3vw)' }}
                            className={'text-white font-black text-[1rem] '}
                            rotate="0deg"
                        >
                            BUILD - MONITOR - FEEDBACK - APPLY - RESULT
                        </circle-text>
                    </div>
                    <div className="flex circleTextMain justify-center items-center  bg-[#f9f8f6]  absolute pb-32  w-[70rem] h-[70rem] rounded-[100%] left-1/2 -translate-x-1/2 shadow-[0_0_20px_20px_#0000001c]">
                        <p className={'leading-none text-[#363636] text-center text-[4rem] font-black mb-[30rem]'}>
                            Ogólna wydajność
                            <br />
                            zespołu jest wyższa
                            <br /> niż suma wydajności
                            <br />
                            jej członków
                        </p>
                    </div>
                    <div className={'relative bg-[#efede9] h-[95vw] top-[30rem] shadow-[0px_-10px_50px_50px_#efede9] '}>
                        <div className={'flex justify-center'}>
                            <div className={'w-[40rem] absolute top-[0rem] left-[33.5rem]'}>
                                <div className={'w-[50rem] h-[45rem] absolute top-[11rem] left-[-17rem] '}>
                                    <Image priority placeholder={'blur'} {...shadow} />
                                </div>
                                <div className={'w-[25rem] h-[25rem] absolute'}>
                                    <Image priority placeholder={'blur'} {...box} />
                                </div>
                            </div>
                            {boxesData.map(({ className, textClassName, text }, index) => (
                                <div className={`${className} relative w-[0] h-[0]  box${index}`} key={text}>
                                    <div className={`w-[14rem] h-[10rem] absolute top-[4rem] left-[4rem]`}>
                                        <Image priority placeholder={'blur'} {...shadow} />
                                    </div>
                                    <div className={'w-[10rem] h-[10rem] absolute left-[7rem] top-[-10px]'}>
                                        <Image priority placeholder={'blur'} {...box} />
                                    </div>
                                    <p
                                        className={'text-[2.5rem] color-[#717171] relative w-max ' + textClassName}
                                        dangerouslySetInnerHTML={{ __html: text }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={'bg-[#141414] '}>
                    <Image priority {...page3c3} placeholder={'blur'} />
                    <div className={'bg-gradient-to-t from-[#141414] h-[100px] absolute bottom-0 w-[1350px] '} />
                </div>
            </div>
            <div className={'gate3 left-[7rem] w-[10rem] h-[50rem]'}>
                <Image priority {...gate3} placeholder={'blur'} />
            </div>
            <div className={'gate4 left-[4rem] w-[10rem]'}>
                <Image priority {...gate4} placeholder={'blur'} />
            </div>
            <div className={'sphere4 left-[8rem] z-50 w-[15rem]'}>
                <Image priority {...sphere} placeholder={'blur'} />
            </div>
            <div className={'text3 left-[10rem] w-[35rem] h-[50rem]'}>
                <Image priority {...text3} placeholder={'blur'} />
            </div>
        </>
    );
};

export default Page3;

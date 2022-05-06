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
        className: '-left-[429px] -top-[104px]',
        textClassName: 'right-[26px]',
        text: 'Wspólne <br />cele',
    },
    {
        className: '-left-[397px] top-[48px]',
        textClassName: 'right-[23px]',
        text: 'Więzi <br />i zaufanie',
    },
    {
        className: '-left-[314px] top-[199px]',
        textClassName: 'right-[40px]',
        text: 'Pozytywne <br /> konflikty',
    },
    {
        className: '-left-[118px] top-[262px]',
        textClassName: 'left-[47px] top-[93px]',
        text: 'Wartościowa <br /> różnorodność',
    },
    {
        className: 'left-[90px] top-[199px]',
        textClassName: 'left-[150px]',
        text: 'Otwarta, <br /> jasna komunikacja',
    },
    {
        className: 'left-[175px] top-[48px]',
        textClassName: 'left-[150px]',
        text: 'Bezpieczne <br /> środowisko',
    },
    {
        className: 'left-[225px] -top-[104px]',
        textClassName: 'left-[150px]',
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
                            svg { margin:auto; margin-top:136px; display: block; overflow: visible; padding: 1em; }
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
                        r = 360;
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

            customElements.get('circle-text') || customElements.define('circle-text', CircleText, {});
        }
    }, []);
    return (
        <>
            <div
                className={
                    'rounded-t-[90px] overflow-hidden page3 shadow-[1px_-9px_100px_18px_#141414] border-[1px] border-[#022300]'
                }
            >
                <div className={'absolute h-[1450px] w-[1350px] top-[90px]  bg-[#F2EEE9]'} />
                <div className={'bg-black'}>
                    <Image priority {...page3c1} placeholder={'blur'} />
                </div>
                <div className={'relative'}>
                    <div />
                    <div className="circleText w-[980px] h-[1040px] text-[30px] text-white rounded-full absolute left-1/2 bg-[#efede9] flex justify-center -translate-y-[120px] -translate-x-1/2 ">
                        <circle-text
                            r="440"
                            style={{ transform: ' translateY(-100px)' }}
                            className={'text-white font-black text-[30px] '}
                            rotate="0deg"
                        >
                            BUILD - MONITOR - FEEDBACK - APPLY - RESULT
                        </circle-text>
                    </div>
                    <div className="flex circleTextMain justify-center items-center  bg-[#f9f8f6]  absolute pb-32  w-[600px] h-[600px] rounded-[100%] left-1/2 -translate-x-1/2 shadow-[0_0_20px_20px_#0000001c]">
                        <p className={'leading-none text-[#363636] text-center text-[41px] font-black mb-[130px]'}>
                            Ogólna wydajność
                            <br />
                            zespołu jest wyższa
                            <br /> niż suma wydajności
                            <br />
                            jej członków
                        </p>
                    </div>
                    <div
                        className={'relative bg-[#efede9] h-[925px] top-[307px] shadow-[0px_-10px_50px_50px_#efede9] '}
                    >
                        <div className={'flex justify-center'}>
                            <div className={'w-[300px] absolute -top-[60px]'}>
                                <div className={'w-[445px] h-[300px] absolute top-[150px] left-[-100px] '}>
                                    <Image priority placeholder={'blur'} {...shadow} />
                                </div>
                                <div className={'w-[260px] h-[260px] absolute'}>
                                    <Image priority placeholder={'blur'} {...box} />
                                </div>
                            </div>
                            {boxesData.map(({ className, textClassName, text }, index) => (
                                <div className={`${className} relative w-[0] h-[0]  box${index}`} key={text}>
                                    <div className={`w-[100px] h-[66px] absolute top-[42px] left-[52px]`}>
                                        <Image priority placeholder={'blur'} {...shadow} />
                                    </div>
                                    <div className={'w-[100px] h-[100px] absolute left-[50px] top-[-30px]'}>
                                        <Image priority placeholder={'blur'} {...box} />
                                    </div>
                                    <p
                                        className={'text-[18px] color-[#717171] relative w-max ' + textClassName}
                                        dangerouslySetInnerHTML={{ __html: text }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={'bg-[#141414] -mt-[210px]'}>
                    <Image priority {...page3c3} placeholder={'blur'} />
                    <div className={'bg-gradient-to-t from-[#141414] h-[100px] absolute bottom-0 w-[1350px] '} />
                </div>
            </div>
            <div className={'gate3 left-[110px]'}>
                <Image priority {...gate3} placeholder={'blur'} />
            </div>
            <div className={'gate4 left-[180px]'}>
                <Image priority {...gate4} placeholder={'blur'} />
            </div>
            <div className={'sphere4 left-[110px] z-50'}>
                <Image priority {...sphere} placeholder={'blur'} />
            </div>
            <div className={'text3 left-[120px]'}>
                <Image priority {...text3} placeholder={'blur'} />
            </div>
        </>
    );
};

export default Page3;

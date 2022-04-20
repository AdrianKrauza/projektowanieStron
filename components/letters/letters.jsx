import letters from '/assets/letters/wzrost.json';

import Lottie from 'lottie-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const UpperLine = () => {
    return (
        <svg
            // xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 768 954"
            className={'w-full'}
        >
            <defs>
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_5_G_D_0_P_0"
                    fill="freeze"
                    attributeName="d"
                    attributeType="XML"
                    from="M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                    to="M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                    keyTimes="0;1"
                    values="M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z ;M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_4_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M75.44 519.63 C75.44,519.63 75.44,519.63 75.44,519.63 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_4_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_4_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_2_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M144.6 484.89 C144.6,484.89 144.6,484.89 144.6,484.89 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_2_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_2_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_0_G_D_1_P_0"
                    fill="freeze"
                    attributeName="fill"
                    from="#ffffff"
                    to="#ffffff"
                    keyTimes="0;1"
                    values="#ffffff;#ffffff"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_0_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M110.67 476.58 C110.67,476.58 110.67,476.58 110.67,476.58 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-5.5"
                    to="-5.5"
                    type="rotate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-5.5;-5.5"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_6_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-155.548 -510.417"
                    to="-155.548 -510.417"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-155.548 -510.417;-155.548 -510.417"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_9_G_D_0_P_0"
                    fill="freeze"
                    attributeName="d"
                    attributeType="XML"
                    from="M257.42 339.54 C257.42,339.54 228.14,353.35 228.14,353.35 C228.14,353.35 228.14,404.85 228.14,404.85 C228.14,404.85 175.73,378.62 175.73,378.62 C175.73,378.62 175.62,410.74 175.62,410.74 C175.62,410.74 118.64,405.59 118.64,405.59 C118.64,405.59 118.57,464.64 118.57,464.64 C118.57,464.64 326.1,464.13 326.1,464.13 C326.1,464.13 326.04,411.82 326.04,411.82 C326.04,411.82 257.42,339.54 257.42,339.54z "
                    to="M257.42 339.54 C257.42,339.54 228.14,353.35 228.14,353.35 C228.14,353.35 228.14,404.85 228.14,404.85 C228.14,404.85 175.73,378.62 175.73,378.62 C175.73,378.62 175.62,410.74 175.62,410.74 C175.62,410.74 118.64,405.59 118.64,405.59 C118.64,405.59 118.57,464.64 118.57,464.64 C118.57,464.64 326.1,464.13 326.1,464.13 C326.1,464.13 326.04,411.82 326.04,411.82 C326.04,411.82 257.42,339.54 257.42,339.54z "
                    keyTimes="0;1"
                    values="M257.42 339.54 C257.42,339.54 228.14,353.35 228.14,353.35 C228.14,353.35 228.14,404.85 228.14,404.85 C228.14,404.85 175.73,378.62 175.73,378.62 C175.73,378.62 175.62,410.74 175.62,410.74 C175.62,410.74 118.64,405.59 118.64,405.59 C118.64,405.59 118.57,464.64 118.57,464.64 C118.57,464.64 326.1,464.13 326.1,464.13 C326.1,464.13 326.04,411.82 326.04,411.82 C326.04,411.82 257.42,339.54 257.42,339.54z ;M257.42 339.54 C257.42,339.54 228.14,353.35 228.14,353.35 C228.14,353.35 228.14,404.85 228.14,404.85 C228.14,404.85 175.73,378.62 175.73,378.62 C175.73,378.62 175.62,410.74 175.62,410.74 C175.62,410.74 118.64,405.59 118.64,405.59 C118.64,405.59 118.57,464.64 118.57,464.64 C118.57,464.64 326.1,464.13 326.1,464.13 C326.1,464.13 326.04,411.82 326.04,411.82 C326.04,411.82 257.42,339.54 257.42,339.54z "
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_8_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M187.16 481.94 C187.16,481.94 187.16,481.94 187.16,481.94 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_8_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_8_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_6_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M188 527.4 C188,527.4 188,527.4 188,527.4 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_6_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_6_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_4_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M135.95 506.86 C135.95,506.86 135.95,506.86 135.95,506.86 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_4_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_4_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_2_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M79.84 533.63 C79.84,533.63 79.84,533.63 79.84,533.63 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_2_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_2_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_0_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M140.31 484.77 C140.31,484.77 140.31,484.77 140.31,484.77 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-5.5"
                    to="-5.5"
                    type="rotate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-5.5;-5.5"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_5_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-595.693 -353.604"
                    to="-595.693 -353.604"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-595.693 -353.604;-595.693 -353.604"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_5_G_D_0_P_0"
                    fill="freeze"
                    attributeName="d"
                    attributeType="XML"
                    from="M114.25 425.32 C114.25,425.32 41.67,461.93 41.67,461.93 C41.67,461.93 41.67,511.51 41.67,511.51 C41.67,511.51 186.33,511.25 186.33,511.25 C186.33,511.25 186.33,467.5 186.33,467.5 C186.33,467.5 114.25,425.32 114.25,425.32z "
                    to="M114.25 425.32 C114.25,425.32 41.67,461.93 41.67,461.93 C41.67,461.93 41.67,511.51 41.67,511.51 C41.67,511.51 186.33,511.25 186.33,511.25 C186.33,511.25 186.33,467.5 186.33,467.5 C186.33,467.5 114.25,425.32 114.25,425.32z "
                    keyTimes="0;1"
                    values="M114.25 425.32 C114.25,425.32 41.67,461.93 41.67,461.93 C41.67,461.93 41.67,511.51 41.67,511.51 C41.67,511.51 186.33,511.25 186.33,511.25 C186.33,511.25 186.33,467.5 186.33,467.5 C186.33,467.5 114.25,425.32 114.25,425.32z ;M114.25 425.32 C114.25,425.32 41.67,461.93 41.67,461.93 C41.67,461.93 41.67,511.51 41.67,511.51 C41.67,511.51 186.33,511.25 186.33,511.25 C186.33,511.25 186.33,467.5 186.33,467.5 C186.33,467.5 114.25,425.32 114.25,425.32z "
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_4_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M105.44 491.88 C105.44,491.88 105.44,491.88 105.44,491.88 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_4_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_4_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_2_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M76.56 519.63 C76.56,519.63 76.56,519.63 76.56,519.63 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_2_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_2_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_0_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M110.1 465.88 C110.1,465.88 110.1,465.88 110.1,465.88 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-5.5"
                    to="-5.5"
                    type="rotate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-5.5;-5.5"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_4_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-479.978 -405.215"
                    to="-479.978 -405.215"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-479.978 -405.215;-479.978 -405.215"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_5_G_D_0_P_0"
                    fill="freeze"
                    attributeName="d"
                    attributeType="XML"
                    from="M24.5 480 C4,476.25 -16.5,480 -30,486.5 C-43.5,493 -82.74,510.15 -82.74,510.15 C-82.74,510.15 -82.74,578.15 -82.74,578.15 C-82.74,578.15 105.13,579.87 105.13,579.87 C105.13,579.87 105.07,526.05 105.07,526.05 C105.07,526.05 43.71,512.65 43.71,512.65 C43.71,512.65 60.24,495.56 24.5,480z "
                    to="M24.5 480 C4,476.25 -16.5,480 -30,486.5 C-43.5,493 -82.74,510.15 -82.74,510.15 C-82.74,510.15 -82.74,578.15 -82.74,578.15 C-82.74,578.15 105.13,579.87 105.13,579.87 C105.13,579.87 105.07,526.05 105.07,526.05 C105.07,526.05 43.71,512.65 43.71,512.65 C43.71,512.65 60.24,495.56 24.5,480z "
                    keyTimes="0;1"
                    values="M24.5 480 C4,476.25 -16.5,480 -30,486.5 C-43.5,493 -82.74,510.15 -82.74,510.15 C-82.74,510.15 -82.74,578.15 -82.74,578.15 C-82.74,578.15 105.13,579.87 105.13,579.87 C105.13,579.87 105.07,526.05 105.07,526.05 C105.07,526.05 43.71,512.65 43.71,512.65 C43.71,512.65 60.24,495.56 24.5,480z ;M24.5 480 C4,476.25 -16.5,480 -30,486.5 C-43.5,493 -82.74,510.15 -82.74,510.15 C-82.74,510.15 -82.74,578.15 -82.74,578.15 C-82.74,578.15 105.13,579.87 105.13,579.87 C105.13,579.87 105.07,526.05 105.07,526.05 C105.07,526.05 43.71,512.65 43.71,512.65 C43.71,512.65 60.24,495.56 24.5,480z "
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_4_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M88.95 505.16 C88.95,505.16 88.95,505.16 88.95,505.16 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_4_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_4_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_2_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M190.7 522.91 C190.7,522.91 190.7,522.91 190.7,522.91 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_2_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_2_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_0_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M141.07 469.97 C141.07,469.97 141.07,469.97 141.07,469.97 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-5.5"
                    to="-5.5"
                    type="rotate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-5.5;-5.5"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_3_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-371.945 -450.307"
                    to="-371.945 -450.307"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-371.945 -450.307;-371.945 -450.307"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_3_G_D_0_P_0"
                    fill="freeze"
                    attributeName="d"
                    attributeType="XML"
                    from="M-88.21 518.77 C-88.21,518.77 -166.48,556.25 -166.48,556.25 C-166.48,556.25 -166.54,622.03 -166.54,622.03 C-166.54,622.03 -35.4,622.25 -35.4,622.25 C-35.4,622.25 -35.53,558.46 -35.53,558.46 C-35.53,558.46 -54.22,546.45 -54.22,546.45 C-54.22,546.45 -69.62,553.25 -69.62,553.25 C-69.62,553.25 -69.65,530.89 -69.65,530.89 C-69.65,530.89 -88.21,518.77 -88.21,518.77z "
                    to="M-88.21 518.77 C-88.21,518.77 -166.48,556.25 -166.48,556.25 C-166.48,556.25 -166.54,622.03 -166.54,622.03 C-166.54,622.03 -35.4,622.25 -35.4,622.25 C-35.4,622.25 -35.53,558.46 -35.53,558.46 C-35.53,558.46 -54.22,546.45 -54.22,546.45 C-54.22,546.45 -69.62,553.25 -69.62,553.25 C-69.62,553.25 -69.65,530.89 -69.65,530.89 C-69.65,530.89 -88.21,518.77 -88.21,518.77z "
                    keyTimes="0;1"
                    values="M-88.21 518.77 C-88.21,518.77 -166.48,556.25 -166.48,556.25 C-166.48,556.25 -166.54,622.03 -166.54,622.03 C-166.54,622.03 -35.4,622.25 -35.4,622.25 C-35.4,622.25 -35.53,558.46 -35.53,558.46 C-35.53,558.46 -54.22,546.45 -54.22,546.45 C-54.22,546.45 -69.62,553.25 -69.62,553.25 C-69.62,553.25 -69.65,530.89 -69.65,530.89 C-69.65,530.89 -88.21,518.77 -88.21,518.77z ;M-88.21 518.77 C-88.21,518.77 -166.48,556.25 -166.48,556.25 C-166.48,556.25 -166.54,622.03 -166.54,622.03 C-166.54,622.03 -35.4,622.25 -35.4,622.25 C-35.4,622.25 -35.53,558.46 -35.53,558.46 C-35.53,558.46 -54.22,546.45 -54.22,546.45 C-54.22,546.45 -69.62,553.25 -69.62,553.25 C-69.62,553.25 -69.65,530.89 -69.65,530.89 C-69.65,530.89 -88.21,518.77 -88.21,518.77z "
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_2_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M86.45 505.16 C86.45,505.16 86.45,505.16 86.45,505.16 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_2_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_2_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_0_G_D_1_P_0"
                    fill="freeze"
                    attributeName="fill"
                    from="#ffffff"
                    to="#ffffff"
                    keyTimes="0;1"
                    values="#ffffff;#ffffff"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_0_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M111.06 475.2 C111.06,475.2 111.06,475.2 111.06,475.2 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-5.5"
                    to="-5.5"
                    type="rotate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-5.5;-5.5"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_2_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-254.943 -480.781"
                    to="-254.943 -480.781"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-254.943 -480.781;-254.943 -480.781"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_5_G_D_0_P_0"
                    fill="freeze"
                    attributeName="d"
                    attributeType="XML"
                    from="M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                    to="M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                    keyTimes="0;1"
                    values="M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z ;M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_4_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M75.44 519.63 C75.44,519.63 75.44,519.63 75.44,519.63 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_4_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_4_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_2_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M144.6 484.89 C144.6,484.89 144.6,484.89 144.6,484.89 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_2_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_2_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.2601563;0.2601588;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_0_G_D_1_P_0"
                    fill="freeze"
                    attributeName="fill"
                    from="#ffffff"
                    to="#ffffff"
                    keyTimes="0;1"
                    values="#ffffff;#ffffff"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_0_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M110.67 476.58 C110.67,476.58 110.67,476.58 110.67,476.58 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-5.5"
                    to="-5.5"
                    type="rotate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-5.5;-5.5"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_1_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-155.548 -510.417"
                    to="-155.548 -510.417"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-155.548 -510.417;-155.548 -510.417"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_5_G_D_0_P_0"
                    fill="freeze"
                    attributeName="d"
                    attributeType="XML"
                    from="M-186.55 636.44 C-186.55,636.44 -227.52,612.24 -277,641.03 C-284.28,645.66 -293.08,651.53 -293.45,665.75 C-293.73,676.25 -293.45,719 -293.45,719 C-293.45,719 -146.91,719 -146.91,719 C-146.91,719 -146.66,672.13 -146.66,672.13 C-146.66,672.13 -148.82,660.33 -159.49,654.93 C-162.49,656.43 -186.55,668.83 -186.55,668.83 C-186.55,668.83 -186.55,636.44 -186.55,636.44z "
                    to="M-186.55 636.44 C-186.55,636.44 -227.52,612.24 -277,641.03 C-284.28,645.66 -293.08,651.53 -293.45,665.75 C-293.73,676.25 -293.45,719 -293.45,719 C-293.45,719 -146.91,719 -146.91,719 C-146.91,719 -146.66,672.13 -146.66,672.13 C-146.66,672.13 -148.82,660.33 -159.49,654.93 C-162.49,656.43 -186.55,668.83 -186.55,668.83 C-186.55,668.83 -186.55,636.44 -186.55,636.44z "
                    keyTimes="0;1"
                    values="M-186.55 636.44 C-186.55,636.44 -227.52,612.24 -277,641.03 C-284.28,645.66 -293.08,651.53 -293.45,665.75 C-293.73,676.25 -293.45,719 -293.45,719 C-293.45,719 -146.91,719 -146.91,719 C-146.91,719 -146.66,672.13 -146.66,672.13 C-146.66,672.13 -148.82,660.33 -159.49,654.93 C-162.49,656.43 -186.55,668.83 -186.55,668.83 C-186.55,668.83 -186.55,636.44 -186.55,636.44z ;M-186.55 636.44 C-186.55,636.44 -227.52,612.24 -277,641.03 C-284.28,645.66 -293.08,651.53 -293.45,665.75 C-293.73,676.25 -293.45,719 -293.45,719 C-293.45,719 -146.91,719 -146.91,719 C-146.91,719 -146.66,672.13 -146.66,672.13 C-146.66,672.13 -148.82,660.33 -159.49,654.93 C-162.49,656.43 -186.55,668.83 -186.55,668.83 C-186.55,668.83 -186.55,636.44 -186.55,636.44z "
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_4_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M105.44 494.63 C105.44,494.63 105.44,494.63 105.44,494.63 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_4_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_4_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.5203125;0.520315;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_2_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M75.44 519.63 C75.44,519.63 75.44,519.63 75.44,519.63 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_2_G"
                    fill="freeze"
                    attributeName="transform"
                    from="34.563 -257.125"
                    to="34.563 -257.125"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="34.563 -257.125;34.563 -257.125"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_2_G_M"
                    fill="freeze"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    keyTimes="0;0.5203125;0.520315;1"
                    values="0;0;1;1"
                    keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
                    calcMode="spline"
                />
                <animate
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_0_G_D_1_P_0"
                    fill="freeze"
                    attributeName="fill"
                    from="#ffffff"
                    to="#ffffff"
                    keyTimes="0;1"
                    values="#ffffff;#ffffff"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateMotion
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_0_G"
                    fill="freeze"
                    keyTimes="0;1"
                    path="M56.87 470.84 C56.87,470.84 56.87,470.84 56.87,470.84 "
                    keyPoints="0;1"
                    keySplines="0 0 0 0"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-5.5"
                    to="-5.5"
                    type="rotate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-5.5;-5.5"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animateTransform
                    repeatCount="indefinite"
                    dur="0.04004s"
                    begin="0s"
                    xlinkHref="#_R_G_L_0_G_L_0_G"
                    fill="freeze"
                    attributeName="transform"
                    from="-70.997 -555.426"
                    to="-70.997 -555.426"
                    type="translate"
                    additive="sum"
                    keyTimes="0;1"
                    values="-70.997 -555.426;-70.997 -555.426"
                    keySplines="0 0 1 1"
                    calcMode="spline"
                />
                <animate attributeType="XML" attributeName="opacity" dur="0s" from="0" to="1" xlinkHref="#time_group" />
            </defs>
            <g id="_R_G">
                <g id="_R_G_L_6_G" transform=" translate(686.75, 387.5) translate(-110, -262.5)">
                    <g
                        id="_R_G_L_6_G_L_5_G"
                        transform=" translate(109.75, 523.25) scale(0.98, 0.98) translate(194.75, -660.25)"
                    >
                        <path
                            id="_R_G_L_6_G_L_5_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                        />
                    </g>
                    <g id="_R_G_L_6_G_L_4_G_M">
                        <g id="_R_G_L_6_G_L_4_G" />
                    </g>
                    <g
                        id="_R_G_L_6_G_L_3_G"
                        transform=" translate(109.75, 523.25) scale(0.98, 0.98) translate(194.75, -660.25)"
                    >
                        <path
                            id="_R_G_L_6_G_L_3_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-271.48 612.2 C-271.48,612.2 -271.38,665.35 -271.38,665.35 C-271.38,665.35 -175.16,665.61 -175.16,665.61 C-175.16,665.61 -175.21,633.07 -175.21,633.07 C-175.21,633.07 -271.48,612.2 -271.48,612.2z "
                        />
                    </g>
                    <g id="_R_G_L_6_G_L_2_G_M">
                        <g id="_R_G_L_6_G_L_2_G" />
                    </g>
                    <g
                        id="_R_G_L_6_G_L_1_G"
                        transform=" translate(178.96, 488.998) scale(0.98, 0.98) translate(194.75, -660.25)"
                    >
                        <path
                            id="_R_G_L_6_G_L_1_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-271.48 612.01 C-271.48,612.01 -271.27,698.07 -271.27,698.07 C-271.27,698.07 -250.92,698.44 -250.92,698.44 C-250.92,698.44 -250.93,648.24 -250.93,648.24 C-250.93,648.24 -271.48,612.01 -271.48,612.01z "
                        />
                    </g>
                    <g id="_R_G_L_6_G_L_0_G">
                        <path
                            id="_R_G_L_6_G_L_0_G_D_0_P_0"
                            stroke="#e6e7eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeWidth="0"
                            strokeOpacity="1"
                            d=" M168.81 512.9 C168.81,512.9 153.91,475.8 153.91,475.8 C153.91,475.8 184.35,464.63 184.35,464.63 C184.35,464.63 200.46,521.55 200.46,521.55 C200.46,521.55 230.6,545.71 230.6,545.71 C230.6,545.71 202.01,556.2 202.01,556.2 C202.01,556.2 171.86,532.04 171.86,532.04 C171.86,532.04 80.49,502.74 80.49,502.74 C80.49,502.74 110.77,491.63 110.77,491.63 C110.77,491.63 168.81,512.9 168.81,512.9z "
                        />
                        <path
                            id="_R_G_L_6_G_L_0_G_D_1_P_0"
                            fill="#ffffff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M168.81 512.9 C168.81,512.9 153.91,475.8 153.91,475.8 C153.91,475.8 184.35,464.63 184.35,464.63 C184.35,464.63 200.46,521.55 200.46,521.55 C200.46,521.55 230.6,545.71 230.6,545.71 C230.6,545.71 202.01,556.2 202.01,556.2 C202.01,556.2 171.86,532.04 171.86,532.04 C171.86,532.04 80.49,502.74 80.49,502.74 C80.49,502.74 110.77,491.63 110.77,491.63 C110.77,491.63 168.81,512.9 168.81,512.9z "
                        />
                    </g>
                </g>
                <g id="_R_G_L_5_G" transform=" translate(575.25, 450) translate(-140, -274.5)">
                    <g
                        id="_R_G_L_5_G_L_9_G"
                        transform=" translate(139.625, 547.75) scale(0.98, 0.98) translate(-221.125, -463.75)"
                    >
                        <path
                            id="_R_G_L_5_G_L_9_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M257.42 339.54 C257.42,339.54 228.14,353.35 228.14,353.35 C228.14,353.35 228.14,404.85 228.14,404.85 C228.14,404.85 175.73,378.62 175.73,378.62 C175.73,378.62 175.62,410.74 175.62,410.74 C175.62,410.74 118.64,405.59 118.64,405.59 C118.64,405.59 118.57,464.64 118.57,464.64 C118.57,464.64 326.1,464.13 326.1,464.13 C326.1,464.13 326.04,411.82 326.04,411.82 C326.04,411.82 257.42,339.54 257.42,339.54z "
                        />
                    </g>
                    <g id="_R_G_L_5_G_L_8_G_M">
                        <g id="_R_G_L_5_G_L_8_G" />
                    </g>
                    <g id="_R_G_L_5_G_L_7_G" transform=" translate(140, 274.5) translate(0, 0)">
                        <path
                            id="_R_G_L_5_G_L_7_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M6.25 165 C6.25,165 6.25,293.5 6.25,293.5 C6.25,293.5 50,292 50,292 C50,292 49.75,206.75 49.75,206.75 C49.75,206.75 6.25,165 6.25,165z "
                        />
                    </g>
                    <g id="_R_G_L_5_G_L_6_G_M">
                        <g id="_R_G_L_5_G_L_6_G" />
                    </g>
                    <g id="_R_G_L_5_G_L_5_G" transform=" translate(140, 274.5) translate(0, 0)">
                        <path
                            id="_R_G_L_5_G_L_5_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M7 209.75 C7,209.75 7,289.75 7,289.75 C7,289.75 74.5,276.75 74.5,276.75 C74.5,276.75 74.5,237.25 74.5,237.25 C74.5,237.25 7,209.75 7,209.75z "
                        />
                    </g>
                    <g id="_R_G_L_5_G_L_4_G_M">
                        <g id="_R_G_L_5_G_L_4_G" />
                    </g>
                    <g id="_R_G_L_5_G_L_3_G" transform=" translate(140, 274.5) translate(0, 0)">
                        <path
                            id="_R_G_L_5_G_L_3_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-45 189.63 C-45,189.63 -45,290.75 -45,290.75 C-45,290.75 -1.25,293 -1.25,293 C-1.25,293 -1.25,233.75 -1.25,233.75 C-1.25,233.75 -45,189.63 -45,189.63z "
                        />
                    </g>
                    <g id="_R_G_L_5_G_L_2_G_M">
                        <g id="_R_G_L_5_G_L_2_G" />
                    </g>
                    <g id="_R_G_L_5_G_L_1_G" transform=" translate(140, 274.5) translate(0, 0)">
                        <path
                            id="_R_G_L_5_G_L_1_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-100.75 216.75 C-100.75,216.75 -100.75,294 -100.75,294 C-100.75,294 15.25,296.25 15.25,296.25 C15.25,296.25 15.25,264.5 15.25,264.5 C15.25,264.5 -100.75,216.75 -100.75,216.75z "
                        />
                    </g>
                    <g id="_R_G_L_5_G_L_0_G">
                        <path
                            id="_R_G_L_5_G_L_0_G_D_0_P_0"
                            stroke="#e6e7eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeWidth="2"
                            strokeOpacity="1"
                            d=" M646.96 356.37 C646.96,356.37 607.75,309.28 607.75,309.28 C607.75,309.28 635.7,299.02 635.7,299.02 C635.7,299.02 694.81,375.38 694.81,375.38 C694.81,375.38 665.57,386.11 665.57,386.11 C665.57,386.11 602.06,353.52 602.06,353.52 C602.06,353.52 634.56,397.49 634.56,397.49 C634.56,397.49 605.4,408.19 605.4,408.19 C605.4,408.19 496.58,350.07 496.58,350.07 C496.58,350.07 524.61,339.78 524.61,339.78 C524.61,339.78 590.65,377.03 590.65,377.03 C590.65,377.03 554.09,328.97 554.09,328.97 C554.09,328.97 578.03,320.19 578.03,320.19 C578.03,320.19 646.96,356.37 646.96,356.37z "
                        />
                        <path
                            id="_R_G_L_5_G_L_0_G_D_1_P_0"
                            fill="#ffffff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M646.96 356.37 C646.96,356.37 607.75,309.28 607.75,309.28 C607.75,309.28 635.7,299.02 635.7,299.02 C635.7,299.02 694.81,375.38 694.81,375.38 C694.81,375.38 665.57,386.11 665.57,386.11 C665.57,386.11 602.06,353.52 602.06,353.52 C602.06,353.52 634.56,397.49 634.56,397.49 C634.56,397.49 605.4,408.19 605.4,408.19 C605.4,408.19 496.58,350.07 496.58,350.07 C496.58,350.07 524.61,339.78 524.61,339.78 C524.61,339.78 590.65,377.03 590.65,377.03 C590.65,377.03 554.09,328.97 554.09,328.97 C554.09,328.97 578.03,320.19 578.03,320.19 C578.03,320.19 646.96,356.37 646.96,356.37z "
                        />
                    </g>
                </g>
                <g id="_R_G_L_4_G" transform=" translate(465.25, 512.25) translate(-110, -255.5)">
                    <g
                        id="_R_G_L_4_G_L_5_G"
                        transform=" translate(110, 510.25) scale(0.98, 0.98) translate(-114, -511.25)"
                    >
                        <path
                            id="_R_G_L_4_G_L_5_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M114.25 425.32 C114.25,425.32 41.67,461.93 41.67,461.93 C41.67,461.93 41.67,511.51 41.67,511.51 C41.67,511.51 186.33,511.25 186.33,511.25 C186.33,511.25 186.33,467.5 186.33,467.5 C186.33,467.5 114.25,425.32 114.25,425.32z "
                        />
                    </g>
                    <g id="_R_G_L_4_G_L_4_G_M">
                        <g id="_R_G_L_4_G_L_4_G" />
                    </g>
                    <g id="_R_G_L_4_G_L_3_G" transform=" translate(110, 255.5) translate(0, 0)">
                        <path
                            id="_R_G_L_4_G_L_3_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M5 191.13 C5,191.13 -13.62,183.13 -29.75,191.88 C-36,195.75 -38.12,199.13 -38.62,202.25 C-38.62,204.63 -38.5,266.25 -38.5,266.25 C-38.5,266.25 6.25,266.25 6.25,266.25 C6.25,266.25 5,191.13 5,191.13z "
                        />
                    </g>
                    <g id="_R_G_L_4_G_L_2_G_M">
                        <g id="_R_G_L_4_G_L_2_G" />
                    </g>
                    <g id="_R_G_L_4_G_L_1_G" transform=" translate(110, 255.5) translate(0, 0)">
                        <path
                            id="_R_G_L_4_G_L_1_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-71 206.5 C-71,206.5 -70.75,269.75 -70.75,269.75 C-70.75,269.75 6,269 6,269 C6,269 6.25,259.25 6.25,250.75 C-4.75,251 -27.25,246.25 -42,239.5 C-70.75,224.25 -71,206.5 -71,206.5z "
                        />
                    </g>
                    <g id="_R_G_L_4_G_L_0_G">
                        <path
                            id="_R_G_L_4_G_L_0_G_D_0_P_0"
                            stroke="#e6e7eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeWidth="2"
                            strokeOpacity="1"
                            d=" M532.88 387.79 C541.07,394.35 546.19,400.93 548.27,407.54 C550.34,414.14 549.18,420.23 544.79,425.81 C540.4,431.4 533.22,436.02 523.26,439.67 C513.3,443.33 502.82,445.25 491.82,445.45 C480.83,445.65 470.12,444.09 459.7,440.77 C449.28,437.46 440,432.67 431.87,426.41 C431.87,426.41 427.15,422.62 427.15,422.62 C418.92,416.03 413.77,409.44 411.69,402.87 C409.61,396.29 410.79,390.19 415.21,384.57 C419.64,378.95 426.86,374.31 436.87,370.63 C446.78,367 457.3,365.11 468.45,364.97 C479.59,364.83 490.45,366.47 501,369.9 C511.56,373.32 520.9,378.25 529.02,384.7 C529.02,384.7 532.88,387.79 532.88,387.79z  M500.69 395.5 C492.35,388.82 484.08,384.46 475.87,382.42 C467.67,380.38 459.95,380.68 452.72,383.34 C438.58,388.52 438.72,397.36 453.14,409.85 C453.14,409.85 459.22,414.82 459.22,414.82 C467.45,421.41 475.67,425.78 483.89,427.92 C492.11,430.07 499.97,429.77 507.47,427.02 C514.59,424.4 517.91,420.65 517.42,415.76 C516.93,410.86 512.65,405.14 504.55,398.59 C504.55,398.59 500.69,395.5 500.69,395.5z "
                        />
                        <path
                            id="_R_G_L_4_G_L_0_G_D_1_P_0"
                            fill="#ffffff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M532.88 387.79 C541.07,394.35 546.19,400.93 548.27,407.54 C550.34,414.14 549.18,420.23 544.79,425.81 C540.4,431.4 533.22,436.02 523.26,439.67 C513.3,443.33 502.82,445.25 491.82,445.45 C480.83,445.65 470.12,444.09 459.7,440.77 C449.28,437.46 440,432.67 431.87,426.41 C431.87,426.41 427.15,422.62 427.15,422.62 C418.92,416.03 413.77,409.44 411.69,402.87 C409.61,396.29 410.79,390.19 415.21,384.57 C419.64,378.95 426.86,374.31 436.87,370.63 C446.78,367 457.3,365.11 468.45,364.97 C479.59,364.83 490.45,366.47 501,369.9 C511.56,373.32 520.9,378.25 529.02,384.7 C529.02,384.7 532.88,387.79 532.88,387.79z  M500.69 395.5 C492.35,388.82 484.08,384.46 475.87,382.42 C467.67,380.38 459.95,380.68 452.72,383.34 C438.58,388.52 438.72,397.36 453.14,409.85 C453.14,409.85 459.22,414.82 459.22,414.82 C467.45,421.41 475.67,425.78 483.89,427.92 C492.11,430.07 499.97,429.77 507.47,427.02 C514.59,424.4 517.91,420.65 517.42,415.76 C516.93,410.86 512.65,405.14 504.55,398.59 C504.55,398.59 500.69,395.5 500.69,395.5z "
                        />
                    </g>
                </g>
                <g id="_R_G_L_3_G" transform=" translate(360.5, 570.75) translate(-140, -262.5)">
                    <g
                        id="_R_G_L_3_G_L_5_G"
                        transform=" translate(140.375, 524.5) scale(0.98, 0.98) translate(-10.875, -580)"
                    >
                        <path
                            id="_R_G_L_3_G_L_5_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M24.5 480 C4,476.25 -16.5,480 -30,486.5 C-43.5,493 -82.74,510.15 -82.74,510.15 C-82.74,510.15 -82.74,578.15 -82.74,578.15 C-82.74,578.15 105.13,579.87 105.13,579.87 C105.13,579.87 105.07,526.05 105.07,526.05 C105.07,526.05 43.71,512.65 43.71,512.65 C43.71,512.65 60.24,495.56 24.5,480z "
                        />
                    </g>
                    <g id="_R_G_L_3_G_L_4_G_M">
                        <g id="_R_G_L_3_G_L_4_G" />
                    </g>
                    <g id="_R_G_L_3_G_L_3_G" transform=" translate(140, 262.5) translate(0, 0)">
                        <path
                            id="_R_G_L_3_G_L_3_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-91.25 194.25 C-91.25,194.25 -91.25,267.25 -91.25,267.25 C-91.25,267.25 0.25,268.25 0.25,268.25 C0.25,268.25 0.25,253 0.25,253 C0.25,253 -91.25,194.25 -91.25,194.25z "
                        />
                    </g>
                    <g id="_R_G_L_3_G_L_2_G_M">
                        <g id="_R_G_L_3_G_L_2_G" />
                    </g>
                    <g id="_R_G_L_3_G_L_1_G" transform=" translate(140, 262.5) translate(0, 0)">
                        <path
                            id="_R_G_L_3_G_L_1_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-3.75 219.75 C-3.75,219.75 -4.5,267.63 -4.5,267.63 C-4.5,267.63 62.25,267.63 62.25,267.63 C62.25,267.63 62.25,224.75 62.25,224.75 C62.25,224.75 10.42,212.94 10.42,212.94 C10.42,212.94 -3.75,219.75 -3.75,219.75z "
                        />
                    </g>
                    <g id="_R_G_L_3_G_L_0_G">
                        <path
                            id="_R_G_L_3_G_L_0_G_D_0_P_0"
                            stroke="#e6e7eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeWidth="2"
                            strokeOpacity="1"
                            d=" M380.53 456.02 C380.53,456.02 365.27,461.62 365.27,461.62 C365.27,461.62 394.95,485.41 394.95,485.41 C394.95,485.41 366.76,495.75 366.76,495.75 C366.76,495.75 282.83,428.5 282.83,428.5 C282.83,428.5 328.86,411.61 328.86,411.61 C342.73,406.52 355.78,404.31 368.01,404.98 C380.25,405.65 390.39,409.21 398.45,415.67 C404.29,420.35 407.48,424.83 408.02,429.11 C408.57,433.4 406.52,437.78 401.89,442.26 C401.89,442.26 460.19,460.46 460.19,460.46 C460.19,460.46 461.06,461.15 461.06,461.15 C461.06,461.15 430.86,472.23 430.86,472.23 C430.86,472.23 380.53,456.02 380.53,456.02z  M349.7 449.15 C349.7,449.15 367.54,442.6 367.54,442.6 C372.89,440.64 375.91,438.35 376.59,435.74 C377.27,433.12 375.8,430.37 372.18,427.46 C368.56,424.56 364.35,422.79 359.56,422.14 C354.77,421.49 349.72,422.14 344.42,424.08 C344.42,424.08 326.59,430.63 326.59,430.63 C326.59,430.63 349.7,449.15 349.7,449.15z "
                        />
                        <path
                            id="_R_G_L_3_G_L_0_G_D_1_P_0"
                            fill="#ffffff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M380.53 456.02 C380.53,456.02 365.27,461.62 365.27,461.62 C365.27,461.62 394.95,485.41 394.95,485.41 C394.95,485.41 366.76,495.75 366.76,495.75 C366.76,495.75 282.83,428.5 282.83,428.5 C282.83,428.5 328.86,411.61 328.86,411.61 C342.73,406.52 355.78,404.31 368.01,404.98 C380.25,405.65 390.39,409.21 398.45,415.67 C404.29,420.35 407.48,424.83 408.02,429.11 C408.57,433.4 406.52,437.78 401.89,442.26 C401.89,442.26 460.19,460.46 460.19,460.46 C460.19,460.46 461.06,461.15 461.06,461.15 C461.06,461.15 430.86,472.23 430.86,472.23 C430.86,472.23 380.53,456.02 380.53,456.02z  M349.7 449.15 C349.7,449.15 367.54,442.6 367.54,442.6 C372.89,440.64 375.91,438.35 376.59,435.74 C377.27,433.12 375.8,430.37 372.18,427.46 C368.56,424.56 364.35,422.79 359.56,422.14 C354.77,421.49 349.72,422.14 344.42,424.08 C344.42,424.08 326.59,430.63 326.59,430.63 C326.59,430.63 349.7,449.15 349.7,449.15z "
                        />
                    </g>
                </g>
                <g id="_R_G_L_2_G" transform=" translate(247.5, 607.75) translate(-110, -263.5)">
                    <g
                        id="_R_G_L_2_G_L_3_G"
                        transform=" translate(109.625, 526.25) scale(0.98, 0.98) translate(101.375, -622.25)"
                    >
                        <path
                            id="_R_G_L_2_G_L_3_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-88.21 518.77 C-88.21,518.77 -166.48,556.25 -166.48,556.25 C-166.48,556.25 -166.54,622.03 -166.54,622.03 C-166.54,622.03 -35.4,622.25 -35.4,622.25 C-35.4,622.25 -35.53,558.46 -35.53,558.46 C-35.53,558.46 -54.22,546.45 -54.22,546.45 C-54.22,546.45 -69.62,553.25 -69.62,553.25 C-69.62,553.25 -69.65,530.89 -69.65,530.89 C-69.65,530.89 -88.21,518.77 -88.21,518.77z "
                        />
                    </g>
                    <g id="_R_G_L_2_G_L_2_G_M">
                        <g id="_R_G_L_2_G_L_2_G" />
                    </g>
                    <g
                        id="_R_G_L_2_G_L_1_G"
                        transform=" translate(109.625, 526.25) scale(0.98, 0.98) translate(101.375, -622.25)"
                    >
                        <path
                            id="_R_G_L_2_G_L_1_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-166.48 556.25 C-166.48,556.25 -166.54,622.03 -166.54,622.03 C-166.54,622.03 -72.65,622.24 -72.65,622.24 C-72.65,622.24 -72.78,617.9 -72.78,617.9 C-72.78,617.9 -166.48,556.25 -166.48,556.25z "
                        />
                    </g>
                    <g id="_R_G_L_2_G_L_0_G">
                        <path
                            id="_R_G_L_2_G_L_0_G_D_0_P_0"
                            stroke="#e6e7eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeWidth="2"
                            strokeOpacity="1"
                            d=" M317.02 474.94 C317.02,474.94 271.55,491.63 271.55,491.63 C271.55,491.63 304.99,518.42 304.99,518.42 C304.99,518.42 276.79,528.76 276.79,528.76 C276.79,528.76 192.87,461.51 192.87,461.51 C192.87,461.51 271.1,432.8 271.1,432.8 C271.1,432.8 286.73,445.32 286.73,445.32 C286.73,445.32 236.68,463.68 236.68,463.68 C236.68,463.68 255.99,479.16 255.99,479.16 C255.99,479.16 301.46,462.47 301.46,462.47 C301.46,462.47 317.02,474.94 317.02,474.94z "
                        />
                        <path
                            id="_R_G_L_2_G_L_0_G_D_1_P_0"
                            fill="#ffffff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M317.02 474.94 C317.02,474.94 271.55,491.63 271.55,491.63 C271.55,491.63 304.99,518.42 304.99,518.42 C304.99,518.42 276.79,528.76 276.79,528.76 C276.79,528.76 192.87,461.51 192.87,461.51 C192.87,461.51 271.1,432.8 271.1,432.8 C271.1,432.8 286.73,445.32 286.73,445.32 C286.73,445.32 236.68,463.68 236.68,463.68 C236.68,463.68 255.99,479.16 255.99,479.16 C255.99,479.16 301.46,462.47 301.46,462.47 C301.46,462.47 317.02,474.94 317.02,474.94z "
                        />
                    </g>
                </g>
                <g id="_R_G_L_1_G" transform=" translate(152.25, 644.25) translate(-110, -262.5)">
                    <g
                        id="_R_G_L_1_G_L_5_G"
                        transform=" translate(109.75, 523.25) scale(0.98, 0.98) translate(194.75, -660.25)"
                    >
                        <path
                            id="_R_G_L_1_G_L_5_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-168.32 562.06 C-168.32,562.06 -200.92,576.98 -200.92,576.98 C-200.92,576.98 -200.96,607.84 -200.96,607.84 C-200.96,607.84 -240.75,597.75 -240.75,597.75 C-240.75,597.75 -271.51,611.18 -271.51,611.18 C-271.51,611.18 -271.48,660 -271.48,660 C-271.48,660 -113.53,660.25 -113.53,660.25 C-113.53,660.25 -113.55,640.47 -113.55,640.47 C-113.55,640.47 -146.24,619.31 -146.24,619.31 C-146.24,619.31 -168.32,562.06 -168.32,562.06z "
                        />
                    </g>
                    <g id="_R_G_L_1_G_L_4_G_M">
                        <g id="_R_G_L_1_G_L_4_G" />
                    </g>
                    <g
                        id="_R_G_L_1_G_L_3_G"
                        transform=" translate(109.75, 523.25) scale(0.98, 0.98) translate(194.75, -660.25)"
                    >
                        <path
                            id="_R_G_L_1_G_L_3_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-271.48 612.2 C-271.48,612.2 -271.38,665.35 -271.38,665.35 C-271.38,665.35 -175.16,665.61 -175.16,665.61 C-175.16,665.61 -175.21,633.07 -175.21,633.07 C-175.21,633.07 -271.48,612.2 -271.48,612.2z "
                        />
                    </g>
                    <g id="_R_G_L_1_G_L_2_G_M">
                        <g id="_R_G_L_1_G_L_2_G" />
                    </g>
                    <g
                        id="_R_G_L_1_G_L_1_G"
                        transform=" translate(178.96, 488.998) scale(0.98, 0.98) translate(194.75, -660.25)"
                    >
                        <path
                            id="_R_G_L_1_G_L_1_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-271.48 612.01 C-271.48,612.01 -271.27,698.07 -271.27,698.07 C-271.27,698.07 -250.92,698.44 -250.92,698.44 C-250.92,698.44 -250.93,648.24 -250.93,648.24 C-250.93,648.24 -271.48,612.01 -271.48,612.01z "
                        />
                    </g>
                    <g id="_R_G_L_1_G_L_0_G">
                        <path
                            id="_R_G_L_1_G_L_0_G_D_0_P_0"
                            stroke="#e6e7eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeWidth="0"
                            strokeOpacity="1"
                            d=" M168.81 512.9 C168.81,512.9 153.91,475.8 153.91,475.8 C153.91,475.8 184.35,464.63 184.35,464.63 C184.35,464.63 200.46,521.55 200.46,521.55 C200.46,521.55 230.6,545.71 230.6,545.71 C230.6,545.71 202.01,556.2 202.01,556.2 C202.01,556.2 171.86,532.04 171.86,532.04 C171.86,532.04 80.49,502.74 80.49,502.74 C80.49,502.74 110.77,491.63 110.77,491.63 C110.77,491.63 168.81,512.9 168.81,512.9z "
                        />
                        <path
                            id="_R_G_L_1_G_L_0_G_D_1_P_0"
                            fill="#ffffff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M168.81 512.9 C168.81,512.9 153.91,475.8 153.91,475.8 C153.91,475.8 184.35,464.63 184.35,464.63 C184.35,464.63 200.46,521.55 200.46,521.55 C200.46,521.55 230.6,545.71 230.6,545.71 C230.6,545.71 202.01,556.2 202.01,556.2 C202.01,556.2 171.86,532.04 171.86,532.04 C171.86,532.04 80.49,502.74 80.49,502.74 C80.49,502.74 110.77,491.63 110.77,491.63 C110.77,491.63 168.81,512.9 168.81,512.9z "
                        />
                    </g>
                </g>
                <g id="_R_G_L_0_G" transform=" translate(73.5, 703) translate(-110, -262.5)">
                    <g
                        id="_R_G_L_0_G_L_5_G"
                        transform=" translate(109.75, 519.5) scale(0.98, 0.98) translate(220.25, -719)"
                    >
                        <path
                            id="_R_G_L_0_G_L_5_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-186.55 636.44 C-186.55,636.44 -227.52,612.24 -277,641.03 C-284.28,645.66 -293.08,651.53 -293.45,665.75 C-293.73,676.25 -293.45,719 -293.45,719 C-293.45,719 -146.91,719 -146.91,719 C-146.91,719 -146.66,672.13 -146.66,672.13 C-146.66,672.13 -148.82,660.33 -159.49,654.93 C-162.49,656.43 -186.55,668.83 -186.55,668.83 C-186.55,668.83 -186.55,636.44 -186.55,636.44z "
                        />
                    </g>
                    <g id="_R_G_L_0_G_L_4_G_M">
                        <g id="_R_G_L_0_G_L_4_G" />
                    </g>
                    <g
                        id="_R_G_L_0_G_L_3_G"
                        transform=" translate(109.75, 519.5) scale(0.98, 0.98) translate(220.25, -719)"
                    >
                        <path
                            id="_R_G_L_0_G_L_3_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-259.97 659.44 C-260.25,669.93 -259.66,731.24 -259.66,731.24 C-259.66,731.24 -215.6,717.41 -215.6,717.41 C-215.6,717.41 -215.48,651.14 -215.48,651.14 C-215.48,651.14 -220.25,645.34 -236.2,645.87 C-252.46,647.44 -259.73,657.07 -259.97,659.44z "
                        />
                    </g>
                    <g id="_R_G_L_0_G_L_2_G_M">
                        <g id="_R_G_L_0_G_L_2_G" />
                    </g>
                    <g
                        id="_R_G_L_0_G_L_1_G"
                        transform=" translate(109.75, 519.5) scale(0.98, 0.98) translate(220.25, -719)"
                    >
                        <path
                            id="_R_G_L_0_G_L_1_G_D_0_P_0"
                            fill="#e6e7eb"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M-293.45 665.75 C-293.73,676.25 -293.33,738.39 -293.33,738.39 C-293.33,738.39 -146.79,738.39 -146.79,738.39 C-146.79,738.39 -146.66,672.13 -146.66,672.13 C-146.66,672.13 -154.18,711.35 -219.74,710.1 C-283.13,703.31 -292.7,668.04 -293.45,665.75z "
                        />
                    </g>
                    <g id="_R_G_L_0_G_L_0_G">
                        <path
                            id="_R_G_L_0_G_L_0_G_D_0_P_0"
                            stroke="#e6e7eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            strokeWidth="2"
                            strokeOpacity="1"
                            d=" M184.55 553.72 C190.02,558.54 192.98,563.48 193.44,568.54 C193.9,573.6 191.73,578.45 186.94,583.08 C182.14,587.71 175.08,591.74 165.76,595.16 C150.39,600.8 134.7,602.36 118.68,599.84 C102.66,597.33 88.09,590.82 74.99,580.32 C74.99,580.32 70.84,576.99 70.84,576.99 C62.62,570.4 57.42,563.91 55.24,557.5 C53.06,551.09 54.04,545.17 58.17,539.72 C62.31,534.28 69.3,529.75 79.15,526.13 C93.34,520.92 107.43,518.89 121.41,520.02 C135.4,521.15 147.68,525.27 158.28,532.38 C158.28,532.38 130.16,542.7 130.16,542.7 C124.84,538.68 119.37,536.4 113.77,535.85 C108.17,535.31 101.91,536.3 95.01,538.83 C87.99,541.41 84.73,544.8 85.23,549.02 C85.73,553.24 90.03,558.68 98.13,565.36 C98.13,565.36 104.07,570.12 104.07,570.12 C113.02,577.29 120.99,581.85 127.96,583.78 C134.94,585.71 142.25,585.27 149.91,582.46 C156.39,580.08 160.25,577.38 161.49,574.37 C162.72,571.36 161.07,567.9 156.52,564.01 C156.52,564.01 184.55,553.72 184.55,553.72z "
                        />
                        <path
                            id="_R_G_L_0_G_L_0_G_D_1_P_0"
                            fill="#ffffff"
                            fillOpacity="1"
                            fillRule="nonzero"
                            d=" M184.55 553.72 C190.02,558.54 192.98,563.48 193.44,568.54 C193.9,573.6 191.73,578.45 186.94,583.08 C182.14,587.71 175.08,591.74 165.76,595.16 C150.39,600.8 134.7,602.36 118.68,599.84 C102.66,597.33 88.09,590.82 74.99,580.32 C74.99,580.32 70.84,576.99 70.84,576.99 C62.62,570.4 57.42,563.91 55.24,557.5 C53.06,551.09 54.04,545.17 58.17,539.72 C62.31,534.28 69.3,529.75 79.15,526.13 C93.34,520.92 107.43,518.89 121.41,520.02 C135.4,521.15 147.68,525.27 158.28,532.38 C158.28,532.38 130.16,542.7 130.16,542.7 C124.84,538.68 119.37,536.4 113.77,535.85 C108.17,535.31 101.91,536.3 95.01,538.83 C87.99,541.41 84.73,544.8 85.23,549.02 C85.73,553.24 90.03,558.68 98.13,565.36 C98.13,565.36 104.07,570.12 104.07,570.12 C113.02,577.29 120.99,581.85 127.96,583.78 C134.94,585.71 142.25,585.27 149.91,582.46 C156.39,580.08 160.25,577.38 161.49,574.37 C162.72,571.36 161.07,567.9 156.52,564.01 C156.52,564.01 184.55,553.72 184.55,553.72z "
                        />
                    </g>
                </g>
            </g>
            <g id="time_group" />
        </svg>
    );
};
const Letters = () => {
    const containerRef = useRef();
    const letterRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            letterRef.current.goToAndStop(0);
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: '100% 20%',
                end: `100% -70%`,

                onUpdate: ({ progress }) => {
                    letterRef.current.goToAndStop(progress * 99, true);
                },
            });
        }, 0);
    }, []);
    return (
        <div className={'bg-lightGray pb-[30rem]'}>
            <div
                ref={containerRef}
                className={'pointer-events-none h-[1px] relative z-50 top-[-44rem] left-[10rem] flex  w-[60rem] m-auto'}
            >
                <div className={'top-[-14.5rem] left-[-14.8rem] relative w-full'}>
                    <UpperLine />
                </div>

                <Lottie
                    animationData={letters}
                    lottieRef={letterRef}
                    className={`w-full absolute pointer-events-none`}
                />
            </div>
        </div>
    );
};

export default Letters;

import gsap from 'gsap';
import anime from 'animejs';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const UseTextAnimations = () => {
    const Split = (el, childrenSpan) => {
        [childrenSpan ? [...el.childNodes] : el].flat().forEach((words) => {
            words.innerHTML = words.textContent.replace(
                /\S/g,
                "<span style='transform-origin: 50% 100%' class='inline-block'>$&</span>",
            );
            words.innerHTML = words.innerHTML.replaceAll(
                '<span style="transform-origin: 50% 100%" class="inline-block">/</span>',
                '<br/>',
            );
        });
        gsap.set(el, { opacity: 1 });
    };
    const AnimationHeading = (el, childrenSpan = false) => {
        Split(el.current, childrenSpan);

        anime.timeline().add({
            targets: el.current.querySelectorAll(childrenSpan ? 'span span' : 'span '),
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 45 * (i + 1),
        });
    };
    const AnimationParagraph = (el, childrenSpan = false) => {
        Split(el.current, childrenSpan);
        anime.timeline().add({
            targets: el.current.querySelectorAll('span span'),
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 500 + 30 * i,
        });
    };
    const AnimationParagraphScrub = (el, trigger, start = -50, end = 200, childrenSpan = false) => {
        Split(el.current, childrenSpan);
        console.log(el.current);
        gsap.fromTo(
            el.current.querySelectorAll('span '),
            {
                x: 40,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.01,
                ease: 'expo.inOut',
                scrollTrigger: {
                    start: typeof start === 'number' ? `${start}% 50%` : start,
                    end: typeof end === 'number' ? `${end}% 50%` : end,
                    scrub: true,
                    trigger: trigger.current,
                },
            },
        );
    };
    const AnimationHeadingScrub = (
        el,
        trigger,
        start = -50,
        end = 200,
        childrenSpan = false,
        scale = false,
        reverse = false,
    ) => {
        if (!reverse) Split(el.current, childrenSpan);
        if (scale) {
            gsap.fromTo(
                el.current,
                { scale: 0.7 },
                {
                    scale: 1,
                    // tylko w if
                    transformOrigin: 'bottom',
                    //
                    scrollTrigger: {
                        start: typeof start === 'number' ? `${start}% 50%` : start,
                        end: typeof end === 'number' ? `${end}% 50%` : end,
                        scrub: true,
                        trigger: trigger.current,
                    },
                },
            );
        }

        if (reverse) {
            gsap.to(
                el.current.querySelectorAll(childrenSpan ? 'span span' : 'span '),

                {
                    scale: 0,
                    ease: 'elastic(1.005,0,995)',
                    stagger: 0.02,
                    transformOrigin: 'bottom',
                    scrollTrigger: {
                        start: typeof start === 'number' ? `${start}% 50%` : start,
                        end: typeof end === 'number' ? `${end}% 50%` : end,
                        scrub: true,
                        trigger: trigger.current,
                    },
                },
            );
        } else {
            gsap.fromTo(
                el.current.querySelectorAll(childrenSpan ? 'span span' : 'span '),
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    ease: 'elastic(1.005,0,995)',
                    stagger: 0.02,
                    scrollTrigger: {
                        start: typeof start === 'number' ? `${start}% 50%` : start,
                        end: typeof end === 'number' ? `${end}% 50%` : end,
                        scrub: true,
                        trigger: trigger.current,
                    },
                },
            );
        }
    };
    return { Split, AnimationHeading, AnimationParagraph, AnimationHeadingScrub, AnimationParagraphScrub };
};

export default UseTextAnimations;

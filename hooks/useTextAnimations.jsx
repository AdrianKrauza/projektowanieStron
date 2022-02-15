import gsap from 'gsap';
import anime from 'animejs';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const UseTextAnimations = () => {
    const Split = (el, childrenSpan) => {
        [childrenSpan ? [...el.childNodes] : el].flat().forEach((words) => {
            words.innerHTML = words.textContent.replace(/\S/g, "<span class='inline-block'>$&</span>");
            words.innerHTML = words.innerHTML.replaceAll('<span class="inline-block">/</span>', '<br/>');
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
    const AnimationHeadingScrub = (el, trigger, start = -50, end = 200, childrenSpan = false) => {
        Split(el.current, childrenSpan);
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
    };
    return { Split, AnimationHeading, AnimationParagraph, AnimationHeadingScrub };
};

export default UseTextAnimations;

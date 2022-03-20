import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
const questions = [
    'Czy gwarantujecie przebić konwersję mojej obecnej strony?',
    'Mogę zmieniać lub rozbudować stronę w pełni samodzielnie?',
    'Podłączycie mi pocztę, płatności, Google Analytics i Hot Jar?',
    'Czy cena zawiera hosting i konfigurację domen i zabezpieczeń?',
    'Możemy pracować przez mail, telefon, video, zoom lub skype?',
    'Czy strona będzie ładować się błyskawicznie? (Page speed)',
    'Możecie pomóc mi w prowadzeniu marketingu internetowego?',
    'Czy strona będzie dostosowana do potrzeb pozycjonowania SEO?',
    'Czy mogę liczyć na bezpłatne wsparcie poserwisowe?',
    'Czy możecie przeprowadzić proces szybko? Jak szybko?',
    'Czy możecie przyjąć mój projekt dzisiaj? Jak możemy zacząć?',
];
const Question = ({ question, setIsOpen, isOpen, index }) => {
    useEffect(() => {
        gsap.to(answerRef.current, {
            height: isOpen ? '3rem' : 0,
            duration: 0.1,
            delay: !isOpen ? 0.1 : 0,
        });
        gsap.to(answerRef.current, {
            opacity: isOpen ? '1' : 0,
            duration: 0.1,
            delay: isOpen ? 0.1 : 0,
        });

        gsap.to(bgRef.current, {
            scaleX: isOpen ? 1 : 0,
            transformOrigin: 'left',
        });
    }, [isOpen]);
    const bgRef = useRef(null);
    const answerRef = useRef(null);
    const handleEnter = () => {
        gsap.to(bgRef.current, {
            scaleX: 1,
            transformOrigin: 'left',
        });
    };
    const handleLeave = () => {
        if (isOpen) return;
        gsap.to(bgRef.current, {
            scaleX: 0,
            transformOrigin: 'left',
        });
    };
    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={() => setIsOpen((prev) => prev.map((item, i) => (i === index ? !item : false)))}
            className={'border-[1px] border-t-[#cecece] border-dotted py-[1.3rem] pl-[2rem] relative    '}
        >
            <div ref={bgRef} className={'bg-white w-full h-full absolute left-0 top-0 -z-10 scale-x-0'} />
            <p className={'  text-[1.3rem]'}>{question}</p>
            <p ref={answerRef} className={'pl-[1rem] flex items-end  text-[1.2rem] opacity-0 h-0 overflow-hidden'}>
                TAK
            </p>
            <div
                className={
                    'absolute right-[2rem] top-[1.4rem]  rounded-full border-[1px] border-[#cecece] w-[1.5rem] h-[1.5rem]'
                }
            >
                <div className={'w-[.75rem] bg-black h-[1px] relative left-[.35rem] top-[.73rem]'}> </div>
                <div
                    className={`w-[.75rem] bg-black h-[1px] relative left-[.35rem] top-[.73rem] translate-y-[-1px] transition-opacity rotate-90 opacity-${
                        isOpen ? 0 : 1
                    }`}
                />
            </div>
        </div>
    );
};
const Faq = () => {
    const [isOpen, setIsOpen] = useState(new Array(questions.length).fill(false));

    return (
        <div className={'w-[45rem] m-auto border-[1px] border-b-[#cecece]'}>
            {questions.map((question, index) => (
                <Question
                    setIsOpen={setIsOpen}
                    index={index}
                    isOpen={isOpen[index]}
                    key={question}
                    question={question}
                />
            ))}
        </div>
    );
};

export default Faq;

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import useTextAnimations from '../../hooks/useTextAnimations';
const questions = [
    'Gwarantujecie przebić konwersję mojej obecnej strony?',
    'Mogę samodzielnie edytować lub rozbudować stronę?',
    'Podłączycie mi maile, płatności, analitykę i zabezpieczenia?',
    'Czy cena zawiera hosting i konfigurację domen i certyfikaty SSL?',
    'Czy stosujecie stronę do potrzeb pozycjonowania SEO?',
    'Czy strona jest responsywna? Czy ładuje się błyskawicznie?',
    'Możecie pomóc mi w prowadzeniu marketingu internetowego?',
    'Możemy pracować przez mail, telefon, video, zoom lub skype?',
    'Czy możemy poprowadzić proces w trybie ekspresowym?',
    'Czy możecie przyjąć mój projekt Teraz? Jak zacząć?',
];
const Question = ({ question, setIsOpen, isOpen, index }) => {
    const { AnimationHeadingScrub } = useTextAnimations();
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
    const yesRef = useRef(null);
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
    useEffect(() => {
        setTimeout(() => {
            AnimationHeadingScrub(yesRef, yesRef, -250, 200, false, true);
        }, 0);
    });
    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={() => setIsOpen((prev) => prev.map((item, i) => (i === index ? !item : false)))}
            className={
                'cursor-pointer border-[1px] border-t-[#cecece] border-dotted py-[1.3rem] pl-[2rem] relative    '
            }
        >
            <p ref={yesRef} className={'text-white absolute right-[5rem] top-[0.7rem] font-playfair '}>
                TAK
            </p>
            <div ref={bgRef} className={'bg-white w-full h-full absolute left-0 top-0 -z-10 scale-x-0'} />
            <p className={'  text-[1.5rem]'}>{question}</p>
            <p ref={answerRef} className={'pl-[1rem] flex items-end  text-[1.2rem] opacity-0 h-0 overflow-hidden'}>
                TAK
            </p>
            <div
                className={
                    'absolute right-[2rem] top-[1.4rem]  rounded-full border-[1px] border-[#cecece] w-[1.5rem] h-[1.5rem]'
                }
            >
                <div className={'w-[.65rem] bg-black h-[1px] relative left-[.35rem] top-[.7rem]'}> </div>
                <div
                    className={`w-[.65rem] bg-black h-[1px] relative left-[.35rem] top-[.7rem] translate-y-[-1px] transition-opacity rotate-90 opacity-${
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
        <div className={'w-[55rem] m-auto border-[1px] border-b-[#cecece]'}>
            {questions.map((question, index) => (
                <Question
                    setIsOpen={setIsOpen}
                    index={index}
                    isOpen={isOpen[index]}
                    key={question}
                    question={question}
                />
            ))}
            <div
                className={
                    'border-[1px] border-t-[#cecece] border-dotted py-[0.9rem] pl-[2rem] relative flex justify-between items-center '
                }
            >
                <p className={' text-[1.5rem]'}>Zapytaj nas o to co jest najwazniejsze da Ciebie</p>
                <button
                    className={
                        'border-[1px] border-[#cecece] text-black text-[1.2rem] rounded-[10rem] px-[2rem]  py-[.5rem] font-normal'
                    }
                >
                    Zadaj pytanie
                </button>
            </div>
        </div>
    );
};

export default Faq;

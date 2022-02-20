const useBanachSplitText2 = ({ content }) =>
    content.map((el) => (
        <span className={'block'} key={el}>
            {el.split('').map((el) => (
                <span key={el} className="inline-block relative overflow-hidden text-[#f0f0f0]">
                    <span className="absolute translate-y-[240%] block">{el}</span>
                    <span className="translate-y-[130%] block">{el}</span>
                </span>
            ))}
        </span>
    ));

export default useBanachSplitText2;
//#c9bfaa

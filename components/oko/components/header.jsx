import Image from 'next/image';
import okoHeaderImg from '/assets/oko/oko-tlo.jpg';
import hand from '/assets/oko/Dlon-org-TINYPNG.png';
import handItem from '/assets/oko/Artefakt-org-TINYPNG.png';
import { useEffect, useRef } from 'react';
import szejp from '../../../assets/oko/Szejp.png';
const Header = ({ gradient2State }) => {
    const handRef = useRef();
    const handItemRef = useRef();
    useEffect(() => {
        window.addEventListener('mousemove', ({ clientX, clientY }) => {
            const { innerHeight, innerWidth } = window;
            handRef.current.style.transform = `translate(${(clientX / innerWidth) * 100 - 50}px,${
                (clientY / innerHeight) * 100 - 50
            }px)`;
            handItemRef.current.style.transform = `translate(${(clientX / innerWidth) * 30 - 15}px,${
                (clientY / innerHeight) * 30 - 15
            }px)`;
        });
    }, []);
    return (
        <div className={'headerImg absolute bottom-0 translate-y-full    '}>
            <div
                className={
                    'w-[1350px] relative overflow-hidden rounded-t-[90px] border-[2px] border-[#0e082e]  shadow-[-1px_-10px_12px_10px_#06051c9e]'
                }
            >
                <Image {...okoHeaderImg} />
                <div ref={handItemRef} className="absolute bottom-[100px] right-[70px]">
                    <Image {...handItem} />
                </div>

                <div ref={handRef} className="absolute bottom-0 -right-[100px]">
                    <Image {...hand} />
                </div>

                <div
                    style={{
                        background: `  radial-gradient(circle at 830px 340px, rgba(11,5,44,0) ${
                            -gradient2State + 100
                        }%, #0B052C ${200 - gradient2State}%)`,
                    }}
                    className={'absolute w-full h-full  top-[0rem]'}
                />
            </div>
            <div className={'w-[1350px] absolute bg-[#0D072D] h-[200px] bottom-[-190px]'} />
        </div>
    );
};

export default Header;

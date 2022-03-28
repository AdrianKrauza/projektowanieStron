import { useEffect, useRef } from 'react';
import UseCanvasFrameAnimation from '../../../hooks/useCanvasFrameAnimation';
import Image from 'next/image';
import phone from '/assets/pragmile/Telefon.jpg';

const Phone = ({ initCanvas }) => {
    const canvasRef = useRef();
    useEffect(() => {
        initCanvas(canvasRef, 549, 595);
    });
    return (
        <div className={'phone  left-[-300px]'}>
            <div
                className={'absolute top-0 w-[548px] h-[597px]'}
                style={{ WebkitMaskBoxImage: `url(/assets/pragmile/maska3SV.svg)` }}
            >
                <Image priority {...phone} />
            </div>
            <canvas ref={canvasRef} style={{ WebkitMaskBoxImage: `url(/assets/pragmile/maska1SV.svg)` }} />
        </div>
    );
};

export default Phone;

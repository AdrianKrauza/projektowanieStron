import { useEffect, useState } from 'react';

const UseIsMobile = () => {
    const [isMobile, setIsMobile] = useState('loading');
    useEffect(() => {
        if (window.innerWidth < 1000) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    });
    return isMobile;
};

export default UseIsMobile;

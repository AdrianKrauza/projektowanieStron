import { useEffect, useState } from 'react';

const UseIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 1000) {
            setIsMobile(true);
        }
    });
    return isMobile;
};

export default UseIsMobile;

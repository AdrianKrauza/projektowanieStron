import { useEffect, useState } from 'react';

const isSlowNetwork = () => {
    const [isFirefox, setIsFirefox] = useState(false);
    useEffect(() => {
        if (navigator.userAgent.indexOf('Firefox') !== -1) {
            setIsFirefox(true);
        }
    }, []);
    return isFirefox;
};
export default isSlowNetwork;

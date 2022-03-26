import { useEffect, useState } from 'react';

const isSlowNetwork = () => {
    const [isSlow, setIsSlow] = useState(false);
    useEffect(() => {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        setIsSlow(
            connection?.type === 'cellular' ||
                connection?.effectiveType === 'slow-2g' ||
                connection?.effectiveType === '2g' ||
                connection?.effectiveType === '3g' ||
                connection?.saveData === true,
        );
    }, []);
    return isSlow;
};
export default isSlowNetwork;

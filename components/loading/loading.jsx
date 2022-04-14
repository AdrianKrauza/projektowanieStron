import { useEffect, useState } from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // whatever you need to do
        setLoading(false);
    }, []);
    return loading ? <div className={'absolute top-0 left-0 bg-[red] w-screen h-screen z-[999]'} /> : <div />;
};

export default Loading;

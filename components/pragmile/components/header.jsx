import Image from 'next/image';
import okoHeaderImg from '/assets/oko/oko-tlo.jpg';

const Header = () => {
    return (
        <div className={'headerImg absolute bottom-0 translate-y-full rounded-3xl overflow-hidden'}>
            <Image priority {...okoHeaderImg} />
        </div>
    );
};

export default Header;

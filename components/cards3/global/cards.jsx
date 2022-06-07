import Card from '../desktop/card';
import image2 from '../../../assets/cards3/dicaprio_jp.jpg';
import image1 from '../../../assets/cards3/carrey_jp.jpg';
import image3 from '../../../assets/cards3/szydercze_ziomki_jp.jpg';

const Cards = () => {
    return (
        <>
            <Card
                mask={'/assets/cards3/maska_dicaprioSV.svg'}
                video={'/assets/cards3/LogoIdentyfikacja.mp4'}
                title={'Design + UX '}
                index={0}
                image={image2}
                paragraph={
                    <>
                        Wizualną różnicę <br /> łatwo zamienisz w <br /> poważanie i zaufanie.
                    </>
                }
            />
            <Card
                mask={'/assets/cards3/maska_carreySV.svg'}
                video={'/assets/cards3/Copywriting.mp4'}
                title={'Copywriting'}
                image={image1}
                index={1}
                mobileRight
                paragraph={
                    <>
                        2x lepsze słowa to <br /> najszybszy sposób <br /> na 2x lepsze wyniki.
                    </>
                }
            />
            <Card
                index={2}
                mask={'/assets/cards3/maska_ziomkiSV.svg'}
                video={'/assets/cards3/Konwersja.mp4'}
                image={image3}
                title={'Sales'}
                paragraph={
                    <>
                        Gwarantujemy dużo <br /> więcej zapytań lub <br /> wyższą sprzedaż.
                    </>
                }
            />
        </>
    );
};

export default Cards;

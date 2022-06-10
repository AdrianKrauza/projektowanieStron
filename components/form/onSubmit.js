import getCid from '../../helpers/getCid';
import getClientId from '../../helpers/getCid';
import Router from 'next/router';

const onSubmit = async (data, time) => {
    const formdata = new FormData();
    formdata.append('session-start', time);
    formdata.append('form[tid]', 'UA-7397797-1');
    formdata.append('form[cid]', getCid());
    formdata.append('time', 0);
    formdata.append('url', 'www.strony.owocni.pl');
    formdata.append('form[Imię]', data['form[Imię]']);
    formdata.append('form[Mail]', data['form[Mail]']);
    formdata.append('form[Telefon]', data['form[Telefon]']);
    formdata.append('form[Wiadomość]', data['form[Wiadomość]']);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
    };

    if (getClientId()) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify({
            v: 1,
            t: 'event',
            cid: getClientId(),
            ec: 'Forms',
            ea: 'Send',
            dr: 'strony.owocni.pl',
            tid: 'UA-7397797-1',
        });

        const requestOptions2 = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch('https://www.google-analytics.com/collect', requestOptions2)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
    }
    fetch('https://form.owocni.pl/send.php', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));

    await Router.push('https://owocni.pl/dziekujemy');
};
export default onSubmit;

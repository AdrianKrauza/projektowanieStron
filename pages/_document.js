import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Owocne strony internetowe</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&family=Roboto:wght@100;300;900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="shortcut icon" href="https://www.owocni.pl/Etworzenie/favicon.ico" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-7397797-1"></script>
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                  window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-7397797-1');
                          function setTrackTime(time) {
    ga('send', 'event', 'logo', time + '_seconds', '1');
  }
                          setTimeout("setTrackTime(11)", 11000);
  setTimeout("setTrackTime(31)", 31000);
  setTimeout("setTrackTime(61)", 61000);
  setTimeout("setTrackTime(181)", 181000);
  setTimeout("setTrackTime(361)", 361000);
  setTimeout("setTrackTime(601)", 601000);
  setTimeout("setTrackTime(1801)", 1801000);
                        `}
                    </Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
    //
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@400,900;1,400&family=Roboto:wght@100;300;900&display=swap"
                        rel="stylesheet"
                    />
                    {/* <!-- Global site tag (gtag.js) - Google Analytics -->*/}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-7397797-1"></script>
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                  window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-7397797-1');`}
                    </Script>
                </Head>
                <body>
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-KLZT5W"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

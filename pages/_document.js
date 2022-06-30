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

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-7397797-1', 'auto');
  ga('send', 'pageview');
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

  var gaCode = 'UA-7397797-1';
  
  
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3039702,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
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

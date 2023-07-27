import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      {/** GA https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=G-F91C6V7T4S`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F91C6V7T4S');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

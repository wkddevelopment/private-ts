import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import { Navbar } from '../components/Navbar';

function Private_App({ Component, pageProps }: AppProps) {
  
  const { t, lang } = useTranslation('common');
  const page_title = t('APP_PAGE_TITLE');

  return (
    <>
      <Head>
        <title>{page_title}</title>
        <meta name='author' content='Stefan Bartl (WKDStevie)' />
        <meta name="description" content="WKDSteve create a save space for people" />
        <meta name='keywords' content='Text, Audio, Video, Privat, Tool' />
        <link rel='icon' sizes='16x16' href='/graphics/logos/dev_logo.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/graphics/logos/dev_logo.png' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default Private_App

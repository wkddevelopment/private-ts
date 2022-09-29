import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation';

const Home: NextPage = () => {

  const { t, lang } = useTranslation('common');
  const hello = t('HOME_HELLO');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{hello}</h1>
      </main>
    </div>
  )
}

export default Home

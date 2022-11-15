import styles from '../styles/Home.module.css';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

const Home: NextPage = () => {

  const { t, lang } = useTranslation('common');
  const hello = t('HOME_HELLO');

  const username = 'Username Test';
  const last_login = Date.now();
  const contacts_total = 5;
  const contacts_online = 3;
  const contacts_requests = 0;
  const contacts_messages_total = 10;
  const contacts_messages_new = 1;


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <h1>{hello}</h1>

        <section className={styles.user_profile}>
          <h2>Profil</h2>
          <div className={styles.profile_username}>
            <h3>Username:</h3>
            <p>{username}</p>
          </div>
          <div className={styles.profile_last_login}>
            <h3>Letzter Login:</h3>
            <p>{last_login}</p>
          </div>
          <div className={styles.profile_contacts}>
            <h3>Kontakte / Online</h3>
            <p>{contacts_total} / {contacts_online}</p>
            <h3>Anfragen</h3>
            <p>{contacts_requests}</p>
            <h3>Nachrichten / neu</h3>
            <p>{contacts_messages_total} / {contacts_messages_new}</p>
          </div>
        </section>


        <section className={styles.section__record_video}>
          <h2>Start Video-Chatraum</h2>
          <button id='video_chatroom_start' className={styles.video_chatroom_start}></button>
        </section>

      </main>
    </div>
  )
}

export default Home

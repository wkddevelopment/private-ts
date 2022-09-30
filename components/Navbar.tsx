import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Navbar.module.css';


export const Navbar = () => {
  
    const { t, lang } = useTranslation('common');
    const home = t('navbar_home');
    const chatroom = t('navbar_chatroom');
    const groups = t('navbar_groups');
    const app_title = t('APP_TITLE');

    return (
            <nav className={styles.mynavbar}>
                <ul>

                    {/* Home */}
                    <li className={styles.nav_item_home}>
                        <Link href="/" className={`${styles.navbar_link}`} >{home}</Link>
                    </li>

                    {/* chatroom */}
                    <li className={styles.nav_item_chatroom}>
                        <Link href="/chatroom" className={`${styles.navbar_link}`} >{chatroom}</Link>
                    </li>

                    {/* groups */}
                    <li className={styles.nav_item_groups}>
                        <Link href="/groups" className={`${styles.navbar_link}`} >{groups}</Link>
                    </li>

                </ul>
                <h1>{app_title}</h1>
            </nav>
    )
} 
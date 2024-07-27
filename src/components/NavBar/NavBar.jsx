import styles from './NavBar.module.css'
import TelegramLogo from '@/components/ui/icons/TelegramLogo';


const NavBar = () => {
    return (
        <>
        <nav className={styles.nav}>
            <a href="/" className={styles.navItem}>главная</a>
            <a href="#about" className={styles.navItem}>о нас</a>
            <a href="#otzivy" className={styles.navItem}>отзывы</a>
            <a href="#team" className={styles.navItem}>команда</a>
            <div className={styles.navLine}></div>
            <a href="#"><TelegramLogo width="2rem" height="2rem" color="white" /></a>
        </nav>
            <div className={styles.burger}>
              <div className={styles.burgerItem}></div>
              <div className={styles.burgerItem}></div>
              <div className={styles.burgerItem}></div>
            </div>
        </>
    )
}

export default NavBar;
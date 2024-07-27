import styles from './Footer.module.css';
import FyteLogo from '@/components/ui/icons/FyteLogo'
import AttributionIco from '@/components/ui/icons/AttributionIco'
import ShareAlikeIco from '@/components/ui/icons/ShareAlikeIco'
import TelegramLogo from '@/components/ui/icons/TelegramLogo'

const Footer = () => {
    return (
        <footer className={styles.mainContainer}>
            <div className={styles.leftComponent}>
                <div className={styles.headIcons}>
                    <TelegramLogo width="2rem" height="2rem" color="white"/>
                </div>
                <div className={styles.headText}><a href="https://t.me/fytebit">@zed82</a></div>
            </div>
            <div className={styles.middleComponent}>
                <div className={styles.headIcons}>
                    <FyteLogo width="4.5rem" height="4.5rem" color="white" />
                </div>
                <div className={styles.headText}>FYTEBIT 2024</div>
            </div>
            <div className={styles.rightComponent}>
                <div className={styles.headText}>CopyLeft</div>
                <div className={styles.headIcons}>
                    <AttributionIco width="2rem" height="2rem" color="white" />
                    <ShareAlikeIco width="2rem" height="2rem" color="white" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
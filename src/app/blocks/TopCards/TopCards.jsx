import styles from './TopCards.module.css'
import Image from "next/image";

export default function TopCards() {

  return (
    <section className={styles.section}>
        <div className={styles.leftCards}>
                <div className={styles.leftCard}>
                    <Image className={styles.leftCardImg} width={40} height={40} src="/img/Man Technologist.svg" alt="LFImage"/>
                    <h3 className={styles.leftCardTitle}>качественно?</h3>
                    <p className={styles.leftCardText}>Мы стремимся к развитию и качеству во всем, что делаем.</p>
                </div>
                <div className={styles.leftCard}>
                    <Image className={styles.leftCardImg} width={40} height={40} src="/img/Handshake.svg" alt="LFImage"/>
                    <h3 className={styles.leftCardTitle}>дорого?</h3>
                    <p className={styles.leftCardText}>Расскажите о нас своим друзьям и получите выгодную скидку!</p>
                </div>
                <div className={styles.leftCard}>
                    <Image className={styles.leftCardImg} width={40} height={40} src="/img/Thinking Face.svg" alt="LFImage"/>
                    <h3 className={styles.leftCardTitle}>как начать?</h3>
                    <p className={styles.leftCardText}>Мы продумаем дизайн и логику для вашего сайта или бота!</p>
                </div>
            </div>
            <div className={styles.teamText}>Наша команда</div>
            <div className={styles.rightCards}>
                <div className={styles.rightCard}>
                    <Image className={styles.rightCardImg} width={100} height={100} src="/img/profile_1.png" alt="RTImage"/>
                    <h3 className={styles.rightCardTitle}>Вася</h3>
                    <p className={styles.rightCardText}>Full Stack Developer</p>
                </div>
                <div className={styles.rightCard}>
                    <Image className={styles.rightCardImg} width={100} height={100} src="/img/profile_2.png" alt="RTImage"/>
                    <h3 className={styles.rightCardTitle}>Петя</h3>
                    <p className={styles.rightCardText}>Python Developer</p>
                </div>
                <div className={styles.rightCard}>
                    <Image className={styles.rightCardImg} width={100} height={100} src="/img/profile_3.png" alt="RTImage"/>
                    <h3 className={styles.rightCardTitle}>Саня</h3>
                    <p className={styles.rightCardText}>Python Developer</p>
                </div>
            </div>
    </section>
  )
}

import styles from './HeaderText.module.css'

const HeaderText = () => {

  return (
    <section>
        <div className={styles.content}>
            <h1 className={styles.title}>Заказать<span className={styles.contentWord1}>изи<br/></span>просто заполни<span className={styles.contentWord2}>форму</span>!
            </h1>
            <p className={styles.text}>Заполняй форму, мы вам отпишем в течении суток для уточнения деталей</p>
            <button className={styles.topButton}>Заполнить форму</button>
        </div>
    </section>
  )
}

export default HeaderText;

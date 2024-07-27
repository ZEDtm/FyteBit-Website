import styles from './Steps.module.css'


 const Steps = () => {
  return (
    <section className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.block}>
                <div className={styles.number1}>1</div>
                <p>Придумай<br/>идею</p>
            </div>
            <div className={styles.block}>
                <div className={styles.number2}>2</div>
                <p>Заполни<br/>форму</p>
            </div>
            <div className={styles.block}>
                <div className={styles.number3}>3</div>
                <p>Забери готовый<br/>проект</p>
            </div>
            <div className={styles.block}>
                <div className={styles.number4}>4</div>
                <p>Напиши<br/>отзыв</p>
            </div>
        </div>
    </section>
  )
}

export default Steps;



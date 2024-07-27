import styles from './SendForm.module.css';

const SendForm = () => {
    return(
        <section className={styles.mainContainer}>
            <div className={styles.formHead}>
                <div className={styles.headText}>ФОРМА - ОСТАВЬ ЗАЯВКУ</div>
                <div className={styles.headDescription}>Заполняй форму, мы вам отпишем в течении суток для уточнения деталей. Обазятельно проверьте корректность данных</div>
            </div>
            <div className={styles.formContainer}>
                <input className={styles.formInput} type="text" placeholder="Имя"></input>
                <input className={styles.formInput} type="email" placeholder="Почта"></input>
                <input className={styles.formInput} type="text" placeholder="@telegram"></input>
                <textarea className={styles.formArea}  placeholder="Краткое описание технического задания (описание задачи)"></textarea>
                <button className={styles.formButton} form="subbmit">ОТПРАВИТЬ</button>
            </div>
            <form>

            </form>
        </section>
    )
}

export default SendForm;
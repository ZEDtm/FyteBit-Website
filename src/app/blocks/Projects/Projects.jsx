import styles from './Projects.module.css'
import Image from "next/image";

const Projects = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.mark}>ПОЛЕЗНО ЗНАТЬ</div>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutAs}>
                    <div className={styles.aboutAsHeader}>ПРО НАС</div>
                    <p className={styles.aboutAsText}>
                        В сердце цифрового мира, где каждый пиксель имеет значение, возникла наша команда — симбиоз творчества и технологий. Мы — разработчики создающие мосты между идеями и реализацией. Наши руки формируют сайты, от простых лендингов, которые захватывают внимание, до сложных парсеров, которые ускоряют поток информации, и интеллектуальных телеграмм-ботов, которые становятся помощниками в нашем ежедневном общении. Мы работаем не просто вместе, мы создаем сообщество единомышленников. Каждый в команде — это не просто исполнитель, это партнер, с которым мы делимся идеями, опытом и вдохновением.
                    </p>
                    <p className={styles.aboutAsText}>
                        Более полугода мы создаем, экспериментируем и вносим инновации, расширяя границы возможного. Мы с гордостью обслуживаем клиентов по всему СНГ, объединяя разные культуры и языки в едином цифровом пространстве.
                    </p>
                </div>

                <div className={styles.whyAs}>
                    <div className={styles.whyAsHeader}>ПОЧЕМУ МЫ</div>
                    <p className={styles.whyAsText}>Мы — команда молодых специалистов, чьи сердца бьются в такт с быстрым ритмом технологического прогресса. Наши идеи свежи и оригинальны, наш подход динамичен и адаптивен. Мы не боимся экспериментировать, ведь наши специалисты — это молодые, амбициозные и полные энтузиазма профессионалы. Мы быстро учимся, адаптируемся и реагируем на изменения, что позволяет нам быть всегда на шаг впереди. Мы не просто команда разработчиков, а союз мечтателей и практиков, тех, кто верит в силу технологий для изменения мира к лучшему.
                        Почему мы? — потому что мы верим, что каждый проект, который мы создаем, может стать началом чего-то большего.</p>
                </div>


            </div>
            <div className={styles.mark}>НАШИ ПРОЕКТЫ</div>
            <div className={styles.projectContainer}>
                <div className={styles.imageContainer}>
                    <Image className={styles.projectImage} width={1000} height={450} src="/img/project_img.jpg" alt="PRImage"/>
                    <div className={styles.imageOverlay}>
                        <div className={styles.overleyHeader}>RaccoonClub</div>
                        <p className={styles.overleyText}>Это не просто телеграм-бот, а полноценное веб-приложение, предназначенное для управления закрытым или открытым клубом.</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image className={styles.projectImage} width={1920} height={1080} src="/img/Frame 18.jpg" alt="PRImage"/>
                    <div className={styles.imageOverlay}>
                        <div className={styles.overleyHeader}>FYTEBIT</div>
                        <p className={styles.overleyText}>Не удивительно, что этот сайт мы сделали сами..</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects;
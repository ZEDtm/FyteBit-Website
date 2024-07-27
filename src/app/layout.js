import "./reset.css";
import "./globals.css";
import styles from "./layout.module.css";
import FyteLogo from "@/components/ui/icons/FyteLogo";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";


export const metadata = {
    title: "FyteBit Development Team - Expert Software Development Services",
    description: "FyteBit offers top-notch software development services, including web, telegram bot & webapp, and custom solutions. Let's build your next project together with love and expertise.",
    keywords: "software development, web development, telegram bot & webapp development, custom software solutions, IT services, development team, FyteBit",
    author: "FyteBit Development Team",
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    ogTitle: "FyteBit Development Team - Expert Software Development Services",
    ogDescription: "FyteBit offers top-notch software development services, including web, mobile, and custom solutions. Let's build your next project together with love and expertise.",
    ogImage: "/FyteBit.webp", // Путь к изображению, которое будет использоваться в социальных сетях
    ogUrl: "https://www.fytebit.com", // URL вашего сайта
    twitterCard: "summary_large_image",
    twitterTitle: "FyteBit Development Team - Expert Software Development Services",
    twitterDescription: "FyteBit offers top-notch software development services, including web, mobile, and custom solutions. Let's build your next project together with love and expertise.",
    twitterImage: "/FyteBit.webp", // Путь к изображению для Twitter
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
          <main className={styles.mainContainer}>

              <header className={styles.containerNav}>
                  <div className={styles.logo}>
                    <FyteLogo width="2.5rem" height="2rem" color="white"/>
                    <p className={styles.logoText}>fytebit</p>
                  </div>
                  <NavBar/>
              </header>

              <section className={styles.childContainer}>
                  {children}
              </section>

              <footer>
                  <Footer/>
              </footer>

          </main>
      </body>
    </html>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import HeaderText from "@/app/blocks/HeaderText/HeaderText";
import TopCards from "@/app/blocks/TopCards/TopCards";
import Steps from "@/app/blocks/Steps/Steps";
import FeedBacks from "@/app/blocks/FeedBacks/FeedBacks";
import Projects from "@/app/blocks/Projects/Projects";
import SendForm from "@/app/blocks/SendForm/SendForm";

const Home = () => {
  return (
    <main>
        <HeaderText/>
        <TopCards/>
        <Steps/>
        <FeedBacks/>
        <Projects/>
        <SendForm/>
    </main>
  );
}

export default Home;
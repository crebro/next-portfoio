import Head from "next/head";
import Footer from "../components/pages/Footer";
import FeaturedProjects from "../components/pages/Home/FeaturedProjects";
import IntroductionSection from "../components/pages/Home/IntroductionSection";
import SkillSet from "../components/pages/Home/SkillSet";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="app"> 
      <Head>
        <title>Kreation Duwal | Student, Developer and Content Creator</title>
      </Head>
      <IntroductionSection />
      <FeaturedProjects />
      <SkillSet />
      <Footer />
      <a className={`${styles['support-button']} shadow-lg`} href={'https://ko-fi.com/D1D37OKE8'} target='_blank' rel="noreferrer"><img height='36' style={{border: "0px", height: "36px"}} src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>  
    </div>
  )
}

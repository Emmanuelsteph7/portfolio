import About from "./modules/about/About";
import Contact from "./modules/contact/Contact";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "./modules/hero/Hero";
import Portfolio from "./modules/portfolio/Portfolio";
import Qualification from "./modules/qualification/Qualification";
import Services from "./modules/services/Services";
import Skills from "./modules/skills/Skills";
import Testimonial from "./modules/testimonial/Testimonial";
import "./home.scss";
import { MetaData } from "components/index";

const Home = () => {
  return (
    <>
      <MetaData title="Emmanuel Stephen || Home" />
      <Header />
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

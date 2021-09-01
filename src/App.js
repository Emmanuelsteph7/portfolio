import About from "layouts/about/About";
import Contact from "layouts/contact/Contact";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import Hero from "layouts/hero/Hero";
import Portfolio from "layouts/portfolio/Portfolio";
import Qualification from "layouts/qualification/Qualification";
import Services from "layouts/services/Services";
import Skills from "layouts/skills/Skills";
import Testimonial from "layouts/testimonial/Testimonial";

const App = () => {
  return (
    <>
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

export default App;

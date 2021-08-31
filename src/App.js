import About from "layouts/about/About";
import Contact from "layouts/contact/Contact";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import Hero from "layouts/hero/Hero";
import Portfolio from "layouts/portfolio/Portfolio";
import Qualification from "layouts/qualification/Qualification";
import Services from "layouts/services/Services";
import Testimonial from "layouts/testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Qualification />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

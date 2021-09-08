import person from "assets/images/person.png";
import { SectionHeaders } from "components";
import { scrollFunc } from "components/index";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./about.scss";

const About = () => {
  const imageRef = useRef();
  const profileRef = useRef();
  const location = useLocation();
  const history = useHistory();

  useLayoutEffect(() => {
    scrollFunc(imageRef);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(profileRef);
  }, []);

  useEffect(() => {
    const element = document.querySelector("#about");
    if (location && location.pathname === "/about") {
      const position = element.offsetTop;
      window.scrollTo(0, position - 70);
    }

    const handleScrollRoute = () => {
      console.log("about");
      if (
        !location.pathname === "/about" &&
        element.getBoundingClientRect().top <= 80 &&
        element.getBoundingClientRect().bottom >= 0
      ) {
        history.push("./about");
      }
    };

    window.addEventListener("scroll", handleScrollRoute);

    return () => window.removeEventListener("scroll", handleScrollRoute);
  }, []);

  return (
    <div className="about" id="about">
      <div className="about__container container">
        <SectionHeaders
          section="about"
          subHeader="My History"
          sectionHeader="About Me"
        />
        <div className="about__profile">
          <div className="about__profileImageDiv" ref={imageRef}>
            <div className="about__profileImageDivContainer">
              <img src={person} alt="" className="about__profileImage" />
            </div>
          </div>
          <div className="about__profileInfo" ref={profileRef}>
            <h2 className="about__profileHeader header3">Hello, I am</h2>
            <p className="about__profileParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              quisquam eaque eius consequatur magnam, animi aut sed? Molestias
              mollitia fuga autem dignissimos quas harum ullam.
            </p>
            <div className="about__profileInfoDetails"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

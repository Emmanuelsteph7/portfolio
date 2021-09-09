import person from "assets/images/person.png";
import { SectionHeaders } from "components";
import { LinkTag, scrollFunc } from "components/index";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./about.scss";

const About = () => {
  const imageRef = useRef();
  const headerRef = useRef();
  const paragraph1Ref = useRef();
  const paragraph2Ref = useRef();
  const paragraph3Ref = useRef();
  const paragraph4Ref = useRef();
  const paragraph5Ref = useRef();
  const location = useLocation();

  useLayoutEffect(() => {
    scrollFunc(imageRef);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(headerRef);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(paragraph1Ref);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(paragraph2Ref);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(paragraph3Ref);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(paragraph4Ref);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(paragraph5Ref);
  }, []);

  useEffect(() => {
    const element = document.querySelector("#about");
    if (location && location.pathname === "/about") {
      const position = element.offsetTop;
      window.scrollTo(0, position - 70);
    }
  }, [location]);

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
          <div className="about__profileInfo">
            <h2 className="about__profileHeader header3" ref={headerRef}>
              Hello, I am Emmanuel Stephen
            </h2>
            <p className="about__profileParagraph" ref={paragraph1Ref}>
              I am a Front-End Developer who loves designing and developing
              responsive and user friendly web pages that are fast and built
              with the best practices. I achieve this using technologies like
              HTML5, CSS3, JavaScript and CSS pre-processors like Sass.
            </p>
            <p className="about__profileParagraph" ref={paragraph2Ref}>
              I also have experience in building applications that interacts
              with server side APIs and I manage these applications using state
              management libraries like Redux, and technologies like Context API
              in React Js.
            </p>
            <p className="about__profileParagraph" ref={paragraph3Ref}>
              In addition to making clean and functional web pages, I am also
              acquainted with the server side using Node Js, Express Js
              framework and Mongo DB.
            </p>
            <p className="about__profileParagraph" ref={paragraph4Ref}>
              My greatest strength is the drive to always improve and learn new
              technologies. Being up to date with the latest trends in web
              development is a constant routine for me.
            </p>
            <p className="about__profileParagraph" ref={paragraph5Ref}>
              If you’d like to find out more or you have a project in mind, you
              can reach out <LinkTag to="/contact" label="here" />
            </p>

            <div className="about__profileInfoDetails"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import person from "assets/images/person.png";
import { SectionHeaders } from "components";
import { scrollFunc } from "components/index";
import { useEffect, useRef } from "react";
import "./about.scss";

const About = () => {
  const imageRef = useRef();
  const profileRef = useRef();
  // const headerRef = useRef();

  useEffect(() => {
    scrollFunc(imageRef, 2);
  }, []);
  useEffect(() => {
    scrollFunc(profileRef, 2);
  }, []);
  return (
    <div className="about">
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

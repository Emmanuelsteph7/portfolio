import { SectionHeaders } from "components";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__container container">
        <SectionHeaders
          section="about"
          subHeader="My History"
          sectionHeader="About Me"
        />
        <div className="about__profile">
          <div className="about__profileInfo">
            <h2 className="about__profileHeader header3">Hello, I am</h2>
            <p className="about__profileParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              quisquam eaque eius consequatur magnam, animi aut sed? Molestias
              mollitia fuga autem dignissimos quas harum ullam.
            </p>
            <div className="about__profileInfoDetails"></div>
          </div>
          <div className="about__profileImageDiv">
            <img src="" alt="" className="about__profileImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

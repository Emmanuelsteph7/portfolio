import { SocialIcons } from "components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { useHistory } from "react-router-dom";
import person from "assets/images/person.png";
import "./hero.scss";

const Hero = () => {
  // const history = useHistory();

  return (
    <div className="hero">
      <div className="hero__container container">
        <div className="hero__info">
          <h2 className="hero__secondaryHeader header3">Hi, I'm </h2>
          <h1 className="hero__mainHeader header1">Emmanuel Stephen</h1>
          <p className="hero__paragraph">Frontend Developer</p>
          <div className="header__btnDiv">
            <button className="header__btn btn">Download CV</button>
          </div>
          <div className="hero__social">
            <SocialIcons to="https://github.com/Emmanuelsteph7">
              <FaGithub />
            </SocialIcons>
            <SocialIcons to="https://www.linkedin.com/in/osemenestephen/">
              <FaLinkedin />
            </SocialIcons>
          </div>
        </div>
        <div className="hero__avatar">
          <div className="hero__avatarContainer">
            <img src={person} alt="" className="hero__avatarImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

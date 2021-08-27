import { SocialIcons } from "components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container container">
        <div className="header__info">
          <h2 className="header__secondaryHeader header3">Hi, I'm </h2>
          <h1 className="hero__mainHeader header1">Emmanuel Stephen</h1>
          <p className="hero__paragraph">Frontend Developer</p>
          <div className="header__btnDiv">
            <button className="header__btn btn">Download CV</button>
          </div>
          <div className="hero__social">
            <SocialIcons>
              <FaGithub />
            </SocialIcons>
            <SocialIcons>
              <FaLinkedin />
            </SocialIcons>
          </div>
        </div>
        <div className="hero__avatar">
          <div className="hero__avatarContainer">
            <img src="" alt="" className="hero__avatarImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

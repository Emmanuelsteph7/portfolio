import { SocialIcons } from "components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { useHistory } from "react-router-dom";
import person from "assets/images/person.png";
import { useLocation, useHistory } from "react-router-dom";
import "./hero.scss";
import { useEffect } from "react";

const Hero = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const element = document.querySelector("#hero");
    if (location && location.pathname === "/") {
      const position = element.offsetTop;
      window.scrollTo(0, position - 70);
    }

    const handleScrollRoute = () => {
      if (element.getBoundingClientRect().bottom >= 55) {
        history.push("./");
      }
    };

    window.addEventListener("scroll", handleScrollRoute);

    return () => window.removeEventListener("scroll", handleScrollRoute);
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="hero__container container">
        <div className="hero__info">
          <h2 className="hero__secondaryHeader header3">Hi, I'm </h2>
          <h1 className="hero__mainHeader header1">Emmanuel Stephen</h1>
          <p className="hero__paragraph">Frontend Developer</p>
          {/* <p className="hero__paragraph">I design and build user interfaces</p> */}
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

import { scrollFunc, SocialIcons } from "components/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import "./footer.scss";

const Footer = () => {
  const footerRef = useRef();

  useLayoutEffect(() => {
    scrollFunc(footerRef, 1);
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__container container">
        <h2 className="footer__header header2">Emmanuel Stephen</h2>
        <p className="footer__paragraph">
          I am Emmanuel Stephen and this is my personal website. Consult me here
        </p>
        <div className="footer__socials">
          <SocialIcons to="https://github.com/Emmanuelsteph7">
            <FaGithub />
          </SocialIcons>
          <SocialIcons to="https://www.linkedin.com/in/osemenestephen/">
            <FaLinkedin />
          </SocialIcons>
        </div>
        <div className="footer__copyright">&copy; 2021 Emmanuel.</div>
      </div>
    </footer>
  );
};

export default Footer;

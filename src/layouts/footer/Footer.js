import { SocialIcons } from "components/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__header header2">Emmanuel Stephen</h2>
        <p className="footer__paragraph">
          I am Emmanuel Stephen and this is my personal website. Consult me here
        </p>
        <div className="footer__socials">
          <SocialIcons>
            <FaGithub />
          </SocialIcons>
          <SocialIcons>
            <FaLinkedin />
          </SocialIcons>
        </div>
        <div className="footer__copyright">&copy; 2021 Emmanuel.</div>
      </div>
    </footer>
  );
};

export default Footer;

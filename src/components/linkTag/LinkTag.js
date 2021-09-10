import { Link } from "react-router-dom";
import "./linkTag.scss";

const LinkTag = ({ icon, to = "/", externalLink, label, btn, outline }) => {
  return (
    <Link
      className={`linkTag ${btn && "btn"} ${icon ? "icon" : ""} ${
        outline && "outline"
      }`}
      to={externalLink ? { pathname: externalLink } : to}
      target={externalLink ? "_blank" : "_self"}
    >
      {icon}
      {label}
    </Link>
  );
};

export default LinkTag;

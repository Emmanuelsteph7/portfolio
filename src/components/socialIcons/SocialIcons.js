import { Link } from "react-router-dom";
import "./socialIcons.scss";

const SocialIcons = ({ children, to }) => {
  return (
    <Link to={to ? to : "/"} className="socialIcons">
      {children}
    </Link>
  );
};

export default SocialIcons;

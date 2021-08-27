import { NavLink } from "react-router-dom";
import "./navbarLink.scss";

const NavbarLink = ({ children, to, ...rest }) => {
  return (
    <NavLink {...rest} data-name={children} to={to} className="navLink">
      {children}
    </NavLink>
  );
};

export default NavbarLink;

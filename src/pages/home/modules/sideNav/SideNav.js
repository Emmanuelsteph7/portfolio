import { NavbarLink } from "components";
import { person } from "assets";
import "./sideNav.scss";

const SideNav = () => {
  return (
    <aside className="sideNav">
      <div className="sideNav__container">
        <div className="sideNav__person">
          <div className="sideNav__imageDiv">
            <img src={person} alt="" className="sideNav__image" />
          </div>
        </div>
        <nav className="sideNav__nav">
          <NavbarLink to="/" exact>
            Home
          </NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/resume">Resume</NavbarLink>
          <NavbarLink to="/portfolio">Portfolio</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </nav>
        <div className="sideNav__footer">@2021 Emmanuel</div>
      </div>
    </aside>
  );
};

export default SideNav;

import { useState } from "react";
import { Hamburger, NavbarLink } from "components";
import "./header.scss";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__brand">
          <span className="header__brandLess">&lt;</span>
          <span className="header__brandColoured">Emmanuel</span>{" "}
          <span className="header__brandGreater">/&gt;</span>
        </div>
        <nav className={`header__nav ${showNav && "show"}`}>
          <NavbarLink onClick={handleNav} to="/">
            Home
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/about">
            About
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/services">
            Services
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/portfolio">
            Portfolio
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/contact">
            Contact Me
          </NavbarLink>
        </nav>
        <Hamburger toggleFunc={handleNav} toggle={showNav} />
      </div>
    </header>
  );
};

export default Header;

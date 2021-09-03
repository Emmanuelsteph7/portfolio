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
            &lt;Home /&gt;
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/about">
            &lt;About /&gt;
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/services">
            &lt;Services /&gt;
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/portfolio">
            &lt;Portfolio /&gt;
          </NavbarLink>
          <NavbarLink onClick={handleNav} to="/contact">
            &lt;Contact Me /&gt;
          </NavbarLink>
        </nav>
        <Hamburger toggleFunc={handleNav} toggle={showNav} />
      </div>
    </header>
  );
};

export default Header;

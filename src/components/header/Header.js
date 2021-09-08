import { useLayoutEffect, useRef, useState } from "react";
import { Hamburger, NavbarLink } from "components";
import "./header.scss";
import { scrollFunc } from "components/index";
import { Link, useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const headerRef = useRef();

  useLayoutEffect(() => {
    scrollFunc(headerRef, 1);
  }, []);

  const handleRoutes = (arg) => {
    if (arg === "") {
      history.push("/");
      if (
        location &&
        (location.pathname === "/" ||
          location.pathname === "/about" ||
          location.pathname === "/contact" ||
          location.pathname === "/services" ||
          location.pathname === "/portfolio")
      ) {
        const position = document.querySelector("#hero").offsetTop;

        window.scrollTo(0, position - 70);
      }
    }

    if (arg) {
      history.push(`/${arg}`);
      if (location && location.pathname === `/${arg}`) {
        const position = document.querySelector(`#${arg}`).offsetTop;

        window.scrollTo(0, position - 70);
      }

      if (
        location &&
        (location.pathname === "/" ||
          location.pathname === "/about" ||
          location.pathname === "/contact" ||
          location.pathname === "/services" ||
          location.pathname === "/portfolio")
      ) {
        const position = document.querySelector(`#${arg}`).offsetTop;

        window.scrollTo(0, position - 70);
      }
    }
  };

  const handleNav = (arg) => {
    setShowNav(!showNav);

    handleRoutes(arg);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container container">
        <div className="header__brand">
          <Link onClick={() => handleRoutes("")} to="/">
            <span className="header__brandLess">&lt;</span>
            <span className="header__brandColoured">Emmanuel</span>{" "}
            <span className="header__brandGreater">/&gt;</span>
          </Link>
        </div>
        <nav className={`header__nav ${showNav && "show"}`}>
          <NavbarLink onClick={() => handleNav("")} to="/">
            &lt;Home /&gt;
          </NavbarLink>
          <NavbarLink onClick={() => handleNav("about")} to="/about">
            &lt;About /&gt;
          </NavbarLink>
          <NavbarLink onClick={() => handleNav("services")} to="/services">
            &lt;Services /&gt;
          </NavbarLink>
          <NavbarLink onClick={() => handleNav("portfolio")} to="/portfolio">
            &lt;Portfolio /&gt;
          </NavbarLink>
          <NavbarLink onClick={() => handleNav("contact")} to="/contact">
            &lt;Contact Me /&gt;
          </NavbarLink>
        </nav>
        <Hamburger toggleFunc={() => setShowNav(!showNav)} toggle={showNav} />
      </div>
    </header>
  );
};

export default Header;

import { SectionHeaders, PortfolioCard } from "components";
import "./portfolio.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { scrollFunc } from "components/index";
import { useLocation } from "react-router-dom";
import { allData } from "../../../../utils/portfolioData";

const Portfolio = () => {
  const [show, setShow] = useState("all");
  const [data] = useState(allData);
  const toggleDiv = useRef();
  const location = useLocation();

  const mappedAllData = data.map((item, key) => {
    // let refVal;

    // const refVal2 = RefFunc(refVal);
    return (
      <PortfolioCard
        key={key}
        name={item.name}
        link={`/portfolio/${item.id}`}
        desc={item.desc}
        img={item.images[0].src}
      />
    );
  });

  useLayoutEffect(() => {
    scrollFunc(toggleDiv, 2);
  }, []);

  useEffect(() => {
    const element = document.querySelector("#portfolio");
    if (location && location.pathname === "/portfolio") {
      const position = element.offsetTop;
      window.scrollTo(0, position - 70);
    }
  }, [location]);

  const handleShow = (arg) => {
    setShow(arg);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__container container">
        <SectionHeaders
          section="portfolio"
          subHeader="My recent works"
          sectionHeader="Portfolio"
        />
        <div className="portfolio__toggleSection" ref={toggleDiv}>
          <span
            className={`portfolio__toggle ${show === "all" ? "active" : ""}`}
            onClick={() => handleShow("all")}
          >
            All
          </span>
          <span
            className={`portfolio__toggle ${show === "web" ? "active" : ""}`}
            onClick={() => handleShow("web")}
          >
            Web
          </span>
          <span
            className={`portfolio__toggle ${show === "mern" ? "active" : ""}`}
            onClick={() => handleShow("mern")}
          >
            MERN
          </span>
        </div>
        <div className={`portfolio__cards ${show === "all" ? "active" : ""}`}>
          {mappedAllData}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

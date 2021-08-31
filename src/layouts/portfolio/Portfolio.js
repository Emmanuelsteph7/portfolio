import { SectionHeaders, PortfolioCard } from "components";
import image from "assets/images/about-us-img-1.jpeg";
import "./portfolio.scss";
import { useState } from "react";

const Portfolio = () => {
  const [show, setShow] = useState("all");

  const handleShow = (arg) => {
    setShow(arg);
  };
  return (
    <div className="portfolio">
      <div className="portfolio__container container">
        <SectionHeaders
          section="portfolio"
          subHeader="My recent works"
          sectionHeader="Portfolio"
        />
        <div className="portfolio__toggleSection">
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
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
        </div>
        <div className={`portfolio__cards ${show === "web" ? "active" : ""}`}>
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
        </div>
        <div className={`portfolio__cards ${show === "mern" ? "active" : ""}`}>
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            desc="Web development"
            img={image}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import { SectionHeaders, PortfolioCard } from "components";
import image from "assets/images/about-us-img-1.jpeg";
import "./portfolio.scss";
import { useEffect, useRef, useState } from "react";
import { scrollFunc } from "components/index";

const Portfolio = () => {
  const [show, setShow] = useState("all");

  const portfolio1 = useRef();
  const portfolio2 = useRef();
  const portfolio3 = useRef();
  const portfolio4 = useRef();
  const portfolio5 = useRef();
  const portfolio6 = useRef();
  const portfolio7 = useRef();
  const portfolio8 = useRef();
  const portfolio9 = useRef();
  const portfolio10 = useRef();
  const portfolio11 = useRef();
  const portfolio12 = useRef();

  useEffect(() => {
    scrollFunc(portfolio1, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio2, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio3, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio4, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio5, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio6, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio7, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio8, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio9, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio10, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio11, 2);
  }, []);
  useEffect(() => {
    scrollFunc(portfolio12, 2);
  }, []);

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
        <div className="portfolio__toggleSection" ref={portfolio12}>
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
            refValue={portfolio1}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio2}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio3}
            desc="Web development"
            img={image}
          />
        </div>
        <div className={`portfolio__cards ${show === "web" ? "active" : ""}`}>
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio4}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio5}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio6}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio7}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio8}
            desc="Web development"
            img={image}
          />
        </div>
        <div className={`portfolio__cards ${show === "mern" ? "active" : ""}`}>
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio9}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio10}
            desc="Web development"
            img={image}
          />
          <PortfolioCard
            name="New Portfolio Project"
            refValue={portfolio11}
            desc="Web development"
            img={image}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

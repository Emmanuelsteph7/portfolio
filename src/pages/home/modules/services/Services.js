import { SectionHeaders, ServiceCard } from "components";
import { scrollFunc } from "components/index";
import { useLayoutEffect, useRef, useEffect } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { useLocation, useHistory } from "react-router-dom";
import "./services.scss";

const Services = () => {
  const service1 = useRef();
  const service2 = useRef();
  const service3 = useRef();
  const location = useLocation();
  const history = useHistory();

  useLayoutEffect(() => {
    scrollFunc(service1, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(service2, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(service3, 2);
  }, []);

  // useEffect(() => {
  //   if (location && location.pathname === "/services") {
  //     const position = document.querySelector("#services").offsetTop;

  //     window.scrollTo(0, position - 70);
  //   }
  // }, []);

  useEffect(() => {
    const element = document.querySelector("#services");
    if (location && location.pathname === "/services") {
      const position = element.offsetTop;
      window.scrollTo(0, position - 70);
    }

    const handleScrollRoute = () => {
      if (
        element.getBoundingClientRect().top <= 80 &&
        element.getBoundingClientRect().bottom >= 55
      ) {
        history.push("./services");
      }
    };

    window.addEventListener("scroll", handleScrollRoute);

    return () => window.removeEventListener("scroll", handleScrollRoute);
  }, []);

  return (
    <div className="services" id="services">
      <div className="services__container container">
        <SectionHeaders
          section="services"
          subHeader="What I Offer"
          sectionHeader="Services"
        />
        <div className="services__body">
          <ServiceCard
            logo={<GrPersonalComputer />}
            header="Web Development"
            refValue={service1}
            details="These are the services that i offer. These are the services that i offer."
          />
          <ServiceCard
            logo={<GrPersonalComputer />}
            header="Web Development"
            refValue={service2}
            details="These are the services that i offer. These are the services that i offer."
          />
          <ServiceCard
            logo={<GrPersonalComputer />}
            header="Web Development"
            refValue={service3}
            details="These are the services that i offer. These are the services that i offer."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

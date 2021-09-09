import { SectionHeaders, ServiceCard } from "components";
import { scrollFunc } from "components/index";
import { useLayoutEffect, useRef, useEffect } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./services.scss";

const Services = () => {
  const service1 = useRef();
  const service2 = useRef();
  // const service3 = useRef();
  const location = useLocation();

  useLayoutEffect(() => {
    scrollFunc(service1, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(service2, 2);
  }, []);
  // useLayoutEffect(() => {
  //   scrollFunc(service3, 2);
  // }, []);

  useEffect(() => {
    const element = document.querySelector("#services");
    if (location && location.pathname === "/services") {
      const position = element.offsetTop;
      window.scrollTo(0, position - 70);
    }
  }, [location]);

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
            logo={<MdPhoneIphone />}
            header="Mobile Friendly Websites"
            refValue={service1}
            details="Responsive websites and layouts are essential for good user experience."
            details2="Contact me for mobile friendly websites."
          />
          <ServiceCard
            logo={<GrPersonalComputer />}
            header="Web Development"
            refValue={service2}
            details="Optimized applications have better performance."
            details2="Contact me for creating web applications."
          />
          {/* <ServiceCard
            logo={<GrPersonalComputer />}
            header="Web Development"
            refValue={service3}
            details="These are the services that i offer. These are the services that i offer."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Services;

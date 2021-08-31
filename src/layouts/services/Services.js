import { SectionHeaders, ServiceCard } from "components";
import { scrollFunc } from "components/index";
import { useEffect, useRef } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import "./services.scss";

const Services = () => {
  const service1 = useRef();
  const service2 = useRef();
  const service3 = useRef();

  useEffect(() => {
    scrollFunc(service1, 2);
  }, []);
  useEffect(() => {
    scrollFunc(service2, 2);
  }, []);
  useEffect(() => {
    scrollFunc(service3, 2);
  }, []);

  return (
    <div className="services">
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

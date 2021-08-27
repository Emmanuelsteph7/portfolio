import { SectionHeaders, ServiceCard } from "components";
import { GrPersonalComputer } from "react-icons/gr";
import "./services.scss";

const Services = () => {
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
            details="These are the services that i offer. These are the services that i offer."
          />
          <ServiceCard
            logo={<GrPersonalComputer />}
            header="Web Development"
            details="These are the services that i offer. These are the services that i offer."
          />
          <ServiceCard
            logo={<GrPersonalComputer />}
            header="Web Development"
            details="These are the services that i offer. These are the services that i offer."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

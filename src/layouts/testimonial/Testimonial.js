import avatar from "assets/images/def_user.jpeg";
import { SectionHeaders, TestimonialCard } from "components";

import "./testimonial.scss";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__container container">
        <SectionHeaders
          section="testimonial"
          subHeader="What my client says"
          sectionHeader="Testimonial"
        />
        <div className="testimonial__cards">
          <TestimonialCard
            name="Emmanuel"
            status="client"
            image={avatar}
            paragraph="He is the best Frontend Developer I know"
          />
          <TestimonialCard
            name="Emmanuel"
            status="client"
            image={avatar}
            paragraph="He is the best Frontend Developer I know"
          />
          <TestimonialCard
            name="Emmanuel"
            status="client"
            image={avatar}
            paragraph="He is the best Frontend Developer I know"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

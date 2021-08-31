import avatar from "assets/images/def_user.jpeg";
import { SectionHeaders, TestimonialCard } from "components";
import { scrollFunc } from "components/index";
import { useEffect, useRef } from "react";

import "./testimonial.scss";

const Testimonial = () => {
  const testimonial1 = useRef();
  const testimonial2 = useRef();
  const testimonial3 = useRef();

  useEffect(() => {
    scrollFunc(testimonial1, 2);
  }, []);
  useEffect(() => {
    scrollFunc(testimonial2, 2);
  }, []);
  useEffect(() => {
    scrollFunc(testimonial3, 2);
  }, []);

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
            refValue={testimonial1}
            image={avatar}
            paragraph="He is the best Frontend Developer I know"
          />
          <TestimonialCard
            name="Emmanuel"
            status="client"
            refValue={testimonial2}
            image={avatar}
            paragraph="He is the best Frontend Developer I know"
          />
          <TestimonialCard
            name="Emmanuel"
            status="client"
            refValue={testimonial3}
            image={avatar}
            paragraph="He is the best Frontend Developer I know"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

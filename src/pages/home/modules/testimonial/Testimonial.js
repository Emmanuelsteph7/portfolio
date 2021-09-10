// import avatar from "assets/images/def_user.jpeg";
import { mrEse } from "assets/index";
import { SectionHeaders, TestimonialCard } from "components";
import { scrollFunc } from "components/index";
import { useLayoutEffect, useRef } from "react";

import "./testimonial.scss";

const Testimonial = () => {
  const testimonial1 = useRef();
  const testimonial2 = useRef();
  const testimonial3 = useRef();

  useLayoutEffect(() => {
    scrollFunc(testimonial1, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(testimonial2, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(testimonial3, 2);
  }, []);

  return (
    <div className="testimonial">
      <div className="testimonial__container container">
        <SectionHeaders
          section="testimonial"
          subHeader="What my client says"
          sectionHeader="Testimonials"
        />
        <div className="testimonial__cards">
          <TestimonialCard
            name="Glory Eseosa Efionayi"
            status="C#.NET Developer"
            refValue={testimonial1}
            image={mrEse}
            paragraph="Emmanuel Stephen is one of the best front end developer I know. We have worked together on some projects. He's goal oriented and result driven."
          />
          {/* <TestimonialCard
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
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

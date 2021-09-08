import { scrollFunc } from "components/index";
import { useLayoutEffect, useRef } from "react";
import "./about.scss";

const About = ({ data }) => {
  const headerRef = useRef();
  const paragraphRef = useRef();

  useLayoutEffect(() => {
    scrollFunc(headerRef);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(paragraphRef);
  }, []);

  const mappedParagraphs = data.map((item, key) => {
    return (
      <p key={key} ref={paragraphRef} className="portAbout__paragraph">
        {item.paragraph}
      </p>
    );
  });

  return (
    <div className="portAbout">
      <div className="portAbout__container container">
        <h3 className="portAbout__header header3" ref={headerRef}>
          About This Project
        </h3>
        <div className="portAbout__paragraphs">{mappedParagraphs}</div>
      </div>
    </div>
  );
};

export default About;

import scrollFunc from "components/scrollFunc/ScrollFunc";
import { useEffect, useRef } from "react";
import "./sectionHeader.scss";

const SectionHeaders = ({ subHeader, sectionHeader, section, show }) => {
  const subHeaderRef = useRef();
  const sectionHeaderRef = useRef();

  useEffect(() => {
    scrollFunc(subHeaderRef);
  }, []);

  useEffect(() => {
    scrollFunc(sectionHeaderRef);
  }, []);
  return (
    <>
      <h4
        className={`${section ? `${section}__subHeader` : ""} ${
          show ? "show" : ""
        } subHeader subheader--style`}
        ref={subHeaderRef}
      >
        {subHeader}
      </h4>
      <h2
        className={`${
          section ? `${section}__sectionHeader` : ""
        } sectionHeader sectionHeader--style`}
        ref={sectionHeaderRef}
      >
        {sectionHeader}
      </h2>
    </>
  );
};

export default SectionHeaders;

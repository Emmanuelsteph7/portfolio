import "./sectionHeader.scss";

const SectionHeaders = ({ subHeader, sectionHeader, section }) => {
  return (
    <>
      <h4 className={`${section ? `${section}__subHeader` : ""} subHeader`}>
        {subHeader}
      </h4>
      <h2
        className={`${
          section ? `${section}__sectionHeader` : ""
        } sectionHeader`}
      >
        {sectionHeader}
      </h2>
    </>
  );
};

export default SectionHeaders;

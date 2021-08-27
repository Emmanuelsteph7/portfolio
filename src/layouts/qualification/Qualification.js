import { QualificationCard, SectionHeaders } from "components";
import "./qualification.scss";

const Qualification = () => {
  return (
    <div className="qualification">
      <div className="qualification__container container">
        <SectionHeaders
          section="qualification"
          subHeader="Experience and Education"
          sectionHeader="Qualification"
        />
        <div className="qualification__profile">
          <div className="qualification__profileDetail">
            <h4 className="qualification__profileHeader header3">
              Work Experience
            </h4>
            <QualificationCard
              title="Frontend Developer"
              desc1="Impero Techne Ltd"
              desc2="Lagos"
              startTime="march 2021"
              endTime="Till Date"
            />
            <QualificationCard
              title="Frontend Developer"
              desc1="Impero Techne Ltd"
              desc2="Lagos"
              startTime="march 2021"
              endTime="Till Date"
            />
            <QualificationCard
              title="Frontend Developer"
              desc1="Impero Techne Ltd"
              desc2="Lagos"
              startTime="march 2021"
              endTime="Till Date"
            />
          </div>
          <div className="qualification__profileDetail">
            <h4 className="qualification__profileHeader header3">Education</h4>
            <QualificationCard
              title="B.Eng Petroleum Engineering"
              desc1="University of Benin"
              desc2="Edo"
              startTime="Nov 2012"
              endTime="Oct 2017"
            />
            <QualificationCard
              title="Frontend Developer"
              desc1="Impero Techne Ltd"
              desc2="Lagos"
              startTime="march 2021"
              endTime="Till Date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;

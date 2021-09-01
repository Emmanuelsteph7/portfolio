import { SectionHeaders, SkillsCard } from "components/index";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiSass, SiJavascript } from "react-icons/si";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container container">
        <SectionHeaders
          section="skills"
          subHeader="What I do"
          sectionHeader="Skills"
        />
        <div className="skills__cards">
          <SkillsCard name="HTML" src={<FaHtml5 />} />
          <SkillsCard name="CSS" src={<FaCss3Alt />} />
          <SkillsCard name="Sass" src={<SiSass />} />
          <SkillsCard name="JavaScript" src={<SiJavascript />} />
          <SkillsCard name="React Js" src={<FaReact />} />
          <SkillsCard name="Git" src={<FaGitAlt />} />
          <SkillsCard name="GitHub" src={<FaGithub />} />
          <SkillsCard name="Node Js" src={<FaNodeJs />} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

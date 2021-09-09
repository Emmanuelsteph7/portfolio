import "./animateSkills.scss";
import { SkillsCard } from "components/index";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiSass, SiJavascript } from "react-icons/si";

const AnimateSkills = () => {
  return (
    <div className="animateSkills">
      <SkillsCard src={<FaHtml5 />} />
      <SkillsCard src={<FaCss3Alt />} />
      <SkillsCard src={<SiSass />} />
      <SkillsCard src={<SiJavascript />} />
      <SkillsCard src={<FaReact />} />
      <SkillsCard src={<FaGitAlt />} />
      <SkillsCard src={<FaGithub />} />
      <SkillsCard src={<FaNodeJs />} />
    </div>
  );
};

export default AnimateSkills;

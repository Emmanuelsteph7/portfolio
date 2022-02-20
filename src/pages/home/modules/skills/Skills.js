import { scrollFunc, SectionHeaders, SkillsCard } from "components/index";
import { useLayoutEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiSass,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import "./skills.scss";

const Skills = () => {
  const skill1 = useRef();
  const skill2 = useRef();
  const skill3 = useRef();
  const skill4 = useRef();
  const skill5 = useRef();
  const skill6 = useRef();
  const skill7 = useRef();
  const skill8 = useRef();
  const skill9 = useRef();
  const skill10 = useRef();
  const skill11 = useRef();
  const skill12 = useRef();

  useLayoutEffect(() => {
    scrollFunc(skill1, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill2, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill3, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill4, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill5, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill6, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill7, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill8, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill9, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill10, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill11, 2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(skill12, 2);
  }, []);

  return (
    <div className="skills">
      <div className="skills__container container">
        <SectionHeaders
          section="skills"
          subHeader="What I do"
          sectionHeader="Skills"
        />
        <div className="skills__cards">
          <SkillsCard name="HTML" src={<FaHtml5 />} refValue={skill1} />
          <SkillsCard name="CSS" src={<FaCss3Alt />} refValue={skill2} />
          <SkillsCard name="Sass" src={<SiSass />} refValue={skill3} />
          <SkillsCard
            name="JavaScript"
            src={<SiJavascript />}
            refValue={skill4}
          />
          <SkillsCard name="React Js" src={<FaReact />} refValue={skill5} />
          <SkillsCard name="Git" src={<FaGitAlt />} refValue={skill6} />
          <SkillsCard name="GitHub" src={<FaGithub />} refValue={skill7} />
          <SkillsCard name="Node Js" src={<FaNodeJs />} refValue={skill8} />
          <SkillsCard
            name="TypeScript"
            src={<SiTypescript />}
            refValue={skill9}
          />
          <SkillsCard name="Redux" src={<SiRedux />} refValue={skill10} />
          <SkillsCard name="Next JS" src={<SiNextdotjs />} refValue={skill11} />
          <SkillsCard
            name="Tailwind CSS"
            src={<SiTailwindcss />}
            refValue={skill12}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

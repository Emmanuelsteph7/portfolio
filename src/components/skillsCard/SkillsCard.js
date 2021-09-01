import "./skillsCard.scss";

const SkillsCard = ({ src, name }) => {
  return (
    <div className="skillsCard">
      <div className="skillsCard__imageDiv">
        {/* <img src={src} alt="" className="skillsCard__image" /> */}
        {src}
      </div>
      <div className="skillsCard__name">{name}</div>
    </div>
  );
};

export default SkillsCard;

import "./skillsCard.scss";

const SkillsCard = ({ src, name, refValue }) => {
  return (
    <div className="skillsCard" ref={refValue}>
      <div className="skillsCard__imageDiv">
        {/* <img src={src} alt="" className="skillsCard__image" /> */}
        {src}
      </div>
      {name && <div className="skillsCard__name">{name}</div>}
    </div>
  );
};

export default SkillsCard;

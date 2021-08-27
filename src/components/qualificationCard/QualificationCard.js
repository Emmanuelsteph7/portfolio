import "./qualificationCard.scss";

const QualificationCard = ({ title, desc1, desc2, startTime, endTime }) => {
  return (
    <div className="qualificationCard">
      <h4 className="qualificationCard__title header4">{title}</h4>
      <div className="qualificationCard__info">
        <div className="qualificationCard__desc">
          <span className="qualificationCard__content">{desc1}</span> -
          <span className="qualificationCard__content">{desc2}</span>
        </div>
        <div className="qualificationCard__time">
          <span className="qualificationCard__content">{startTime}</span> -
          <span className="qualificationCard__content">{endTime}</span>
        </div>
      </div>
    </div>
  );
};

export default QualificationCard;

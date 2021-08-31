import "./contactCard.scss";

const ContactCard = ({ icon, name, details, href }) => {
  return (
    <div className="contactCard">
      <a href={href}>
        <div className="contactCard__container">
          <div className="contactCard__imageDiv">
            <span className="contactCard__icon">{icon}</span>
          </div>
          <h3 className="contactCard__header header3">{name}</h3>
          <div className="contactCard__details subHeader">{details}</div>
        </div>
      </a>
    </div>
  );
};

export default ContactCard;

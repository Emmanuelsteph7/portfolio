import { LinkTag } from "components/index";
import "./serviceCard.scss";

const ServiceCard = ({ logo, header, details, details2, refValue }) => {
  return (
    <div className="serviceCard" ref={refValue}>
      <div className="serviceCard__container">
        <div className="serviceCard__logo">{logo}</div>
        <h4 className="serviceCard__header header4">{header}</h4>
        <p className="serviceCard__paragraph">{details}</p>
        <LinkTag to="/contact" label={details2} />
        {/* <div className="serviceCard__btnDiv">
          <button className="serviceCard__btn btn--md">Know More</button>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;

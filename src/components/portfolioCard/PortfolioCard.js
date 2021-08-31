import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import "./portfolioCard.scss";

const PortfolioCard = ({ name, img, desc, link, refValue }) => {
  return (
    <div className="portfolioCard" ref={refValue}>
      <div className="portfolioCard__container">
        <div className="portfolioCard__imageDiv">
          <img src={img} alt="" className="portfolioCard__image" />
        </div>
        <div className="portfolioCard__desc subHeader">{desc}</div>
        <div className="portfolioCard__name header3">{name}</div>
        <div className="portfolioCard__btnDiv">
          <span className="portfolioCard__link">
            <Link to={link ? link : "/"}>View Details</Link>
            <FiChevronsRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

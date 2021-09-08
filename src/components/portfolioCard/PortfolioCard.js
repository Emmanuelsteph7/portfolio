import { Link, useHistory } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import "./portfolioCard.scss";
import { useEffect, useRef } from "react";
import { scrollFunc } from "components/index";

const PortfolioCard = ({ name, img, desc, link, refValue }) => {
  const refValue2 = useRef();

  useEffect(() => {
    scrollFunc(refValue2, 2);
  }, [refValue2]);

  const history = useHistory();

  return (
    <div
      className="portfolioCard"
      ref={refValue2}
      onClick={() => history.push(link)}
    >
      <div className="portfolioCard__container">
        <div className="portfolioCard__imageDiv">
          <img src={img} alt="" className="portfolioCard__image" />
        </div>
        <div className="portfolioCard__name header3">{name}</div>
        <div className="portfolioCard__desc subHeader">{desc}</div>
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

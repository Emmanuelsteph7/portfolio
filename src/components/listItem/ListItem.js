import { scrollFunc } from "components/index";
import { useLayoutEffect, useRef } from "react";
import { AiFillWarning } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import "./listItem.scss";

const ListItem = ({ verified, warning, header, paragraph }) => {
  const paragraphRef = useRef();

  useLayoutEffect(() => {
    scrollFunc(paragraphRef);
  }, []);

  return (
    <div className="listItem" ref={paragraphRef}>
      <div className="listItem__container">
        <div
          className={`listItem__icon ${
            verified ? "verified" : warning ? "warning" : ""
          }`}
        >
          {verified ? <FaCheck /> : warning ? <AiFillWarning /> : <BsDash />}
        </div>
        <div className="listItem__body">
          <p className="listItem__paragraph">
            {header && (
              <span className="listItem__paragraphHeader">{header}</span>
            )}
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;

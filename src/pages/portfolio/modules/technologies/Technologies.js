import { ListItem, scrollFunc } from "components/index";
import { useLayoutEffect, useRef } from "react";
import "./technologies.scss";

const Technologies = ({ data }) => {
  const headerRef = useRef();
  const paragraphRef = useRef();

  useLayoutEffect(() => {
    scrollFunc(headerRef);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(paragraphRef);
  }, []);

  const mappedParagraphs = data.map((item, key) => {
    return <ListItem refVal={paragraphRef} key={key} header={item} />;
  });

  return (
    <div className="portTech">
      <div className="portTech__container container">
        <h3 className="portTech__header header3" ref={headerRef}>
          Technologies Used
        </h3>
        <div className="portTech__paragraphs">{mappedParagraphs}</div>
      </div>
    </div>
  );
};

export default Technologies;

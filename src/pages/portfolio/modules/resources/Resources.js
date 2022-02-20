import { LinkTag, scrollFunc } from "components/index";
import { useLayoutEffect, useRef } from "react";
import "./resources.scss";

const Resources = ({ liveLink, githubLink }) => {
  const headerRef = useRef();
  const paragraph1Ref = useRef();
  const paragraph2Ref = useRef();

  useLayoutEffect(() => {
    scrollFunc(headerRef);
  }, []);

  useLayoutEffect(() => {
    scrollFunc(paragraph1Ref);
  }, []);

  useLayoutEffect(() => {
    scrollFunc(paragraph2Ref);
  }, []);

  return (
    <div className="portRes">
      <div className="portRes__container container">
        <h3 className="portRes__header header3" ref={headerRef}>
          Resources
        </h3>
        <p className="portRes__paragraph" ref={paragraph1Ref}>
          Check Out the Live Site:
          <LinkTag externalLink={liveLink} label={liveLink} />
        </p>
        {githubLink && (
          <p className="portRes__paragraph" ref={paragraph2Ref}>
            Check Out the Repo:
            <LinkTag externalLink={githubLink} label={githubLink} />
          </p>
        )}
      </div>
    </div>
  );
};

export default Resources;

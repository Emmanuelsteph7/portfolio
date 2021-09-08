import { ImageSlider, LinkTag, scrollFunc } from "components/index";
import { useLayoutEffect, useRef } from "react";
import "./banner.scss";

const Banner = ({ header, liveLink, images }) => {
  const headerRef = useRef();
  const btnRef = useRef();
  const imgRef = useRef();

  useLayoutEffect(() => {
    scrollFunc(headerRef);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(btnRef);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(imgRef);
  }, []);

  return (
    <div className="portBanner">
      <div className="portBanner__container container">
        <div className="portBanner__head">
          <h2 className="portBanner__header header2" ref={headerRef}>
            {header}
          </h2>
          <div className="portBanner__visitBtn" ref={btnRef}>
            <LinkTag btn externalLink={liveLink} label="Visit the Website" />
          </div>
        </div>
        <div className="portBanner__carousel" ref={imgRef}>
          <ImageSlider data={images} />
          <div className="portBanner__carouselBg"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

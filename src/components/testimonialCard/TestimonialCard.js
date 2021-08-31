import "./testimonialCard.scss";

const TestimonialCard = ({ name, status, paragraph, image, refValue }) => {
  return (
    <div className="testimonialCard" ref={refValue}>
      <div className="testimonialCard__container">
        <div className="testimonialCard__imageDiv">
          <img src={image} alt="" className="testimonialCard__image" />
        </div>
        <h3 className="testimonialCard__name">{name}</h3>
        <h5 className="testimonialCard__status subHeader">{status}</h5>
        <p className="testimonalCard__paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

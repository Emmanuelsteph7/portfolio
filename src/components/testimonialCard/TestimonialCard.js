import "./testimonialCard.scss";

const TestimonialCard = ({ name, status, paragraph, image, refValue }) => {
  return (
    <div className="testimonialCard" ref={refValue}>
      <div className="testimonialCard__container">
        <div className="testimonialCard__imageDiv">
          <img src={image} alt="" className="testimonialCard__image" />
        </div>
        <p className="testimonalCard__paragraph header5">{paragraph}</p>
        <h3 className="testimonialCard__name header3">{name}</h3>
        <h5 className="testimonialCard__status subHeader">{status}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;

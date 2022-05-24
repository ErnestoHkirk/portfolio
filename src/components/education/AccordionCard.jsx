import React from "react";

const AccordionCard = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${props.id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${props.id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${props.id}`}
        >
          {props.course[0]}
        </button>
      </h2>
      <div
        id={`flush-collapse${props.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${props.id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{props.course[1]}</div>
      </div>
    </div>
  );
};

export default AccordionCard;

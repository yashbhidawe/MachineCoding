import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleAccordionChange = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Handle empty items list
  if (!items || items.length === 0) {
    return (
      <div className="accordion">
        <p>No items available</p>
      </div>
    );
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionChange(index)}
            aria-expanded={openIndex === index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{item.title}</span>
            <span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./styles.css";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index} data-testid={`faq-item-${index}`}>
          <button
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            data-testid={`faq-question-${index}`}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">
              {activeIndex === index ? (
                <FiChevronUp data-testid={`icon-up-${index} `} />
              ) : (
                <FiChevronDown data-testid={`icon-down-${index}`} />
              )}{" "}
            </span>
          </button>

          {activeIndex === index && (
            <div className="faq-answer" data-testid={`faq-answer-${index}`}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;

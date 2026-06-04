
import React, { useState } from "react";

function App() {

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building UI."
    },
    {
      question: "What is JSX?",
      answer: "JSX stands for JavaScript XML."
    },
    {
      question: "What is useState?",
      answer: "useState is a hook used to manage state."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {

    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }

  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Accordion FAQ</h1>

      {
        faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <h3
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer" }}
            >
              {faq.question}
            </h3>

            {
              activeIndex === index && (
                <p>{faq.answer}</p>
              )
            }

          </div>
        ))
      }

    </div>
  );
}

export default App;
```

import React, { useState } from "react";
import "./Quiz.css";
import { data } from "../../Assets/data";

function Quiz() {
  let [index, setIndex] = useState(2);
  let [question, setQuestion] = useState(data[index]);

  const checkAns = (e, ans) => {
    if (question.ans === ans) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("correct");
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}.{question.question}
      </h2>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
}

export default Quiz;

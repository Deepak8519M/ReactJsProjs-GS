import React, { useRef, useState, useEffect } from "react";
import "./Quiz.css";
import { data } from "../../Assets/data";
import { IoMdAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { MdOutlineRemove } from "react-icons/md";

function Quiz() {
  // Load data from localStorage or fallback to imported data
  // let [que, setQue] = useState(() => {
  //   const storedQuestions = localStorage.getItem("quizQuestions");
  //   return storedQuestions ? JSON.parse(storedQuestions) : data;
  // });
  let [que, setQue] = useState([]);
  let [question, setQuestion] = useState({});

  let [index, setIndex] = useState(0);
  // let [question, setQuestion] = useState(que[0]);

  let [removeQue, setRemoveQue] = useState(false);

  let [isAnime, setIsAnime] = useState(false);

  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [quizForm, setQuizForm] = useState(false);

  const [removeIndex, setRemoveIndex] = useState("");

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArray = [Option1, Option2, Option3, Option4];

  const [form, setForm] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  });

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        optionArray[question.ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === que.length - 1) {
        setResult(true);
        return;
      }
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(que[newIndex]);
      setLock(false);

      optionArray.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(que[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    optionArray.forEach((option) => {
      option.current.classList.remove("wrong");
      option.current.classList.remove("correct");
    });
    localStorage.removeItem("quizQuestions");
  };

  const handleAddQuestion = () => {
    if (
      !form.question ||
      !form.option1 ||
      !form.option2 ||
      !form.option3 ||
      !form.option4 ||
      form.ans < 1 ||
      form.ans > 4
    ) {
      alert("Please fill all fields and ensure the correct answer is between 1 and 4.");
      return;
    }

    const newQuestion = {
      question: form.question,
      option1: form.option1,
      option2: form.option2,
      option3: form.option3,
      option4: form.option4,
      ans: Number(form.ans),
    };

    const updatedQuestions = [...que, newQuestion];
    setQue(updatedQuestions);
    localStorage.setItem("quizQuestions", JSON.stringify(updatedQuestions)); // Save to localStorage

    setForm({ question: "", option1: "", option2: "", option3: "", option4: "", ans: 1 });
    setQuizForm(false);
    setIsAnime(true);
  };

  const handleRemoveByIndex = () => {
    const indexToRemove = parseInt(removeIndex) - 1;

    if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= que.length) {
      alert("Invalid question number.");
      return;
    }

    const updated = [...que];
    updated.splice(indexToRemove, 1);

    setQue(updated);
    localStorage.setItem("quizQuestions", JSON.stringify(updated));
    setRemoveIndex("");

    // Reset quiz state to avoid bugs
    setIndex(0);
    setQuestion(updated[0] || {});
    setScore(0);
    setResult(false);
    setLock(false);
    setRemoveQue(false);
  };

  useEffect(() => {
    const stored = localStorage.getItem("quizQuestions");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.length > 0) {
        setQue(parsed);
        setQuestion(parsed[0]);
      } else {
        // localStorage is empty array — fallback to original data
        setQue(data);
        setQuestion(data[0]);
        localStorage.setItem("quizQuestions", JSON.stringify(data));
      }
    } else {
      // localStorage has nothing — first time load
      setQue(data);
      setQuestion(data[0]);
      localStorage.setItem("quizQuestions", JSON.stringify(data));
    }
  }, []);

  return (
    <div className="container">
      {removeQue && (
        <div className="removeForm">
          <h3>Remove a Question by Number</h3>

          <input
            type="number"
            placeholder="Enter question number"
            value={removeIndex}
            onChange={(e) => setRemoveIndex(e.target.value)}
          />

          <button onClick={handleRemoveByIndex}>Remove</button>
        </div>
      )}
      <div onClick={() => setRemoveQue(!removeQue)} className="minus">
        <MdOutlineRemove />
      </div>
      {isAnime && <div className="popUP">Question Added Succesfully</div>}
      <div className="addBtn" onClick={() => setQuizForm(!quizForm)}>
        <IoMdAdd style={{ fontSize: "39px" }} />
      </div>

      {quizForm && (
        <div className="quizForm">
          <IoIosClose onClick={() => setQuizForm(false)} className="close" />
          <h2>Add Question Info</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="addQuestion">
              <label>Question ???</label>
              <input
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                className="question"
                type="text"
              />
            </div>

            <div className="options">
              <div className="option1">
                <label>Option 1</label>
                <input
                  type="text"
                  value={form.option1}
                  onChange={(e) => setForm({ ...form, option1: e.target.value })}
                />
              </div>
              <div className="option2">
                <label>Option 2</label>
                <input
                  type="text"
                  value={form.option2}
                  onChange={(e) => setForm({ ...form, option2: e.target.value })}
                />
              </div>
              <div className="option3">
                <label>Option 3</label>
                <input
                  type="text"
                  value={form.option3}
                  onChange={(e) => setForm({ ...form, option3: e.target.value })}
                />
              </div>
              <div className="option4">
                <label>Option 4</label>
                <input
                  type="text"
                  value={form.option4}
                  onChange={(e) => setForm({ ...form, option4: e.target.value })}
                />
              </div>
            </div>

            <div className="correctAns">
              <label>Correct Option</label>
              <input
                type="number"
                min="1"
                max="4"
                value={form.ans}
                onChange={(e) => setForm({ ...form, ans: Number(e.target.value) })}
                placeholder="fill option between 1 and 4"
              />
            </div>

            <button onClick={handleAddQuestion}>Add</button>
          </form>
        </div>
      )}

      <h1>Quiz App</h1>
      <hr />

      {result ? (
        <>
          <h2>
            You Scored {score} out of {que.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
              {question.option2}
            </li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
              {question.option3}
            </li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {que.length} questions
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;

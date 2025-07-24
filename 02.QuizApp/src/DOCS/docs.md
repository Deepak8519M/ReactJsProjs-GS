import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../Assets/data";
import { IoMdAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

function Quiz() {
  let [que, setQue] = useState(data);

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);

  let [lock, setLock] = useState(false);

  let [score, setScore] = useState(0);

  let [result, setResult] = useState(false);

  let [quizForm, setQuizForm] = useState(false);

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
    ans: 1, // default correct answer
  });

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionArray[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0; // return so that after cond true remaining statement not executed
      }

      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      optionArray.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[index]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question: form.question,
      option1: form.option1,
      option2: form.option2,
      option3: form.option3,
      option4: form.option4,
      ans: Number(form.ans),
    };

    setQue([...que, newQuestion]);

    setForm({ question: "", option1: "", option2: "", option3: "", option4: "", ans: 1 });
    setQuizForm(false);
  };

  return (
    <div className="container ">
      <div className="addBtn" onClick={() => setQuizForm(!quizForm)}>
        <IoMdAdd style={{ fontSize: "39px" }} />
      </div>
      {quizForm ? (
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
      ) : (
        <></>
      )}
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}.{question.question}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;


  // const next = () => {
  //   if (lock === true) {
  //     if (index === que.length - 1) {
  //       setResult(true);
  //       return 0; // return so that after cond true remaining statement not executed
  //     }

  //     setIndex(++index);
  //     setQuestion(que[index]);
  //     setLock(false);
  //     optionArray.map((option) => {
  //       option.current.classList.remove("wrong");
  //       option.current.classList.remove("correct");
  //       return null;
  //     });
  //   }
  // };

  ---

  Great question!

### ✅ `JSON.parse()` — What It Does:

`JSON.parse()` **converts a JSON string into a JavaScript object**.

---

### 🔁 Think of it like:

* You **stored** something in Local Storage using `.setItem()` — which **must** be a string.
* When you **get** it back using `.getItem()`, it's still a string.
* So you use `JSON.parse()` to convert that string **back into an object/array** that your code can use.

---

### 🔧 Example:

```js
// Imagine we store an array of questions:
const questions = [
  { question: "2+2", option1: "3", option2: "4", option3: "5", option4: "6", ans: 2 },
];

// Store in localStorage as a string
localStorage.setItem("quizData", JSON.stringify(questions));
```

Now when we want it back:

```js
const data = localStorage.getItem("quizData");
console.log(typeof data); // string

const parsedData = JSON.parse(data);
console.log(parsedData);      // original array back
console.log(typeof parsedData); // object
```

---

### 🧠 Why This Matters in Your Quiz App:

When you retrieve `quizQuestions` from localStorage:

```js
const storedQuestions = localStorage.getItem("quizQuestions");
```

You **must** parse it:

```js
JSON.parse(storedQuestions);
```

To use it as a normal JavaScript array (so you can `map`, `setState`, etc.).

---

To make your quiz questions persist even after page reloads using **Local Storage**, follow these steps:

---

### ✅ 1. **Store and Load Questions with Local Storage**

Update your component logic to:

* Load data from local storage if it exists.
* Save data to local storage every time a question is added.

---

### ✅ 2. **Apply These Changes in Your Code**

I'll update your code in the following way:

### 🔁 Replace this line:

```js
let [que, setQue] = useState(data);
```

### ✅ With this:

```js
let [que, setQue] = useState(() => {
  const storedQuestions = localStorage.getItem("quizQuestions");
  return storedQuestions ? JSON.parse(storedQuestions) : data;
});
```

This allows your app to:

* Load questions from local storage on first render.
* Fall back to default `data` if nothing exists.

---

### 💾 Save to Local Storage After Adding a Question

In the `handleAddQuestion` function, after updating the state, add this line:

```js
localStorage.setItem("quizQuestions", JSON.stringify([...que, newQuestion]));
```

So the **updated function** will be:

```js
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
  localStorage.setItem("quizQuestions", JSON.stringify(updatedQuestions));

  setForm({ question: "", option1: "", option2: "", option3: "", option4: "", ans: 1 });
  setQuizForm(false);
};
```

---

### 🔄 Optional: Add Reset for Local Storage Too

If you want to clear questions from localStorage during reset, update your `reset` function like this:

```js
const reset = () => {
  setIndex(0);
  setScore(0);
  setLock(false);
  setResult(false);
  setQuestion(que[0]);
};
```

Or if you want to fully reset back to the original `data`:

```js
const reset = () => {
  localStorage.removeItem("quizQuestions");
  setQue(data);
  setIndex(0);
  setQuestion(data[0]);
  setScore(0);
  setLock(false);
  setResult(false);
};
```

---

### ✅ Summary of What Changed:

| Feature                | Code                                     |   |         |
| ---------------------- | ---------------------------------------- | - | ------- |
| Load from localStorage | \`useState(() => JSON.parse(...)         |   | data)\` |
| Save to localStorage   | `localStorage.setItem(...)` after adding |   |         |
| Optional clear         | `localStorage.removeItem(...)` in reset  |   |         |

---


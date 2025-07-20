
# Quiz App 🧠

A simple and interactive Quiz App built with **React JS**. It dynamically renders questions and allows users to select answers with immediate feedback.

## 🚀 Features

- Loads questions from a data file
- Highlights correct and wrong answers instantly
- Uses `useRef` to manipulate DOM styles
- Keeps track of question index
- Modular and beginner-friendly code structure

## 📁 Project Structure

```

Quiz/
├── src/
│   ├── Assets/
│   │   └── data.js      # Contains the array of question data
│   ├── Components/
│   │   └── Quiz.js      # Main Quiz component logic
│   └── App.js
├── public/
└── README.md

````

## 📦 Installation
   
````bash

1. Clone this repository:

   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app

2. Install dependencies:

   npm install
   

3. Start the development server:

   npm start
   

## 🧠 Data Format (`data.js`)

```js
export const data = [
  {
    question: "What is the capital of India?",
    option1: "Mumbai",
    option2: "Delhi",
    option3: "Kolkata",
    option4: "Chennai",
    ans: 2, // index (1-based) of correct answer
  },
  ...
];
```

## 🛠️ Technologies Used

* React JS
* CSS
* JavaScript (ES6+)

## 📸 Screenshots

> *(Add screenshots here if available)*

## 🙌 Author

Made with ❤️ by \[Your Name]

---

Feel free to customize this README based on your actual folder names, deployment info, or project extensions.

```


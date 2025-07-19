# 🎮 Tic Tac Toe Game in React

A fun and simple **Tic Tac Toe** game built with **React**, featuring clean design and intuitive gameplay.

## ✨ Features

- Playable Tic Tac Toe board (3x3)
- Two-player local gameplay
- Win detection logic (rows, columns, diagonals)
- Game lock after a win
- Easy to customize and extend

## 🛠️ Tech Stack

- ⚛️ React (Functional Components + Hooks)
- 💅 Tailwind CSS or your preferred CSS
- ✅ Vanilla logic for win conditions

## 📂 Project Structure

```

src/
├── App.jsx         # Main app logic
├── Board.jsx       # Game board logic
├── index.css       # Styles
└── index.js        # Entry point

````

## 🚀 Getting Started

1. Clone the repo:

```bash
git clone https://github.com/your-username/tic-tac-toe-react.git
cd tic-tac-toe-react
````

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm run dev
```

> App runs at: `http://localhost:5173`

## 📸 Screenshot

![Tic Tac Toe Game Screenshot](./screenshot.png)

## ✅ How Win Detection Works

In `checkWin()`, we compare values of each winning combination:

```js
if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
  won(data);
}
```

If three cells match and are not empty, a win is declared!

## 🙌 Contributions

Pull requests are welcome! Feel free to fork and improve this game.

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

Enjoy the game! 😄

```



# 🎯 Tic Tac Toe Game in React

A sleek and fully functional **Tic Tac Toe** game made using **React**, built with clean structure and simple logic for local two-player fun!

## 🌟 Key Highlights

- 🔲 3x3 Tic Tac Toe board
- 👨‍👩‍👧 Two-player support
- 🧠 Win checking logic using basic conditions
- 🔒 Game locks after a win to prevent further clicks
- ✨ Simple, readable, and extendable codebase

---

## 🧩 How It Works

- Each click triggers a state update and alternates between "X" and "O".
- We use a `data` array to track board values.
- Win is detected by checking specific index combinations:
  
```js
if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
  won(data);
}
````

> The condition `data[i] !== ""` ensures empty cells are not counted as winning.

---

## 📁 Project Structure

```
src/
├── App.jsx        # Main component holding game logic
├── index.css      # Basic styling (Tailwind or custom)
└── main.jsx       # ReactDOM render logic
```

---

## ⚙️ Technologies Used

* ⚛️ React (Hooks + Functional Components)
* 🎨 Tailwind CSS (optional but makes UI nice)
* 🧠 Vanilla JS logic for game rules

---

## 🚀 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/tic-tac-toe-react.git
cd tic-tac-toe-react
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

> App runs on `http://localhost:5173`

## 📸 Screenshot

![Tic Tac Toe Game Screenshot](./TicTacToeRjs.png)

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

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ in React

```


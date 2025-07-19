You're totally right to wonder that — **you *did* give a space**, so let’s clarify **why it still doesn't show up**.

---

### 🔍 Here's what you wrote:

```jsx
<h1 className="title">
  Tic Tac Toe Game in <span>React</span>
</h1>
```

It looks like there **is a space after "in"** — so why does it render as `inReact`?

---

### ✅ Answer:

Even though you *visually* wrote a space after `"in"`, in **JSX**, the way whitespace is handled is a little different.

#### JSX treats:

* **Spaces between text and JSX tags** as **insignificant** unless there's **text between them**.
* JSX **does not auto-merge** spaces when rendering.

So JSX treats this:

```jsx
"Tic Tac Toe Game in" <span>React</span>
```

as:

* one text node: `"Tic Tac Toe Game in"`
* and one span element: `<span>React</span>`

But it does **not insert any space** between them automatically.

---

### ✅ Fix:

To make the space show up, you need to **explicitly add the space** **inside the text**, **or as a separate space character node**.

#### Option 1 – Add space inside the string:

```jsx
"Tic Tac Toe Game in "  // Notice space *inside* the string
```

```jsx
<h1 className="title">
  Tic Tac Toe Game in <span>React</span>
</h1>
```

This works **only if there's a literal space before the `<span>`**.

---

#### Option 2 – Add `{" "}` (JSX space)

This is the **safest and cleanest** way:

```jsx
<h1 className="title">
  Tic Tac Toe Game in{" "}<span>React</span>
</h1>
```

* `{" "}` tells JSX to **render an actual space character** between the two.

---

### ✅ Final Working Example:

```jsx
<h1 className="title">
  Tic Tac Toe Game in{" "}
  <span>React</span>
</h1>
```

✔️ Output: `Tic Tac Toe Game in React` (with proper space)

---

Great question!

You asked:

> **Why do we need to write `data[2] !== ""` (or similar conditions) when checking for a win?**

Let’s explain in **simple steps**.

---

### ✅ The Line:

```js
if (data[0] === data[1] && data[1] === data[2] && data[2] !== "")
```

This checks if:

1. All 3 positions (`0`, `1`, and `2`) have the **same value**
2. That value is **not an empty string**

---

### 🧠 Why `data[2] !== ""` is Needed:

Without it, this would also count as a **win**:

```js
data = ["", "", ""]   // All equal, but **empty**
```

And this would wrongly trigger a win:

```js
data[0] === data[1] === data[2]  // true
```

But there's **no actual move made yet** — it's just 3 empty cells. That’s not a win.

---

### ✅ So we add `data[2] !== ""` to ensure:

* The matching values are **either `"X"` or `"O"`**
* Not just 3 empty cells

---

### 🔄 Example Comparison:

| `data`            | Condition Match | `data[2] !== ""` | Is it a Win? |
| ----------------- | --------------- | ---------------- | ------------ |
| `["X", "X", "X"]` | ✅               | ✅                | ✅ YES        |
| `["", "", ""]`    | ✅               | ❌                | ❌ NO         |
| `["O", "O", "O"]` | ✅               | ✅                | ✅ YES        |
| `["X", "X", ""]`  | ❌               | ❌                | ❌ NO         |

---

### ✅ Final Thoughts:

We use `data[2] !== ""` to **prevent false wins** when the board is still empty or partially filled.

It's a **simple but critical check** for proper Tic Tac Toe logic.

---

Great follow-up question! Let's explain this **clearly and deeply**:

---

## 🔥 Short Answer:

> **Because when you keep `let data = [...]` *inside* the component, React resets it every time the component re-renders.**

So the `data` array **does not persist** — and **loses all previous updates**, like moves or win-check conditions.

---

## 🧠 Why It Happens:

In React functional components:

```js
function TicTacToe() {
  let data = [...]; // ← This line runs every render
}
```

This `let data = [...]` runs **fresh on every render** — meaning:

* Every time `setCount()` is called,
* React **re-runs** your component from top to bottom,
* Which means it **re-creates a new array**, wiping out the old one.

So any updates you made to `data[num] = "x"` are lost immediately when React re-renders the component.

---

## ✅ Solution: Make the array **persistent** by storing it using:

### Option 1: `useRef`

```js
const dataRef = useRef(["", "", "", "", "", "", "", "", ""]);
```

* This **creates a persistent object** whose value stays the same across re-renders.
* The value is stored in `dataRef.current`
* Updating it does **not trigger re-render**, but it **preserves** the state.

### Option 2: `useState`

```js
const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
```

* This will **persist across re-renders**,
* But every time you update, it **causes a re-render** (good if you want the UI to update with data).

---

## 🔄 Real Example:

### ❌ Bad (what you're doing now):

```js
let data = ["", "", "", "", "", "", "", "", ""];
```

* On every re-render: data becomes `["", "", "", "", "", "", "", "", ""]` again
* You lose the stored board
* `checkWin()` sees empty array again → win logic fails
* `lock` seems like it's not working because `data[num]` is empty again

---

### ✅ Good (with `useRef`):

```js
const dataRef = useRef(["", "", "", "", "", "", "", "", ""]);

function toggle(e, num) {
  if (lock) return;
  if (dataRef.current[num] !== "") return;

  if (count % 2 === 0) {
    e.target.innerHTML = `<img src=${cross_icon} />`;
    dataRef.current[num] = "x";
  } else {
    e.target.innerHTML = `<img src=${circle_icon} />`;
    dataRef.current[num] = "o";
  }

  setCount((prev) => prev + 1);
  checkWin();
}
```

---

## ✅ Summary:

| Where `data` is declared    | What happens?                           |
| --------------------------- | --------------------------------------- |
| Inside component with `let` | ❌ Gets reset on every render            |
| `useRef`                    | ✅ Persists across renders, no re-render |
| `useState`                  | ✅ Persists + re-renders on update       |

---



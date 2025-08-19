import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, done: false }];
    case "toggle":
      return state.map((todo, i) =>
        i === action.index ? { ...todo, done: !todo.done } : todo
      );
    case "remove":
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
}

function UseReducerPage() {
  const [todos, dispatch] = useReducer(reducer, []);
  let input;

  return (
    <div>
      <h2>useReducer - Todo List</h2>
      <input ref={(node) => (input = node)} />
      <button onClick={() => { dispatch({ type: "add", text: input.value }); input.value = ""; }}>Tambah</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i} style={{ textDecoration: todo.done ? "line-through" : "" }}>
            {todo.text}
            <button onClick={() => dispatch({ type: "toggle", index: i })}>Selesai</button>
            <button onClick={() => dispatch({ type: "remove", index: i })}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UseReducerPage;

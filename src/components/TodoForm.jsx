import React, { useState, useEffect, useRef } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        id="toto-input"
        className="todo-input"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      {edit ? (
        <button className="todo-button edit">Update</button>
      ) : (
        <button className="todo-button">Add Todo</button>
      )}
    </form>
  );
}

export default TodoForm;

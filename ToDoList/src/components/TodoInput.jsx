import React, { useState } from "react";

function TodoInput({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;

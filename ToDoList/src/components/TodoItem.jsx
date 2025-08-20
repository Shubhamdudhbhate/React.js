import React from "react";

function TodoItem({ task, index, deleteTask, toggleComplete }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleComplete(index)}>✔</button>
        <button className="delete-btn" onClick={() => deleteTask(index)}>✖</button>
      </div>
    </li>
  );
}

export default TodoItem;

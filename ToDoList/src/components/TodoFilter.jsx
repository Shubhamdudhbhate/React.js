import React from "react";

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="filter-section">
      {["all", "completed", "pending"].map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;

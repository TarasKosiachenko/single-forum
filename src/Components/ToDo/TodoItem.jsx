import React from "react";
import "./index.css";

const TodoItem = ({ id, text, completed, todoCompleted, removeTodo}) => {
  return (
    <li className="todo_item mb-3">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => todoCompleted(id)}
      />
      <span className="todo_text">{text}</span>
      <span className="todo_delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;

import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, todoCompleted } from "../../store/todoSlice";

import "./index.css";

const TodoItem = ({ id, text, completed }) => {
const dispatch = useDispatch()

  return (
    <li className="todo_item mb-3">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(todoCompleted({id}))}
      />
      <span className="todo_text">{text}</span>
      <span className="todo_delete" onClick={() => dispatch(removeTodo({id}))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;

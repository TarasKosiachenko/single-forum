import { React, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

import "./index.css";
import { Container } from "react-bootstrap";

import TodoItem from "./TodoItem";
import InputField from "./InputField";

export default function TodoList() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <Container className="text-center">
      <InputField text={text} handleSubmit={addTask} handleInput={setText} />

      <ul className="ps-0 mt-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </Container>
  );
}

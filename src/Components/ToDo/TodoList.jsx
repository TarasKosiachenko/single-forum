import { React, useState } from "react";
import "./index.css";
import { Container} from "react-bootstrap";
import TodoItem from './TodoItem';
import InputField from './InputField'

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const todoCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <Container className="text-center">
      <InputField handleSubmit={addTodo} handleInput={setText}/>

      <ul className="ps-0 mt-3">
        {
        todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} todoCompleted={todoCompleted}/>
        ))
        }
      </ul>
    </Container>
  );
}
import { React, useState } from "react";
import "./index.css";
import { Container, Button, Form } from "react-bootstrap";

export default function ToDoList() {
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

  return (
    <Container className="text-center">
      <Form.Group className="d-flex mt-3">
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
          className="me-3"
        />
        <Button
          className="btn-sm"
          variant="outline-dark"
          onMouseDown={(e) => e.preventDefault()}
          onClick={addTodo}
        >
          Add
        </Button>
      </Form.Group>

      <ul className="ps-0 mt-3">
        {todos.map((todo) => (
          <li className="todo_item mb-3" key={todo.id}>
            <input type="checkbox" />
            <span className="todo_text">{todo.text}</span>
            <span style={{ color: "red" }}>&times;</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

import React from 'react';
import { Button, Form } from "react-bootstrap";

function InputField({ text, handleInput, handleSubmit }) {
  return (
    <Form.Group className="d-flex mt-3">
        <Form.Control
          value={text}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Enter todo"
          className="me-3"
        />
        <Button
          className="btn-sm"
          variant="outline-dark"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Form.Group>
  );
}

export default InputField;
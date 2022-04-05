import React from "react";
import { Button, Form } from "react-bootstrap";

function InputForm({ functionality, value, setValue }) {
  //handeling submit and passing value/state to function addTodo (in parent)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    functionality.addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button className="form-btn" variant="outline-primary mb-3" type="submit">
        Submit
      </Button>
      <span className="btn-space" />
      <Button
        className="form-btn"
        onClick={() => functionality.resetTodos()}
        variant="outline-primary mb-3"
        type="button"
      >
        Reset
      </Button>
    </Form>
  );
}

export default InputForm;

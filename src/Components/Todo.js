import React from "react";
import { Button } from "react-bootstrap";

function Todo({ todo, index, functionality }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          variant="outline-success"
          onClick={() => functionality.markTodo(index)}
        >
          ✓
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => functionality.removeTodo(index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}
export default Todo;

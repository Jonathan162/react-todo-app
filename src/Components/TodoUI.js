import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./InputForm.js";
import Todo from "./Todo.js";

function TodoUI() {
  //state for getting the input value
  const [value, setValue] = useState("");
  //state for adding input value to an array of objects
  const [todos, setTodos] = useState([
    {
      text: "This is how a todo looks!",
      isDone: false,
    },
  ]);

  const functionality = {
    addTodo(text) {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    },
    markTodo(index) {
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
    },
    removeTodo(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    },
    resetTodos() {
      let newTodos = [...todos];
      newTodos = [];
      setTodos(newTodos);
    },
  };
  return (
    <div className="container">
      <InputForm
        value={value}
        setValue={setValue}
        functionality={functionality}
      />
      <div>
        {todos.map((todo, index) => (
          <Card>
            <Card.Body>
              <Todo
                key={index}
                index={index}
                todo={todo}
                functionality={functionality}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TodoUI;

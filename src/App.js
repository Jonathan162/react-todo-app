import React from "react";
import "./App.css";
import TodoUI from "./Components/TodoUI.js";
import Header from "./Components/Header.js";

function App() {
  return (
    <div className="app">
      <Header />
      <TodoUI />
    </div>
  );
}

export default App;

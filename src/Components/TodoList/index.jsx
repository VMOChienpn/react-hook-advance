import React from "react";
import "./main.scss";
import AddTodo from "./Components/AddTodo.jsx";
import ListTodo from "./Components/ListTodo";

function TodoList() {
  return (
    <div className="todolist--group">
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default TodoList;

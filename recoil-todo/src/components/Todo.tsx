import React from "react";
import { IToDo } from "./CreateTodo";

const Todo = ({ text }: IToDo) => {
  return (
    <li>
      <span>{text}</span>
      <button>Done</button>
      <button>To do</button>
      <button>Doing</button>
    </li>
  );
};

export default Todo;

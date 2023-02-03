import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import CreateTodo from "./CreateTodo";

const ToDoList = () => {

  return (
    <div>
      <CreateTodo/>
      <ul>
        {todo.map((item) => (
          <li>
            <div>{item.id}</div>
            <div>{item.text}</div>
            <div>{item.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};  

export default ToDoList;
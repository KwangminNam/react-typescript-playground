import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import CreateTodo from "./CreateTodo";
import ToDoUl from "./ToDoUl";

const ToDoList = () => {

  return (
    <div>
      <CreateTodo />
      <ToDoUl/>
    </div>
  );
};

export default ToDoList;
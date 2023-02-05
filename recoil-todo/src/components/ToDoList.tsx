import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import CreateTodo from "./CreateTodo";

const ToDoList = () => {

  return (
    <div>
      <CreateTodo/>
    </div>
  );
};  

export default ToDoList;
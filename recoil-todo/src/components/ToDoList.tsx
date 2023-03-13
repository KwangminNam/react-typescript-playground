import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelecor, toDostate } from "../atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const ToDoList = () => {
  const selectorOutput = useRecoilValue(toDoSelecor);
  const [toDo, doing , done] = useRecoilValue(toDoSelecor);
  

  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
  }

  return (
    <>
      <h1>Todo</h1> 
      <hr />
      <hr />
      <CreateTodo />
    <select onChange={onInput}>
      <option value="TO_DO">TO do</option>
      <option value="DOING">DOing</option>
      <option value="DONE">DONE</option>
    </select>
    </>
  );
};

export default ToDoList;

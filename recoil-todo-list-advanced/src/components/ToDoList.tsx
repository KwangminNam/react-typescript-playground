import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelecor, toDostate } from "../atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const ToDoList = () => {
  const selectorOutput = useRecoilValue(toDoSelecor);
  const toDos = useRecoilValue(toDoSelecor);
  const [categroy, setCateogry] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCateogry(event.currentTarget.value);
  };

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
      {toDos?.map(item => <Todo key={item.id} {...item}/>)}
    </>
  );
};

export default ToDoList;

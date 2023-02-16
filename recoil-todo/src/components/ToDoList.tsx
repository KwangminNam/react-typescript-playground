import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelecor, toDostate } from "../atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const ToDoList = () => {
  const todo = useRecoilValue(toDostate);
  const selectorOutput = useRecoilValue(toDoSelecor);
  console.log(selectorOutput)

  return (
    <>
      <h1>Todo</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todo.map((item) => {
          return <Todo key={item.id} {...item}/>;
        })}
      </ul>
    </>
  );
};

export default ToDoList;

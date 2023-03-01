import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelecor, toDostate } from "../atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const ToDoList = () => {
  const [todo,doing,done] = useRecoilValue(toDoSelecor);
  const selectorOutput = useRecoilValue(toDoSelecor);
  console.log(selectorOutput)

  return (
    <>
      <h1>Todo</h1>
      <hr />
      <hr />
      <CreateTodo />
      <ul>
        {todo.map((item) => {
          return <Todo key={item.id} {...item}/>;
        })}
      </ul>
      <hr />
      <hr />
      <h2>Doing</h2>
      {doing.map((item)=>{
        return <Todo key={item.id} {...item}/>
      })}
      <hr />
      <hr />
      <h3>Done</h3>
      {done.map((item)=>{
        return <Todo key={item.id} {...item}/>
      })}
    </>
  );
};

export default ToDoList;

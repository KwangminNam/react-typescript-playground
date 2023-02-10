import React from "react";
import { IToDo } from "./CreateTodo";

const Todo = ({ text , category}: IToDo) => {

  const onC = (e:IToDo['category']) => {
    console.log(e);
  }

  return (
    <li>
      <span>{text}</span>
      {category !== 'DONE' && <button onClick={()=>{onC('DONE')}}>Done</button>}
      {category !== 'DOING' && <button onClick={()=>{onC('DOING')}}>DOING</button>}
      {category !== 'TO_DO' && <button onClick={()=>{onC('TO_DO')}}>TO_DO</button>}
    </li>
  );
};

export default Todo;

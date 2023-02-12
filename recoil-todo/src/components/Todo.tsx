import React from "react";
import { IToDo } from "./CreateTodo";
import { atom, useRecoilState } from "recoil";
import { toDostate } from "../atom";

const Todo = ({ text, category ,id }: IToDo) => {

  const [todo , setTodo ] = useRecoilState(toDostate);
  
  const onC2 = (e:React.MouseEvent<HTMLButtonElement>) => {

    const {
      currentTarget:{name}
    } = e;

    setTodo((prev)=>{

      const targetIndex = prev.findIndex((item) => item.id === id);
      const oldTodos = prev[targetIndex];
      const neewTodos = { text , id , category:name};

      console.log(oldTodos , neewTodos);

      return prev;
    })
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DONE" && (
        <button
          name="DONE"
          onClick={onC2}
        >
          Done
        </button>
      )}
      {category !== "DOING" && (
        <button
          name="DOING"
          onClick={onC2}
        >
          DOING
        </button>
      )}
      {category !== "TO_DO" && (
        <button
          name="TO_DO"
          onClick={onC2}
        >
          TO_DO
        </button>
      )}
    </li>
  );
};

export default Todo;

import React from "react";
import { IToDo } from "./CreateTodo";

const Todo = ({ text, category }: IToDo) => {
  const onC = (e: IToDo["category"]) => {
    console.log(e);
  };

  const onC2 = (e:React.MouseEvent<HTMLButtonElement>) => {

    const {
      currentTarget:{name}
    } = e;

    console.log(name);
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

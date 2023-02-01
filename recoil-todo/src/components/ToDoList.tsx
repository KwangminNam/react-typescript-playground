import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IToDo {
  id:number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

interface IForm {
  todo: string;
}

const toDostate = atom<IToDo[]>({
  key: "todo",
  default: []
});

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [todo, setToDo] = useRecoilState(toDostate);

  const onValid = ({ todo }: IForm) => {
    console.log(todo);
    setValue("todo", "");
    setToDo((prev) => [{ id: Date.now(), text: todo, category: "DOING" }, ...prev]);
  };

  console.log(todo);
  console.log("123123");

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <h1>to dos</h1>
        <hr />
        <input
          type="text"
          {...register("todo", {
            required: "required!"
          })}
        />
        <button>submit</button>
      </form>
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

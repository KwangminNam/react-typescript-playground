import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

export interface IToDo {
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

const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [todo, setToDo] = useRecoilState(toDostate);

  const onValid = ({ todo }: IForm) => {
    setValue("todo", "");
    setToDo((prev) => [{ id: Date.now(), text: todo, category: "TO_DO" }, ...prev]);
  };
  return (
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
  );
};

export default CreateTodo;
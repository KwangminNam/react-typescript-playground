import { atom, selector } from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

// atom added api.
export const toDostate = atom<IToDo[]>({
  key: "todo",
  default: []
});

// recoil selector ..

export const toDoSelecor = selector({
  key: "toDoselector",
  get: ({ get }) => {
    const todo = get(toDostate);
    return [
      todo.filter((item) => item.category === "TO_DO"),
      todo.filter((item) => item.category === "DOING"),
      todo.filter((item) => item.category === "DONE"),
    ];
  }
});

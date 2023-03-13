import { atom, selector } from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key:"category",
  default:"TO_DO",
})

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
    const category = get(categoryState);
    if(category === 'TO_DO') return todo.filter((item) => item.category === "TO_DO")
    if(category === 'DOING') return todo.filter((item) => item.category === "DOING")
    if(category === 'DONE') return todo.filter((item) => item.category === "DONE")
    return [
      todo.filter((item) => item.category === "TO_DO"),
      todo.filter((item) => item.category === "DOING"),
      todo.filter((item) => item.category === "DONE"),
    ];
  }
});

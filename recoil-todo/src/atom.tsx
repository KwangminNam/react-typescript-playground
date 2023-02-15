import {atom} from 'recoil'

interface IToDo {
  id:number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

// atom added api.
export const toDostate = atom<IToDo[]>({
  key: "todo",
  default: []
});
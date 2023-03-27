import { atom , selector } from 'recoil'

interface TodoType {
  [key:string]:string[];
}

export const todoSate = atom<TodoType>({
  key:"toDo",
  default:{
    to_do: ['one','two','three','four','five'],
    doing: ['six','seven'],
    done:['eight','nine','ten']
  }
})
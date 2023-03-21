import { atom , selector } from 'recoil'

export const todoSate = atom({
  key:"toDo",
  default:['one','two','three','four','five'],
})
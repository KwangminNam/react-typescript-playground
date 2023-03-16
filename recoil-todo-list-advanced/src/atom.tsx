import { atom, selector } from "recoil";

export const minuteState = atom({
  key:"minutes",
  default:0,
})

export const hourSelector = selector({
  key:"houts",
  get:({get})=>{
    const mins =  get(minuteState);
    return mins / 60;
  }
})
import { atom, selector } from "recoil";

export const minuteState = atom({
  key:"minutes",
  default:0,
})

export const hourSelector = selector<number>({
  key:"houts",
  get:({get})=>{
    const mins =  get(minuteState);
    return mins / 60;
  },
  set:({set},newValue)=>{
    const mins = Number(newValue) * 60;
    set(minuteState , mins)
  }
})
import axios from "axios";
import { atom, selector } from "recoil";

export const cartState = atom({
  key:"cartState",
  default:[]
})

export const getProduct = selector({
  key:'Products',
  get: async () => {
    try{
      const res = await axios.get('https://fakestoreapi.com/products');
      return res.data || [];
    }catch(error){
      console.log(error);
      return [];
    }
  }
})

export const cartTotalState = selector({
  key:'Total',
  get:({get}) => {
    const cart = get(cartState);
    console.log(typeof cart);
    console.log(Array.isArray(cart))
    const total = cart.reduce((prev,curr) => prev + curr.price, 0);
    return {
      total
    }
  }
})
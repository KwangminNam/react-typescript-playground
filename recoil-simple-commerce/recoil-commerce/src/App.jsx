import React from 'react'
import FakeProduct from './components/FakeProduct'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, cartTotalState, getProduct } from './atom';
import Basket from './components/Basket';


export default function App() {
  const [cart , setCart] = useRecoilState(cartState);
  const [{total},setTotal] = useRecoilState(cartTotalState);
  const dummyProduct = useRecoilValue(getProduct);
  console.log(cart);

  console.log(dummyProduct);

  const addCartItem = (prodcutId) => {
    setCart((cart) => {
      const isProductInCart = cart.some((item) => item.id === prodcutId);
      const findproduct = dummyProduct.find(item => item.id === prodcutId);
      console.log(findproduct);
      // const findProduct = dummyProduct.find
      return isProductInCart ? cart : [...cart, findproduct ];
      
    });
  };
  const removeItem = (prductId) => {
    setCart((cart)=>{
      return cart.filter(item => item.id !== prductId);
    })
  }
  console.log(cart);

  return (
    <div>
      <React.Suspense fallback={<div>Loading..</div>}>
        <FakeProduct dummyProduct={dummyProduct} addCartItem={addCartItem}/>
      </React.Suspense>
      <div className="floatcart">
        <Basket total={total} setCart={setTotal} products={cart} removeItem={removeItem}/>
      </div>
    </div>
  )
}

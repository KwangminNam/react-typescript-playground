import React from 'react'
import FakeProduct from './components/FakeProduct'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, cartTotalState, getProduct } from './atom';
import Basket from './components/Basket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';


export default function App() {
  const [cart, setCart] = useRecoilState(cartState);
  const [{ total }, setTotal] = useRecoilState(cartTotalState);
  const dummyProduct = useRecoilValue(getProduct);
  console.log(cart);

  console.log(dummyProduct);

  const addCartItem = (prodcutId) => {
    setCart((cart) => {
      const isProductInCart = cart.some((item) => item.id === prodcutId);
      const findproduct = dummyProduct.find(item => item.id === prodcutId);
      console.log(findproduct);
      // const findProduct = dummyProduct.find
      return isProductInCart ? cart : [...cart, findproduct];

    });
  };
  const removeItem = (prductId) => {
    setCart((cart) => {
      return cart.filter(item => item.id !== prductId);
    })
  }
  console.log(cart);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <React.Suspense fallback={<div>Loading..</div>}>
              <FakeProduct dummyProduct={dummyProduct} addCartItem={addCartItem} />
              <div className="floatcart">
                <Basket total={total} setCart={setTotal} products={cart} removeItem={removeItem} />
              </div>
            </React.Suspense>}
          />
          <Route path='/:productId/*' element={<Detail allProdcut={dummyProduct} />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

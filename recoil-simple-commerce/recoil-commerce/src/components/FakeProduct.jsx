import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, getProduct } from '../atom'

export default function FakeProduct({dummyProduct,addCartItem}) {



  console.log(dummyProduct);
  return (
    <div className='l-flex'>
      <div className="l-fg3">
        {dummyProduct.map((item)=>(
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h2>{item.title}</h2>
              <h5>{item.category}</h5>
              <p>{item.description}</p>
              <h5>${item.price}</h5>
              <button onClick={()=>addCartItem(item.id)}>장바구니 추가</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

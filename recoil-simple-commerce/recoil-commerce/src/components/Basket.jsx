import React from 'react'

export default function Basket({products,removeItem,total}) {

  console.log(products);
  console.log(removeItem);
  console.log(total);

  return (
    <>
      <div className='title'>상품 총 갯수{!total.length ? "0" : total.length}</div>
      
      <div className="basket">
        {!products.length ? "상품 없음" : products.map((item)=>(
          <p key={item.id} style={{display:'flex'}}>
            {item.title} {item.price}
            <img src={item.image} alt=""  style={{width:'50px' ,height:'50px'}}/>
            <button onClick={()=>{removeItem(item.id)}}>REMOVE</button>
          </p>
        ))}
      </div>
      <div className="total">
        TOTAL:{total}
      </div>
    </>
    
  )
}

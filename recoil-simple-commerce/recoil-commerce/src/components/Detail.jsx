import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Detail({ allProdcut }) {

  const { productId } = useParams();
  const { state } = useLocation();

  console.log(state);

  const detailData = allProdcut.find(item => item.id === +productId);


  return (
    <div style={{ width: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{detailData.title}</h1>
      <div >
        <img style={{ width: '250px', height: '250px' }} src={state} alt="" />
      </div>
      <h2>${detailData.price}</h2>
      <div>
        {detailData.description}
      </div>
    </div>
  )
}

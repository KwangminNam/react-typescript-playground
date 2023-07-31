import React from 'react'

export default function JoinButton({age}) {
  return (
    <div>
      <button disabled={age < 19}>가입</button>
      {age < 19 ? <h1 style={{color:'red'}}>성인만 가입가능</h1> : <h1 style={{color:'black'}}>가입가능</h1>}
    </div>
  )
}

import React from 'react'

export default function MyPage() {
  return (
    <div>
      <label htmlFor="name">이름</label>
      <input type="text" id='name' />
      <div data-testid='mydiv'/>
      <label htmlFor="desc">내용</label>
      <textarea id='desc'></textarea>
    </div>
  )
}

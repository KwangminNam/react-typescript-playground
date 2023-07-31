import React, { useEffect, useState } from 'react'

export default function UserList({ users }) {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500)
  }, [])

  return (
    <>
      {show && <h1>Hello</h1>}
      <ul>
        {users.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

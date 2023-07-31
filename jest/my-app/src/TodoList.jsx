import React, { useEffect, useState } from 'react'

export default function TodoList() {

  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const res = await data.json();
        setTodoList(res);
      } catch (error) {
        setError('에러 발생..');
      }
    }
    getData();
  }, [])

  return (
    <>
      <h1>Todo</h1>
      {error ?  <p>{error}</p>:
      <ul>
        {todoList.map(item => (
          <li style={{
            color: item.completed ? 'red' : null
          }} key={item.id}>{item.title}</li>
        ))}
      </ul>}
    </>
  )
}

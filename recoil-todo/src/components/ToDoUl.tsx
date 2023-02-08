import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { toDostate } from '../atom';

const ToDoUl = () => {

  const [todo, setTodo] = useRecoilState(toDostate);
  const [complete, setComplete] = useState(todo.forEach(item => item.category));

  const del = (e: number) => {
    const delData = todo.filter(item => item.id !== e);
    setTodo(delData);
  }


  return (
    <ul>
      {todo.map((item) => {
        return (<li>
          <input type="checkbox" value={item.category}/>
          <div>{item.category}</div>
          {item.text} <button type='button' onClick={() => { del(item.id) }}>Delete</button>
        </li>)
      })}
    </ul>
  );
};

export default ToDoUl;
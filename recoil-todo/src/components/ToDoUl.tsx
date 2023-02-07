import React from 'react';
import {useRecoilState} from 'recoil';
import { toDostate } from '../atom';

const ToDoUl = () => {

  const [todo , setTodo] = useRecoilState(toDostate);
  
  const del = (e:any) => {
    const delData = todo.filter(item => item.id !== e);
    setTodo(delData);
  }

  return (
    <ul>
      {todo.map((item)=>{
        return <li>{item.text} <button type='button' onClick={()=>{del(item.id)}}>Delete</button></li>
      })}
    </ul>
  );
};

export default ToDoUl;
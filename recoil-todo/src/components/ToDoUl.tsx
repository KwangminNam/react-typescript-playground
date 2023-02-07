import React from 'react';
import {useRecoilState} from 'recoil';
import { toDostate } from '../atom';

const ToDoUl = () => {

  const [todo , setTodo] = useRecoilState(toDostate);

  return (
    <ul>
      {todo.map((item)=>{
        return <li>{item.text}</li>
      })}
    </ul>
  );
};

export default ToDoUl;
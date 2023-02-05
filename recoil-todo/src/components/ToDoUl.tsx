import React from 'react';

const ToDoUl = () => {
  return (
    <ul>
    {todo.map((item) => (
      <li>
        <div>{item.id}</div>
        <div>{item.text}</div>
        <div>{item.category}</div>
      </li>
    ))}
  </ul>
  );
};

export default ToDoUl;
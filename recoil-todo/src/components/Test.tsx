import React, { useState } from "react";

const CreateTodo = () => {
  // TODO: Display the value that checked input radio'svalue
  const [value, setValue] = useState([
    {
      name: "kwangmin",
      n: "g",
      check: true
    },
    {
      name: "minah",
      n: "g",
      check: false
    }
  ]);

  const [name ,setNmae ]= useState('kwangmin');

  const onSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = value.map((item) => {
      if (item.name === e.target.value) {
        item.check = true;
        setNmae(e.target.value);
      } else {
        item.check = false;
      }
      return item;
    });
    setValue(newValue);
  };

  return (
    <div>
      <h1 style={{fontSize:"50px"}}>{name}</h1>
      {value.map((item, idx) => {
        return (
          <>
            <label key={idx} htmlFor={item.name}>
              {item.name}
            </label>
            <input
              type="radio"
              checked={item.check}
              value={item.name}
              name={item.n}
              id={item.name}
              onChange={onSet}
            />
          </>
        );
      })}
    </div>
  );
};

export default CreateTodo;

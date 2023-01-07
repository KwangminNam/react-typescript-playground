import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";

const App = () => {
  const [vlaue, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget:{value} } = e;
    setValue(value);
  };

  const onSumbit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello'+vlaue);
  }

  return (
    <form onSubmit={onSumbit}>
      <input type="text" value={vlaue} onChange={onChange} />
      <button>click</button>
    </form>
  );
};

export default App;

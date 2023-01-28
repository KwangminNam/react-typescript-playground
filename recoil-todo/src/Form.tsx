import React, { useState } from 'react';

const Form = () => {

  const [input , setInput] = useState("");

  const onChange = (event:any) => {
    setInput(event.target.value)
  }

  const submit = (e:any) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <form onSubmit={submit}>
      <input type="text" value={input}  onChange={onChange}/>
      <button>submit</button>
    </form>
  );
};

export default Form;
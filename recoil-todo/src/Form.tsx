import React, { useState } from 'react';

const Form = () => {

  const [input , setInput] = useState("");
  const [error, setError] = useState("");

  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget :{value}} = event;
    setInput(value);
    setError("");
  }

  const submit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(input.length < 10){
      return setError('should be longer');
    }
    console.log('correct!')
  }



  return (
    <form onSubmit={submit}>
      <input type="text" value={input}  onChange={onChange}/>
      <button>submit</button>
      {error !== "" ? error : null}
    </form>
  );
};

export default Form;
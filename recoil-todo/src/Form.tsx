import React, { useState } from 'react';
import {useForm} from 'react-hook-form'

// const Form = () => {

//   const [input , setInput] = useState("");
//   const [error, setError] = useState("");

//   const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//     const {currentTarget :{value}} = event;
//     setInput(value);
//     setError("");
//   }

//   const submit = (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if(input.length < 10){
//       return setError('should be longer');
//     }
//     console.log('correct!')
//   }



//   return (
//     <form onSubmit={submit}>
//       <input type="text" value={input}  onChange={onChange}/>
//       <button>submit</button>
//       {error !== "" ? error : null}
//     </form>
//   );
// };

const Form = () => {

  const {register,watch} = useForm();

  console.log(watch());
  console.log(register('userName'));

  return (
    <>
      <form>
        <input {...register('userName')} type="text"/>
        <input {...register('password')} type="text"/>
        <input {...register('passwordConfirmation')} type="text"/>
        <input {...register('userEmail')} type="text"/>
        <input {...register('userAge')} type="text"/>
      </form>
    </>
  )
}

export default Form;
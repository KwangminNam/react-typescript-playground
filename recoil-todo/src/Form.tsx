import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit , formState} = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(register("password"));

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("userName", { required:"your input is too short" , minLength:{value:5,message:"your password is too short"}})} type="text" />
        <input {...register("password" , { required: true , minLength:{value:5,message:"your pass word is to shoorrt"}})} type="text" />
        <input {...register("passwordConfirmation" , {required:true , minLength:10})} type="text" />
        <input {...register("userEmail" , {required:true , minLength:10})} type="text" />
        <input {...register("userAge" , {required:true , minLength:10})} type="text" />
        <button>add</button>

      </form>
    </>
  );
};

export default Form;

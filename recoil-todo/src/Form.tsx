import React from 'react';
import {useForm} from 'react-hook-form';

const Form = () => {

  const {register , handleSubmit , setValue} = useForm();

  const onValid = (data:any) =>{
    console.log(data);
    // setValue('todo',"");
  }

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input type="text" {...register('todo',{
        required:"required!"
      })} />
      <button>submit</button>
    </form>
  );
};

export default Form;
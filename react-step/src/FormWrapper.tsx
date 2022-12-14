import React, { ReactNode } from 'react';

interface FormWrapperProps{
  title:string
  children:ReactNode
}

const FormWrapper = ({title,children}:FormWrapperProps) => {
  return (
    <div
      style={{
        display:"flex",
        flexDirection:"column"
      }}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default FormWrapper;
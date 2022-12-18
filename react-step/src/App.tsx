import React, { FormEvent, useState } from 'react';
import { useMultieStep } from './useMultieStep';
import UserForm from './UserForm';
import AddressForm from './AddressForm';
import AccountForm from './AccountForm';

const App = () => {


  interface INITType{
    firstName:string,
    lastName:string,
    age:string,
    street:string,
    city:string,
    state:string,
    eamil:string,
    password:string,
    zip:string
  }
  
  const INIT_DAT:INITType = {
    firstName:"",
    lastName:"",
    age:"",
    street:"",
    city:"",
    state:"",
    eamil:"",
    password:"",
    zip:""
  }

  const [data, setData] = useState(INIT_DAT);
  
  function updateFields(field:Partial<INITType>){
    setData(prev => {
      return { ...prev , ...field}
    })
  }

  const {   
    currentStepIndex,
    step,
    next,
    back,
    steps,
    isFirstStep,
    isLastStep,
    goTo} = useMultieStep([
      <UserForm
        {...data}
        updateFields={updateFields}
      />,
      <AddressForm
        {...data}
        updateFields={updateFields}
      />,
      <AccountForm/>
    ])
 
  function onSubmit(e:FormEvent){
    e.preventDefault();
    next();
  }
  return (
    <div style={{
      position:"relative",
      background:"white",
      border:"1px solid black",
      padding:"2rem",
      margin:"1rem",
      borderRadius:".5rem"
    }}>
      <form onSubmit={onSubmit}>
        <div style={{
          position:"absolute",
          top:".5rem",
          right:"5rem"
        }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop:"1rem"
        }}>
           {!isFirstStep && <button type='button' onClick={back}>Prev</button>}
           {<button type='submit'>
            {isLastStep ? "Done!" : "Next"}
           </button>}
           {/* <button type='button' onClick={()=>{goTo(currentStepIndex)}}></button> */}
        </div>
      </form>
    </div>
  );
};

export default App;
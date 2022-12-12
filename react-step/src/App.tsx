import React from 'react';
import { useMultieStep } from './useMultieStep';

const App = () => {

  const {   
    currentStepIndex,
    step,
    next,
    back,
    steps,
    isFirstStep,
    isLastStep,
    goTo} = useMultieStep([
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
    ])

  return (
    <div style={{
      position:"relative",
      background:"white",
      border:"1px solid black",
      padding:"2rem",
      margin:"1rem",
      borderRadius:".5rem"
    }}>
      <form action="#">
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
           {<button type='button' onClick={next}>
            {isLastStep ? "Done!" : "Next"}
           </button>}
        </div>
      </form>
    </div>
  );
};

export default App;
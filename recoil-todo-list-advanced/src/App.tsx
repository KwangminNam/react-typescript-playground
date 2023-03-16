import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atom";


const App = () => {

  const [minutes,setMinutes] = useRecoilState(minuteState);
  const [hours , setHours] = useRecoilState(hourSelector);
  const onMinChange = (e:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  }
  const onHoursChange = (e:React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  }


  console.log(hours);

  return (
      <div>
        <input value={minutes} onChange={onMinChange} type="number" placeholder="Min" />
        <input value={hours} onChange={onHoursChange} type="number" placeholder="Hour" />
      </div>
  );
};

export default App;

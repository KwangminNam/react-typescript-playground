import React from 'react';
import { useOutletContext } from 'react-router-dom';

interface INameUserProps {
  nameUser:string
}

const Followers = () => {
  const {nameUser} = useOutletContext<INameUserProps>();

  return (
    <h1>
      This is {nameUser} 의 follwers
    </h1>
  );
};

export default Followers;
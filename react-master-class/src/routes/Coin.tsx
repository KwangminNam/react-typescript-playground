import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Header } from './Coins';

interface RouteState{
  state:string;
}

const Coin = () => {

  const {coinId} = useParams();
  const {state} = useLocation() as RouteState;

  return (
    <div>
      <Header>
        <Link to='/'>Home</Link>
      </Header>
      {state}
      
    </div>
  );
};

export default Coin;
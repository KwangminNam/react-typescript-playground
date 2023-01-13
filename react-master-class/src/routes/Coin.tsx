import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from './Coins';

const Coin = () => {

  const {coinId} = useParams();


  return (
    <div>
      <Header>
        <Link to='/'>Home</Link>
      </Header>
      coin {coinId}
      
    </div>
  );
};

export default Coin;
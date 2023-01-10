import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from './db';

const Users = () => {

  const {userId} = useParams();
  console.log(userId)
  return (
    <h1>
      The id is {userId} and {users[Number(userId) - 1].name}
    </h1>
  );
};

export default Users;
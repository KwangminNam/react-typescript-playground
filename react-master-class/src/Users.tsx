import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./db";

const Users = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      <h1>
        The ID is {userId} {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to='follwers'>See followers</Link>
      <Outlet context={{
        nameUser:users[Number(userId) - 1].name
      }}/>
    </div>
  );
};

export default Users;

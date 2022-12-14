import React from 'react';
import FormWrapper from './FormWrapper';

type UserData = {
  firstName:string,
  lastName:string,
  age:string,
}

type UpdateProps = UserData & {
  updateFields:(fields:Partial<UserData>) => void
}

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields}
  :UpdateProps) => {
  return (
    <FormWrapper
      title='User Form'
    >
        <label>First name</label>
        <input 
          type="text"
          value={firstName} 
          autoFocus
          required
          onChange={ e =>updateFields({firstName:e.target.value})}
        />
        <label>Last name</label>
        <input type="text" value={lastName} required  onChange={ e =>updateFields({lastName:e.target.value})} />
        <label>Age</label>
        <input type="number" value={age}  min={1} required   onChange={ e =>updateFields({age:e.target.value})}/>
    </FormWrapper>
  );
};

export default UserForm;
import React from 'react';
import FormWrapper from './FormWrapper';

const UserForm = () => {
  return (
    <FormWrapper
      title='User Form'
    >
        <label>First name</label>
        <input type="text" autoFocus required />
        <label>Last name</label>
        <input type="text" required />
        <label>Age</label>
        <input type="number" min={1} required />
    </FormWrapper>
  );
};

export default UserForm;
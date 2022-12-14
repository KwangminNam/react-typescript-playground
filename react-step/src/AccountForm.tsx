import React from 'react';
import FormWrapper from './FormWrapper'

const AccountForm = () => {
  return (
    <FormWrapper
      title='Account Form'
    >
        <label>Email</label>
        <input type="email" autoFocus required />
        <label>Password</label>
        <input type="password" required />
    </FormWrapper>
  );
};

export default AccountForm;
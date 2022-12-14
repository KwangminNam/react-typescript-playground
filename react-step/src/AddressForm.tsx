import React from 'react';
import FormWrapper from './FormWrapper'

const AddressForm = () => {
  return (
    <FormWrapper
      title='Address Form'
    >
        <label>Street</label>
        <input type="text" autoFocus required />
        <label>City</label>
        <input type="text" required />
        <label>State</label>
        <input type="text" required />
        <label>ZipCode</label>
        <input type="text" required />
    </FormWrapper>
  );
};

export default AddressForm;
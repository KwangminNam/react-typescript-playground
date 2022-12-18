import React from "react";
import FormWrapper from "./FormWrapper";

type AddressType = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type UpdateProps = AddressType & {
  updateFields: (fields: Partial<AddressType>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields
}: UpdateProps) => {
  return (
    <FormWrapper title="Address Form">
      <label>Street</label>
      <input
        type="text"
        value={street}
        onChange={(e) => {
          updateFields({ street: e.target.value });
        }}
        autoFocus
        required
      />
      <label>City</label>
      <input
        type="text"
        value={city}
        onChange={(e) => {
          updateFields({ city: e.target.value });
        }}
        required
      />
      <label>State</label>
      <input
        type="text"
        required
        value={state}
        onChange={(e) => {
          updateFields({ state: e.target.value });
        }}
      />
      <label>ZipCode</label>
      <input
        type="text"
        value={zip}
        onChange={(e) => {
          updateFields({ zip: e.target.value });
        }}
        required
      />
    </FormWrapper>
  );
};

export default AddressForm;

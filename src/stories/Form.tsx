import React, { useState } from 'react';
import { FormInput, FormContainer } from './form.styles'

interface FormProps {
  placeholder?: string;
}

export const Form: React.FC<FormProps> = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormContainer>
      <FormInput
        type="text"
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </FormContainer>
  );
};

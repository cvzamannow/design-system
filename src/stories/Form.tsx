import React, { useState } from 'react';
import './Form.css';

interface FormProps {
  placeholder?: string;
}

export const Form: React.FC<FormProps> = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

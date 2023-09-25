import React, { useState } from "react";
import { FormInput, FormComponent, LabelForm } from "./form.styles";

interface FormProps {
  label?: string;

  placeholder?: string;
}

/**
 * Primary UI component for user interaction
 */
const Form: React.FC<FormProps> = ({ label, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormComponent>
      <LabelForm>{label}</LabelForm>
      <FormInput type="text" className="form-input" placeholder={placeholder} value={value} onChange={handleChange} />
    </FormComponent>
  );
};

export default Form;
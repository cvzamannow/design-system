import React, { useState } from "react";
import { FormInput, FormComponent, LabelForm } from "./form.styles";
import FontPoppins from "../assets/font/Poppins";

interface FormProps {
  label?: string;

  placeholder?: string;
}

const Form: React.FC<FormProps> = ({ label, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FontPoppins />
      <FormComponent>
        <LabelForm>{label}</LabelForm>
        <FormInput type="text" className="form-input" placeholder={placeholder} value={value} onChange={handleChange} />
      </FormComponent>
    </>
  );
};

export default Form;
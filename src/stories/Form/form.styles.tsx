import styled from 'styled-components';

// Form component
export const FormComponent = styled.form`
  
`;


// FormInput component
export const FormInput = styled.input`
  font-family: 'poppins', sans-serif;
  color: #6B7280;
  background-color: #F3F4F6;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #E5E7EB;
  border-radius: 5px;
  outline: none;
  width: 300px;
  transition: box-shadow 0.4s; /* Add transition property */

  &:focus {
    border: 3px solid #065f4673;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

// Label FormInput
export const LabelForm = styled.label`
  font-family: 'poppins', sans-serif;
  display: block;
  margin-bottom: 2px;
  color: #6B7280;
`;


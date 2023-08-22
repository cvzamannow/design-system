import styled from 'styled-components';

// FormInput component
export const FormInput = styled.input`
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

// FormContainer component
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

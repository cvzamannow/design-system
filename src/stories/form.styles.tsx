import styled from 'styled-components';

// Komponen FormInput
export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 300px;

  /* Ganti warna border menjadi hijau saat form dalam fokus */
  &:focus {
    border: 3px solid #065f4673;
  }
`;

// Komponen FormContainer
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

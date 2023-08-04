import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  /* CSS styling untuk kelas "storybook-button" */
  &.storybook-button {
    /* Gaya umum untuk tombol */
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  /* Gaya untuk ukuran tombol medium */
  &.storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  /* Gaya untuk ukuran tombol medium */
  &.storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  /* Gaya untuk ukuran tombol medium */
  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }

  /* Gaya untuk tombol primer (primary) */
  &.storybook-button--primary {
    color: white;
    background-color: #FFA824;
  }

  /* Gaya untuk tombol sekunder (secondary) */
  &.storybook-button--secondary {
    color: #fff;
    background-color: transparent;
    box-shadow: rgba(255, 254, 254, 0.445) 0px 0px 0px 1px inset;
  }

  /* Tambahkan gaya lain jika diperlukan */
`;

export default ButtonStyled;
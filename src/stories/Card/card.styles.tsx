import styled from 'styled-components';

const CardStyled = styled.div`
  /* CSS styling untuk kelas "storybook-button" */
  &.storybook-card {
    /* Gaya umum untuk tombol */
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #D9D9D9;
    color: #0000008a;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    transition: background-color 0.3s, box-shadow 0.5s; /* Add transition property */
  }

  &.storybook-card--CardDefault {
    background-color: #D9D9D9;
    width: 193px;
    height: 306px;
  }

  &.storybook-card--CardHover {
    background-color: #D1D5DB;
    width: 193px;
    height: 306px;

    &:hover {
      color: #09342B;
      background-color: #fbbe24cb;
    }
  }

  /* Tambahkan gaya lain jika diperlukan */
`;

export default CardStyled;

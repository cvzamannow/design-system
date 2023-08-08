import styled from 'styled-components';

const CardStyled = styled.div`
  /* CSS styling for the "storybook-card" class */
  &.storybook-card {
    /* General style for cards */
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
  }

  &.storybook-card--CardHover {
    background-color: #D1D5DB;

    &:hover {
      color: #09342B;
      background-color: #fbbe24cb;
    }
  }

  /* Add another style if needed */
`;

export default CardStyled;

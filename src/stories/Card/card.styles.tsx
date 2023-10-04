import styled from 'styled-components';

const CardStyled = styled.div`
  /* CSS styling for the "storybook-card" class */
  &.storybook-card {
    /* General style for cards */
    transition: background-color 0.3s, box-shadow 0.5s; /* Add transition property */
  }

  &.storybook-card--CardDefault {
    /*  */
  }

  &.storybook-card--CardHover {
    background-color: #f2f2f2;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 165, 0, 0);
      transition: background-color 0.3s ease;
    }
    

    &:hover::after {
      background-color: rgba(255, 165, 0, 0.5); /* Warna oranye transparan */
    }
  }

  /* Add another style if needed */
`;

export default CardStyled;



export const ContentText = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #D1D5DB;

  p {
    font-family: 'poppins', sans-serif;
    color: #000000b8;
    margin: auto;
  }

`;

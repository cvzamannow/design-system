import styled from 'styled-components';


export const DisplayContent = styled.div`
  display: inline-block;
`;

const ButtonStyled = styled.button`
  /* CSS styling for the "storybook-button" class */
  &.storybook-button {
    /* General style for Button */
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    border: 0;
    border-radius: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    transition: background-color 0.3s, box-shadow 0.3s; /* Add transition property */
  }


  /* Style for medium button size */
  &.storybook-button--medium {
    font-size: 18px;
    padding: 18px 16px;
  }

  /* Style for the primary button */
  &.storybook-button--primary {
    color: white;
    background-color: #FFA824;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Style for the secondary button */
  &.storybook-button--secondary {
    color: #FFA824;
    background-color: transparent;
    box-shadow: rgb(255, 167, 36) 0px 0px 0px 1.5px inset;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Style form the nol button */
  &.storybook-button--nolo {
    color: white;
    background-color: transparent;
    box-shadow:  0px 0px 0px 1px inset;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Style form the nol button */
  &.storybook-button--text {
    color: white;
    background-color: transparent;
    font-weight: 400;

    &:hover {
      opacity: 0.8;
    }
  }
  /* Add another style if needed */
`;

export default ButtonStyled;

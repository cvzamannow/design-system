import styled from 'styled-components';

const LabelStyled = styled.button`
  /* CSS styling for the "storybook-button" class */
  &.storybook-button {
    /* General style for Button */
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    transition: background-color 0.3s, box-shadow 0.3s; /* Add transition property */
  }

  /* Style for small button size */
  &.storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  /* Style for medium button size */
  &.storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  /* Style for large button size */
  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
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
    box-shadow: rgba(255, 168, 36, 0.445) 0px 0px 0px 1px inset;

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
  /* Add another style if needed */
`;

export default LabelStyled;

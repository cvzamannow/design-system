import styled from 'styled-components';

const BoxStyled = styled.div`
  /* CSS styling for the "storybook-box-shadow" class */
  &.storybook-box {
    /* General style for box */
    transition: background-color 0.3s, box-shadow 0.5s; /* Add transition property */
  }


  /* Style for box shadow base */
  &.storybook-box--base {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  /* Style for box shadow Md */
  &.storybook-box--Md {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  /* Style for box shadow Lg */
  &.storybook-box--Lg {
    box-shadow: rgba(136, 165, 191, 0.509) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  /* Style for box shadow xl */
  &.storybook-box--xl {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  /* Style for box shadow xxl */
  &.storybook-box--xxl {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }

  /* Style for box shadow Inner */
  &.storybook-box--Inner {
    box-shadow: rgba(0, 0, 0, 0.061) 0px 4px 12px 0px inset;
  }

  /* Add another style if needed */
`;

export default BoxStyled;

// content in box shadow
export const ContentShadow = styled.div`
  background-color: transparent;
  width: 200px;
  height: 200px;
  border: 0;
  display: flex;
  align-items: center;

  p {
    margin: auto;
    color: #0000008a;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  
`;

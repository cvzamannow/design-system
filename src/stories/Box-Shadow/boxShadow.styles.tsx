import styled from 'styled-components';

const Boxstyled = styled.div`
  /* CSS styling untuk kelas "storybook-button" */
  &.storybook-box {
    /* Gaya umum untuk tombol */
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: white;
    color: #0000008a;
    font-weight: 700;
    width: 200px;
    height: 200px;
    border: 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    transition: background-color 0.3s, box-shadow 0.5s; /* Add transition property */
  }


  /* Gaya untuk box shadow base */
  &.storybook-box--base {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  /* Gaya untuk box shadow Md */
  &.storybook-box--Md {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  /* Gaya untuk box shadow Lg */
  &.storybook-box--Lg {
    box-shadow: rgba(136, 165, 191, 0.509) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  /* Gaya untuk box shadow xl */
  &.storybook-box--xl {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  &.storybook-box--xxl {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }

  &.storybook-box--Inner {
    box-shadow: rgba(0, 0, 0, 0.061) 0px 4px 12px 0px inset;
  }

  /* Tambahkan gaya lain jika diperlukan */
`;

export default Boxstyled;

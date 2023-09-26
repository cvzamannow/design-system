import styled from 'styled-components';

const StorybookHeader = styled.div`
  border-bottom: 1px solid #9CA3AF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0D4A3E;
  color: white;
  width: 100%;
  padding: 0 120px;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 768px) {
      width: 95%;
      margin: auto;
      padding: 0;
  }

  svg {
    display: inline-block;
    vertical-align: top;
  }

  .text-logo {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    margin: 9px 0 6px 2px;
    display: inline-block;
    vertical-align: center;
    font-family: poppins, sans-serif;
  }

  button + button {
    margin-left: 10px;
    margin-right: 20px;
  }

  .welcome {
    color: white;
    font-size: 14px;
    margin-right: 10px;
    font-family: poppins, sans-serif; /* Menggunakan font-family yang telah Anda definisikan */
  }

  .menu {
    margin-left: 0px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .menu ul {
    font-weight: 500;
    margin: 0px 0px;
    font-size: 18px;
    margin-left: 0px;
    list-style: none;
    display: flex;
  }

  .menu li {
    display: flex;
    align-items: center;
    /* background-color: #9CA3AF; */
    height: 90px;
    margin-right: 30px;
    font-family: poppins, sans-serif; /* Menggunakan font-family yang telah Anda definisikan */
  }

  .menu .active {
    border-bottom: solid 4px #FFA824;
    margin-bottom: -1px;
  }

`;

export default StorybookHeader;

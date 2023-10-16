import styled from 'styled-components';

export const HeaderNav = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #0D4A3E;
`;

const StorybookHeader = styled.div`
  font-family: 'poppins', sans-serif;
  border-bottom: 1px solid #9CA3AF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0 120px;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 768px) {
      width: 100%;
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
    font-family: 'poppins', sans-serif;
  }

  button + button {
    margin-left: 10px;
    margin-right: 20px;
  }

  .menuItems {
    font-family: 'poppins', sans-serif;
    margin-left: 0px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .menuItems ul {
    margin: 0px 0px;
    font-size: 18px;
    margin-left: 0px;
    list-style: none;
    display: flex;
  }

  .menuItems li {
    display: flex;
    align-items: center;
    height: 90px;
    margin-right: 30px;
    font-weight: 400;
    font-family: 'poppins', sans-serif; 
  }

  .active {
    font-weight: 500;
    border-bottom: solid 4px #FFA824;
    margin-bottom: -1px;
  }

`;

export default StorybookHeader;

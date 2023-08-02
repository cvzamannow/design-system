import styled from 'styled-components';

const StorybookHeader = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0D4A3E;
  color: white;


  svg {
    display: inline-block;
    vertical-align: top;
  }

  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    margin: 9px 0 6px 2px;
    display: inline-block;
    vertical-align: center;
  }

  button + button {
    margin-left: 10px;
  }

  .welcome {
    color: white;
    font-size: 14px;
    margin-right: 10px;
  }
`;

export default StorybookHeader;
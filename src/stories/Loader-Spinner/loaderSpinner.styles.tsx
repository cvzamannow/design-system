import styled, { keyframes } from 'styled-components';

export const ContainerLoader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 96vh;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin: auto;
  width: 48px;
  height: 48px;
  border: 3px solid #047857;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #fbbf24 transparent;
  }
`;
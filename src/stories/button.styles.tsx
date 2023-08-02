import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${(props) =>
    props.primary
      ? css`
          color: white;
          background-color: #FFA824;
        `
      : css`
          color: #fff;
          background-color: transparent;
          box-shadow: rgba(255, 254, 254, 0.445) 0px 0px 0px 1px inset;
        `}

  ${(props) =>
    props.size === 'small'
      ? css`
          font-size: 12px;
          padding: 10px 16px;
        `
      : props.size === 'medium'
      ? css`
          font-size: 14px;
          padding: 11px 20px;
        `
      : css`
          font-size: 16px;
          padding: 12px 24px;
        `}
`;

export default Button;

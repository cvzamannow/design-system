import FontPoppins from "../assets/font/Poppins";
import ButtonStyled, { DisplayContent } from "./button.styles";

export interface ButtonProps {
  children?: "ReactNode";
  /**
   * Is this the principal call to action on the page?
   */
  ButtonType?: "primary" | "secondary" | "nolo" | "text";
  /**
   * Additional style
   */
  style?: React.CSSProperties;
  /**
   * How large should the button be?
   */
  size?: "medium";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ children, ButtonType = "primary", size = "medium", style, label, ...props }: ButtonProps) => {
  const mode = `storybook-button--${ButtonType}`;
  return (
    <>
      <FontPoppins />
      <DisplayContent>
        <ButtonStyled type="button" data-testid={`button-size-${size}`} className={["storybook-button", `storybook-button--${size}`, mode].join(" ")} style={style}  {...props}>
          {children}
          {label}
        </ButtonStyled>
      </DisplayContent>
    </>
  );
};

export default Button;
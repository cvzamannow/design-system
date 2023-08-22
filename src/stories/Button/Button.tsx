import ButtonStyled from "./button.styles";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  ButtonType?: "primary" | "secondary" | "nolo";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
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
export const Button = ({ ButtonType = "primary", size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
  const mode = `storybook-button--${ButtonType}`;
  return (
    <ButtonStyled type="button" data-testid={`button-size-${size}`} className={["storybook-button", `storybook-button--${size}`, mode].join(" ")} style={{ backgroundColor }} {...props}>
      {label}
    </ButtonStyled>
  );
};

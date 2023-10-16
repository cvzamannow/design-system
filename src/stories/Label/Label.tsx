import FontPoppins from "../assets/font/Poppins";
import LabelStyled from "./label.styles";

interface LabelProps {
  /**
   * How large should the Label be?
   */
  size?: "extraSmall" | "small" | "normal" | "medium" | "large";
  /**
   * contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
const Label = ({ size = "normal", label, ...props }: LabelProps) => {
  return (
    <>
      <FontPoppins />
      <LabelStyled data-testid={`label-size-${size}`} className={["storybook-label", `storybook-label--${size}`].join(" ")} {...props}>
        {label}
      </LabelStyled>
    </>
  );
};

export default Label;
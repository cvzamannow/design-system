import TextStyled from "./Text.styles";

interface TextProps {
  /**
   * How large should the Label be?
   */
  size?: "preview" | "extraSmall" | "small" | "normal" | "medium" | "large";
  /**
   * contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
const Text = ({ size = "normal", label, ...props }: TextProps) => {
  return (
    <TextStyled data-testid={`label-size-${size}`} className={["storybook-label", `storybook-label--${size}`].join(" ")} {...props}>
      {label}
    </TextStyled>
  );
};

export default Text;
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
  /**
   * additional style
   */
  style?: React.CSSProperties;
}

/**
 * Primary UI component for user interaction
 */
const Text = ({ size = "normal", label, style, ...props }: TextProps) => {
  return (
    <TextStyled data-testid={`label-size-${size}`} className={["storybook-label", `storybook-label--${size}`].join(" ")} style={style} {...props}>
      {label}
    </TextStyled>
  );
};

export default Text;
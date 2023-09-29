import BoxStyled from "./boxShadow.styles";

interface BoxProps {
  content: JSX.Element[];
  /**
   * How shadow should the box be?
   */
  shadow?: "preview" | "base" | "Md" | "Lg" | "xl" | "xxl" | "Inner";
}

/**
 * Primary UI component for user interaction
 */
const BoxShadow = ({ shadow = "base", content, ...props }: BoxProps) => {
  return (
    <BoxStyled data-testid={`shadow-${shadow}`} className={["storybook-box", `storybook-box--${shadow}`].join(" ")} {...props}>
      {content}
    </BoxStyled>
  );
};

export default BoxShadow;

import BoxStyled from "./boxShadow.styles";

interface BoxProps {
  /**
   * How shadow should the box be?
   */
  shadow?: "base" | "Md" | "Lg" | "xl" | "xxl" | "Inner";
}

/**
 * Primary UI component for user interaction
 */
const BoxShadow = ({ shadow = "base", ...props }: BoxProps) => {
  const getShadowLabel = (shadow: BoxProps["shadow"]) => {
    switch (shadow) {
      case "Md":
        return "Md";
      case "Lg":
        return "Lg";
      case "xl":
        return "xl";
      case "xxl":
        return "xxl";
      case "Inner":
        return "Inner";
      case "base":
      default:
        return "base";
    }
  };

const shadowLabel = getShadowLabel(shadow);

  return (
    <BoxStyled data-testid={`shadow-${shadow}`} className={["storybook-box", `storybook-box--${shadow}`].join(" ")} {...props}>
      {shadowLabel}
    </BoxStyled>
  );
};

export default BoxShadow;

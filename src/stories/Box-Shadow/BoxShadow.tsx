import BoxStyled from "./boxShadow.styles";

interface BoxProps {
  /**
   * How shadow should the box be?
   */
  shadow?: "base" | "Md" | "Lg" | "xl" | "xxl" | "Inner";
  /**
   * contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const BoxShadow = ({ shadow = "base", label, ...props }: BoxProps) => {
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
    <BoxStyled className={["storybook-box", `storybook-box--${shadow}`].join(" ")} {...props}>
      {shadowLabel}
    </BoxStyled>
  );
};

import FontPoppins from "../assets/font/Poppins";
import TextStyled from "./Text.styles";

interface TextProps {
  /**
   * How large should the Text be?
   */
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "b1" | "b2" | "b3" | "c1" | "c2";
  /**
   * 
   */
  type?: "regular" | "medium" | "semiBold" | "bold" ;
  /**
   * contents
   */
  text: string;
  /**
   * additional style
   */
  style?: React.CSSProperties;
}

/**
 * Primary UI component for user interaction
 */
const Text = ({ size, type= "regular", text, style, ...props }: TextProps) => {
  return (
    <>
      <FontPoppins />
      <TextStyled data-testid={`text-size-${size}`} className={["storybook-text", `storybook-text--${size}`, `storybook-text--${type}`].join(" ")} style={style} {...props}>
        {text}
      </TextStyled>
    </>
  );
};

export default Text;
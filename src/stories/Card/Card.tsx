import FontPoppins from "../assets/font/Poppins";
import CardStyled from "./card.styles";

interface CardProps {
  /**
   * How should the Card be?
   */
  card?: "CardDefault" | "CardHover" ;

  content?: JSX.Element[];

  style?: React.CSSProperties; // added a style property to set the height and width of the card
}

/**
 * Primary UI component for user interaction
 */
const Card = ({ card = "CardDefault", content, style, ...props }: CardProps) => {

  return (
    <> 
      <FontPoppins />
      <CardStyled data-testid={`card-${card}`} className={["storybook-card", `storybook-card--${card}`].join(" ")}  style={style} {...props}>
        {content}
      </CardStyled>
    </>
  );
};

export default Card;

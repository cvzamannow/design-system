import CardStyled from "./card.styles";

interface CardProps {
  /**
   * How should the Card be?
   */
  card?: "CardDefault" | "CardHover" ;
  /**
   * contents
   */
  label: string;

  style?: React.CSSProperties; // added a style property to set the height and width of the card
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({ card = "CardDefault", label, style, ...props }: CardProps) => {
  const getCardLabel = (card: CardProps["card"]) => {
    switch (card) {
      case "CardHover":
        return "Card Hover";
      case "CardDefault":
      default:
        return "Card Default";
    }
  };

  const cardLabel = getCardLabel(card);

  return (
    <CardStyled className={["storybook-card", `storybook-card--${card}`].join(" ")} style={style} {...props}>
      {cardLabel}
    </CardStyled>
  );
};

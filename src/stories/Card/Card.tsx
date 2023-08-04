import CardStyled from "./card.styles";

interface CardProps {
  /**
   * How shadow should the box be?
   */
  card?: "CardDefault" | "CardHover" ;
  /**
   * contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({ card = "CardDefault", label, ...props }: CardProps) => {
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
    <CardStyled className={["storybook-card", `storybook-card--${card}`].join(" ")} {...props}>
      {cardLabel}
    </CardStyled>
  );
};

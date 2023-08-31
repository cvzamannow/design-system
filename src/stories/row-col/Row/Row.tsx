import CardStyled from "../../Card/card.styles";
import RowStyled from "./row.styles";

interface RowProps {
  /**
   * Add a style property to set the card's height and width
   */
  style?: React.CSSProperties; 
}

const Row = ({ style }: RowProps) => {
  return (

      <RowStyled className="storybook-row" style={style}>
        <CardStyled className={["storybook-card", `storybook-card--CardHover`].join(" ")} style={{ height: "200px", width: "200px" }}>
          Sample
        </CardStyled>
        <CardStyled className={["storybook-card", `storybook-card--CardHover`].join(" ")} style={{ height: "200px", width: "200px" }}>
          Sample
        </CardStyled>
        <CardStyled className={["storybook-card", `storybook-card--CardHover`].join(" ")} style={{ height: "200px", width: "200px" }}>
          Sample
        </CardStyled>
      </RowStyled>
  );
};

export default Row;
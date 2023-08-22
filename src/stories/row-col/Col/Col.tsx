import CardStyled from "../../Card/card.styles";
import ColStyled from "./col.styles";

interface ColProps {
  /**
   * Add a style property to set the card's height and width
   */
  style?: React.CSSProperties; 
}

export const Col = ({ style }: ColProps) => {
  return (

    
      <ColStyled className="storybook-col" style={style}>
        <CardStyled className={["storybook-card", `storybook-card--CardHover`].join(" ")} style={{ height: "200px", width: "200px" }}>
          Sample
        </CardStyled>
        <CardStyled className={["storybook-card", `storybook-card--CardHover`].join(" ")} style={{ height: "200px", width: "200px" }}>
          Sample
        </CardStyled>
        <CardStyled className={["storybook-card", `storybook-card--CardHover`].join(" ")} style={{ height: "200px", width: "200px" }}>
          Sample
        </CardStyled>
      </ColStyled>
  );
};

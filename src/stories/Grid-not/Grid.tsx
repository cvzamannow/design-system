import React from "react";
import { StyledGrid, GridProps, ContainerGrid } from "./grid.styles";
import CardStyled from "../Card-not/card.styles";

const Grid: React.FC<GridProps> = ({ columns, gap, cardCount }) => {
  const cardItems = Array.from({ length: cardCount }, (_, index) => index + 1);

  return (
    <ContainerGrid>
      <StyledGrid columns={columns} gap={gap} cardCount={8}>
        {cardItems.map((item) => (
          <CardStyled key={item} className={["storybook-card", `storybook-card--CardHover`].join(" ")} style={{ height: "200px", width: "200px" }}>
            {item}
          </CardStyled>
        ))}
      </StyledGrid>
    </ContainerGrid>
  );
};

export default Grid;

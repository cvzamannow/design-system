import React from "react";
import { StyledGrid, GridProps } from "./grid.styles";



const Grid: React.FC<GridProps> = ({ items, columns, gap }) => {
  return (
      <StyledGrid items={items} columns={columns} gap={gap}>
        {items.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </StyledGrid>
  );
};

export default Grid;
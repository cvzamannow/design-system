import React from "react";
import { StyledContainer, ContainerProps } from "./container.styles";



const Grid: React.FC<ContainerProps> = ({ items, columns, gap }) => {
  return (
      <StyledContainer items={items} columns={columns} gap={gap}>
        {items.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </StyledContainer>
  );
};

export default Grid;
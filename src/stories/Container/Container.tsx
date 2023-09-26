import React from "react";
import { StyledContainer, ContainerProps } from "./container.styles";



const Container: React.FC<ContainerProps> = ({ Contents }) => {
  return (
      <StyledContainer data-testid={`container`} Contents={Contents}>
        {Contents}
      </StyledContainer>
  );
};

export default Container;
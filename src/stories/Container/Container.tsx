import React from "react";
import { StyledContainer, ContainerProps } from "./container.styles";



const Container: React.FC<ContainerProps> = ({ Contents }) => {
  return (
      <StyledContainer Contents={Contents}>
        {Contents}
      </StyledContainer>
  );
};

export default Container;
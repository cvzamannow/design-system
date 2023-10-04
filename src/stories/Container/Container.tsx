import React from "react";
import { StyledContainer, ContainerProps, BodyContainer } from "./container.styles";
import FontPoppins from "../assets/font/Poppins";



const Container: React.FC<ContainerProps> = ({ Contents }) => {
  return (
    <>
      <FontPoppins />
      <BodyContainer>
        <StyledContainer data-testid={`container`} Contents={Contents}>
          {Contents}
        </StyledContainer>
      </BodyContainer>
    </>
  );
};

export default Container;
import styled from 'styled-components';

export interface ContainerProps {
    /**
     * Content in the container
    */
    Contents: JSX.Element[];
}

export const StyledContainer = styled.div<ContainerProps>`
    display: flex;
    margin: 0 80px 0 80px;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    font-size: 40px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    align-items: center;
    color: #000000b6;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffa724a4;
    height: 50vh;
`;
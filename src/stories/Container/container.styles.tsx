import styled from 'styled-components';

export interface ContainerProps {
    /**
     * Content in the container
    */
    Contents: JSX.Element[];
}

export const BodyContainer = styled.div`
    width: 100%;
`;

export const StyledContainer = styled.div<ContainerProps>`
    padding: 0 120px;
    max-width: 1440px;
    margin: auto;
    @media screen and (max-width: 768px) {
        width: 95%;
        margin: auto;
        padding: 0;
    }
`;

export const ContentContainer = styled.div`
    font-size: 40px;
    font-family: 'poppins', sans-serif;
    align-items: center;
    color: #000000b6;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffa724a4;
    height: 50vh;
`;
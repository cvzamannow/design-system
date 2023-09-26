import styled from 'styled-components';

export interface GridProps {
  columns: number;
  /**
   * Because gap is still a new feature so some browsers don't support it, then (gap optional).
   */
  gap: string;
  cardCount: number;
}

export const StyledGrid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.columns}, 0fr)`};
    grid-gap: ${(props) => props.gap};
`;

export const ContainerGrid = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`
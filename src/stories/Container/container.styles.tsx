import styled from 'styled-components';

export interface ContainerProps {
  items: JSX.Element[];
  columns: number;
  /**
   * Because gap is still a new feature so some browsers don't support it, then (gap optional).
   */
  gap: string;
}

export const StyledContainer = styled.div<ContainerProps>` 
    display: block;
`;
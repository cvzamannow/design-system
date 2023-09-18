import RowStyled from "./row.styles";

interface RowProps {
  items?: JSX.Element[];
  /**
   * Because gap is still a new feature so some browsers don't support it, then (gap optional).
   */
  style?: React.CSSProperties;
}

const Row = ({ style, items }: RowProps) => {
  return (
    <RowStyled className="storybook-row" style={style}>
      {items}
    </RowStyled>
  );
};

export default Row;

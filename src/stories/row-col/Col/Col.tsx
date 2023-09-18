import ColStyled from "./col.styles";

interface ColProps {
  items?: JSX.Element[];
  /**
   * Because gap is still a new feature so some browsers don't support it, then (gap optional).
   */
  style?: React.CSSProperties;
}

const Col = ({ style, items }: ColProps) => {
  return (
    <ColStyled className="storybook-col" style={style}>
      {items}
    </ColStyled>
  );
};

export default Col;

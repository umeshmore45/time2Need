import { Card as MuiCard } from "./card.style";

export const Card = ({ width, height, children, ...restProps }) => {
  return (
    <MuiCard width={width} height={height} {...restProps}>
      {children}
    </MuiCard>
  );
};

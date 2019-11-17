import React from "react";
import StyledLogo from "./styled";

interface Props {
  size?: string;
  color?: "#252525" | "white";
}

const Logo = ({ size = "inherit", color = "#252525" }: Props) => {
  return (
    <StyledLogo style={{ fontSize: size }} color={color}>
      <span className="light">Break</span>
      <span className="bold">o'clock</span>
    </StyledLogo>
  );
};

export default Logo;

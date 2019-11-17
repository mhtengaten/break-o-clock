import styled from "styled-components";

const StyledLogo = styled.span<{ color?: "#252525" | "white" }>`
  color: ${props => props.color};
  font-weight: 300;
  border: 1px solid ${props => props.color};
  padding: 1px 4px;
  border-radius: 5px;
  .light {
    text-transform: uppercase;
    font-weight: 800;
  }
  .bold {
    font-style: italic;
  }
`;

export default StyledLogo;

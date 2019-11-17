import styled from "styled-components";

const StyledCta = styled.a`
  &:hover {
    color: white !important;
  }
  display: inline-block;
  font-weight: 300;
  border: 1px solid #252525;
  padding: 1px 4px;
  text-decoration: none;
  color: white !important;
  background-color: #252525;
  padding: 15px 20px;
  border-radius: 5px;
  .light {
    text-transform: uppercase;
    font-weight: 800;
  }
  .bold {
    font-style: italic;
  }
`;

export default StyledCta;

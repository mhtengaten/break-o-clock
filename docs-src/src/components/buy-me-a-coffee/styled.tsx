import styled from "styled-components";

const StyledBuyMeACoffee = styled.a`
  padding: 7px 5px 7px 10px !important;
  line-height: 25px !important;
  height: 41px !important;
  min-width: 188px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #252525 !important;
  border-radius: 5px !important;
  border: 1px solid #252525 !important;
  padding: 7px 5px 7px 14px !important;
  font-size: 15px !important;
  letter-spacing: 0.6px !important;
  margin: 0 auto !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
  img {
    width: 35px !important;
    margin-bottom: 1px !important;
    box-shadow: none !important;
    border: none !important;
    vertical-align: middle !important;
  }

  svg {
    width: 20px;
    position: relative;
    top: -5px;
  }

  &:hover,
  &:active,
  &:focus {
    text-decoration: none !important;
  }

  span {
    padding-left: 17px;
  }
`;

export default StyledBuyMeACoffee;

import styled from "styled-components";

const StyledCatchyHeader = styled.div`
  padding: 50px;
  background-image: url("https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15755f05893a4f_25.%20Witch%20Haze.jpg");
  background-size: cover;
  .catchy__support {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .catchy__heading {
    display: flex;
    justify-content: space-around;
    max-width: 1400px;
    margin: 0 auto;
    align-items: flex-start;
    > div {
      width: 40%;
    }
  }
  .catchy__logo {
    text-align: center;
    margin-bottom: 100px;
  }
  .catchy_screen {
    position: relative;
    width: 40%;
    img:first-child {
      width: 9.1%;
      position: absolute;
      top: 10%;
      left: 43%;
      z-index: 100;
    }
  }
  .howitworks__bullets {
    li {
      margin-bottom: 20px;
    }
  }
`;

export default StyledCatchyHeader;

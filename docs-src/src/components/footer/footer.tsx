import React from "react";
import Freelancer from "../../assets/freelancer.svg";
import StyledFooter from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/pro-duotone-svg-icons";
import Cta from "../cta/cta";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <StyledFooter>
      <div style={{ textAlign: "center", position: "relative", top: "26px" }}>
        <Cta href="#" title="Download Break o'clock">
          <>
            <span style={{ paddingRight: "20px" }}>Download</span>
            <Logo color={"white"} />
          </>
        </Cta>
      </div>
      {/* <img className="footer__freelancer" src={Freelancer} alt="" /> */}
      <footer>
        <h3>
          Crafted with{" "}
          <FontAwesomeIcon icon={faHeart} style={{ marginRight: "7px" }} />
          by{" "}
          <a
            href="https://www.linkedin.com/in/thomas-guibert/"
            title="Thomas Guibert LinkedIn"
          >
            <b>Thomas Guibert</b>
          </a>
        </h3>
        <br />
        <p>
          <a href="" title="Thomas Guibert LinkedIn">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "7px" }} />
            Source Code
          </a>
        </p>
      </footer>
    </StyledFooter>
  );
};

export default Footer;

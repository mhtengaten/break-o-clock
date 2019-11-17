import React from "react";
import StyledHowItWorks from "./styled";
import Freelancer from "../../assets/freelancer.svg";
import { faCheck } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <h2 style={{ textAlign: "center" }}>
        {" "}
        Benefits of taking a break
        <br />
        every hour
      </h2>
      <div className="howitworks__flex">
        <div>
          <img src={Freelancer} alt="" />
        </div>
        <div className="howitworks__bullets">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: "10px" }} />{" "}
              Better Productivity
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: "10px" }} />{" "}
              Thinking more clearly
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: "10px" }} />{" "}
              Breaks park creative ideas and solution
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: "10px" }} />{" "}
              Helps stay focused over long periods of time
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: "10px" }} />{" "}
              Reduce eye strain
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: "10px" }} />{" "}
              Helps you re-focus on your big-picture goals
            </li>
          </ul>
        </div>
      </div>
    </StyledHowItWorks>
  );
};

export default HowItWorks;

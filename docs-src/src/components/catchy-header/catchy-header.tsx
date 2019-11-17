import React from "react";
import StyledCatchyHeader from "./styled";
import Logo from "../logo/logo";
import BuyMeACoffee from "../buy-me-a-coffee/buy-me-a-coffee";
import Cta from "../cta/cta";
import Screen from "../../assets/real-time.png";
import Gif from "../../assets/db_anim.gif";

const CatchyHeader = () => {
  return (
    <StyledCatchyHeader>
      <div className="catchy__support">
        <div>
          <BuyMeACoffee />
        </div>
      </div>
      <div className="catchy__logo">
        <Logo size="40px" />
        <br />
        <br />
        <br />
        <h1>5 minutes break reminding tool.</h1>
        <br />
        <br />
        <Cta
          href="http://thomasguibert.fr/download/break-oclock.zip"
          title="Download Break o'clock"
        >
          <>
            <span style={{ paddingRight: "20px" }}>Download</span>
            <Logo color={"white"} />
          </>
        </Cta>
      </div>
      <div className="catchy__heading">
        <div className="catchy_screen">
          <img src={Gif} alt="" />
          <img src={Screen} alt="" />
        </div>
        <div>
          <div>
            <h2>How it works</h2>
            <div className="howitworks__bullets">
              <ul>
                <li>
                  <span className="numbers">
                    <span>1</span>
                  </span>{" "}
                  Launch the app. A timer automatically starts.
                </li>
                <li>
                  <span className="numbers">2</span>A discret visual alarm will
                  show up after 55 minutes.
                </li>
                <li>
                  <span className="numbers">3</span>
                  Click on it, enjoy your break.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledCatchyHeader>
  );
};

export default CatchyHeader;

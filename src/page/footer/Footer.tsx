import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

//@ts-ignore
import footerLog from "./svg/footerLog.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <FontAwesomeIcon icon={faChevronCircleDown} color="#00609c" size="3x" />
        <h1>References</h1>
      </div>
      <div className="footer-bottom">
        <div>
          <img src={footerLog} alt="" />
        </div>
        <div>
          <ul>
            <li>Contact</li>
            <li>Imprint</li>
            <li>Conditions</li>
            <li>Conditions</li>
            <li> Terms of use</li>
            <li> Privacy</li>
            <li> Cookie</li>
            <li> content</li>
          </ul>
        </div>
        <div className="footer-text-container">
          <div className="footer-text-h1">
            <h1>
              © Copyright LEO Pharma 2020 LEO and the LEO Lion Design are
              registered trademarks of LEO Pharma All rights reserved
            </h1>
          </div>
          <div className="footer-text-p">
            <p>LEO Pharma corporate website</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

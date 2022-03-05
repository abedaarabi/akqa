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
            <li>
              <a href=""> Contact</a>
            </li>
            <li>
              <a href="">Imprint</a>
            </li>
            <li>
              <a href="">Conditions</a>
            </li>
            <li>
              <a href="">Conditions</a>
            </li>
            <li>
              <a href=""> Terms of use</a>
            </li>
            <li>
              <a href=""> Privacy</a>
            </li>
            <li>
              <a href=""> Cookie</a>
            </li>
            <li>
              <a href=""> content</a>
            </li>
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

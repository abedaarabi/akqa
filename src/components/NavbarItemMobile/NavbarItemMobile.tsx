import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavbarMobileType } from "../../interface/props";
import "./navbar.scss";

const NavbarItemMobile = ({
  data,
  setMenuOpen,
  color,
  fontColor,
}: NavbarMobileType) => {
  const [isHide, setIsHide] = React.useState(false);

  const arrow = isHide ? faAngleDown : faAngleRight;

  return (
    <div
      className="navbar-hamburger-container--mobile"
      style={{ backgroundColor: color, color: fontColor }}
      onClick={() => {
        setIsHide(!isHide);
      }}
    >
      <div className="navbar-hamburger">
        <div>
          <li>
            <span>{data[0]}</span>
          </li>
        </div>
        <div className="navbar-arrow">
          <FontAwesomeIcon icon={arrow} size="lg" color={fontColor} />
        </div>
      </div>
      <div>
        {isHide && (
          <ul>
            {data
              .filter((_, i) => i > 0)
              .map((item, i) => (
                <li tabIndex={i} onClick={() => setMenuOpen(false)} key={item}>
                  <span> {item}</span>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarItemMobile;

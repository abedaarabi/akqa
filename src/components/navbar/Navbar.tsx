import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavbarType } from "../../interface/props";
import "./navbar.scss";

const Navbar = ({
  data,
  menuOpen,
  setMenuOpen,
  color,
  fontColor,
}: NavbarType) => {
  const [isHide, setIsHide] = React.useState(false);

  const arrow = isHide ? faCaretDown : faCaretRight;
  React.useEffect(() => {}, [isHide]);
  if (menuOpen < 700) {
    return (
      <div
        className="navbar-menu"
        onClick={() => {
          setIsHide(!isHide);
        }}
      >
        <li>{data[0]}</li>

        <FontAwesomeIcon icon={arrow} size="1x" color={"#00609c"} />
      </div>
    );
  }

  return (
    <nav
      className={isHide ? "menu-navbar" : "navbar"}
      style={{ backgroundColor: color, color: fontColor }}
    >
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

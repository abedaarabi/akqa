import React from "react";
import { NavbarType } from "../../interface/props";
import "./navbar.scss";

const Navbar = ({
  data,
  menuOpen,
  setMenuOpen,
  color,
  fontColor,
}: NavbarType) => {
  return (
    <nav
      className={`navbar  ${menuOpen && `active`}`}
      style={{ backgroundColor: color, color: fontColor }}
    >
      <ul>
        {data.map((item) => (
          <li onClick={() => setMenuOpen(false)}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./navbar.scss";
interface Navbar {
  data: string[];
  color: string;
  fontColor: string;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ data, menuOpen, setMenuOpen, color, fontColor }: Navbar) => {
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

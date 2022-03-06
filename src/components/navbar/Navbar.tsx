import React from "react";
import { NavbarType } from "../../interface/props";
import "./navbar.scss";

const Navbar = ({ data, color, fontColor }: NavbarType) => (
  <div
    className={"navbar"}
    style={{ backgroundColor: color, color: fontColor }}
  >
    <ul>
      {data.map((item, i) => (
        <li tabIndex={i} key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Navbar;

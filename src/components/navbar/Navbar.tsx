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
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  const [isHide, setIsHide] = React.useState(false);

  const arrow = isHide ? faCaretDown : faCaretRight;

  if (width < 768 && menuOpen) {
    return (
      <div
        style={{ backgroundColor: color, color: fontColor }}
        className="navbar-hamburger-container"
      >
        <div className="navbar-hamburger">
          <li>{data[0]}</li>

          <FontAwesomeIcon
            icon={arrow}
            size="lg"
            color={"gray"}
            onClick={() => {
              setIsHide(!isHide);
            }}
          />
        </div>
        <div>
          {isHide && (
            <ul>
              {data
                .filter((_, i) => i > 0)
                .map((item) => (
                  <li onClick={() => setMenuOpen(false)} key={item}>
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  return (
    <nav
      className={"navbar"}
      style={{ backgroundColor: color, color: fontColor }}
    >
      <ul>
        {data.map((item) => (
          <li onClick={() => setMenuOpen(false)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

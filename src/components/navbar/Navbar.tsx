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
    const [head, ...rest] = data;
    return (
      <div className="navbar-hamburger-container">
        <div
          className="navbar-hamburger"
          onClick={() => {
            setIsHide(!isHide);
          }}
        >
          <li>{data[0]}</li>

          <FontAwesomeIcon icon={arrow} size="1x" color={"#00609c"} />
        </div>
        <div>
          {isHide && (
            <ul>
              {data.map((item) => (
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

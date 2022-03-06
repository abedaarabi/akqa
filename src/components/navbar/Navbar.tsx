import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
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

  const arrow = isHide ? faAngleDown : faAngleRight;

  if (width < 768 && menuOpen) {
    return (
      <nav
        className="navbar-hamburger-container"
        style={{ backgroundColor: color, color: fontColor }}
      >
        <div className="navbar-hamburger">
          <div>
            <li>
              <a href="">{data[0]}</a>
            </li>
          </div>
          <div className="navbar-arrow">
            <FontAwesomeIcon
              icon={arrow}
              size="lg"
              color={fontColor}
              onClick={() => {
                setIsHide(!isHide);
              }}
            />
          </div>
        </div>
        <div>
          {isHide && (
            <ul>
              {data
                .filter((_, i) => i > 0)
                .map((item) => (
                  <li onClick={() => setMenuOpen(false)} key={item}>
                    <a href=""> {item}</a>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </nav>
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

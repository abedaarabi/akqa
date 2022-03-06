import React from "react";
import Navbar from "../../components/navbar/Navbar";
import NavBarResponsive from "../../components/NavbarItemMobile/NavbarItemMobile";
import "./navbarSelection.scss";

const navbarOne = [
  "Bedingungen",
  "Behandlungen",
  "Veranstaltungen",
  "Werkzeuge",
  "Forschung und Erkenntnisse",
] as string[];
const navbarTwo = [
  "Adtralza",
  "Diavonex",
  "Diavobet",
  "Enstilar",
  "Fucidin",
  "Kyntheum",
  "Protopic",
  "Skinoren",
  "Tralokinumab",
  "Xamiol",
] as string[];
const navbarThree = [
  "Overview",
  "Mode of Action",
  "Efficacy",
  "Quality of Life",
  "Safety",
  "Dosing",
  "News",
  "Technical Information",
] as string[];

export const NavbarSection = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleToggleMenu = () => {
    document.body.style.overflow = menuOpen ? "" : "hidden";
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return (
    <nav className={"navbar-section-container " + (menuOpen && "active")}>
      <div
        className="hamburger"
        onClick={() => {
          handleToggleMenu();
        }}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>

      {width < 768 ? (
        menuOpen && (
          <div className="navbar-item-container">
            <NavBarResponsive
              data={navbarOne}
              menuOpen={menuOpen}
              setMenuOpen={handleToggleMenu}
              color="#ffff"
              fontColor="#2a363b"
            />
            <NavBarResponsive
              data={navbarTwo}
              menuOpen={menuOpen}
              setMenuOpen={handleToggleMenu}
              color="#e6e7e8"
              fontColor="#00609C"
            />
            <NavBarResponsive
              data={navbarThree}
              menuOpen={menuOpen}
              setMenuOpen={handleToggleMenu}
              color="#00609C"
              fontColor="#e6e7e8"
            />
          </div>
        )
      ) : (
        <div className="navbar-item-container">
          <Navbar data={navbarOne} color="#ffff" fontColor="#2a363b" />
          <Navbar data={navbarTwo} color="#e6e7e8" fontColor="#00609C" />
          <Navbar data={navbarThree} color="#00609C" fontColor="#e6e7e8" />
        </div>
      )}
    </nav>
  );
};

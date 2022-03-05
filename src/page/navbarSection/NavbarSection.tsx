import React from "react";
import Navbar from "../../components/navbar/Navbar";
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
const navbarTherr = [
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
  // const [menuOpen, setMenuOpen] = React.useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = React.useState(false);
  // const [showNavbar, setShowNavbar] = React.useState(false);

  // React.useEffect(() => {
  //   const changeWidth = () => {
  //     setMenuOpen(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);
  //   return () => window.removeEventListener("resize", changeWidth);
  // }, []);

  return (
    <section className={"navbar-section-container " + (menuOpen && "active")}>
      <div
        className="hamburger"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      {menuOpen && (
        <>
          <Navbar
            data={navbarOne}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            color="#ffff"
            fontColor="#2a363b"
          />
          <Navbar
            data={navbarTwo}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            color="#e6e7e8"
            fontColor="#00609C"
          />
          <Navbar
            data={navbarTherr}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            color="#00609C"
            fontColor="#e6e7e8"
          />
        </>
      )}
    </section>
  );
};

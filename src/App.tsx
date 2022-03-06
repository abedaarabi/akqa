import React from "react";

import "./app.scss";
import { SearchBar } from "./page/searchBar/SearchBar";
import Footer from "./page/footer/Footer";
import { NavbarSection } from "./page/navbarSection/NavbarSection";

import SectionFive from "./page/sectionFive/SectionFive";
import SectionFour from "./page/sectionFour/SectionFour";
import SectionThree from "./page/sectionThree/SectionThree";
import SectionTwo from "./page/sectionTwo/SectionTwo";
import { TopSection } from "./page/topSection/TopSection";

function App() {
  return (
    <>
      <SearchBar />
      <NavbarSection />
      <TopSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
}

export default App;

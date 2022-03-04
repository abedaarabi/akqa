import React from "react";

import "./app.scss";
import Top from "./page/tob/Top";
import Footer from "./page/footer/Footer";
import { NavbarSection } from "./page/navbarSection/NavbarSection";

import SectionFive from "./page/sectionFive/SectionFive";
import SectionFour from "./page/sectionFour/SectionFour";
import SectionThree from "./page/sectionThree/SectionThree";
import SectionTwo from "./page/sectionTwo/SectionTwo";
import { TopSection } from "./page/topSection/TopSection";

function App() {
  return (
    <div className="App">
      <Top />
      <NavbarSection />
      <TopSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";

import "./app.scss";
import Top from "./components/tob/Top";
import { NavbarSection } from "./page/navbarSection/NavbarSection";
import SectionTwo from "./page/sectionTwo/SectionTwo";
import { TopSection } from "./page/topSection/TopSection";

function App() {
  return (
    <div className="App">
      <Top />
      <NavbarSection />
      <TopSection />
      <SectionTwo />
    </div>
  );
}

export default App;

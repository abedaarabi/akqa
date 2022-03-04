import React from "react";
import Four from "../../components/four/Four";

import "./sectionFour.scss";
//@ts-ignore
import GettyImages from "./img/GettyImages.png";
//@ts-ignore
import MaskGroup from "./img/MaskGroup.jpg";

const componentsData = [
  {
    image: GettyImages,

    h1: "Dosing guide",
    p: "Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1).",
    h2: "Learn more about application and dosing",
    id: "1",
  },
  {
    image: MaskGroup,

    h1: "Patient injection made simple",
    p: "This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.",
    h2: "Watch the video",
    id: "2",
  },
];

const SectionFour = () => {
  return (
    <section className="sectionFour-container">
      <h1 className="sectionFour-text">Clinical tools - at a glance</h1>

      <div className="sectionFour-item-container">
        {componentsData.map((item) => (
          <Four
            image={item.image}
            h1={item.h1}
            p={item.p}
            h2={item.h2}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionFour;

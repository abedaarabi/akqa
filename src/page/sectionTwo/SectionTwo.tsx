import React from "react";
import { Two } from "../../components/two/Two";
import "./sectionTwo.scss";
//@ts-ignore
import Group29612146 from "./svg/Group29612146.svg";
//@ts-ignore
import Group29612145 from "./svg/Group29612145.svg";
//@ts-ignore
import Group29612147 from "./svg/Group29612147.svg";

const componentsData = [
  {
    image: Group29612145,

    h1: "Long term sustained improvement",
    p: "9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). ",
    h2: "See efficacy and trial data",
    id: "1",
  },
  {
    image: Group29612146,

    h1: "Improvements in the burden of disease",
    p: "Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).",
    h2: "Learn more about quality of life improvements",
    id: "2",
  },
  {
    image: Group29612147,

    h1: "Good safety profile",
    p: "The overall frequency and severity of adverse events with Adtralza® were comparable to placebo at 16 weeks* and 52 weeks(19).",
    h2: "See safety profile ",
    id: "3",
  },
];
const SectionTwo = () => {
  return (
    <section className="sectionTwo-container">
      {componentsData.map((component) => (
        <Two
          id={component.id}
          image={component.image}
          h1={component.h1}
          p={component.p}
          h2={component.h2}
        />
      ))}
    </section>
  );
};

export default SectionTwo;

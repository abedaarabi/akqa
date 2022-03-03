import React from "react";
import "./sectionThree.scss";
//@ts-ignore
import image from "./img/image11.jpg";
const SectionThree = () => {
  return (
    <section className="sctionThree-container">
      <div className="sctionThree-left">
        <h1>
          Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
          and symptoms.
        </h1>
        <p>
          By specifically targeting the IL-13 cytokine, Adtralza® inhibits the
          interaction with type II receptors and prevents IL-13-induced
          inflammatory responses in the skin(1,2).
        </p>
        <p>
          Adtralza® selectively modulates the dysregulated immune system by(1):
        </p>
        <ul>
          <li> — Reducing markers of skin inflammation</li>
          <li> — Improving markers of skin barrier integrity</li>
          <li> — Reducing epidermal thickness</li>
        </ul>
        <button>Watch the video</button>
        <p>Duration: 2:43</p>
      </div>
      <div className="sctionThree-right">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default SectionThree;

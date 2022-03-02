import React from "react";
import "./topSection.scss";
//@ts-ignore
import IVACover from "../../img/IVACover.png";
//@ts-ignore
import adtralza from "../../img/adtralza.png";

export const TopSection = () => {
  return (
    <section className="topSction-container">
      <div className="top">
        <img
          src={IVACover}
          alt="Figure 1. Percentages of images with alt text"
        />
        <div className="topSction-text">
          <h1 className="Adtralza"> Adtralza®</h1>
          <h1>(tralokiumab)</h1>
          <h1>
            Adtralza® is a new treatment for adult patients with
            moderate-to-severe atopic dermatitis (eczema) who are candidates for
            systemic therapy.
          </h1>
        </div>
      </div>
      <div className="bottom">
        <div className="img-container">
          <img width="800" src={adtralza} alt="" />
        </div>
        <div className="text-container">
          <h1>
            It is the first and only biologic developed <br />
            to specifically neutralize IL-13, a key driver of atopic dermatitis
            signs and <br />
            symptoms(1,2)
          </h1>
          <p>
            Learn more about how Adtralza® works and how to use it in treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

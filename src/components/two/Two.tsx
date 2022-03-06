import React from "react";
import { PropsType } from "../../interface/props";
import "./two.scss";

export const Two = ({ image, h1, p, h2, altDescription }: PropsType) => {
  return (
    <div className="two-container">
      <div className="two-item">
        <img src={image} alt={altDescription} />

        <h1>{h1}</h1>
        <p>{p}</p>
        <h3>{h2}</h3>
      </div>
    </div>
  );
};

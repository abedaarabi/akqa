import React from "react";
import "./two.scss";

interface TwoType {
  image: string;
  h1: string;
  p: string;
  h2: string;
  id: string;
}
export const Two = ({ image, h1, p, h2, id }: TwoType) => {
  return (
    <div className="two-container">
      <div key={id} className="two-item">
        <img src={image} alt="" />
        <h1>{h1}</h1>
        <p>{p}</p>
        <h3>{h2}</h3>
      </div>
    </div>
  );
};

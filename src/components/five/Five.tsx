import React from "react";
import { PropsType } from "../../interface/props";
import "./five.scss";

export const Five = ({ image, h1, p }: PropsType) => {
  return (
    <div className="five-container">
      <div className="five-vedio">{image}</div>
      <div className="five-text">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </div>
  );
};

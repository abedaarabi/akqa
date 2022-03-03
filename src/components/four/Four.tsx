import React from "react";
import { PropsType } from "../../interface/props";
import "./four.scss";

const Four = ({ image, h1, p, h2 }: PropsType) => {
  return (
    <div className="four-container">
      <div className="item">
        <img src={image} alt="" />
        <div className="four-text">
          <h1>{h1}</h1>
          <p>{p}</p>
          <h2>{h2}</h2>
        </div>
      </div>
    </div>
  );
};

export default Four;

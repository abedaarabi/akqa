import React from "react";
import "./sectionFive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Five } from "../../components/five/Five";
const PlayIcon = (
  <FontAwesomeIcon icon={faPlayCircle} size="3x" color="#C017A2" />
);
const componentData = [
  {
    h1: "Video Title",
    p: "Short p of the contents or subject of the video.  You can upload a screen from the video as thumbnail image",
    image: PlayIcon,
    id: "1",
  },
  {
    h1: "Video Title",
    p: "Short p of the contents or subject of the video.  You can upload a screen from the video as thumbnail image",
    image: PlayIcon,
    id: "2",
  },
  {
    h1: "Video Title",
    p: "Short p of the contents or subject of the video.  You can upload a screen from the video as thumbnail image",
    image: PlayIcon,
    id: "3",
  },
  {
    h1: "Video Title",
    p: "Short p of the contents or subject of the video.  You can upload a screen from the video as thumbnail image",
    image: PlayIcon,
    id: "4",
  },
];
const SectionFive = () => {
  return (
    <section className="section-five-container">
      <div className="section-five-text">
        <h1>KOL Videos - get expert insights here</h1>
        <p>
          See what Key opinion leaders have to say about their experiences with
          Adtralza®
        </p>
      </div>

      <div className="section-five-video">
        {componentData.map((item) => (
          <Five image={item.image} h1={item.h1} p={item.p} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default SectionFive;

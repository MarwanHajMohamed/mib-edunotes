import React from "react";
import "../../css/Common Components/browsepagecard.css";
import { useNavigate } from "react-router-dom";

export default function BrowseCard({ image, title, route }) {
  let navigate = useNavigate();

  const topicPath = (topic) => {
    let path = "/" + topic;
    navigate(path);
  };

  return (
    <div
      className="browsecard-container"
      onClick={() => {
        topicPath(route);
      }}
    >
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-title">{title}</div>
      <div className="follow">
        <button>Follow</button>
      </div>
    </div>
  );
}

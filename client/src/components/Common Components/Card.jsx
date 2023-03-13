import React from "react";
import "../../css/Common Components/card.css";

export default function Card({ title, description, button, path }) {
  return (
    <div className="card-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}

import React from "react";
import "../../css/PageIntro/browse.css";

import { useNavigate } from "react-router-dom";

export default function Browse() {
  let navigate = useNavigate();

  const topicPath = (topic) => {
    let path = "/" + topic;
    navigate(path);
  };
  return (
    <div className="browse-container">
      <div className="browse-title">Browse Notes</div>
      <div className="browse-description">
        Diversify your knowledge by searching through different notes rated by
        other students!
      </div>
      <div className="browse-subjects-container">
        <div className="browse">
          <button
            className="option"
            onClick={() => {
              topicPath("maths");
            }}
          >
            <i className="fa-solid fa-calculator" />
            <div className="browse-name">Maths</div>
          </button>
          <button
            className="option"
            onClick={() => {
              topicPath("science");
            }}
          >
            <i className="fa-solid fa-microscope" />
            <div className="browse-name">Science</div>
          </button>
          <button
            className="option"
            onClick={() => {
              topicPath("english");
            }}
          >
            <i className="fa-solid fa-book" />
            <div className="browse-name">English</div>
          </button>
        </div>
        <div className="browse 1">
          <button
            className="option"
            onClick={() => {
              topicPath("cs");
            }}
          >
            <i className="fa-solid fa-code" />
            <div className="browse-name">CS</div>
          </button>
          <button
            className="option"
            onClick={() => {
              topicPath("business");
            }}
          >
            <i className="fa-solid fa-earth" />
            <div className="browse-name">Business</div>
          </button>
          <button
            className="option"
            onClick={() => {
              topicPath("pharmacy");
            }}
          >
            <i className="fa-solid fa-pills" />
            <div className="browse-name">Pharmacy</div>
          </button>
          <button
            className="option"
            onClick={() => {
              topicPath("law");
            }}
          >
            <i className="fa-solid fa-scale-balanced" />
            <div className="browse-name">Law</div>
          </button>
        </div>
        <div className="browse 2">
          <button
            className="option"
            onClick={() => {
              topicPath("economics");
            }}
          >
            <i className="fa-solid fa-building-columns" />
            <div className="browse-name">Economics</div>
          </button>
          <button
            className="option"
            onClick={() => {
              topicPath("accounting");
            }}
          >
            <i className="fa-solid fa-coins" />
            <div className="browse-name">Accounting</div>
          </button>
          <button
            className="option"
            onClick={() => {
              topicPath("psychology");
            }}
          >
            <i className="fa-solid fa-brain" />
            <div className="browse-name">Psychology</div>
          </button>
        </div>
        <button
          className="see-more"
          onClick={() => {
            topicPath("browse");
          }}
        >
          <div className="see-more-text">See More</div>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

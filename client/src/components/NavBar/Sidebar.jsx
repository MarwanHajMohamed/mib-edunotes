import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/Navbar/sidebar.css";

export default function Sidebar() {
  const pages = [
    "All",
    "General",
    "English",
    "CS",
    "Maths",
    "Science",
    "Economics",
    "Business",
    "Pharmacy",
    "Law",
    "Psychology",
    "Accounting",
  ];
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const topicPath = (topic) => {
    let path = "/" + topic;
    navigate(path);
  };

  const toggleNav = () => {
    setToggle(!toggle);
    setOpen(!open);
  };

  return (
    <div className="sidebar-container">
      <div className={open ? "side-open" : "side-collapse"}>
        <i
          onClick={toggleNav}
          className={
            "fa-solid " + (toggle ? "fa-chevron-left" : "fa-chevron-right")
          }
        ></i>
        <div className="sidebar">
          <div className="topic-heading">Topics</div>
          <div className={"sidebar-list"}>
            <div className="sidebar-item-list">
              {pages.map((page) => {
                return (
                  <li
                    className="side-item"
                    onClick={() => {
                      topicPath(page.toLowerCase());
                    }}
                  >
                    {page}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

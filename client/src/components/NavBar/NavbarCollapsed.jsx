import React, { useState, useEffect } from "react";
import axios from "axios";
import defaultPic from "../../css/images/default.png";

import "../../css/Navbar/navbarcollapsed.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../css/images/EduNotes Logo.png";

export default function NavbarCollapsed() {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [stars, setStars] = useState("");
  const [profilePic, setProfilePic] = useState(defaultPic);

  useEffect(() => {
    const getNotes = () => {
      axios
        .get("/user")
        .then((response) => {
          response.data.forEach((user) => {
            if (user.email === localStorage.getItem("emailData")) {
              setName(user.name);
              setStars(user.stars);
              setProfilePic(user.profilePic);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getNotes();
  }, []);

  const toggleNav = () => {
    setToggle(!toggle);
    setOpen(!open);
  };

  const logout = () => {
    localStorage.clear();
    router("");
    window.location.reload(false);
  };

  let navigate = useNavigate();

  const router = (route) => {
    let path = "/" + route;
    navigate(path);
  };

  return (
    <div className="collapse-container">
      <div id="sidebar-nav" className={open ? "open" : "collapse-bar"}>
        <i
          onClick={toggleNav}
          className={
            "fa-solid " + (toggle ? "fa-chevron-right" : "fa-chevron-left")
          }
        ></i>
        <div className="open-items">
          <div className="profile-container">
            <div
              className="profile"
              onClick={() => {
                router("profile/your-profile");
                toggleNav();
              }}
            >
              <img src={profilePic} alt="profile" />
            </div>
            <div className="profile-name">{name}</div>
            <div className="stars-container">
              <i
                className="fa-solid fa-star"
                onClick={() => {
                  router("store");
                  toggleNav();
                }}
              ></i>
              <div className="stars-counter">{stars}</div>
            </div>
            <div className="routes">
              <button
                onClick={() => {
                  router("browse");
                  toggleNav();
                }}
              >
                Browse
              </button>
              <button
                onClick={() => {
                  router("note-creator");
                  toggleNav();
                }}
              >
                Create
              </button>
              <button
                onClick={() => {
                  router("report");
                  toggleNav();
                }}
              >
                Report
              </button>
              <button
                onClick={() => {
                  router("store");
                  toggleNav();
                }}
              >
                Store
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src={Logo}
              alt=""
              onClick={() => {
                router("");
                toggleNav();
              }}
            />
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

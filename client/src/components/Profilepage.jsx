import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/profile.css";
import { SketchPicker } from "react-color";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Avatar from "react-avatar-edit";
import defaultPic from "../css/images/default.png";
import { Outlet, useNavigate } from "react-router-dom";

function Profilepage() {
  useEffect(() => {
    document.title = "Profile | EduNotes";
  }, []);

  const [hex, setHex] = useState("#973333");

  const handleColorChange = (color) => {
    setHex(color.hex);
  };

  const [openColor, setOpenColor] = useState(false);
  const handleOpen = () => setOpenColor(true);
  const handleClose = () => setOpenColor(false);

  const [openAvatar, setOpenAvatar] = useState(false);
  const handleOpenAvatar = () => setOpenAvatar(true);
  const handleCloseAvatar = () => setOpenAvatar(false);
  const [profilePic, setProfilePic] = useState(defaultPic);

  const [name, setName] = useState("");
  const [stars, setStars] = useState("");

  const [activeMenu, setActiveMenu] = useState("profile");

  const [locked, setLocked] = useState(true);

  const onClose = () => {
    setProfilePic(null);
  };

  const onCrop = (view) => {
    setProfilePic(view);
  };

  const navigate = useNavigate();

  const displayNotes = () => {
    navigate("your-notes");
  };

  const displayProfile = () => {
    navigate("your-profile");
  };

  const displayPurchases = () => {
    navigate("purchase-history");
  };

  useEffect(() => {
    const getUsername = () => {
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

    getUsername();
  }, []);

  const savePic = () => {
    return axios
      .put(`/user/pic/${localStorage.getItem("userID")}`, {
        profilePic: profilePic,
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buyGradient = () => {
    setLocked(false);
  };

  return (
    <>
      <Modal open={openColor} onClose={handleClose} className="color-modal">
        <Box className="color-picker">
          <SketchPicker
            color={hex}
            onChangeComplete={handleColorChange}
            width="400px"
            disableAlpha
          ></SketchPicker>
          <div className="gradient-container">
            <div
              className={locked ? "gradient locked" : "gradient"}
              style={{
                width: "50px",
                height: "50px",
                background:
                  "linear-gradient(148deg, rgba(217,182,41,1) 0%, rgba(255,255,255,1) 50%, rgba(242,61,61,1) 100%)",
              }}
              onClick={() =>
                locked
                  ? console.log("Buy now")
                  : setHex(
                      "linear-gradient(148deg, rgba(217,182,41,1) 0%, rgba(255,255,255,1) 50%, rgba(242,61,61,1) 100%)"
                    )
              }
            >
              <div className="buy-gradient" onClick={() => buyGradient()}>
                Buy
              </div>
            </div>
            <div
              className={locked ? "gradient locked" : "gradient"}
              style={{
                width: "50px",
                height: "50px",
                background:
                  "linear-gradient(148deg, rgba(0,255,42,1) 0%, rgba(255,255,255,1) 50%, rgba(223,242,61,1) 100%)",
              }}
              onClick={() =>
                locked
                  ? console.log("Buy")
                  : setHex(
                      "linear-gradient(148deg, rgba(0,255,42,1) 0%, rgba(255,255,255,1) 50%, rgba(223,242,61,1) 100%)"
                    )
              }
            >
              <div className="buy-gradient" onClick={() => buyGradient()}>
                Buy
              </div>
            </div>
            <div
              className="gradient"
              style={{
                width: "50px",
                height: "50px",
                background:
                  "linear-gradient(148deg, rgba(0,14,255,1) 0%, rgba(255,255,255,1) 50%, rgba(61,238,242,1) 100%)",
              }}
              onClick={() =>
                setHex(
                  "linear-gradient(148deg, rgba(0,14,255,1) 0%, rgba(255,255,255,1) 50%, rgba(61,238,242,1) 100%)"
                )
              }
            ></div>
            <div
              className="gradient"
              style={{
                width: "50px",
                height: "50px",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(242,61,61,1) 100%)",
              }}
              onClick={() =>
                setHex(
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(242,61,61,1) 100%)"
                )
              }
            ></div>
            <div
              className="gradient"
              style={{
                width: "50px",
                height: "50px",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(61,62,242,1) 100%)",
              }}
              onClick={() =>
                setHex(
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(61,62,242,1) 100%)"
                )
              }
            ></div>
            <div
              className="gradient"
              style={{
                width: "50px",
                height: "50px",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(87,87,87,1) 100%)",
              }}
              onClick={() =>
                setHex(
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(87,87,87,1) 100%)"
                )
              }
            ></div>
            <div
              className="gradient"
              style={{
                width: "50px",
                height: "50px",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(94,255,99,1) 100%)",
              }}
              onClick={() =>
                setHex(
                  "linear-gradient(0deg, rgba(255,255,255,1) 39%, rgba(94,255,99,1) 100%)"
                )
              }
            ></div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openAvatar}
        onClose={handleCloseAvatar}
        className="avatar-modal"
      >
        <Box className="avatar-picker">
          <Avatar width={400} height={300} onCrop={onCrop} onClose={onClose} />
          <button
            onClick={() => {
              handleCloseAvatar();
              savePic();
            }}
          >
            Save
          </button>
        </Box>
      </Modal>
      <div className="profile-page-container">
        <div className="banner-container" style={{ background: hex }}>
          <button className="edit-banner" onClick={handleOpen}>
            <i class="fa-solid fa-pencil"></i>
          </button>
        </div>

        <div className="profile-container">
          <div className="profile-pic-container" onClick={handleOpenAvatar}>
            {profilePic && <img src={profilePic} alt="profile" />}
          </div>
          <div className="name-container">{name}</div>
          <div className="stars-container">
            <i className="fa-solid fa-star"></i>
            {stars}
          </div>
        </div>
        <div className="notes-container">
          <Outlet />
        </div>
      </div>
      <div className="profile-sidebar">
        <div className="profile-sidebar-content">
          <div
            className={
              activeMenu === "profile"
                ? "profile-sidebar-item active"
                : "profile-sidebar-item"
            }
            onClick={() => {
              displayProfile();
              setActiveMenu("profile");
            }}
          >
            Your Profile
          </div>
          <div
            className={
              activeMenu === "notes"
                ? "profile-sidebar-item active"
                : "profile-sidebar-item"
            }
            onClick={() => {
              displayNotes();
              setActiveMenu("notes");
            }}
          >
            Your Notes
          </div>
          {/* <div
            className={
              activeMenu === "likes"
                ? "profile-sidebar-item active"
                : "profile-sidebar-item"
            }
            onClick={() => {
              setActiveMenu("likes");
            }}
          >
            Your Likes
          </div> */}
          <div
            className={
              activeMenu === "purchase-history"
                ? "profile-sidebar-item active"
                : "profile-sidebar-item"
            }
            onClick={() => {
              displayPurchases();
              setActiveMenu("purchase-history");
            }}
          >
            Purchase history
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilepage;

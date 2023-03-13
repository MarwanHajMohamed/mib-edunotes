import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";

export default function YourProfile() {
  const [name, setName] = useState("");
  const email = localStorage.getItem("emailData");

  useEffect(() => {
    const getUsername = () => {
      axios
        .get("/user")
        .then((response) => {
          response.data.forEach((user) => {
            if (user.email === localStorage.getItem("emailData")) {
              setName(user.name);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getUsername();
  }, []);

  const saveName = () => {
    return axios
      .put(`/user/name/${localStorage.getItem("userID")}`, {
        name: name,
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="profile-details">
      <TextField
        className="textfield"
        label="Name"
        variant="standard"
        size="50px"
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
      />
      <TextField
        className="textfield"
        label="Email"
        variant="standard"
        size="50px"
        value={email}
        disabled
        type="email"
      />
      {/* <TextField
        className="textfield"
        variant="standard"
        label="DOB"
        size="50px"
        value={dob}
      /> */}
      <button
        className="save-details"
        onClick={() => {
          saveName();
        }}
      >
        Save
      </button>
    </div>
  );
}

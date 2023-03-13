import React, {useEffect} from "react";
import "../css/Report/report-page.css";
import blob from "../css/images/blob.svg";

// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Box, Typography } from "@mui/material";
// import "./styles.css";

function PageContent() {

  useEffect(() => {
    document.title = "Report | EduNotes";
  }, []);

  return (
    <div className="main-content">
      <div className="page-centre">
        <div className="user-question">
          <h1>What would you like to Report?</h1>
        </div>
        <div className="report-buttons">
          <button className="report account-button">Account</button>
          <button className="report note-button">Note Post</button>
          <button className="report comment-button">Comment</button>
        </div>
      </div>
    </div>
  );
}

function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-box">
        <h1 className="feedback-prompt">
          Please Provide Feedback for EduNotes
        </h1>
        <textarea
          className="user-feedback-box"
          rows="4"
          cols="50"
          placeholder="I would like to see...."
        ></textarea>
        <button className="feedback submit-button">SUBMIT</button>
      </div>
    </div>
    
  );
}

// function TestBox({ handleAddComment }) {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleAddComment(inputValue);
//     setInputValue("");
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Input:
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//       </label>
//       <button type="submit">Save</button>
//     </form>
//   );
// }

export default function Report() {
  return (
    <div>
      <img className="blob" src={blob} alt="" />
      <svg
        className="blob2"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="var(--green)"
          d="M35.2,-30C46.6,-13.8,57.5,0.9,58,19C58.4,37.1,48.5,58.6,34.1,62.3C19.7,65.9,0.8,51.7,-14.6,40.4C-29.9,29.1,-41.8,20.7,-49.9,5.5C-58.1,-9.7,-62.7,-31.7,-53.7,-47.3C-44.8,-63,-22.4,-72.5,-5.2,-68.3C11.9,-64.1,23.8,-46.3,35.2,-30Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob3"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="var(--yellow)"
          d="M57.4,-2.3C57.4,23.3,28.7,46.5,6.5,46.5C-15.7,46.5,-31.3,23.3,-31.3,-2.3C-31.3,-27.9,-15.7,-55.7,6.5,-55.7C28.7,-55.7,57.4,-27.9,57.4,-2.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="page-design">
        <PageContent></PageContent>
        <Feedback></Feedback>
      </div>
    </div>
  );
}
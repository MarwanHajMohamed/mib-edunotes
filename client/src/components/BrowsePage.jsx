import React, { useEffect } from "react";
import "../css/BrowsePage/browsepage.css";
import { useNavigate } from "react-router-dom";

import BrowseCard from "./Common Components/BrowseCard";
import books from "../css/images/Books.png";
import maths from "../css/images/Maths.png";
import science from "../css/images/Science.png";
import CS from "../css/images/CS.png";
import economics from "../css/images/Economics.png";
import business from "../css/images/Business.png";
import pharmacy from "../css/images/Pharmacy.png";
import law from "../css/images/Law.png";
import psychology from "../css/images/Psychology.png";
import accounting from "../css/images/Accounting.png";

export default function BrowsePage() {
  useEffect(() => {
    document.title = "Browse | EduNotes";
  }, []);

  let navigate = useNavigate();

  const router = (route) => {
    let path = "/" + route;
    navigate(path);
  };

  return (
    <>
      <div className="browsepage-container">
        <BrowseCard image={maths} title="Maths" route="maths" />
        <BrowseCard image={books} title="English" route="english" />
        <BrowseCard image={science} title="Science" route="science" />
        <BrowseCard image={CS} title="CS" route="cs" />
        <BrowseCard image={economics} title="Economics" route="economics" />
        <BrowseCard image={business} title="Business" route="business" />
        <BrowseCard image={pharmacy} title="Pharmacy" route="pharmacy" />
        <BrowseCard image={law} title="Law" route="law" />
        <BrowseCard image={psychology} title="Psychology" route="psychology" />
        <BrowseCard image={accounting} title="Accounting" route="accounting" />
      </div>
      <button
        className="all-button"
        onClick={() => {
          router("all");
        }}
      >
        <div className="all">All</div>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </>
  );
}
